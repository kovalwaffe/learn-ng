import { Injectable } from '@angular/core';
import { UserState } from '../../models';
import { Store } from '../abstract.store';

const initialState: UserState = {
  isLoading: false,
  users: [],
  isLoaded: false
}

@Injectable({providedIn: 'root'})
export class UserStore extends Store<UserState> {
  constructor() {
    super(initialState);
  }
}
