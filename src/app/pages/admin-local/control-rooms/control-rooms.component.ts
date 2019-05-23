import { Component, OnInit } from '@angular/core';
import { LocalUser } from 'src/app/services/local-user.service';
import { Agendar } from 'src/app/models/agendar.model';

@Component({
  selector: 'app-control-rooms',
  templateUrl: './control-rooms.component.html',
  styleUrls: ['./control-rooms.component.scss'],
  providers: [LocalUser]
})
export class ControlRoomsComponent implements OnInit {

  constructor(public controlRooms : LocalUser) { }
  rooms: Agendar[]

  ngOnInit() {

    this.controlRooms.getAllRoomsControl()
      .then((control: any[]) => {
        console.log(control)
        this.rooms = control
        console.log(this.rooms)

      })
      .catch((params: any) => {
        console.log(params)
      })
  }

}
