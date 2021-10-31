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

  constructor(private route: ActivatedRoute, private searchService: SearchService, private toastrService: ToastrService, private router: Router,
    private loader: NgxUiLoaderService) { }
  data: any = {};
  keys = CONFIG_CONSTANTS.API_DATA_KEYS;
  async ngOnInit() {
    this.loader.start();
    const data: any = await this.searchService.getDetails(this.route.snapshot.params.id).toPromise();
    if (data.total <=0) {
      this.toastrService.error("No Record Found");
      this.loader.stopAll();
      this.router.navigateByUrl('');
    }
    this.data = data.data[0];
    this.loader.stopAll();
  }

}
