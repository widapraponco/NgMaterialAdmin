import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MaterialModule } from 'src/app/material.module';
import { AdminComponent } from './admin/admin.component';
import { InvestorComponent } from './investor/investor.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    AdminComponent,
    InvestorComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule
  ]
})
export class UserModule { }
