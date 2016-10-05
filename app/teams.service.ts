import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


Injectable()
 export class TeamsService {
	private url = `http://api.football-data.org/v1/competitions`;
	private headers = new Headers({"X-Auth-Token": "c6fae2504ec441928fccb032fc91bb4e"});
	
	constructor(private http: Http){}
		
	getTeams(id: number): Observable<any>{
			return this.http.get(`${this.url}/${[this]}/teams`,{headers: this.headers})
			.map(res => res.json());
		}
}	