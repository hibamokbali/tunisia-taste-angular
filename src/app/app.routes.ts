import { Routes } from '@angular/router';
import { Acceuil } from './user/acceuil/acceuil';
import { ListPlats } from './user/list-plats/list-plats';
import { Contact } from './user/contact/contact';
import { Error404 } from './Admin/error404/error404';
import { DetailPlat } from './user/detail-plat/detail-plat';
import { Header } from './Admin/header/header';
import { authGuard } from './Admin/services/auth-guard';
import { ManagePlats } from './Admin/manage-plats/manage-plats';
import { ChnagerMdp } from './Admin/chnager-mdp/chnager-mdp';
import { Login } from './Admin/Login/login';
import { Dashbord } from './Admin/dashbord/dashbord';
import { User } from './user/user';
import { AddPlat } from './Admin/add-plat/add-plat';
import { PhotoApi } from './user/photo-api/photo-api';
export const routes: Routes = [
    {
        path: '',
        component: User,
        children: [
        { path: 'photos', component: PhotoApi },
          { path: 'acceuil', component: Acceuil },
          { path: 'plats', component: ListPlats },
          { path: 'plats/:id', component: DetailPlat },
          { path: 'contact',title:'A propos', component: Contact },
          { path: '', redirectTo: 'acceuil', pathMatch: 'full' }
        ]
      },

    {path:'login', title:'Login', component:Login},

    {
      path: 'admin',
      component: Dashbord,
      canActivate: [authGuard],
      children: [
        { path: 'manage', component: ManagePlats },
        { path: 'addplat', component: AddPlat },
         { path: 'addplat/:id', component: AddPlat },
        { path: 'changemdp', component: ChnagerMdp },
        { path: '', redirectTo: 'manage', pathMatch: 'full' }
      ]
    },
    { path: '', redirectTo: 'acceuil', pathMatch: 'full' },
    { path: '**', component: Error404 }

];
