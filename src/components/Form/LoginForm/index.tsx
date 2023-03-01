import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginForm } from '../../../Contexts/UserContext/@types';
import { UserContext } from '../../../Contexts/UserContext/UserContext';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';

const LoginForm = () => {

  const { register, handleSubmit, formState: {errors}  } = useForm<ILoginForm>();
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginForm> = (formData) =>{
    userLogin(formData);
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input label='Email' type='email' register={register('email')} error={errors.email}/>
      <Input label='Senha' type='password' register={register('password')} error={errors.email}/>
      <StyledButton $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )

};

export default LoginForm;
