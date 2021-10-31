import { isEmpty } from './../../../utils/common.utils';
import { CONFIG_CONSTANTS } from './../../../config/config.constant';
import { SearchService } from './../../../_services/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss']
})
export class SearchDetailsComponent implements OnInit {
  public isEmpty = isEmpty;
  constructor(private route: ActivatedRoute, private searchService: SearchService, private toastrService: ToastrService, private router: Router,
    private loader: NgxUiLoaderService) { }
    data: any = {};
    keys = CONFIG_CONSTANTS.API_DATA_KEYS;
    entityTypesTitle: any = CONFIG_CONSTANTS.ENTITY_TYPE;
    stateMap:{[key:string]: any} = {};
    countryMap:{[key:string]: any} = {};
  
  async ngOnInit() {
    this.loader.start();
    try {
      const result = await Promise.all([
        this.searchService.getDetails(this.route.snapshot.params.id).toPromise(),
        this.searchService.getAllCountriesList().toPromise(),
        this.searchService.getStateList(null, true).toPromise()
      ]);
      const data: any = result[0];
      if (data.total <=0) {
        this.toastrService.error("No Record Found");
        this.loader.stopAll();
        this.router.navigateByUrl('');
      }
      this.data = data.data[0];
      (result[1] as any).data.forEach((e: any) => {
        this.countryMap[e.iso2]=e.name;
      });
      (result[2] as any).data.forEach((e: any) => {
        if (!this.stateMap[e['country_code']]) {
          this.stateMap[e['country_code']]={};
        }
        this.stateMap[e['country_code']][e['state_code']]=e.name;
      });
      this.loader.stopAll();
    } catch(err) {
      this.toastrService.error("No Record Found");
      this.loader.stopAll();
      this.router.navigateByUrl('');
    }
  }
  getFormattedAddress(data: any[]) {
    return data.filter(e => !isEmpty(e)).join(", ");
  }
  getAddress(address1: any, address2: any,city: any, state: any, country: any, postcode: any) {
    const add = [];
    if (address1) {
      add.push(address1);
    }
    if (address2) {
      add.push(address2);
    }
    if (city) {
      add.push(city);
    }
    if (state && country) {
      if (this.stateMap[country] && this.stateMap[country][state]) {
        add.push(this.stateMap[country][state]);
      } else {
        add.push(state);
      }
    }
    if (country) {
      add.push(this.countryMap[country]);
    }
    if (postcode) {
      add.push(postcode);
    }
    return this.getFormattedAddress(add);
  }
  get texonomyData(): any[] {
    return [...new Set(this.keys.TEXONOMIES.filter(e => !isEmpty(this.data[e])).map(e => this.data[e]))];
    
  }
}
