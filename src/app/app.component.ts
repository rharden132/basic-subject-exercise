import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, Subscription } from 'rxjs';
import {map} from 'rxjs/operators';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  searchResult: String = '';
  constructor(private data: DataService){}
  results = this.data.mySearch.pipe(filter(s => s != 'hat'))
  sub: Subscription;

  ngOnInit(): void {
      this.sub = this.results.pipe(map(str => {return 'You Searched: ' + str})).subscribe((subData) => {
        this.searchResult = subData;
      })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
