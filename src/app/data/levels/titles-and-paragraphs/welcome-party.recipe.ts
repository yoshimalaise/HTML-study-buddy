import { Level } from "src/app/model/level.interface";
import { HtmlPageBlock } from "../../shared-blocks/html-page.block";
import { Block, Blockly, CustomBlock } from "ngx-blockly";
import { Heading1Block, Heading2Block, Heading3Block } from "../../shared-blocks/headings.block";
import { ParagraphBlock } from "../../shared-blocks/paragraph.block";
import { HintScreenViewModel } from "src/app/model/hint-screen-vm.interface";
import { getH1ElementHint, getPElementHint } from "../../element-hints/element-hints";

const goalHTML = `
<h1> Welcome party</h1>
<p>
No actual recipe yet. But we have a few cool paragraphs here, try to replicate them.
</p>

<p>
Morbi dictum placerat augue. Phasellus sit amet venenatis mi. Curabitur vitae nisl eu diam hendrerit porta. Mauris sagittis blandit eros a efficitur.
</p>

<p>
Fusce vel magna placerat, mollis nunc eu, semper odio. Vestibulum ut velit a lacus consectetur fringilla auctor et ipsum. Cras aliquam id nibh sodales viverra. Etiam non placerat elit. Duis tempus eros quis augue scelerisque, placerat cursus arcu pharetra. Aliquam convallis, mauris id auctor tempus, odio eros molestie turpis, ac porttitor ante risus ac nisi. Donec convallis maximus purus ac dictum. Praesent convallis varius nisi, sed pretium ante sollicitudin quis. Aliquam molestie massa a mattis sagittis. Phasellus ac tortor justo. Nulla in libero fermentum, rhoncus justo et, dignissim ante. Suspendisse ultrices elementum enim, sed lacinia orci ullamcorper vitae. Nullam at pretium libero. Nulla sit amet elit vitae magna dignissim efficitur. Curabitur sit amet lorem a mauris fringilla convallis.
</p>



`;

const hintVM: HintScreenViewModel = {
    generalComment: "This is the very first recipe that should get you used to using headings and paragraphs",
    requiredElements: [
        getPElementHint(),
        getH1ElementHint()
    ]
}

export const WelcomePartyRecipe: Level = {
    name: "Welcome Party",
    completed: false,
    load: () => {
        return {
            goalHTML,
            hintVM,
            customBlocks: [new HtmlPageBlock(), new Heading1Block(), new Heading2Block(), new Heading3Block(), new ParagraphBlock()],
            workSpaceXML: `<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
                                <block type="html_body" id="2}pD0ohd?eOQABj^8xHc" x="163" y="63"></block>
                            </xml>`,
            toolboxXML: `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
                            <category name="headings">
                                <block type="heading_1">
                                    <field name="body">heading 1</field>
                                </block>
                                <block type="heading_2">
                                    <field name="body">heading 2</field>
                                </block>
                                <block type="heading_3">
                                    <field name="body">heading 3</field>
                                </block>
                            </category>
                            <category name="content">
                                <block type="paragraph">
                                    <field name="body">paragraph</field>
                                </block>
                            </category>
                          </xml>`

        }
    }
}