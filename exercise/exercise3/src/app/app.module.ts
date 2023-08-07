import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { SecondFooterComponent } from './second-footer/second-footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SavedJobsComponent } from './saved-jobs/saved-jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SecondFooterComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    SavedJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
