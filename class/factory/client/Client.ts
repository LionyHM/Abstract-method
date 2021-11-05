import IAircraft from "../../vehicles/aircraft/interface/IAircraft";
import ILand from "../../vehicles/land/interfaces/ILand";
import ITransportFactory from "../transport/interface/ITransportFactory";

export default class Client{


    private vehicle: ILand
    private aircraft: IAircraft

    constructor(factory: ITransportFactory){

        this.vehicle = factory.createTransportLand()
        this.aircraft = factory.createTransportAircraft()

    }

    startRoute(): void{
        this.vehicle.startRoute()
        this.aircraft.startRoute()
    }

}