import IVehicles from "../../src/interfaces/IVehicles";
import bike from "../vehicles/bike";
import transport from "./transport";

export default class biketransport extends transport{
    protected createTransport(): IVehicles {
        return new bike()
    }
}