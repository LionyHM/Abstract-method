import Client from "../class/factory/client/Client"
import NineNineTransport from "../class/factory/NineniNeTransport"
import UberTransport from "../class/factory/UberTransport"
import ITransportFactory from "../class/factory/transport/interface/ITransportFactory"
import { vehicleConst } from "../const/vehicleConst"



let transport = vehicleConst.Uber
let factory: ITransportFactory


switch(transport){
    case vehicleConst.NineNine: factory = new NineNineTransport()
    
    break;
    
    case vehicleConst.Uber: factory = new UberTransport()
}

let client = new Client(factory)

client.startRoute()
