import { Inject, Injectable } from '@angular/core';
import { UserState } from "src/app/RxJS/Store/models";
import { Query } from "src/app/RxJS/Store/state/abstract.query";
import { UserStore } from "src/app/RxJS/Store/state/user/user.store";


@Injectable({providedIn: 'root'})
export class UserQuery extends Query<UserState> {

  constructor(@Inject(UserStore) private store: UserStore) {
    super(store);
  }
}
