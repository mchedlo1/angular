import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { Main1Component } from './main1/main1.component';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { ProductsAdvancedComponent } from './products-advanced/products-advanced.component';
import { ProductsAdvancedDetailsComponent } from './products-advanced/products-advanced-details/products-advanced-details.component';
import { ProductsApiComponent } from './products-api/products-api.component';
import { ProductsApiDetailsComponent } from './products-api/products-api-details/products-api-details.component';

export const routes: Routes = [
    {path: '', redirectTo: '/main', pathMatch: 'full'},
    {path: 'main', component : MainComponent},
    {path: 'main1', component : Main1Component},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductsDetailsComponent},
    {path: 'products/:id/:category', component: ProductsDetailsComponent},
    {path: 'productsAdvanced', component: ProductsAdvancedComponent},
    {path: 'productsAdvanced/:id', component: ProductsAdvancedDetailsComponent},
    {path: 'productsApi', component: ProductsApiComponent},
    {path: 'productsApi/:id', component: ProductsApiDetailsComponent},

];
