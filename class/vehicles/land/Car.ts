import IVehicles from "./interfaces/ILand";

export default class Car implements IVehicles{
    getCarga(): void {
        console.log("O Passageiro já entrou no carro")
    }
    startRoute(): void {
        this.getCarga()
        console.log("Iniciando a corrida!")
    }
}