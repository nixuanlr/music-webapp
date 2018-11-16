import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { AsideComponent } from './aside/aside.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, AsideComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    HeaderComponent, AsideComponent, FooterComponent
  ]
})
export class ComModule { }
