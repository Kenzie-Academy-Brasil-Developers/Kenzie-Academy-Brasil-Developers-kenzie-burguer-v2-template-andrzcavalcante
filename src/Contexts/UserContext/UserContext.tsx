import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IUserContext,
  IDefaultProviderProps,
  IUser,
  IRegisterForm,
  ILoginForm,
  IProducts,
} from './@types';
import { api } from '../../Service/api';

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const UserRegister = async (formData: IRegisterForm) => {
    try {
      const response = await api.post('users', formData);
      navigate('/');
      console.log('Deu certo');
    } catch (error) {
      console.log(error);
    }
  };

  const userLogin = async (formData: ILoginForm) => {
    console.log(formData);
    try {
      const response = await api.post('/login', formData);
      setUser(response.data.user);
      localStorage.setItem('@TOKEN', response.data.accessToken);
      navigate('/shop');
    } catch (error) {
      console.log(error);
    }
  };

  const UserLogout = () => {
    setUser(null);
    localStorage.removeItem('@TOKEN');
    navigate('/');
  };


  return (
    <UserContext.Provider
      value={{ user, userLogin, UserLogout, UserRegister }}
    >
      {children}
    </UserContext.Provider>
  );
};
