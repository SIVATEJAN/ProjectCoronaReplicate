import { Component, Input, OnInit, Output,EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';
import { AppConstants } from 'src/app/app.constants';

@Component({
  selector: 'app-covid-table',
  templateUrl: './covid-table.component.html',
  styleUrls: ['./covid-table.component.scss']
})
export class CovidTableComponent implements OnInit, OnChanges {
  @Input() countriesData: any;
  @Input() overallView: any;
  @Input() continentsData: any;
  @Input() continentsList: any;
  @Input() continentOverAllView: any;
  @Input() duplicateCountriesData: any;
  @Output() continentSelected = new EventEmitter();
  presentSortHeader = {
    sort: '',
    property: ''
  };
  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes.countriesData && this.presentSortHeader.property !== '' && this.presentSortHeader.sort) {
      this.sortOnChanges();
    }
  }
  countryHeaders = AppConstants.COUNTRIES_HEADER;
  ngOnInit(): void {
    // this.duplicateCountriesData = _.cloneDeep(this.countriesData);
  }

  sortOnChanges() {
    if (this.presentSortHeader.sort === 'asc') {
      this.countriesData = _.orderBy(this.countriesData, [this.presentSortHeader.property], ['asc']);
    } else if (this.presentSortHeader.sort === 'desc') {
      this.countriesData = _.orderBy(this.countriesData, [this.presentSortHeader.property], ['desc']);
    }
  }


  continentSelectedInList(continentName: string) {
    this.continentSelected.emit(continentName)
  }

  getContinentName() {
    return this.continentsList.find((item: { isSelected: boolean; }) => item.isSelected === true).continentName
  }

  headerSortingLinked(headerName: string) {
    _.forEach(this.countryHeaders, header => {
      console.log('Header Property', headerName, header.property);
      if (headerName === header.property) {
        if (header.sort === 'asc') {
          header.sort = 'desc';
          this.countriesData = _.orderBy(this.countriesData, [header.property], ['desc']);
        } else if (header.sort === 'desc') {
          header.sort = ''
          this.countriesData = this.duplicateCountriesData;
        } else {
          header.sort = 'asc'
          this.countriesData = _.orderBy(this.countriesData, [header.property], ['asc']);
        }
        this.presentSortHeader = header;
      } else {
        header.sort = ''
      }
    })
  }

  onChangeEvent(searchText: any) {
    console.log('Entering Hers', searchText.target.value);
    if (searchText.target.value.length > 0) {
      this.countriesData = this.duplicateCountriesData.
      filter((item: { country: string; }) =>
      item.country.toLowerCase().includes(searchText.target.value.toLowerCase()));
    } else {
      this.countriesData = this.duplicateCountriesData;
    }
    if (this.presentSortHeader.sort !== '' && this.presentSortHeader.property !== '') {
      this.sortOnChanges();
    }
  }

}
