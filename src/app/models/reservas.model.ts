import { Agendar } from "./agendar.model";
import { tolken } from "./tolken.model";

export class MinhasReservas{
  constructor(
  public ScheduleId: number,
  public Description: string,
  public Start: string,
  public Finish: string,
  public Room: Agendar,
  public User: tolken
  ) {}
}

export class Reserva{
  constructor(
    public Description: string,
    public Start: string,
    public Finish: string,
    public RoomId: number,
    public UserId: number
    ) {}
}

