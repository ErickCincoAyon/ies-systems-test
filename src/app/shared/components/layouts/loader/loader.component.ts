import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectLoader } from 'src/app/store/ui/core/ui.selector';
import { UiState } from 'src/app/store/ui/ui.state';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  public activeLoader$ = this.uiStore
    .pipe( select( selectLoader ));

  constructor(
    private readonly uiStore: Store<UiState>,
  ) { }

  ngOnInit(): void {
  }

}
