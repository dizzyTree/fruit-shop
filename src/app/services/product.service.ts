import { Injectable } from "@angular/core";
import { Product } from "../types";

@Injectable({
    providedIn: "root",
})
export class ProductService {
    getProducts(): Product[] {
        return [
            {
                name: "Pear",
                imageUrl: "assets/img/pear.png"
            },
            {
                name: "Apple",
                imageUrl: "assets/img/apple.png"
            },
            {
                name: "Peach",
                imageUrl: "assets/img/peach.png"
            }
        ];
    } 
}