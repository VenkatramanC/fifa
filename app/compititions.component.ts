import {Component , Input , OnInit} from '@angular/core';
import {CompititionsService } from './compititions.service';

@Component({
	selector: 'compititions',
	templateUrl: 'app/compititions.component.html'
})

export class CompititionsComponent implements OnInit {

	compititions: any;
		constructor(private compititionsService: CompititionsService){}
		ngOnInit(){
			this.compititionsService.getCompititions()
			.subscribe(resp => {this.compititions = resp})
		}
}