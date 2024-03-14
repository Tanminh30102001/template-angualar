import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

// Ng Search 
import { NgPipesModule } from 'ngx-pipes';

// Simplebar
import { SimplebarAngularModule } from 'simplebar-angular';

// FlatPicker
import { FlatpickrModule } from 'angularx-flatpickr';

// Load Icon
import { defineElement } from '@lordicon/element';
import lottie from 'lottie-web';

// Component pages
import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BasicComponent } from './basic/basic.component';
import { GridjsComponent } from './gridjs/gridjs.component';
import { ListjsComponent } from './listjs/listjs.component';

// Sorting page
import { NgbdListSortableHeader } from './listjs/listjs-sortable.directive';

@NgModule({
  declarations: [
    BasicComponent,
    GridjsComponent,
    ListjsComponent,
    NgbdListSortableHeader
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FlatpickrModule,
    TablesRoutingModule,
    SharedModule,
    NgPipesModule,
    SimplebarAngularModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TablesModule { 
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}