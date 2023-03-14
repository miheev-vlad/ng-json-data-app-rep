import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { DataListTableService } from '../../services/data-list-table.service';
import { DataItemInterface } from '../../types/dataItem.interface';

@Component({
  selector: 'app-data-list-table',
  templateUrl: './data-list-table.component.html',
  styleUrls: ['./data-list-table.component.scss'],
})
export class DataListTableComponent implements OnInit, OnDestroy {
  currentPage: number = 1;
  limit: number = 5;
  searchNameStr = '';
  searchBrandStr = '';
  selectedSortBy = '';

  dataList$: Observable<DataItemInterface[]>;
  dataListSub$: Subscription;

  constructor(private dataListTableService: DataListTableService) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.dataListSub$.unsubscribe();
  }

  private fetchData(): void {
    this.dataList$ = this.dataListTableService.getDataList();
  }

  public changePage(page: number): void {
    this.currentPage = page;
  }

  public getPaginateDataList(
    dataListArr: DataItemInterface[]
  ): DataItemInterface[] {
    return dataListArr.slice(
      (this.currentPage - 1) * this.limit,
      this.currentPage * this.limit
    );
  }
}
