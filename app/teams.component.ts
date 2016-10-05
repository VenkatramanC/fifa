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
	templateUrl: 'app/teams.component.html',
	styleUrls: [`app/teams.component.css`]
})
export class TeamsComponent implements OnInit  {
	teams: any;
	teamObj: any;
	teamId: any;

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

    checkCode(team: any){
    	if(team.code === null) { 
    		return false
    	} else {
    		return true
    	}
    }
     
    checkValue(team: any){
    	if(team.squadMarketValue === null){
    		return false
    	}
    	else{
    		return  true
    	}
    }

    goToFixtures(team: any){
    	this.teamId = (team._links.self.href).split("/").reverse()[0]
    	let link = [`teams/${this.teamId}/fixtures`]
    	this.router.navigate(link);
    }
}