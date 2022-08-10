import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  imageProfile: string = '/assets/img/undraw_profile.svg'
  imageProfile1: string = '/assets/img/undraw_profile_1.svg';
  imageProfile2: string = '/assets/img/undraw_profile_2.svg';
  imageProfile3: string = '/assets/img/undraw_profile_3.svg';
  public show: boolean = false;
  public buttonName: any = 'Show';

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
