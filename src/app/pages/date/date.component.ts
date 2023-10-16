import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DateForm } from './interfaces/date-form.interface';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
  
  public date!: string;
  public dateForm: FormGroup = this.fb.group({
    date: ['', [ Validators.required ]],
    unit: ['', [ Validators.required ]],
    addition: ['', [ Validators.required ]],
  });
  public units: string[] = 
    ['Dia', 'Mes', 'Año'];
 

  constructor(
    private readonly fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.dateForm.controls['date']
      .valueChanges.subscribe(change => {
        this.date = change;
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
      
    this.dateForm.controls['date'].setValue( newDate );
  }

}
