import { Component, ViewChild } from '@angular/core'
import { NgModel } from '@angular/forms'
import { Router } from '@angular/router'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userName!: string;

  constructor(private route: Router) {}

  typedUser(userName: string) {
    this.userName = userName;
  }

  search() {
    if(this.userName){
      this.route.navigate([`perfil/${this.userName}`]);
    }
  }
}
