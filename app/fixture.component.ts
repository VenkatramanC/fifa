import { Component, Input } from '@angular/core';
import {Http} from '@angular/http';

import { FixtureService} from './fixture.service'
@Component({
	selector: 'upcoming-matches',
	templateUrl: 'app/fixture.component.html'
})

export class FixtureComponent {
	matches: any;
	
	// private headers = new Headers({"X-Auth-Token": "c6fae2504ec441928fccb032fc91bb4e"});
	
	constructor(private http: Http,
	private fixtureService: FixtureService){}
	
	clicked(){
		this.fixtureService.getFixtures()
		.subscribe(resp => {this.matches = resp
			console.log(this.matches);
		}
			)
	}

	isMatches(){
		if(this.matches === null){
			return false
		}
		else{
			return true
		}
	}
}