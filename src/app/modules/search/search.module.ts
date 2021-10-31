import { CardsModule } from './../../_metronic/partials/content/cards/cards.module';
import { WidgetsModule } from './../../_metronic/partials/content/widgets/widgets.module';
import { DropdownMenusModule } from './../../_metronic/partials/content/dropdown-menus/dropdown-menus.module';
import { InlineSVGModule } from 'ng-inline-svg';
import { NumberOnlyDirective } from './../../_directives/number-only.directive';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { DataTablesModule } from "angular-datatables";
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchDetailsComponent } from './search-details/search-details.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';


@NgModule({
  declarations: [
    SearchComponent,
    SearchListComponent,
    NumberOnlyDirective,
    SearchDetailsComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    DataTablesModule,
    FormsModule,
    NgSelectModule,
    InlineSVGModule,
    DropdownMenusModule,
    WidgetsModule,
    CardsModule,
    NgxUiLoaderModule
  ]
})
export class SearchModule { }
