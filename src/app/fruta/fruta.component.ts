import { Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
	/*	Template en Linea
	template: `<h2>{{nombre_componente}}</h2><p>{{listado_frutas}}</p>`
	*/
})

export class FrutaComponent{

	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public stringEjemplo: string;
	public numeroEjemplo: number;
	public arrayStringEjemplo: Array<String>;
	public arrayAnyEjemplo: Array<any>;
	public booleanEjemplo: boolean;

	constructor(){
		this.stringEjemplo = 'Ejemplo de String';
		this.numeroEjemplo = 25;
		this.arrayStringEjemplo = ['String1', 'String2'];
		this.arrayAnyEjemplo = ['String1', 2];
		this.booleanEjemplo = true;
	}

	ngOnInit() {
		this.funcionEjemplo();
		this.funcionEjemplo2(100);
		alert('Numero Ejemplo ' + this.numeroEjemplo);
		console.log(this.stringEjemplo + ' ' + this.numeroEjemplo); 
		
		var uno = 8;
		var dos = 15;

		if( uno === 8){
			let uno = 3
			var dos = 88

			console.log("Dentro del IF: " + uno + " " + dos);
		}

		console.log("Fuera del IF: " + uno + " " + dos);
	}

	funcionEjemplo(){
		this.nombre_componente = 'Refruta xD';
		alert('Nombre Componente ' + this.nombre_componente);
	}

	funcionEjemplo2(numeroEjemplo) {
		this.numeroEjemplo = numeroEjemplo;
	}
}
