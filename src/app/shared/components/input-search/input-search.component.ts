import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { NgModel } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss'],
})
export class InputSearchComponent {
  @ViewChild('userNameTypeModel') userNameTypeModel!: NgModel;
  @Input() userName!: string;
  @Output() typedUser: EventEmitter<string> = new EventEmitter();


  returnsTypedUser(userName: string) {
    if (userName) {
      this.typedUser.emit(userName)
    }
  }

}
