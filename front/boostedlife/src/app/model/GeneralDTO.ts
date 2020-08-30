import { OwnedVehiclesDTO } from "./OwnedVehiclesDTO";
import { OwnedPropertiesDTO } from "./OwnedPropertiesDTO";

export class GeneralDTO{
    public nombre: string;
    public dineroBolsillo: number;
    public dineroBanco: number;
    public trabajo:string;
    public nombreCompleto:string;
    public telefono:string;
    public steamId:string;
    public vehicles: Array<OwnedVehiclesDTO> ;
    public propiertes:Array<OwnedPropertiesDTO> ;
}