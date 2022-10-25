import {Blockly, Block, CustomBlock } from "ngx-blockly";
import * as JavaScript from "blockly/javascript";

export class OrderedListBlock extends CustomBlock {

    constructor() {
        super('ordered_list');
        this.class = OrderedListBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<ol>");
        this.block.appendStatementInput("body")
            .setCheck(null);
        this.block.appendDummyInput()
            .appendField("</ol>");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(285);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="ordered_list"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var statements_body = JavaScript.statementToCode(block, 'body');
        var code = `<ol>${statements_body}</ol>`;
        return code;
      }

}