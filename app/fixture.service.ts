import { Injectable } from '@angular/core';
import {Http, Headers ,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {FixtureComponent } from './fixture.component'
@Injectable()
export class FixtureService {
private headers = new Headers({"X-Auth-Token": "c6fae2504ec441928fccb032fc91bb4e"});
	constructor(private http: Http) {}
	getFixtures() :Observable<any>  {
		return this.http.get(`http://api.football-data.org/v1/fixtures?timeFrame=n1`, {headers: this.headers} )
			.map(response => response.json());
		}  
	}
