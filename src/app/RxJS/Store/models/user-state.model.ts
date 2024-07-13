import { User } from './user.model';

export interface UserState {
  isLoading: boolean;
  users: User[];
  isLoaded: boolean;
}
