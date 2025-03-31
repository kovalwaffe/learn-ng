import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { UserQuery } from './state/user';
import { connectState } from './state/lib';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-user',
  imports: [
    MatProgressSpinner,
    NgTemplateOutlet
  ],
    templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly userQuery = inject(UserQuery);
  private readonly userService = inject(UserService);

  readonly state = connectState(this.destroyRef, {
    isLoading: this.userQuery.isLoading$,
    users: this.userQuery.select('users'),
    isLoaded: this.userQuery.select('isLoaded')
  })

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    if (this.state.isLoaded) return;
    this.userService.getUser$().pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

}
