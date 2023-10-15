import { Component } from '@angular/core';
import { ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  template: `
    <app-loader></app-loader>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-systems';

  constructor(
    private readonly themeService: ThemeService
  ) {
    themeService.getTheme();
  }
}
