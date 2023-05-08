export class Food {

    id:number;
    name: string;
    imageName: string;
    price: number;
    distance: number;
    rating: number;
    categorie: string;
    restaurantName: string;
    ratingCount: number;
    description:string;
    calories: number;
    amount:string;
    delivery:'Express'  | 'Standard'

    constructor(id:number,name: string, imageName: string, price: number, distance: number, rating: number, categorie: string,restaurantName: string,ratingCount: number,description:string,
        calories: number,
        amount:string,
        delivery:'Express'  | 'Standard') {
        this.id = id;
        this.name = name;
        this.imageName = imageName;
        this.price = price;
        this.distance = distance;
        this.rating = rating;
        this.categorie = categorie;
        this.restaurantName = restaurantName;
        this.ratingCount = ratingCount;
        this.description = description;
        this.calories = calories;
        this.amount = amount;
        this.delivery = delivery;
    }

}