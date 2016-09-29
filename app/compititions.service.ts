import {Injectable} from '@angular/core';
import {Http , Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {CompititionsComponent} from './compititions.component';

@Injectable()
export class CompititionsService{

	private headers = new Headers({"X-Auth-Token": "c6fae2504ec441928fccb032fc91bb4e"});
	constructor(private http: Http){}
	getCompititions(): Observable<any>{
		return this.http.get('http://api.football-data.org/v1/competitions' , {headers: this.headers})
		 .map(resp => resp.json())
	}

	handleError(){
		console.log("Error please check once");		
	}
}