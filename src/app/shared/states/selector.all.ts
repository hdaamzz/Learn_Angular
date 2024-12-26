import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ValueType } from "./reducer.all";


export const featureSelector=createFeatureSelector<ValueType>('IncreRed');

export const valueGet=createSelector(featureSelector,(state)=>state.value)