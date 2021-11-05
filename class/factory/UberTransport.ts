import Airplane from "../vehicles/aircraft/Airplane";
import IAircraft from "../vehicles/aircraft/interface/IAircraft";
import Car from "../vehicles/land/Car";
import ILand from "../vehicles/land/interfaces/ILand";
import ITransportFactory from "./transport/interface/ITransportFactory";

export default class Uber implements ITransportFactory{
    createTransportLand(): ILand {
        return new Car()
    }
    createTransportAircraft(): IAircraft {
        return new Airplane()
    }
    
}