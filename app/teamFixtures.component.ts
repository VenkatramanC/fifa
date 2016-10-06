import { Component,OnInit } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { TeamFixturesService } from './teamFixtures.service' 


@Component({
	selector: 'team-fixtures',
	templateUrl: 'app/teamFixtures.component.html'
})
export class TeamFixturesComponent implements OnInit {
	fixId: any;
	fixtures: any;
	constructor(
		private route: ActivatedRoute,
		private router: Router		,
		private teamFixturesService: TeamFixturesService
		){}

	ngOnInit(){
		this.route.params
		.map(params => {this.fixId = params['id']})
		this.fixId = this.route.snapshot.params

		 return this.teamFixturesService.getFixtures(this.fixId.id)
		 .subscribe(resp => {this.fixtures = resp})
	}
}