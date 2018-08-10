import { Component, OnInit } from '@angular/core';
import { User } from "../_classes/user";
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {
  loading: boolean = false;
  usuarios: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
  }

}
