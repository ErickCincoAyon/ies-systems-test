import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ErrorModel } from 'src/app/shared/models/error.model';
import { civilStatus, resetErrorPages } from 'src/app/store/pages/core/pages.action';
import { selectErrorPages } from 'src/app/store/pages/core/pages.selector';
import { CivilStatusFormModel } from 'src/app/store/pages/models/civil-status-form.model';
import { PagesState } from 'src/app/store/pages/pages.state';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterContentChecked {
  
  public error$ = new Subscription();
  public showReadedBooks: boolean = false;
  public dataForm: FormGroup = this.fb.group({
    nombres: ['', [ Validators.required, Validators.minLength(3) ]],
    apellidos: ['', [ Validators.required, Validators.minLength(3) ]],
    fumas: [null, [ Validators.required ]],
    actualmentePracticasLectura: [null, [ Validators.required ]],
    librosLeidosUltimosTresMeses: this.fb.array([]),
    estadoCivil: [''],
  });
  public estadosCiviles: string[] = [
    '12', '13', '14',
  ];

  constructor(
    private readonly fb: FormBuilder,
    private readonly cdref: ChangeDetectorRef,
    private readonly toastrService: ToastrService,
    private readonly pagesStore: Store<PagesState>,
  ) { }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit(): void {

    this.dataForm.controls['actualmentePracticasLectura']
      .valueChanges.subscribe( change => {
        this.enableReadedBooks( change );
    });

    this.error$ = this.pagesStore.pipe(
      select( selectErrorPages )
    ).subscribe(( error ) => {

      this.handleError( error );
      
      ( error ) &&
        this.pagesStore.dispatch( resetErrorPages() );
    });
  }

  verifySpace( 
    field: string,
  ): boolean {
    let value = this.dataForm.controls[ field ].value;
    
    if (
      value.length > 0 && 
      value.slice(-1) === ' ' 
    ) {
      
      this.dataForm.controls[ field ]
        .setErrors({'incorrect': true});
      return true;
    }

    return false;
  }

  enableReadedBooks(
    enable: boolean
  ): void {
    if ( enable ) {

      this.dataForm
        .controls['librosLeidosUltimosTresMeses']
        .setValidators( Validators.required );
      this.showReadedBooks = true;
    } else {

      this.dataForm
        .controls['librosLeidosUltimosTresMeses']
        .clearValidators();
      
      this.librosLeidosUltimosTresMeses.clear();

      this.showReadedBooks = false;
      return;
    }
  }

  sendForm(): void {

    if ( this.dataForm.invalid ) {

      this.toastrService.info('Debes llenar los campos requeridos !');
      return;
    }

    this.pagesStore.dispatch( 
      civilStatus({ 
        form: this.dataForm.getRawValue() as CivilStatusFormModel 
      })
    );
  }


  /**
   * * All About Libros Leidos Ultimos Tres Meses
   * @DynamicForm
   */
  get librosLeidosUltimosTresMeses() : FormArray {
    return this.dataForm.get('librosLeidosUltimosTresMeses') as FormArray
  }

  newLibrosLeidosUltimosTresMeses(): FormGroup {

    return this.fb.group({
      book: ['', [ Validators.required ]],
    });
  }

  addLibrosLeidosUltimosTresMeses(): void {
    this.librosLeidosUltimosTresMeses.push(
      this.newLibrosLeidosUltimosTresMeses()
    );
  }

  removeLibrosLeidosUltimosTresMeses(
    i: number,
  ): void {
    
    if ( this.librosLeidosUltimosTresMeses.length === 1 ) {

      this.dataForm
        .controls['actualmentePracticasLectura']
        .setValue( false );
      this.enableReadedBooks( false );
    }
    this.librosLeidosUltimosTresMeses.removeAt(i);
  }

  handleError( 
    error?: ErrorModel
  ): void {
    if ( !error ) return;

    this.toastrService.error('Ha ocurrido un error en el servidor !');
  }

  ngOnDestroy(): void {
    this.error$.unsubscribe();
  }


}
