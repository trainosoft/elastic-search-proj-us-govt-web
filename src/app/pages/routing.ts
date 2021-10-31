import { ProfileModule } from './../modules/profile/profile.module';
import { Routes } from '@angular/router';

const Routing: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../modules/search/search.module').then((m) => m.SearchModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

export { Routing };
