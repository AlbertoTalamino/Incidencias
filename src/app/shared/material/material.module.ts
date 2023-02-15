import { NgModule } from '@angular/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

const material = [
  MatButtonToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  
];

@NgModule({
  imports: material,
  exports: material,
  declarations: [
    DialogBoxComponent
  ]
})
export class MaterialModule { }
