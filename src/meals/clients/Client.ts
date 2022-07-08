import IFood from "../food/interface/IFood";
import IDrink from "../drink/interface/IDrink";
import IDeliveryFactory from "../factories/interface/IDeliveryFactory";

export default class Client {
    private food: IFood;
    private drink: IDrink;
    constructor(factory: IDeliveryFactory){
        this.food = factory.createDeliveryFood();
        this.drink = factory.createDeliveryDrink();
    }

    deliver() : void {
        this.food.deliver();
        this.drink.deliver();
    }
}