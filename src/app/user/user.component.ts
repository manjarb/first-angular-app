import { Component, computed, Input, signal, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  // @Input({ required: true })
  // avatar!: string

  // @Input({ required: true })
  // name!: string

  avatar = input.required<string>();
  name = input.required<string>();

  // selectedUser = signal(DUMMY_USERS[randomIndex])
  imagePath = computed(() => 'assets/users/' + this.avatar())

  // get imagePath() {
  //   return 'assets/users/' + this.avatar
  // }

  onSelectedUser() {

  }
}
