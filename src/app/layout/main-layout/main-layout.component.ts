import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/login.service';

declare var $:any;

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  userType: String
  usuario = window.localStorage.getItem('userToken');
  userName = window.localStorage.getItem('userName');
  constructor() {

   }

  ngOnInit() {
    console.log(this.userName)
    if(this.usuario == "CommonUser"){

      document.getElementById("admLocal").style.display = "none";
      document.getElementById("admTotal").style.display = "none";

    }else if(this.usuario == "AdmLocal"){

      document.getElementById("admTotal").style.display = "none";
    }


    var treeviewMenu = $('.app-menu');

    // Toggle Sidebar
    $('[data-toggle="sidebar"]').click(function(event) {
      event.preventDefault();
      $('.app').toggleClass('sidenav-toggled');
      console.log('teste', event)
    });

    // Activate sidebar treeview toggle
    $("[data-toggle='treeview']").click(function(event) {
      event.preventDefault();
      if(!$(this).parent().hasClass('is-expanded')) {
        treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
      }
      $(this).parent().toggleClass('is-expanded');
    });

    // Set initial active toggle
    $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');

    //Activate bootstrip tooltips
    $("[data-toggle='tooltip']").tooltip();

  }


}
