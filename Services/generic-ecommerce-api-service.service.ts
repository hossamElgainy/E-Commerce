import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IProduct } from '../projects/admin/src/app/viewModels/iproduct';
import { environment } from '../projects/admin/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenericECommerceApiServiceService {

  httpOptions;
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
  // update the headers
  private setHeaders(key:string,value:string)
  {
    this.httpOptions.headers.set(key,value);
  }
  getAll(apiRoute:string): Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/${apiRoute}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  getAllWithFilter(apiRoute:string,param1?:any,param2?:any): Observable<IProduct[]>
  {
    let params = new HttpParams();
    params.append(`${param1}`,param1).append(`${param2}`,param2);
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/${apiRoute}`,{params}).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  getOne(apiRoute:string,id:any): Observable<any>
  {
    return this.httpClient.get<any>(`${environment.APIURL}/${apiRoute}/${id}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }

  add(apiRoute:string,model:any):Observable<any>
  {
    return this.httpClient.post<any>(`${environment.APIURL}/${apiRoute}`,model).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  update(apiRoute:string,model:any):Observable<any>
  {
    return this.httpClient.put<any>(`${environment.APIURL}/${apiRoute}`,model).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
  delete(apiRoute:string,id:number):Observable<any>
  {
    return this.httpClient.delete<any>(`${environment.APIURL}/${apiRoute}/${id}`).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
   // handling errors
   private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.log("Error Ocured: ", error.error)
    }
    else {
      console.log(`BackEnd Returns Code ${error.status} ,body was: `, error.error);
    }
    return throwError(() => new Error("Somthing Bad happened"));
  }

}


