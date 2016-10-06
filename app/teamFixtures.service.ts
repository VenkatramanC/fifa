import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TeamFixturesService {
	private url = `http://api.football-data.org/v1/teams`;
	private headers = new Headers({"X-Auth-Token": "c6fae2504ec441928fccb032fc91bb4e"})
	constructor(private http: Http){}

	getFixtures(id: any): Observable<any> {
		return this.http.get(`${this.url}/${id}/fixtures` , {headers: this.headers })
		.map(resp => (resp.json()))
	}
}