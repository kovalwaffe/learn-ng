import { Inject, Injectable } from '@angular/core';
import { UserStore } from './user.store';
import { Query } from '../abstract.query';
import { UserState } from '../../models';


@Injectable({providedIn: 'root'})
export class UserQuery extends Query<UserState> {

  constructor(@Inject(UserStore) store: UserStore) {
    super(store);
  }
}
