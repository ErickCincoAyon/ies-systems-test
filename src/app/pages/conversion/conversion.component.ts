import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent {

  constructor(
    private readonly title: Title,
  ) {
    this.title.setTitle('Conversiones');
  }

}
