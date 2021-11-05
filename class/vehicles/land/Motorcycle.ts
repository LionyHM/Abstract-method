import IVehicles from "./interfaces/ILand";

export default class Motorcycle implements IVehicles{
    getCarga(): void {
        console.log("Já pegamos o lanche ou produto")
    }
    startRoute(): void {
        this.getCarga()
        console.log("Iniciando a entrega!")
    }
}