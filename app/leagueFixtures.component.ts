import {Component , Input , OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {LeagueFixturesService} from './leagueFixtures.service';
@Component({
	selector: 'league-fixtures',
	templateUrl: 'app/leagueFixtures.component.html'
})
export class LeagueFixturesComponent implements OnInit {
	leagueFixtures: any;
	fixObject: any;

	constructor(private route: ActivatedRoute,
		private leagueFixturesService: LeagueFixturesService
		){}
	ngOnInit(){
		this.route.params
        .map(params => {this.fixObject = params['id']})
      	this.fixObject = this.route.snapshot.params;

      	return this.leagueFixturesService.getTeamFixtures(this.fixObject.id)
      	.subscribe(resp => {this.leagueFixtures = resp})
	}


}