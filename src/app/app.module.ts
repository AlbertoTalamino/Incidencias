import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 
import {AngularFirestoreModule} from '@angular/fire/compat/firestore'; 
import { AngularFireModule } from '@angular/fire/compat'; 
import { environment } from '../environments/environment';
import { MenuComponent } from './views/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WellcomeComponent } from './views/wellcome/wellcome.component'; 
@NgModule({ 
  declarations: [ 
    AppComponent,
    MenuComponent,
    WellcomeComponent 
  ], 
  imports: [ 
    BrowserModule, 
    AppRoutingModule, 
    AngularFirestoreModule, 
    AngularFireModule.initializeApp(environment.firebase), NgbModule
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }