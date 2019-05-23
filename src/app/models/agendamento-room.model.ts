import { Signature } from './signature.model';
import { States } from 'src/app/models/states.model';
import { Branch } from './branch.token.model';

export class AgendamentoLocal{

      public UserId : Number
      public Branch : Branch
      public State : States
      public Signature : Signature
      public Name : String

      public UserName : String
      public Start : Number
      public Finish : Number



}
