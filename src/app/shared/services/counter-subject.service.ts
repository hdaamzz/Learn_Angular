import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterSubjectService {

  private counterSubject=new BehaviorSubject<number>(0)

  counter$:Observable<number>=this.counterSubject.asObservable();

  getCurrentValue(){
    return this.counterSubject.value
  }

  Increment(){
    const currentValue=this.counterSubject.value;
    this.counterSubject.next(currentValue+1)
  }

  reset(){
    this.counterSubject.next(0)
  }



  private replaySub=new ReplaySubject<any>(2);
  rep$=this.replaySub.asObservable()

  replays(rep:string){
    this.replaySub.next(rep)
  }



  private apiResponseSubject = new AsyncSubject<any>();
  apiResponse$ = this.apiResponseSubject.asObservable();

  fetchData() {
    console.log('Making API call...');
    // Simulate API response
    setTimeout(() => {
      const data = { id: 1, message: 'Data fetched successfully' };
      this.apiResponseSubject.next(data);
      this.apiResponseSubject.complete(); // Important for AsyncSubject
    }, 2000);
  }
  
}
