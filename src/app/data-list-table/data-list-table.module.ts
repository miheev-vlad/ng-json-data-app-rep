import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterItemsPipe } from './pipes/filterItems.pipe';
import { PaginationModule } from '../shared/modules/pagination/pagination.module';

import { SharedModule } from '../shared/shared.module';
import { DataListTableComponent } from './components/data-list-table/data-list-table.component';
import { DataListLayoutComponent } from './shared/components/data-list-layout.component';
import { SortItemsPipe } from './pipes/sortItems.pipe';

@NgModule({
  imports: [CommonModule, SharedModule, PaginationModule, FormsModule],
  declarations: [
    DataListTableComponent,
    DataListLayoutComponent,
    FilterItemsPipe,
    SortItemsPipe,
  ],
  exports: [DataListLayoutComponent],
})
export class DataListTableModule {}
