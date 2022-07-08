import IFood from "./interface/IFood";

export default class Hamburger implements IFood{
    heatup(): void {
        console.log("Hambúrguer: aquecido!")
    }
    eat(): void {
        console.log("Hambúrguer: comido!")
    }
    deliver(): void {
        this.heatup();
        console.log("Hambúrguer: entregue!");
        this.eat();
    }

}