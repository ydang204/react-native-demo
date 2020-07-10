export interface UserResModel {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export const initialUserResModel: UserResModel = {
  id: 0,
  email: '',
  first_name: '',
  last_name: '',
  avatar: '',
};
