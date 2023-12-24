import { Injectable } from "@angular/core";
@Injectable(
    {
        providedIn:'root'
    }
)
export class Random_Num
{
   
    constructor()
    {

    }
    getNumber() 
    {
        return Math.random()*100;
    }

}