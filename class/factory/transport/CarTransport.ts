import IVehicles from "../../src/interfaces/IVehicles";
import Car from "../vehicles/car";
import transport from "./transport";

export default class cartransport extends transport{

    protected createTransport(): IVehicles {
        return new Car()
    }

}