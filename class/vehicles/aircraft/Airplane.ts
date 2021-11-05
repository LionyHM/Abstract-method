import IAircraft from "./interface/IAircraft";

export default class Airplane implements IAircraft{
    getCarga(): void {
        console.log("Passageiros a bordo!")
    }
    startRoute(): void {
        this.getCarga()
        this.getWind()

        console.log("Iniciando vôo!")

    }
    getWind(): void {
        console.log("Vento com velocidade ok!")
    }
    
}