import { filter } from 'rxjs/operators';
import { CONFIG_CONSTANTS } from './../../../config/config.constant';
import { SearchService } from './../../../_services/search.service';
import { Component, OnInit, ViewChild, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { isEmpty } from 'src/app/utils/common.utils';
@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchListComponent implements OnInit {

  filter = this.filterDefaultValue;
  showAdvancedFilter = false;
  dtOptions: DataTables.Settings = {};
  public readonly isEmpty = isEmpty;
  @ViewChild(DataTableDirective) datatableElement: DataTableDirective;

  fieldKeys = CONFIG_CONSTANTS.API_DATA_KEYS;
  countriesList: any[] = [];
  countriesListMap: { [key: string]: any} = {};
  stateList: any[] = [];
  stateListAll: any[] = [];
  statesListMap: { [key: string]: any} = {};
  data: any[] = []


  constructor(private searchService: SearchService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      serverSide: true,
      processing: true,
      dom: 'lrtip',
      ajax: (dataTablesParameters: any, callback) => {
        const sortObj = dataTablesParameters.order[0];
        this.searchService.getList({
          from: dataTablesParameters.start,
          size:dataTablesParameters.length,
          ...this.filter,
          sort: {
            field: (this.dtOptions as any).columns[sortObj.column as number].data,
            direction: sortObj.dir
          }
        }).subscribe((resp:any) => {
            this.data = [...resp.data];
            callback({
              recordsTotal: resp.total,
              recordsFiltered: resp.total,
              data: []
            });
            this.cd.detectChanges();
          });
      },
      columns: [{ data: this.fieldKeys.NPI }, { data: this.fieldKeys.FIRST_NAME }, { data: this.fieldKeys.LAST_NAME },{ data: this.fieldKeys.COUNTRY },{ data: this.fieldKeys.STATE },{ data: this.fieldKeys.CITY },{ data: 'action',orderable: false }]
    };
    this.searchService.getAllCountriesList().subscribe((data: any) => {
      this.countriesList = data.data;
      this.countriesList.forEach(e => {
        this.countriesListMap[e.iso2]=e.name;
      })
    })
    this.searchService.getStateList(null, true).subscribe((data: any) => {
      this.stateListAll = data.data;
      this.stateListAll.forEach(e => {
        if (!this.statesListMap[e['country_code']]) {
          this.statesListMap[e['country_code']]={};
        }
        this.statesListMap[e['country_code']][e['state_code']]=e.name;
      })
      this.cd.detectChanges();
    })
  }

  rerender(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }
  onSearch() {
    this.rerender();
  }
  onReset() {
    this.filter = this.filterDefaultValue;
    this.rerender();
  }
  get filterDefaultValue() {
    return {
      npi: "",
      firstName: "",
      lastName: "",
      country: null,
      state: null,
      city: null
    }
  }
  onCountryChange() {
    this.filter.state = null;
    this.filter.city = null;
    this.stateList = [];
    this.searchService.getStateList(this.filter.country)
    .subscribe((data: any) => {
      this.stateList = data.data;
    })
  }
  onStateChange() {
    this.filter.city = null;
  }
  getStateName(country: any, state: any) {
    if (this.statesListMap[country] && this.statesListMap[country][state]) {
      return this.statesListMap[country][state];
    }
    return "";
  }
}
