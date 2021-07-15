import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width:100%;
      border-radius:5px;
    }
  `]
})
export class HeroeComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activateRoute: ActivatedRoute, 
    private heroesService: HeroesService,
    private router: Router
    ) { }

  ngOnInit(): void {
    // this.activateRoute.params.subscribe(({id}) => console.log (id));
    this.activateRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroePorId(id)),
        tap(console.log) 
      )
      .subscribe(heroe => this.heroe = heroe);
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }

}

// Debemos crear en el constructor un:
// 1. private activateRoute: ActivatedRoute
// 2. this.activateRoute.params.subscribe(({id}) => console.log (id));

// 3. para realizar la consulta:
// this.activateRoute.params
// .pipe(
//   switchMap(({id}) => this.heroesService.getHeroePorId(id)),
//   tap(console.log) (Esto es para revisar )
// )
// .subscribe(heroe => this.heroe = heroe);
