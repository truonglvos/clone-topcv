import { Component } from '@angular/core';
import { ICVHeader } from './models/cv-header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'topcv-editor';
  cVHeader: ICVHeader;
  constructor() {
    this.cVHeader = {
      avatar:
        'https://static.topcv.vn/avatars/5ltkeLzAZy4lX4K2TiLU_60366b77ed7c3_cvtpl.jpg?1620523289',
      fullName: 'Nguyễn Văn A',
      title: 'Angular developer',
      birth: '22/05/1995',
      gender: 'Nam',
      phone: '0965480046',
      email: 'anhtruonglavm2@gmail.com',
      address: '12/29/157 Chua Lang, Lang Thuong, Dong Da, Hanoi, Vietnam',
      website: 'https://www.facebook.com/anhtruonglhvm',
    };
  }
}
