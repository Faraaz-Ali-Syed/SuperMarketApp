import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens/coupens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MediaComponent } from './media/media.component';
import { PagesComponent } from './pages/pages.component';
import { ProductsComponent } from './products/products.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CartComponent } from './cart/cart.component';
import { KartComponent } from './kart/kart.component';
import { DescComponent } from './desc/desc.component';
import { ProfileComponent } from './profile/profile.component';
import { PremiumComponent } from './premium/premium.component';
import { MasterComponent } from './master/master.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'coupens', component: CoupensComponent},
  {path: 'pages', component: PagesComponent},
  {path: 'media', component: MediaComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'kart', component: KartComponent},
  {path: 'desc', component: DescComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'premium', component: PremiumComponent},
  {path: 'master', component: MasterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }