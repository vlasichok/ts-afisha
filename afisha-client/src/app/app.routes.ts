import {Routes} from "@angular/router";
import {Error404Component} from "./error/error404.component";
import {PATH} from "./shared/constants/path.constant";

export const appRoutes: Routes = [
  { path: PATH.ROOT, loadChildren: 'app/main/main.module#MainModule' },
  { path: PATH.ADMIN, loadChildren: 'app/admin/admin.module#AdminModule' },
  { path: PATH.ERROR, component: Error404Component },
  { path: PATH.ROOT, redirectTo: PATH.ROOT, pathMatch: 'full'}
];
