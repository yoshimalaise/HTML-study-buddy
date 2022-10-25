import {Blockly, Block, CustomBlock } from "ngx-blockly";
import * as JavaScript from "blockly/javascript";

export class UnorderedListBlock extends CustomBlock {

    constructor() {
        super('unordered_list');
        this.class = UnorderedListBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<ul>");
        this.block.appendStatementInput("body")
            .setCheck(null);
        this.block.appendDummyInput()
            .appendField("</ul>");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(285);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="unordered_list"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var statements_body = JavaScript.statementToCode(block, 'body');
        var code = `<ul>${statements_body}</ul>`;
        return code;
      }

}