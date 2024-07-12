import { inject, Injectable } from '@angular/core';
import { UserStore } from 'src/app/RxJS/Store/state/user';
import { Observable, of } from "rxjs";
import { UserState } from "src/app/RxJS/Store/models";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userStore = inject(UserStore)

  getUser$(): Observable<UserState> {
    this.userStore.se
    return of()
  }
}
