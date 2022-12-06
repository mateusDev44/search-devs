import { Component, Input } from '@angular/core'
import { User } from 'src/app/utils/Interfaces/User'

@Component({
  selector: 'app-card-profile',
  templateUrl: './card-profile.component.html',
  styleUrls: ['./card-profile.component.scss'],
})
export class CardProfileComponent {
  @Input() user: User = {} as User;

  constructor() {}

  goTwitter(username: string) {
    if (username) {
      window.open(`https://twitter.com/${username}`, '_blank');
    }
  }

  goLink(link: string) {
    if (link) {
      window.open(link, '_blank');
    }
  }

}
