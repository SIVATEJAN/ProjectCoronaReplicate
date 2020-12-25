import { Component, OnInit } from '@angular/core';
import { OverviewData } from 'src/app/app.model';
import { AppService } from 'src/app/app.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss'],
})
export class CoronaComponent implements OnInit {
  overallView: OverviewData = new OverviewData();
  continentOverAllView: OverviewData = new OverviewData();
  updatedDate: any;
  closedCases: any;
  mildCases: number | null = null;
  mildPerc: number | null = null;
  criticalPerc: number | null = null;
  countriesData: OverviewData[] = [];
  duplicateCountrieData: OverviewData[] = [];
  continentsData: OverviewData[] = [];
  continentsList = [
    {
      continentName: 'All',
      isSelected: true,
    },
  ];
  constructor(private service: AppService) {}

  ngOnInit(): void {
    this.getOverviewData();
    this.getCountriesData();
    this.getContinentsData();
  }

  continentSelected(continentName: any) {
    this.continentsList.forEach(
      (item: { continentName: any; isSelected: any }) => {
        if (item.continentName === continentName) {
          item.isSelected = true;
        } else {
          item.isSelected = false;
        }
      }
    );
    this.countriesData = [];
    if (continentName !== 'All') {
      this.continentsData.forEach((element) => {
        if (element.continent === continentName) {
          this.continentOverAllView = element;
          this.duplicateCountrieData.forEach((countryData) => {
            if (element.countries?.includes(countryData.country)) {
              this.countriesData.push(countryData);
            }
          });
        }
      });
    } else {
      this.countriesData = _.cloneDeep(this.duplicateCountrieData);
    }
  }

  getContinentsData() {
    this.service.getContinentsData((data) => {
      this.continentsData = data;
      this.continentsData.forEach((continentData: OverviewData) => {
        this.continentsList.push({
          continentName: continentData.continent,
          isSelected: false,
        });
      });
    });
  }

  getOverviewData() {
    this.service.getOverAllData((data) => {
      this.overallView = data;
      if (this.overallView.updated) {
        this.updatedDate = new Date(this.overallView.updated);
      }
      if (this.overallView.recovered && this.overallView.deaths) {
        this.closedCases = this.overallView.recovered + this.overallView.deaths;
      }
      if (this.overallView.active && this.overallView.critical) {
        this.mildCases =
          Number(this.overallView.active) - this.overallView.critical;
        this.mildPerc =
          (Number(this.mildCases) / Number(this.overallView.active)) * 100;
      }
      console.log(this.overallView);
    });
  }

  getCountriesData() {
    this.service.getCountriesData((data) => {
      this.countriesData = data;
      this.duplicateCountrieData = data;
    });
  }
}
