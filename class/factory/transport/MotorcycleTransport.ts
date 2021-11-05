import IVehicles from "../../src/interfaces/IVehicles";
import motorcycle from "../vehicles/motorcycle";
import transport from "./transport";

export default class motorcycletansport extends transport{

    protected createTransport(): IVehicles {
        return new motorcycle()
    }

}