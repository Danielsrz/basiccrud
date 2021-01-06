import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CRUD';
  msg:string = '';
  formularioEmpleado: FormGroup;

  employees = [
    {'name': 'Tony Stark', position: 'Lider', email:'ironman@avenger.com'},
    {'name': 'Bruce Banner', position: 'Diseñador', email:'hulk@avenger.com'},
    {'name': 'Peter Parker', position: 'Programador', email:'spidey@avenger.com'}
  ];

  model:any = {};
  model2:any = {};
  hideUpdate:boolean = true;

  addEmployee():void{
    this.employees.push(this.model);
    Swal.fire({
      icon: 'success',
      title: 'Empleado Agregado',
      text: 'Se agregó el empleado correctamente',
    });
    this.model = {};

  }

  deleteEmployee(i):void {
    Swal.fire({
      title: '¿Seguro que desea eliminarlo?',
      showDenyButton: true,
      confirmButtonText: `Eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees.splice(i, 1);
        Swal.fire('Empleado eliminado!', 'Se eliminó el empleado correctamente', 'warning')
      }
    })
  }

  myValue;
  editEmployee(i):void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = i;
  }

  updateEmployee():void {
    let i = this.myValue;
    for(let j = 0; j < this.employees.length; j++){
      if(i == j) {
        this.employees[i] = this.model2;
        Swal.fire({
          icon: 'success',
          title: 'Empleado actualizado',
          text: 'Se editó el empleado correctamente',
        });
        this.model2 = {};
        this.hideUpdate = true;
      }
    }
  }

  closeAlert():void {
    this.msg = '';
  }
}
