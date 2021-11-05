import IAircraft from "./interface/IAircraft";

export default class Helicopter implements IAircraft{
    getCarga(): void {
        console.log("Passageiros a bordo!")
    }
    startRoute(): void {
        this.getCarga()
        this.getWind()

        console.log("Iniciando decolagem!")

    }
    getWind(): void {
        console.log("Vento com velocidade de 25km, vindo do norte")
    }
    
}