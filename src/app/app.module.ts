import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for form support

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Add FormsModule here
    RouterModule.forRoot([]) // Include RouterModule here with an empty route array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
