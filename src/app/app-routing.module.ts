import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { ReplacerComponent } from './replacer/replacer.component';
import { ConverterComponent } from './converter/converter.component';


const routes: Routes = [
  {
    path: '', component: PopupComponent
  },
  {
    path: 'replacer', component: ReplacerComponent
  },
  {
    path: 'converter', component: ConverterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
