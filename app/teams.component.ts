import {Component, OnInit} from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import {Http , Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {CompititionsComponent} from './compititions.component'
//import { TeamsService } from './teams.service';
//import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
@Component({
	selector: 'teams',
	templateUrl: 'app/teams.component.html'
})
export class TeamsComponent implements OnInit  {
	teams: any;
	teamObj: any;

	private url = `http://api.football-data.org/v1/competitions`;
	private headers = new Headers({"X-Auth-Token": "c6fae2504ec441928fccb032fc91bb4e"})
	 
	constructor(private route: ActivatedRoute, private http:Http 
	 ,private router: Router
	 //,private teamsService: TeamsService
	 ){}

	ngOnInit() {
	    this.route.params
        .map(params => {this.teamObj = params['id']})
      	this.teamObj = this.route.snapshot.params;
		
		//return this.teamsService.getTeams(this.teamObj.id)
      	
		 return this.http.get(`${this.url}/${[this.teamObj.id]}/teams`,{headers: this.headers})
		  .subscribe(resp => {this.teams = resp.json()
      	 	console.log(this.teams);
		  })

    }
    onTeam(id: number): void{
    	let link: any = [ `teams/${id}/players`]
    	this.router.navigate(link);    
    }
}