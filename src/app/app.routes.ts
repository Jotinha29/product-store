import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LitsComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';

export const routes: Routes = [
    {
    path: '',
    component: LitsComponent
    },
    {
    path: 'create-product',
    component: CreateComponent,
    },
];
