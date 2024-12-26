import { createAction, props } from "@ngrx/store";


export const IncrementAction=createAction('[Home Component] Increment',props<{num:number}>());
