import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.moudle';
import { RecipeMudule } from './recipes.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth.module';
import { CoreModule } from './core.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecipeMudule,
    AuthModule,
    AppRoutingModule, 
    ReactiveFormsModule,  
    HttpClientModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
