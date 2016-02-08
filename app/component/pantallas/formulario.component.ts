import {Component} from 'angular2/core';
import {Formulario} from '../../model/formulario';
@Component({
  selector:'formularioDbp',
  templateUrl:'/app/component/pantallas/formulario.component.html'
})
export class FormularioComponent{
  modelo:Formulario;

  constructor(){
    this.modelo = new Formulario();
  }

  onSubmit(){
    console.info('Modelo',this.modelo);
  }
}
