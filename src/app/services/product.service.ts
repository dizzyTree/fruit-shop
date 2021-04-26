import { Injectable } from "@angular/core";
import { Product } from "../types";

@Injectable({
    providedIn: "root",
})
export class ProductService {
    getProducts(): Product[] {
        return [
            {
                id: 1,
                name: "Pear",
                imageUrl: "assets/img/pear.png"
            },
            {
                id: 2,
                name: "Apple",
                imageUrl: "assets/img/apple.png"
            },
            {
                id: 3,
                name: "Peach",
                imageUrl: "assets/img/peach.png"
            }
            // TODO add a banana
        ];
    }

    getProduct(id: number) {
        return this.getProducts().find(p => p.id === id);
    }
}