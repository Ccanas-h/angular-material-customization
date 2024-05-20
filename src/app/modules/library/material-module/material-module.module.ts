import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatInputHarness } from '@angular/material/input/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatInputModule, 
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatRippleModule
  ],
  exports: [
    CommonModule,
    MatInputModule, 
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule,
    MatRippleModule
  ]
})
export class MaterialModuleModule { }
