import { SearchDetailsComponent } from './search-details/search-details.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: '',
        component: SearchListComponent,
      },
      {
        path: 'details/:id',
        component: SearchDetailsComponent,
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
