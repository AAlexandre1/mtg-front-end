import { Routes } from '@angular/router';
import { CardListComponent } from './features/card-list/card-list.component';

export const routes: Routes = [
  // {
  //   path: "",
  //   pathMatch: "full",
  //   loadComponent: ()=> import("./features/card-list/card-list.component").then((c) => c.CardListComponent)
  // },
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./features/home/home.component").then((c) => c.HomeComponent)
  },
  {
    path: "profile",
    loadComponent: ()=> import("./features/profile/profile.component").then((c) => c.ProfileComponent)
  },
  {
    path: "library",
    loadComponent: ()=> import("./features/library/library.component").then((c) => c.LibraryComponent)
  },
  {
    path: "wishlist",
    loadComponent: ()=> import("./features/wishlist/wishlist.component").then((c) => c.WishlistComponent)
  },
  {
    path: "card-list",
    loadComponent: ()=> import("./features/card-list/card-list.component").then((c) => c.CardListComponent)
  },

];
