import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Main1Component } from './main1/main1.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';

export const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component : MainComponent},
    {path: 'main1', component : Main1Component},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductsDetailsComponent},
    {path: 'products/:id/:category', component: ProductsDetailsComponent},
];
