import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', loadChildren: () => import('./order-list/order-list.module').then(m => m.OrderListModule) }, // lazy load
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { preloadingStrategy: PreloadAllModules } // load lazy routes in the background after app has been loaded
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
