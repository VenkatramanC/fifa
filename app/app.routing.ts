import { ModuleWithProviders     } from '@angular/core';
import { Routes, RouterModule    } from '@angular/router';

import { FixtureComponent        } from './fixture.component';
import { CompititionsComponent   } from './compititions.component';
import { TeamsComponent          } from './teams.component';
import { LeagueFixturesComponent } from './leagueFixtures.component';
import { LeagueTableComponent    } from './leagueTable.component';
import { TeamDetailComponent     } from './teamDetail.component';
//import {TeamsResolver} from './resolves/teams.resolver';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/compititions',
    pathMatch: 'full'
  },

  {
  	path: 'fixtures',
  	component: FixtureComponent
  },
  {
  	path: 'compititions',
  	component: CompititionsComponent

  } ,
  {	
 	  path: 'compititions/:id/teams',
 	  component: TeamsComponent,
 	// resolve: {
 	// 	teams: TeamsResolver}
  },
  {
 	  path: 'compititions/:id/fixtures',
 	  component: LeagueFixturesComponent
  }, 
  {
    path: 'compititions/:id/leagueTable',
    component: LeagueTableComponent
  },
  {
    path: 'teams/:id/players',
    component: TeamDetailComponent
  }
 ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);