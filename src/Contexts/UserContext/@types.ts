
export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  accessToken: string;
  user: IUserProfile;
}

export interface IUserProfile {
  email: string;
  name: string;
  id: number;
}

export interface IRegisterForm {
  email: string;
  password: string;
  name: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IProducts {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface IUserContext {
  user: IUser | null;
  UserRegister: (formData: IRegisterForm) => Promise<void>;
  userLogin: (formData: ILoginForm) => Promise<void>;
  UserLogout: () => void;
}