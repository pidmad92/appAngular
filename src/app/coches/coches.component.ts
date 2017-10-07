import{ Component } from '@angular/core';
import{ Coche } from './coche'
import{ PeticionesService } from '../services/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent{
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;

    constructor(
        private _peticionesService: PeticionesService,
    ){

        this.coche = new Coche ("","","");
        this.coches = [
            new Coche("Lamborgini Gallardo", "3000", "Verde"),
            new Coche("Ferrari LG", "2800", "Rojo"),
            new Coche("Audi GT", "2500", "Amarillo")
        ];

    }

    ngOnInit(){
        //Importante que toda funcion vaya con sus parentesis
        //console.log(this._peticionesService.getPrueba())
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;

                if(!this.articulos){ // Si viene vacio
                    console.log("Error en el servidor");
                }
                //console.log(result);
            },
            error => {
                var errorMenssage = <any>error;
                console.log(errorMenssage);
            }
        );
        
    }

    onSubmit(){
        //console.log(this.coche);
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }

}