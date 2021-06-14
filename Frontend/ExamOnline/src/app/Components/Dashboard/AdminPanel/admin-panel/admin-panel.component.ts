import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  AdminPanelImage:string;
  constructor() { }

  ngOnInit(): void {
    this.AdminPanelImage="/assets/Dashboard/General.jpg";
  }

}
