import IDrink from "./interface/IDrink";

export default class Beer implements IDrink{
    deliver(): void {
        this.refillDrink();
        console.log("Cerveja: entregue!")
        this.drink();
    }
    refillDrink(): void {
        console.log("Cerveja: copo cheio!")
    }
    drink(): void {
        console.log("Cerveja: bebida!")
    }

}