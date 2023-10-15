import { Component } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'app-theme-settings',
  templateUrl: './theme-settings.component.html',
  styleUrls: ['./theme-settings.component.scss']
})
export class ThemeSettingsComponent {

  constructor(
    private readonly themeService: ThemeService
  ) { }


  selectTheme( theme: string ): void {
    this.themeService.setTheme( theme );
  }


}
