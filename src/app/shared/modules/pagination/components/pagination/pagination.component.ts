import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() currentPage: number;
  @Input() total: number;
  @Input() limit: number;
  @Output() changePage = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit(): void {
    this.setPages();
  }

  ngOnChanges(): void {
    this.setPages();
  }

  private getPageRange(start: number, end: number): number[] {
    return [...Array(end).keys()].map(el => el + start);
  }

  private setPages(): void {
    const pageCount = Math.ceil(this.total / this.limit);
    this.pages = this.getPageRange(1, pageCount);
  }

  public onClick(page: number): void {
    this.changePage.emit(page);
  }
}
