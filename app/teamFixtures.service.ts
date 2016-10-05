import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TeamFixturesService {
	constructor(private http: Http){}
	getFixtures(){
		console.log('hi')
	}
}