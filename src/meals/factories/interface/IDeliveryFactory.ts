import IDrink from "../../drink/interface/IDrink";
import IFood from "../../food/interface/IFood";

export default interface IDeliveryFactory {
    createDeliveryDrink() : IDrink;
    createDeliveryFood() : IFood;
}