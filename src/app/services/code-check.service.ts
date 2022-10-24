import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from './state.service';

@Injectable({
  providedIn: 'root'
})
export class CodeCheckService {

  constructor(private state: StateService, private router: Router) { }

  performCodeCheck(code: string) {
    const codeWithoutWhiteSpace = code.replace(/\s/g,'');
    const goalCodeWithoutWhiteSpace = this.state.goalHTML.replace(/\s/g,'');
    console.log("comparing usercode", codeWithoutWhiteSpace, 'with', goalCodeWithoutWhiteSpace);
    if (codeWithoutWhiteSpace === goalCodeWithoutWhiteSpace) {
      alert("Congratulations! This one is perfecly implemented.");
      this.state.markLevelAsComplete();
      this.router.navigateByUrl('level-select');
    } else {
      console.log("The code is not the same!");
    }
  }
}
