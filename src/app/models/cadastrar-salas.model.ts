export class Cadastrar{
    constructor(
    public id: number,
    public Name: string,
    public BranchId:  number,
    public RoomTypeId: number,
    public Capacity: number,
    public Equipments: Array<number>,
    public Picture: File,
    ) {}
}

export class Room{
  constructor(
  public Name: string,
  public BranchId:  number,
  public RoomTypeId: number,
  public Capacity: number,
  public EquipmentsId: Array<number>,
  public Picture: File,
  ) {}
}
