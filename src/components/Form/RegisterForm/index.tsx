import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterForm } from '../../../Contexts/UserContext/@types';
import { UserContext } from '../../../Contexts/UserContext/UserContext';

const RegisterForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterForm>();
  const { UserRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterForm> = (formData) => {
    UserRegister(formData);
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input label='Nome' type='text' register={register('name')} error={errors.name}/>
      <Input label='Email' type='email' register={register('email')} error={errors.email}/>
      <Input label='Senha' type='password'register={register('password')} error={errors.password}/>
      <Input label='Confirmar Senha' type='password'/>
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
