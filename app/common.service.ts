import { Injectable } from '@angular/core';
import {Http , Headers} from '@angular/http';


@Injectable()
class CommonService {
	private url  = "http://api.football-data.org/v1/competitions";
	private headers = new Headers({"X-Auth-Token": "c6fae2504ec441928fccb032fc91bb4e"});
}