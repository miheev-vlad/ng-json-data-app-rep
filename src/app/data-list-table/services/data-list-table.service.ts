import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataItemInterface } from '../types/dataItem.interface';

@Injectable({
  providedIn: 'root',
})
export class DataListTableService {
  constructor(private http: HttpClient) {}

  getDataList(): Observable<DataItemInterface[]> {
    const url = environment.dbUrl + '/data';
    return this.http.get<DataItemInterface[]>(url);
  }
}
