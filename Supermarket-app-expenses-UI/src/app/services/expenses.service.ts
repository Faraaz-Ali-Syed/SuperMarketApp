import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor(private _http: HttpClient) { }

  addExpense(data: any): Observable<any> {
    return this._http.post('https://localhost:7231/api/Expense/Create', data)
  }
  getExpense(): Observable<any> {
    return this._http.get('https://localhost:7231/api/Expense/GetAll')
  }
  deleteExpense(id: number): Observable<any> {
    return this._http.delete(`https://localhost:7231/api/Expense/Remove?id=${id}`)
  }
  updateExpense(id:number,data: any): Observable<any> {
    return this._http.put(`https://localhost:7231/api/Expense/Update?id=${id}`, data)
  }
}
