import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { CardComponent } from './pages/card/card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PricingComponent } from './pages/pricing/pricing.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
},
{
  path: 'card',
  component: CardComponent
},

{
  path: 'pricing',
  component: PricingComponent
},

{
  path: 'blocks',
  component: BlocksComponent
},

{
  path: 'forms',
  component: FormsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
