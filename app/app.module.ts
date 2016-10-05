import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { Headers } from '@angular/http';

//Components
import { AppComponent }  from './app.component';
import { FixtureComponent } from './fixture.component';
import { CompititionsComponent } from './compititions.component';
import { TeamsComponent } from './teams.component';
import { LeagueFixturesComponent } from './leagueFixtures.component';
import { LeagueTableComponent } from './leagueTable.component';
import { TeamDetailComponent } from './teamDetail.component';
// Services
import { FixtureService} from './fixture.service';
import { CompititionsService } from './compititions.service';
//import { TeamsService } from './teams.service';
import { LeagueFixturesService } from './leagueFixtures.service';
import { LeagueTableService } from './leagueTable.service';
import {TeamDetailService} from './teamDetail.service';


@NgModule({
  imports: [ BrowserModule , HttpModule , routing],
  declarations: [  AppComponent,
  					FixtureComponent,
  				    CompititionsComponent,
  				    TeamsComponent,
  				    LeagueFixturesComponent,
  				    LeagueTableComponent,
  				    TeamDetailComponent
  				],
  providers:[FixtureService , CompititionsService, 
  //,TeamsService
  LeagueFixturesService,LeagueTableService,
  TeamDetailService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
