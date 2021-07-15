import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { identity } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(({id}) => console.log (id));
  }

}
