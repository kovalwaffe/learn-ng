import { Injectable } from "@angular/core";
import { Store } from "src/app/RxJS/Store/state/abstract.store";
import { UserState } from "src/app/RxJS/Store/models";


const initialState: UserState = {
  IsLoading: false,
  username : '',
  email    : '',
  password : '',
}

@Injectable({providedIn: 'root'})
export class UserStore extends Store<UserState> {
  constructor() {
    super(initialState);
  }
}
