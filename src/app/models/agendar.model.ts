import { Equipaments } from './equipaments.model';
import { Branch } from "./branch.token.model";
import { RoomType } from "./roomType.model";

export class Agendar{
  constructor (
    public RoomId : number,
    public Name : String,
    public Branch : Branch,
    public IsAvailable: boolean,
    public RoomType : RoomType,
    public Capacity : number,
    public RoomPicture : any,
    public Equipments : Equipaments

  ) {}
}
