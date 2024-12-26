import { createReducer, on } from "@ngrx/store";
import { IncrementAction } from "./action.all";
import { state } from "@angular/animations";


export interface ValueType{
    value:number;
}

export const initialState:ValueType={
    value: 0
}

export const IncrementReducer=createReducer(initialState,
    on(IncrementAction,(state,value)=>({...state,value:state.value+1}))
)