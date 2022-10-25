import {Blockly, Block, CustomBlock } from "ngx-blockly";
import * as JavaScript from "blockly/javascript";

export class HtmlPageBlock extends CustomBlock {

    constructor() {
        super('html_body');
        this.class = HtmlPageBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
            .appendField("<!DOCTYPE html>");
        this.block.appendDummyInput()
            .appendField("<html>");
        this.block.appendDummyInput()
            .appendField("    <head>");
        this.block.appendDummyInput()
            .appendField("    </head>");
        this.block.appendDummyInput()
            .appendField("    <body>");
        this.block.appendStatementInput("body")
            .setCheck(null);
        this.block.appendDummyInput()
            .appendField("    </body>");
        this.block.appendDummyInput()
            .appendField("</html>");
        this.block.setInputsInline(false);
        this.block.setColour(45);
        this.block.setTooltip("The outer body of your html document");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="html_body"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var statements_body = JavaScript.statementToCode(block, 'body');
        var code = `<html><head></head><body>${statements_body}</body></html>`;
        return code;
      }

}