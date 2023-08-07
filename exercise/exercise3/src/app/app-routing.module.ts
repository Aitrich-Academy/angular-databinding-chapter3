import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';

const routes: Routes = [
  { path: '', redirectTo: 'all', pathMatch: 'full' }, // Default route
  { path: 'all', component: SavedJobsComponent },
  { path: 'applied', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


