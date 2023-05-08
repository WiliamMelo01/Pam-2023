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

    constructor(id:number,name: string, imageName: string, price: number, distance: number, rating: number, categorie: string,restaurantName: string,ratingCount: number) {
        this.id = id;
        this.name = name;
        this.imageName = imageName;
        this.price = price;
        this.distance = distance;
        this.rating = rating;
        this.categorie = categorie;
        this.restaurantName = restaurantName;
        this.ratingCount = ratingCount;
    }

}