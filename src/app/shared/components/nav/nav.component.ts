import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() userName!: string

  constructor(private route: Router) {}

  newUserselected(newUser: string) {
    this.userName = newUser;
  }

  search() {
    if (this.userName) {
      this.route.navigate([`perfil/${this.userName}`])
    }
  }
}
