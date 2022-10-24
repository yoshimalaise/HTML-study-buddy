import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxBlocklyConfig, NgxBlocklyGenerator, Blockly } from 'ngx-blockly';
import { CodeCheckService } from 'src/app/services/code-check.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-code-editor',
  templateUrl: './code-editor.component.html',
  styleUrls: ['./code-editor.component.scss'],
})
export class CodeEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('blocklyComponent') workspace: any;

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
    // const ws = this.workspace.workspace;
    // const g = new Blockly.Generator(NgxBlocklyGenerator.JAVASCRIPT);
    // alert(g.workspaceToCode(ws));
    // todo find a way to get blockly to generate HTML already here
  }

  ngOnInit() {}

  onCode(code: string) {
    console.log(code);
    this.state.currentHTML = code;
    const userIsCorrect = this.codeCheckService.performCodeCheck(code);
  }

}
