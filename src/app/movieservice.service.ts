import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MovieserviceService {
  private addParam = new BehaviorSubject<boolean>(false)
  private detailsParam = new BehaviorSubject<any>('')
  constructor(private http: HttpClient) { }

  setParam(param)
  {
    this.addParam.next(param)
  }

  getParam()
  {
    return this.addParam.asObservable();
  }

  setDetailsParam(param)
  {
    this.detailsParam.next(param)
  }

  getDetailsParam()
  {
    return this.detailsParam.asObservable();
  }

  getMovies()
  {
    return this.http.get<any>('assets/movies.json').toPromise().then(res=>
    res.data).then(data=>{return data;});
  }

  getAdditionalDetails(movie)
  {
    return this.http.get<any>('assets/'+movie+'.json').toPromise().then(res=>
    res.data).then(data=>{return data;});
  }
}
