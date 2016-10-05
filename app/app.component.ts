import { Component } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { FixtureComponent} from './fixture.component';
import { CompititionsComponent } from './compititions.component'

@Component({
    selector: 'my-app',
    templateUrl: `app/app.component.html`,
    styleUrls: [`app/app.component.css`]

})
export class AppComponent { 
	title = 'Football League';
}
