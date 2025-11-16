import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { UsersList } from './users/users-list/users-list';

@Component({
  selector: 'app-root',
  imports: [UsersList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
