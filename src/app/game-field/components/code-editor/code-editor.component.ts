import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxBlocklyConfig, NgxBlocklyGenerator, Blockly } from 'ngx-blockly';
import { CodeCheckService } from 'src/app/services/code-check.service';
import { StateService } from 'src/app/services/state.service';
import * as JavaScript from "blockly/javascript";

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('blocklyComponent') workspace: any;
  private lastCode = "";

  public config: NgxBlocklyConfig = {
    toolbox: this.state.toolboxXML,
    trashcan: true,
    generators: [
        NgxBlocklyGenerator.JAVASCRIPT
    ],
    defaultBlocks: true,
};

  constructor(public state: StateService, private codeCheckService: CodeCheckService, private router: Router) {
    setTimeout(() => window.dispatchEvent(new Event('resize')), 0);
   }

  ngAfterViewInit(): void {
    this.workspace.fromXml(this.state.workspaceXML);
    const ws = this.workspace.workspace;
    this.state.currentHTML = JavaScript.workspaceToCode(ws);
  }

  ngOnInit() {}

  onCode(code: string) {
    console.log(code);
    this.state.currentHTML = code;
    // wait a bit before doing the check so the puzzle can first snap nicely and the user can see the result
    const strippedCode = code.replace(/\s/g,'');
    if (strippedCode !== this.lastCode) {
      this.lastCode = strippedCode;
      setTimeout(() => {
        this.codeCheckService.performCodeCheck(code);
      }, 3000);
    }
    
  }

  @HostListener('unloaded')
  ngOndeDestroy() {

  }

}
