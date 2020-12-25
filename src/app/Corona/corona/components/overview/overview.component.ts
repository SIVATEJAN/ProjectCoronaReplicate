import { Component, Input, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/app.constants';
import { OverviewData } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Input() overallView: OverviewData = new OverviewData();
  @Input() updatedDate: any;
  @Input() closedCases: any;
  @Input() mildCases: any;
  monthNames = AppConstants.MONTH_NAMES;
  constructor(private service: AppService) {}

  ngOnInit(): void {
  }


}
