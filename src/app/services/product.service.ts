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

            },
            {
                id: 2,
                name: "Apple",
                imageUrl: "assets/img/apple.png",


            },
            {
                id: 3,
                name: "Peach",
                imageUrl: "assets/img/peach.png",


            },
            //Task 1.2: end

            
            //Task 1.3: start

            //Task 1.3: end

        ];
    }

    getProduct(id: number): any {
        return this.getProducts().find(p => p.id === id);
    }
}
