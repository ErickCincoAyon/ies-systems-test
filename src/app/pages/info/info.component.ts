import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent {

  constructor(
    private readonly title: Title,
  ) { 
    this.title.setTitle('Información del Proyecto');
  }

}
