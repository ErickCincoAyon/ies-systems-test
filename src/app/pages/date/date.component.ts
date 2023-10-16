import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateForm } from './interfaces/date-form.interface';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  
  public selectedDate!: Date;
  public resultDate!: Date;
  public dateForm: FormGroup = this.fb.group({
    date: ['', [ Validators.required ]],
    unit: ['', [ Validators.required ]],
    addition: ['', [ Validators.required ]],
  });
  public units: string[] = 
    ['Dia', 'Mes', 'Año'];
 

  constructor(
    private readonly fb: FormBuilder,
    private readonly title: Title,
  ) { 
    this.title.setTitle('Conversion de Fechas');
  }

  ngOnInit(): void {
    this.dateForm.controls['date']
      .valueChanges.subscribe(change => {
        this.selectedDate = change;
    });
  }

  changeDate(
    date: Date,
    unit: string, 
    addition: number 
  ): void {
    console.log( date );
    let newDate = new Date();
    if ( unit === 'Dia' ) {
      newDate = new Date(
        date.setDate( date.getDate() + addition )
      );
    }
    if ( unit === 'Mes' ) {
      newDate = new Date( date.setMonth( date.getMonth() + addition ));
    }
    if ( unit === 'Año' ) {
      newDate = new Date( date.setFullYear( date.getFullYear() + addition ));
    }
    
    this.dateForm.controls['date'].setValue( newDate );
  }

  add(): void {
    const { date, unit, addition } = 
      this.dateForm.getRawValue() as DateForm;

    let newDate = new Date();
    if ( unit === 'Dia' ) {
      newDate = new Date(
        date.setDate( date.getDate() + addition )
      );
    }

    if ( unit === 'Mes' ) {
      newDate = new Date( 
        date.setMonth( date.getMonth() + addition )
      );
    }

    if ( unit === 'Año' ) {
      newDate = new Date( 
        date.setFullYear( date.getFullYear() + addition )
      );
    }
    
    this.resultDate = newDate;
  }

}
