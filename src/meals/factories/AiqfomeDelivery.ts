import IDrink from "../drink/interface/IDrink";
import IFood from "../food/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";
import Beer from "../drink/Beer";
import Hamburger from "../food/Hamburger";

export default class AiqfomeDelivery implements IDeliveryFactory {
    createDeliveryDrink(): IDrink {
        return new Beer();
    }
    createDeliveryFood(): IFood {
        return new Hamburger();
    }

}