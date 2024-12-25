import { AsyncPipe, CommonModule, CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { StringFilterPipe } from '../../shared/custome-pipes/string-filter.pipe';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [DatePipe,UpperCasePipe,LowerCasePipe,CurrencyPipe,PercentPipe,JsonPipe,SlicePipe,StringFilterPipe,CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  //these variables are using in in-built pipes
  amount=100;
  name="hd-aamzz";
  todayDate=new Date();
  percetage=.5;
  cutter="Hello Angular world !";
  jsons={"first-name":"Hamzathul","last-name":"Dilsahd"};

  //custom pipes
  newArr=["malappuram",10,"Kerala",14,"India"]


}
