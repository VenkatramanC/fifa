import { Component ,Input , OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TeamDetailService } from './teamDetail.service'
@Component({
	selector: 'team-detail',
	templateUrl: 'app/teamDetail.component.html',
	styleUrls: ['app/teamDetail.component.css']
})
export class TeamDetailComponent implements OnInit{
	teamId: any;
	players: any;
	constructor(private router: Router,
		private route: ActivatedRoute,
		private teamDetailService: TeamDetailService){}
	
	ngOnInit(){
		this.route.params
		.map(params => (this.teamId = params['id']))
		this.teamId = this.route.snapshot.params;
	
		this.teamDetailService.getPlayers(this.teamId.id)
		.subscribe(resp => {
			this.players = resp
			console.log(this.players)
		})
	}
}	