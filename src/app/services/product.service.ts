import { Injectable } from "@angular/core";
import { Product } from "../types";

@Injectable({
    providedIn: "root",
})
export class ProductService {
    
    getProducts(): Product[] {
        return [
            // Task 1.2: start
            {
                id: 1,
                name: "Pear",
                imageUrl: "assets/img/pear.png",
                description: "57 calories per 100 g",
                price: 2
            },
            {
                id: 2,
                name: "Apple",
                imageUrl: "assets/img/apple.png",
                description: "52 calories per 100 g",
                price: 3
            },
            {
                id: 3,
                name: "Peach",
                imageUrl: "assets/img/peach.png",
                description: "41 calories per 100 g",
                price: 2
            },
            //Task 1.2: end
            //Task 1.3: start
            {
                id: 4,
                name: "Banana",
                imageUrl: "assets/img/banana.png",
                description: "89 calories per 100 g",
                price: 4
            }
            //Task 1.3: end
        ];
    }

    getProduct(id: number): Product {
        const product = this.getProducts().find(p => p.id === id) as Product;
        return product;
    }
}
