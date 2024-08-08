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
    loadComponent: () =>import('./features/create/create.component').then((m) => m.CreateComponent),
    },
    {
    path: 'edit-product',
    loadComponent: () =>import('./features/edit/edit.component').then((m) => m.EditComponent),
    },

    
];
