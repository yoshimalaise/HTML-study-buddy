import {Blockly, Block, CustomBlock } from "ngx-blockly";
import * as JavaScript from "blockly/javascript";

export class ParagraphBlock extends CustomBlock {

    constructor() {
        super('paragraph');
        this.class = ParagraphBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<p>");
        this.block.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("default"), "body");
        this.block.appendDummyInput()
            .appendField("</p>");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(165);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="paragraph"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_result_var = block.getFieldValue('body');
        // TODO: Assemble JavaScript into code variable.
        var code = `<p>${text_result_var}</p>`;
        return code;
      }

}