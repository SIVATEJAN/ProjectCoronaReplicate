import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoronaComponent } from './pages/corona/corona.component';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { CardComponent } from './components/card/card.component';
import { CovidTableComponent } from './components/covid-table/covid-table.component';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {
    path: '', component: CoronaComponent
  }
]

@NgModule({
  declarations: [CoronaComponent, OverviewComponent, CardComponent, CovidTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class CoronaModule { }
