import{ Component } from '@angular/core';
import{ Coche } from './coche'

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html'
})
export class CochesComponent{
    public coche: Coche;
    public coches: Array<Coche>;

    constructor(){

        this.coche = new Coche ("","","");
        this.coches = [
            new Coche("Lamborgini Gallardo", "3000", "Verde"),
            new Coche("Ferrari LG", "2800", "Rojo"),
            new Coche("Audi GT", "2500", "Amarillo")
        ];

    }

    onSubmit(){
        //console.log(this.coche);
        this.coches.push(this.coche);
        this.coche = new Coche("","","");
    }

}