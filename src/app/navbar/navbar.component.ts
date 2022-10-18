import { Component, OnInit} from '@angular/core';
import { filter } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private data: DataService) { }
  search: string = '';
  results = this.data.mySearch.pipe(filter(s => s != 'hat'))
  ngOnInit(): void {
  }
  onPrint(){
    console.log(this.search);
    this.data.mySearch.next(this.search);
  }

}
