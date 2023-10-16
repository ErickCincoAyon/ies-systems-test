import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { ErrorModel } from 'src/app/shared/models/error.model';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { AuthState } from 'src/app/store/auth/auth.state';
import { login, resetAuthError } from 'src/app/store/auth/core/auth.action';
import { selectAuthError } from 'src/app/store/auth/core/auth.selector';
import { LoginModel } from 'src/app/store/auth/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  public error$ = new Subscription();
  public loginForm: FormGroup = this.fb.group({
    username: ['', [ 
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(30) 
  ]],
    password: ['',  [ 
      Validators.required, 
      Validators.minLength(3), 
      Validators.maxLength(30) 
    ]],
    remember: [ false ],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authStore: Store<AuthState>,
    private readonly toastrService: ToastrService,
    private readonly localStorageService: LocalStorageService,
    private readonly title: Title,
  ) { 
    this.title.setTitle('Login');
    const savedData = this.localStorageService.getData('datapick');
    ( savedData ) &&
      this.setRememberedUser( savedData );
  }

  setRememberedUser( data: string ): void {
    const savedData: LoginModel = JSON.parse( data );
    this.loginForm.controls['username'].setValue( savedData.username );
    this.loginForm.controls['password'].setValue( savedData.password );
    this.loginForm.controls['remember'].setValue( savedData.remember );
  }

  ngOnInit(): void {

    this.error$ = this.authStore.pipe(
      select( selectAuthError )
    ).subscribe(( error ) => {

      this.handleError( error );
      
      ( error ) &&
        this.authStore.dispatch( resetAuthError() );
    });

  }

  login(): void {
    this.authStore.dispatch( 
      login({ form: this.loginForm.getRawValue() as LoginModel })
    );
  }

  handleError( error?: ErrorModel ): void {
    if ( !error ) return;
    
    ( error.status === 404 ) &&
      this.toastrService.info('Las credenciales son incorrectas !');

    ( error.status === 500 || error.status === 502 ) &&
      this.toastrService.error('Ha ocurrido un error !');
  }

  ngOnDestroy(): void {
    this.error$.unsubscribe();
  }

}
