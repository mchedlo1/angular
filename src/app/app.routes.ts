import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Main1Component } from './main1/main1.component';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component : MainComponent},
    {path: 'main1', component : Main1Component},
];
