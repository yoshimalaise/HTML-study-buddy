import {Blockly, Block, CustomBlock } from "ngx-blockly";
import * as JavaScript from "blockly/javascript";

export class Heading1Block extends CustomBlock {

    constructor() {
        super('heading_1');
        this.class = Heading1Block;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<h1>");
        this.block.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("heading 1"), "body");
        this.block.appendDummyInput()
            .appendField("</h1>");
        this.block.setColour(230);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
    }

    toXML() {
        return '<block type="heading_1"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_result_var = block.getFieldValue('body');
        // TODO: Assemble JavaScript into code variable.
        var code = `<h1>${text_result_var}</h1>`;
        return code;
      }

}


export class Heading2Block extends CustomBlock {

    constructor() {
        super('heading_2');
        this.class = Heading2Block;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<h2>");
        this.block.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("heading 2"), "body");
        this.block.appendDummyInput()
            .appendField("</h2>");
        this.block.setColour(230);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
    }

    toXML() {
        return '<block type="heading_2"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_result_var = block.getFieldValue('body');
        // TODO: Assemble JavaScript into code variable.
        var code = `<h2>${text_result_var}</h2>`;
        return code;
      }

}

export class Heading3Block extends CustomBlock {

    constructor() {
        super('heading_3');
        this.class = Heading3Block;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<h3>");
        this.block.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("heading 3"), "body");
        this.block.appendDummyInput()
            .appendField("</h3>");
        this.block.setColour(230);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
    }

    toXML() {
        return '<block type="heading_3"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_result_var = block.getFieldValue('body');
        // TODO: Assemble JavaScript into code variable.
        var code = `<h3>${text_result_var}</h3>`;
        return code;
      }

}

export class Heading4Block extends CustomBlock {

    constructor() {
        super('heading_4');
        this.class = Heading4Block;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<h4>");
        this.block.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("heading 4"), "body");
        this.block.appendDummyInput()
            .appendField("</h4>");
        this.block.setColour(230);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
    }

    toXML() {
        return '<block type="heading_4"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_result_var = block.getFieldValue('body');
        // TODO: Assemble JavaScript into code variable.
        var code = `<h4>${text_result_var}</h4>`;
        return code;
      }

}

export class Heading5Block extends CustomBlock {

    constructor() {
        super('heading_5');
        this.class = Heading5Block;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<h5>");
        this.block.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("heading 5"), "body");
        this.block.appendDummyInput()
            .appendField("</h5>");
        this.block.setColour(230);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
    }

    toXML() {
        return '<block type="heading_5"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_result_var = block.getFieldValue('body');
        // TODO: Assemble JavaScript into code variable.
        var code = `<h5>${text_result_var}</h5>`;
        return code;
      }

}

export class Heading6Block extends CustomBlock {

    constructor() {
        super('heading_6');
        this.class = Heading6Block;
    }

    defineBlock() {
        this.block.appendDummyInput()
        .appendField("<h6>");
        this.block.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("heading 6"), "body");
        this.block.appendDummyInput()
            .appendField("</h6>");
        this.block.setColour(230);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
    }

    toXML() {
        return '<block type="heading_6"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_result_var = block.getFieldValue('body');
        // TODO: Assemble JavaScript into code variable.
        var code = `<h6>${text_result_var}</h6>`;
        return code;
      }

}