import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import * as moment from 'moment'
import { RepositoriesService } from 'src/app/services/repositories.service'
import { UsersService } from 'src/app/services/users.service'
import { Repository } from 'src/app/utils/Interfaces/Repository'
import { User } from 'src/app/utils/Interfaces/User'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userName!: string;
  user: User = {} as User;
  repositories: Repository[] = [];
  loading: boolean = true;
  notFound: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService,
    private repositoriesService: RepositoriesService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loading = true;
      this.notFound = false;
      this.userName = params['username'];
      this.listUser();
    })
  }

  listUser() {
    this.usersService.findUsers(this.userName).subscribe(
      (response) => {
        this.user = response;
        this.listRepositories(response.login);
      },
      () => {
        this.notFound = true;
        setTimeout(() => {
          this.loading = false;
        }, 2000)
      },
    )
  }

  async listRepositories(userName: string) {
    await this.repositoriesService
      .findRepositories(userName)
      .toPromise()
      .then((response) => {
        if (response) {
          this.repositories = this.sortAlphabeticalOrder(response);
        }

        setTimeout(() => {
          this.loading = false;
        }, 2000)
      })
  }

  sortAlphabeticalOrder(repositories: Repository[]) {
    const sortedArray = repositories.sort((x, y) => {
      let a = x.stargazers_count,
        b = y.stargazers_count;
      return a == b ? 0 : a < b ? 1 : -1;
    })

    return sortedArray;
  }


}
