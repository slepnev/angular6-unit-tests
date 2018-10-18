import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './integration/home/home.component';
import { TodosComponent } from './integration/2-todos/todos.component';
import { UserDetailsComponent } from './integration/3-user-details/user-details.component';
import { VoterComponent } from './integration/1-voter/voter.component';

import { routes } from './app.routes';
import { UsersComponent } from './integration/users/users.component';
// import { NavComponent } from './nav/nav.component';
import { HighlightDirective } from './integration/highlight.directive';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TodosComponent,
    UserDetailsComponent,
    VoterComponent,
    UsersComponent,
    // NavComponent,
    HighlightDirective
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
