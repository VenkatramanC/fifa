import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { Headers } from '@angular/http';
import { AppComponent }  from './app.component';
import { FixtureComponent } from './fixture.component';
import { CompititionsComponent } from './compititions.component';

// Services
import { FixtureService} from './fixture.service';
import { CompititionsService } from './compititions.service';

@NgModule({
  imports: [ BrowserModule , HttpModule , routing],
  declarations: [ AppComponent , FixtureComponent , CompititionsComponent ],
  providers:[FixtureService , CompititionsService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
