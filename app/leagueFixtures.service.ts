import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class LeagueFixturesService {
	
	private url = `http://api.football-data.org/v1/competitions`;
	private headers = new Headers({"X-Auth-Token": "c6fae2504ec441928fccb032fc91bb4e"});
	
	constructor(private http: Http){}

	getTeamFixtures(id: any): Observable<any>{
		return this.http.get(`${this.url}/${id}/fixtures` , {headers: this.headers})
		.map(resp => resp.json());
	}
} 