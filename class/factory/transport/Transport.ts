import IVehicles from "../../vehicles/land/interfaces/ILand";

export default abstract class Transport{

    startTransport(): void{
        const vehicle = this.createTransport()

        vehicle.startRoute()
    }


    protected abstract createTransport(): IVehicles


}