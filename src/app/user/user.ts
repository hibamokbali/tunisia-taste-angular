import { Component } from '@angular/core';
import { Header } from '../Admin/header/header';
import { Menu } from './menu/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [Menu,RouterOutlet],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

}
