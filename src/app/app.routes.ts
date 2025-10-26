import { Routes } from '@angular/router';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ERROR404Component } from './error-404/error-404.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCounterComponent } from './product-counter/product-counter.component';
import { CommonModule } from '@angular/common';
export const routes: Routes = [
{
    path:'',
component:ProductListComponent,
title:'product list page'
},

   { path:'login',
    component:LoginComponent,
    title:'login  page'
    },
    { path:'Register',
        component:RegisterComponent,
        title:'Register  page'
        },
        {
            path: 'product-details/:id',
            component: ProductDetailsComponent,
            title: 'product Details Page'
          },
          {
            path: 'product-list',
            component: ProductListComponent,
            title: 'product list Page'
          },
          {
            path: 'product-card',
            component: ProductCardComponent,
            title: 'product card Page'
          },
          {
            path: 'product-counter',
            component: ProductCounterComponent,
            title: 'product counter Page'
          },
          {
            path: 'products',
            component: ProductListComponent,
            title: 'product list Page'
          },{
            path: 'products/:id',
            component: ProductDetailsComponent,
            title: 'product Details Page'
          },
          {
            path: 'product/:id',
            component: ProductDetailsComponent,
            title: 'product Details Page'
          },
    {

        path:'**',
        component:ERROR404Component,
        title:'page not found'
    }

];
