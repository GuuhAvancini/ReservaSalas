import { Signature } from './signature.model';
import { Branch } from "./branch.token.model";

export class UserAdd{
  constructor(
  public nome: string,
  public cargo: string,
  public filial: string,
  public email: string
  ) {}
}


export class userAll{
  public Branch : Branch
  public Signature : Signature
  public Userid : number
  public Email : string
  public Name : string
}
