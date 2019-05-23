import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Agendar } from "../../../shared/agendar.modal"



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  

  constructor(private modalService: NgbModal) { }


  
  ngOnInit() {

  }
// inicio modal
// fim modal
}
