import {Injectable} from '@angular/core';

@Injectable()
export class RopaService{
    public nombre_prenda: string;
    public coleccion_ropa = ['Pantalones Blancos','Camiseta Roja'];
    
    prueba(nombre_prenda: string){
        return nombre_prenda;
    }

    addRopa(nombre_prenda: string):Array<string>{
        this.coleccion_ropa.push(nombre_prenda);
        return this.getRopa();
    }
    // Se indica que va a devolver.. no es nuecesario
    getRopa():Array<string>{
        return this.coleccion_ropa;
    }
    //splice para indicar cuantos elementos eliminara
    deleteRopa(index: number):Array<string>{
        this.coleccion_ropa.splice(index,1);
        return this.getRopa();
    }

}