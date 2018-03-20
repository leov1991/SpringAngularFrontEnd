import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
//import { BrowserModule } from '@angular/platform-browser';

const routes: Routes =[
    {path: '', redirectTo: '/appComponent', pathMatch:'full'},
    {path: 'appComponent', component: AppComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule],
    declarations: [  ],
    bootstrap:    [  ]
})
export class AppRoutingModule { }
