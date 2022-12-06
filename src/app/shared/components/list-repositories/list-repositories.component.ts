import { Component, Input } from '@angular/core'
import * as moment from 'moment'
import { Repository } from 'src/app/utils/Interfaces/Repository'

@Component({
  selector: 'app-list-repositories',
  templateUrl: './list-repositories.component.html',
  styleUrls: ['./list-repositories.component.scss'],
})
export class ListRepositoriesComponent {
  @Input() repository: Repository = {} as Repository;

  constructor() {}

  goRepository(link: string) {
    window.open(link, '_blank');
  }

  returnsTheNumberOfDays(date: string) {
    const today = moment(Date());
    const day_updated = moment(date);
    return today.diff(day_updated, 'days');
  }
}
