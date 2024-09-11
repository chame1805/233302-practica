import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../modelo/iuser';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  @Input() user: IUser = {
    id: 0,
    name: "",
    username: "",
    phone: "",
    website: "",
  };

  @Output() event = new EventEmitter<IUser>();  // Emitimos un IUser

  mostrar(): void {
    console.log(this.user);  // Muestra el usuario actual en la consola
  }

  enviar(): void {
    this.event.emit({ ...this.user });  // Emitimos una copia del usuario actual
  }
}
