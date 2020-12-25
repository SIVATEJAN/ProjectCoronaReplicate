import { Component, Input, OnInit } from '@angular/core';
import { OverviewData } from 'src/app/app.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() miniLabel: any;
  @Input() miniLabelValue: any;
  @Input() miniLabelContent: any;
  @Input() mildOrReco: any;
  @Input() mildOrRecoPerc: any;
  @Input() cricOrDead: any;
  @Input() cricOrDeadPerc: any;
  @Input() mildOrRecoContent: any;
  @Input() cricOrDeadContent: any;
  @Input() overAllView: any;



  constructor() { }

  ngOnInit(): void {
  }

}
