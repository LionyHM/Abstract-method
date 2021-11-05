import IAircraft from "../../../vehicles/aircraft/interface/IAircraft";
import ILand from "../../../vehicles/land/interfaces/ILand";

export default interface ITransportFactory{

        createTransportLand():ILand
        createTransportAircraft():IAircraft

}