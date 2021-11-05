import IVehicles from "./interfaces/ILand";

export default class Bike implements IVehicles{
    getCarga(): void {
        console.log("O Lanche do cliente já foi pego")
    }
    startRoute(): void {
        this.getCarga()
        console.log("Iniciando trajeto até cliente com lanche pego no estabelecimento!")
    }
}