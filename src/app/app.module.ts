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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { RegisterComponent } from './auth/componets/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

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
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    NgbModule, 
    BrowserAnimationsModule,
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }