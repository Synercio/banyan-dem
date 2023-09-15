import {animate, style, transition, trigger} from '@angular/animations';
import {Component, OnInit}                   from '@angular/core';
import {Router}            from "@angular/router";

@Component({
  selector:    'app-detail',
  templateUrl: './detail.component.html',
  styleUrls:   ['./detail.component.scss'],
  animations: [
    trigger('prop1', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate(0, -10px)'
        }),
        animate('0.5s 0.5s', style({
          opacity: 1,
          transform: 'translate(0, 0)'
        }))
      ]),
    ]),
    trigger('prop2', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate(0, -10px)'
        }),
        animate('0.5s 1s', style({
          opacity: 1,
          transform: 'translate(0, 0)'
        }))
      ]),
    ]),
    trigger('prop3', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate(0, -10px)'
        }),
        animate('0.5s 1.5s', style({
          opacity: 1,
          transform: 'translate(0, 0)'
        }))
      ]),
    ]),
  ]
})
export class DetailComponent implements OnInit {
  title = 'club-banyan';

  public isLoading: boolean  = true;

  constructor(private router: Router) {}

  public ngOnInit() {
    setTimeout(() => this.isLoading = false, 1500);
  }

  public goToPage() {
    this.router.navigate(['/content']);
  }
}
