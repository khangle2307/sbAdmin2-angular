import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sb-admin2';
  imageProfile : string  = '/assets/img/undraw_profile.svg'
  imageProfile1 : string = '/assets/img/undraw_profile_1.svg';
  imageProfile2: string = '/assets/img/undraw_profile_2.svg';
  imageProfile3 : string = '/assets/img/undraw_profile_3.svg';
}
