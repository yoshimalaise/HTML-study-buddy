import { Blockly, CustomBlock } from "ngx-blockly";
import * as JavaScript from "blockly/javascript";

export class LinkBlock extends CustomBlock {

    constructor() {
        super('link_node');
        this.class = LinkBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
            .appendField("<a href=\"")
            .appendField(new Blockly.FieldTextInput("http://..."), "url")
            .appendField("\" target=\"_blank\">")
            .appendField(new Blockly.FieldTextInput("text"), "body")
            .appendField("</a>");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(345);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="link_node"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_url = block.getFieldValue('url');
        var text_body = block.getFieldValue('body');
        // TODO: Assemble JavaScript into code variable.
        var code = `<a href="${text_url}" target="_blank">${text_body}</a>`;
        return code;
    }

}

export class LinkWithBodyBlock extends CustomBlock {

    constructor() {
        super('link_node_with_body');
        this.class = LinkWithBodyBlock;
    }

    defineBlock() {
        this.block.appendDummyInput()
            .appendField("<a href=\"")
            .appendField(new Blockly.FieldTextInput("http://..."), "url")
            .appendField("\" target=\"_blank\">");
        this.block.appendStatementInput("body")
            .setCheck(null);
        this.block.appendDummyInput()
            .appendField("</a>");
        this.block.setPreviousStatement(true, null);
        this.block.setNextStatement(true, null);
        this.block.setColour(345);
        this.block.setTooltip("");
        this.block.setHelpUrl("");
    }

    toXML() {
        return '<block type="link_node_with_body"></block>';
    }

    toJavaScriptCode(block: Blockly.Block): string | any[] {
        var text_url = block.getFieldValue('url');
        var statements_body = JavaScript.statementToCode(block, 'body');
        // TODO: Assemble JavaScript into code variable.
        var code = `<a href="${text_url}" target="_blank">${statements_body}</a>`;
        return code;
    }

}