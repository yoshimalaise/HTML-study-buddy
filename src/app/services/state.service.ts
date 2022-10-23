import { Injectable } from '@angular/core';
import { allLevelGroups } from '../data/levels';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public levelGroups = allLevelGroups;
  public levelName: string = "";
  public currentHTML = "";
  public goalHTML = "";


  constructor() { }
}
