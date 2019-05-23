import { Branch } from "./branch.token.model";
import { States } from "./states.model";
import { Signature } from "./signature.model";
import { RoomType } from "./roomType.model";

export class ControleDeSalasLocais {
  constructor(
    public Branch : Branch,
    public State : States,
    public Signature : Signature,
    public RoomType : RoomType,
    public Capacity : number
  ) { }
}
