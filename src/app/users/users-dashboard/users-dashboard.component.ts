import { Component } from '@angular/core';
import { IUser } from '../modelo/iuser';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent {
  users_list: IUser[] = [];

  selected_user: IUser = {
    id: 1,
    name: "angel",
    username: "angelchame",
    phone: "9611866204",
    website: "jsiwkwi"
  };

  constructor(private _service: UserService) {
    this._service.getAll().subscribe(response => this.users_list = response);
  }

  // Función que se ejecuta cuando se recibe un nuevo usuario desde el formulario
  eventoRecibido(newUser: IUser): void {
    // Agregamos el nuevo usuario a la lista
    this.users_list.push({ ...newUser });
    
    // Limpiar el usuario seleccionado después de agregarlo (opcional)
    this.selected_user = {
      id: 0,
      name: "",
      username: "",
      phone: "",
      website: ""
    };
  }
}
