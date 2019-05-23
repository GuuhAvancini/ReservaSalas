import { States } from "./states.model";

export class Branch{
    constructor( 
    public BranchId: number,   
    public Name: string,
    public State: States
    ) {}
}