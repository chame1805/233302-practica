import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule } from '@angular/forms';  // Importar FormsModule

@NgModule({
  declarations: [
    UsersDashboardComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule   // Asegúrate de que FormsModule esté incluido
  ],
  exports: [
    UsersDashboardComponent
  ]
})
export class UsersModule { }
