import IDrink from "./interface/IDrink";

export default class SoftDrink implements IDrink {
    deliver(): void {
        this.refillDrink();
        console.log("Refrigerante: entregue!")
        this.drink();
    }
    refillDrink(): void {
        console.log("Refrigerante: copo cheio!")
    }
    drink(): void {
        console.log("Refrigerante: bebido!")
    }

}