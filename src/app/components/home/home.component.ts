import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ValueType } from '../../shared/states/reducer.all';
import { Store } from '@ngrx/store';
import { valueGet } from '../../shared/states/selector.all';
import { AsyncPipe, CommonModule } from '@angular/common';
import { IncrementAction } from '../../shared/states/action.all';
import { CounterSubjectService } from '../../shared/services/counter-subject.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  value$!:Observable<number>;
  constructor(private store:Store,private counterService:CounterSubjectService){
    this.counterService.apiResponse$.subscribe(response => {
      this.apiResponse = response;
    });
  }
  ngOnInit(): void {
    this.value$=this.store.select(valueGet);
    this.counter$=this.counterService.counter$;
    this.subscribeToActions();
  }

  incre(){
    this.store.dispatch(IncrementAction({num:0}));
  }


  //Behavioral Subject state

  counter$!:Observable<number>;

  Increment(){
    this.counterService.Increment()
  }
  reset(){
    this.counterService.reset()
  }

  simpleData=["apple","mango","grape","banana"]

  sampleObs$:Observable<string[]>=of(this.simpleData);

  sample(){
    const name =this.sampleObs$.subscribe((x)=>console.log(x)
    )
    console.log(name);
    
  }


  //replay subject
  userReplays:string[]=[]


  performAction(action: string) {
    this.counterService.replays(action);
  }

  subscribeToActions() {
    this.counterService.rep$.subscribe(action => {
      this.userReplays = [...this.userReplays, action].slice(-2);
    });
  }

  addNewSubscriber() {
    console.log('New subscriber added - will receive last 3 actions:');
    this.counterService.rep$.subscribe(action => {
      console.log('New subscriber received:', action);
    });
  }



  //async subject

  apiResponse: any;

  fetchData() {
    this.counterService.fetchData();
  }

  addNewSubscriber2() {
    console.log('New subscriber added - will receive only the final value:');
    this.counterService.apiResponse$.subscribe(
      response => console.log('New subscriber received:', response)
    );
  }





}
