import Helicopter from "../vehicles/aircraft/Helicopter";
import IAircraft from "../vehicles/aircraft/interface/IAircraft";
import ILand from "../vehicles/land/interfaces/ILand";
import Motorcycle from "../vehicles/land/Motorcycle";
import ITransportFactory from "./transport/interface/ITransportFactory";

export default class NineNineTransport implements ITransportFactory{


    createTransportLand(): ILand {
        return new Motorcycle()
    }

    createTransportAircraft(): IAircraft {
        return new Helicopter()
    }




}