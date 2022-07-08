import App from "./meals/consts/App"
import IDeliveryFactory from "./meals/factories/interface/IDeliveryFactory"
import IFoodDelivery from "./meals/factories/IFoodDelivery"
import AiqfomeDelivery from "./meals/factories/AiqfomeDelivery"
import Client from "./meals/clients/Client"

const currentApp = App.AIQFOME;
let factory: IDeliveryFactory;

switch(currentApp){
    case App.IFOOD :
        factory = new IFoodDelivery();
    break;
    case App.AIQFOME :
        factory = new AiqfomeDelivery();
    break;
    default:
        console.log("Favor escolher aplicativo válido.")
}

const client = new Client(factory);
client.deliver();