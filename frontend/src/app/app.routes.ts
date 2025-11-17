import { Routes } from '@angular/router';
import { UsersList } from './users/users-list/users-list';
import { QuotesList } from './Quotes/quotes-list/quotes-list';


export const routes: Routes = [
  {path :'users',component:UsersList},
  {path:'quotes',component:QuotesList},
  { path: '', redirectTo: 'mycompany', pathMatch: 'full' }
];
