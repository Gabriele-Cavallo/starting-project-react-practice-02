import { useState } from 'react';
import { styled } from 'styled-components';
import StyledButton from './Button';
import CustomInput from './Input';

// Creo un componente (styled.div) con lo style inserito nei `` e lo salvo in una costante (ControlContainer)
const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <ControlContainer>
          {/* <Label className={`label ${emailNotValid ? 'invalid' : undefined}`}>Email</Label> */}
          <CustomInput
            label='Email'
            invalid={emailNotValid}
            type="email"
            className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          {/* <Label className={`label ${passwordNotValid ? 'invalid' : undefined}`}>Password</Label> */}
          <CustomInput
            invalid={passwordNotValid}
            label="Password"
            type="password"
            className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
      </ControlContainer>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <StyledButton onClick={handleLogin}>Sign In</StyledButton>
      </div>
    </div>
  );
}
