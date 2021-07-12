import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AccountComponent } from './account.component';
import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    AccountRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AccountComponent]
})
export class AccountModule {}
