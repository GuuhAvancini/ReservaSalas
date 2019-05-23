import { Component, OnInit } from '@angular/core';
import { ReservasAll } from 'src/app/services/minhasreservas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss'],
  providers: [ReservasAll]
})
export class EditRoomComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: ReservasAll, private router: Router) { }

  ngOnInit() {

  }
  onClickMe(){
    if(confirm("Tem cereza que deseja excluir a sala?")){
      console.log(this.route.snapshot.params['id'])
      this.service.deleteRoomsById(this.route.snapshot.params['id'])
      alert("Sala Excluida com sucesso!")
      this.router.navigate(['/home']);
    }    
  }

}
