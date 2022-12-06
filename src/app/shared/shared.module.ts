import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSearchComponent } from './components/input-search/input-search.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CardProfileComponent } from './components/card-profile/card-profile.component';
import {MatCardModule} from '@angular/material/card';
import { NavComponent } from './components/nav/nav.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ListRepositoriesComponent } from './components/list-repositories/list-repositories.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    InputSearchComponent,
    CardProfileComponent,
    NavComponent,
    LoadingComponent,
    NotFoundComponent,
    ListRepositoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  exports: [
    InputSearchComponent,
    CardProfileComponent,
    NavComponent,
    LoadingComponent,
    NotFoundComponent,
    ListRepositoriesComponent
  ]
})
export class SharedModule { }
