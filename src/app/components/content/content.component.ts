import {Component, OnInit}                   from '@angular/core';
import {Router}                              from "@angular/router";
import {MatCheckboxChange}                   from "@angular/material/checkbox";
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector:    'app-content',
  templateUrl: './content.component.html',
  styleUrls:   ['./content.component.scss'],
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
    trigger('prop4', [
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translate(0, -10px)'
        }),
        animate('0.5s 2s', style({
          opacity: 1,
          transform: 'translate(0, 0)'
        }))
      ]),
    ]),
  ]
})
export class ContentComponent implements OnInit {
  title = 'club-banyan';

  public manValue: number    = 50;
  public womanValue: number  = 50;
  public sliderValue: number = 50;

  public isCheckCal:  boolean = false;
  public checkPercent: number  = 100;

  public isLoading: boolean  = true;

  public range1: boolean  = false;
  public range2: boolean  = false;
  public range3: boolean  = false;
  public range4: boolean  = false;
  public range5: boolean  = false;
  public range6: boolean  = false;

  constructor(private router: Router) {}

  public ngOnInit() {
    setTimeout(() => this.isLoading = false, 1500);
  }

  public onSlide(event: any) {
    this.manValue   = 100 - event;
    this.womanValue = event;
  }

  public checkChanged(event: MatCheckboxChange) {

    const values: boolean[] = [
      this.range1, this.range2, this.range3,
      this.range4, this.range5, this.range6
    ]

    let count = 0;

    values.forEach(v => {
      if(v) { count++; }
    })

    this.checkPercent = 100.0 / count;
    this.isCheckCal   = count > 0;

  }
}
