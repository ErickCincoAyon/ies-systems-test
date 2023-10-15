import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [

            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'welcome',
            },
            {
                path: 'welcome',
                loadChildren: () => import('./welcome/welcome.module')
                    .then( m => m.WelcomeModule ),
            },
            {
                path: 'date',
                loadChildren: () => import('./date/date.module')
                    .then( m => m.DateModule ),
            },
            {
                path: 'form',
                loadChildren: () => import('./form/form.module')
                    .then( m => m.FormModule ),
            },
            {
                path: 'conversion',
                loadChildren: () => import('./conversion/conversion.module')
                    .then( m => m.ConversionModule ),
            },
            {
                path: 'info',
                loadChildren: () => import('./info/info.module')
                    .then( m => m.InfoModule ),
            },

        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
