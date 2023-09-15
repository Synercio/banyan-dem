import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailComponent}      from "./components/details/detail.component";
import {ContentComponent}     from "./components/content/content.component";

const routes: Routes = [
  { path: '',        component: DetailComponent, },
  { path: 'content', component: ContentComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
