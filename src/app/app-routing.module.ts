import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { OverviewComponent } from './overview/overview.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'introduction', component: IntroductionComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'map', loadChildren: './esri-map/esri-map.module#EsriMapModule' },
    { path: '**', redirectTo: '/home' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }