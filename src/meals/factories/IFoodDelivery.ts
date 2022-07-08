import IDrink from "../drink/interface/IDrink";
import IFood from "../food/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";
import Hotdog from "../food/Hotdog";
import SoftDrink from "../drink/SoftDrink";

export default class IFoodDelivery implements IDeliveryFactory {
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }
    createDeliveryFood(): IFood {
        return new Hotdog();
    }

}