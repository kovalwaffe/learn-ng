import { inject, Injectable } from '@angular/core';
import { finalize, Observable, of, switchMap, tap, timer } from 'rxjs';
import { UserStore } from './state/user';
import { GetUsersResponseDTO } from './models/GetUsersResponseDTO';

const mockUsers: GetUsersResponseDTO = {
  correlationIs: '121212',
  users: [
    {
      username: 'Pablo',
      email: 'abc@bac.pl',
      password: 'qwerty'
    },
    {
      username: 'Stanley',
      email: 'stan@stansfield.com',
      password: '123456'
    }
  ]
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userStore = inject(UserStore)

  getUser$(): Observable<GetUsersResponseDTO> {
    this.userStore.setIsLoading(true);

    return timer(3000).pipe(
      switchMap(() => of(mockUsers)),
      tap((data: GetUsersResponseDTO) => {
        this.userStore.update('users', data.users)
      }),
      finalize(() => {
        this.userStore.setIsLoading(false);
        this.userStore.update('isLoaded', true);
      })
    )
  }
}
