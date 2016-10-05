import {Component , Input , OnInit} from '@angular/core';
import {CompititionsService } from './compititions.service';
import { Router } from '@angular/router';
@Component({
	selector: 'compititions',
	templateUrl: 'app/compititions.component.html',
})

export class CompititionsComponent implements OnInit {

	compititions: any;
		constructor(private compititionsService: CompititionsService,
			private router: Router){}
		ngOnInit(){
			this.compititionsService.getCompititions()
			.subscribe(resp => {this.compititions = resp})
		}

		goCompDetail(id: number): void{
			let link =  [`compititions/${id}/teams`];
			this.router.navigate(link);
		}

		goToFixtures(id: number){
			let secLink = [`compititions/${id}/fixtures`];
			this.router.navigate(secLink);
		}

		goToStandings(id: number){
			let statsLink = [`compititions/${id}/leagueTable`];
			this.router.navigate(statsLink);
		}
}