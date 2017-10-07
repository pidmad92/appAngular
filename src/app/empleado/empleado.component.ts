import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({

	selector: 'empleado-tag',
	templateUrl: './empleado.component.html',
	styleUrls: ['./empleado.component.css']
})

export class EmpleadoComponent{
	
	public titulo = 'Componente Empleado';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajadorExterno:boolean;
	public color:string;
	public colorSeleccionado: string;

	constructor(){
		this.empleado = new Empleado('Pierre David Maldonado Diaz', 25, 'Ingeniero Mecatrónico', true);
		this.trabajadores = [
			new Empleado('Pierre David Maldonado Diaz', 25, 'Ingeniero Mecatrónico', true),
			new Empleado('Marco Antonio Vilchez Diaz', 41, 'Diseñador Web', false),
			new Empleado('Edgar Maldonado Morales', 55, 'Tecnico', true)
		];
		this.trabajadorExterno = false;
		this.color = 'red';
		this.colorSeleccionado = '#ccc';
	}

	ngOnInit() {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		console.log(this.empleado);
	}
	
	cambiarExterno(valor){
		this.trabajadorExterno = valor;
	}

	logColorSeleccionado(){
		console.log(this.colorSeleccionado);
	}

}