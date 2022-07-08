import IFood from "./interface/IFood";

export default class Hotdog implements IFood {
    deliver(): void {
        this.heatup();
        console.log("Hotdog: entregue!")
        this.eat();
    }
    heatup(): void {
        console.log("Hot dog: aquecido!")
    }
    eat(): void {
        console.log("Hot dog: comido!")
    }

}