import { useState } from 'react';
import { styled } from 'styled-components';
import StyledButton from './Button';
import Input from './Input';

// Creo un componente (styled.div) con lo style inserito nei `` e lo salvo in una costante (ControlContainer)
// const ControlContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;
//   margin-bottom: 1.5rem;
// `;

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
    <div id="auth-inputs" className="w-full max-w-sm mx-auto p-8 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <div className='flex flex-col gap-2 mb-6'>
          {/* <Label className={`label ${emailNotValid ? 'invalid' : undefined}`}>Email</Label> */}
          <Input
            label='Email'
            invalid={emailNotValid}
            type="email"
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
          {/* <Label className={`label ${passwordNotValid ? 'invalid' : undefined}`}>Password</Label> */}
          <Input
            invalid={passwordNotValid}
            label="Password"
            type="password"
            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
      </div>
      <div className="flex justify-end gap-4">
        <button type="button" className="text-amber-400 hove:text-amber-500">
          Create a new account
        </button>
        <StyledButton onClick={handleLogin}>Sign In</StyledButton>
      </div>
    </div>
  );
}
