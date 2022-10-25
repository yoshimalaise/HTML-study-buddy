import { Blockly, CustomBlock } from "ngx-blockly";

export class PlainTextBlock extends CustomBlock {

    constructor() {
        super('plain_text_node');
        this.class = PlainTextBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("plain text"), "body");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(185);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="plain_text_node"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        const text_name = block.getFieldValue('body');
        const code = text_name;
        return code;
      }

}