import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Eqz } from './eqz';

@Component({
  selector: 'app-manage5',
  templateUrl: './manage5.component.html',
  styleUrls: ['./manage5.component.css']
})
export class Manage5Component implements OnInit{
  eqzs$:Observable<Eqz>
  baseUrl="http://127.0.0.1:3000/";
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.eqzs$=<Observable<Eqz>>this.httpClient.get(this.baseUrl+'sbs')
  }

}
