export interface IHero {
  _id: string;
  character: string;
  role: string;
  difficulty: string;
  universe: string;
  description: string;
  image: string;
  updatedAt?: string;
  __v?: number;
}

export interface IField {
  _id: string;
  name: string;
  image: string;
}

export interface ILogin {
  email: string;
  password: string;
}
export interface IRegister {
  email: string;
  password: string;
}

export interface ILoginResponse {
  status: number;
  message: string;
  data: any;
}

export interface IResgisterResponse {
  status: number;
  message: string;
  data: any;
}
