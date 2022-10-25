import { Blockly, Block, CustomBlock } from "ngx-blockly";
import * as JavaScript from "blockly/javascript";

export class ImgBlock extends CustomBlock {

    constructor() {
        super('img');
        this.class = ImgBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
            .appendField("<img src=\"")
            .appendField(new Blockly.FieldTextInput("url to image"), "url")
            .appendField("\" alt=\"")
            .appendField(new Blockly.FieldTextInput("alt text"), "alt")
            .appendField("\"></img>");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(2);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="img"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_url = block.getFieldValue('url');
        var text_alt = block.getFieldValue('alt');
        // TODO: Assemble JavaScript into code variable.
        var code = `<img src="${text_url}" alt="${text_alt}"></img>`;
        return code;
    }

}