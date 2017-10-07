import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]//genera instancias de los servicios
    
})

export class HomeComponent{
    public titulo = "Página principal";
    public listado_ropa: Array<string>;
    public prenda_a_guardar: string;

    public fecha;
    public nombre = "JUAN lopez MaRtiNeZ";

    constructor(
        private _ropaService: RopaService
    ){

        this.fecha = new Date(2017,4,15);

    }

    ngOnInit() {
        //this._ropaService.prueba('Camiseta');
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this.listado_ropa);
    }

    guardarPrenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
        this.prenda_a_guardar = null;
    }

    eliminarPrenda(index: number) {
        //alert(index);
        this._ropaService.deleteRopa(index);
    }

}