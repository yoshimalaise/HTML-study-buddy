import {Blockly, Block, CustomBlock } from "ngx-blockly";
import * as JavaScript from "blockly/javascript";

export class ListItemBlock extends CustomBlock {

    constructor() {
        super('list_item');
        this.class = ListItemBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<li>");
        this.block.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("default"), "body");
        this.block.appendDummyInput()
            .appendField("</li>");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(285);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="list_item"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_body = block.getFieldValue('body');
        var code = `<li>${text_body}</li>`;
        return code;
      }

}