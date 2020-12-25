export class OverviewData {
  active: string | null = null;
  activePerOneMillion: number | null = null;
  affectedCountries: number | null = null;
  cases: number | null = null;
  casesPerOneMillion: number | null = null;
  critical: number | null = null;
  criticalPerOneMillion: number | null = null;
  deaths: number | null = null;
  deathsPerOneMillion: number | null = null;
  oneCasePerPeople: number | null = null;
  oneDeathPerPeople: number | null = null;
  oneTestPerPeople: number | null = null;
  population: number | null = null;
  recovered: number | null = null;
  recoveredPerOneMillion: number | null = null;
  tests: number | null = null;
  testsPerOneMillion: number | null = null;
  todayCases: number | null = null;
  todayDeaths: number | null = null;
  todayRecovered: number | null = null;
  updated: number | Date | null = null;
  continent: string = '';
  countries: string[] | null = null;
  country: string = '';
}
