import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FixtureComponent} from './fixture.component';
import { CompititionsComponent} from './compititions.component';
const appRoutes: Routes = [
  {
  	path: 'compititions',
  	component: CompititionsComponent

  } , 
  {
  	path: 'fixtures',
  	component: FixtureComponent
  }
  ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);