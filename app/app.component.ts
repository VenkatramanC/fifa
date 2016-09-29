import { Component } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { FixtureComponent} from './fixture.component';
import {CompititionsComponent } from './compititions.component'

@Component({
    selector: 'my-app',
    template: `<h1>{{ title }}</h1>
    			<button>
					<a routerLink="/compititions">Compititions</a>
    			</button>
    			<button>
					<a routerLink="/fixtures">Upcoming matches</a>
    			</button>
   				<router-outlet></router-outlet>
    			`

})
export class AppComponent { 
	title = 'Football League';
}
