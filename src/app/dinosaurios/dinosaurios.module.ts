import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinosauriosListComponent } from './dinosaurios-list/dinosaurios-list.component';
import { DinosaurioDetailComponent } from './dinosaurio-detail/dinosaurio-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[DinosauriosListComponent],
  declarations: [DinosauriosListComponent, DinosaurioDetailComponent]
})
export class DinosauriosModule { }
