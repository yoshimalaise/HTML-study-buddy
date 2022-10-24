import { Block, Blockly, CustomBlock } from "ngx-blockly";
import { HintScreenViewModel } from "src/app/model/hint-screen-vm.interface";
import { Level } from "src/app/model/level.interface";
import { getPElementHint, getH1ElementHint } from "../../element-hints/element-hints";
import { Heading1Block, Heading2Block, Heading3Block } from "../../shared-blocks/headings.block";
import { HtmlPageBlock } from "../../shared-blocks/html-page.block";
import { ParagraphBlock } from "../../shared-blocks/paragraph.block";

const goalHTML = `
<h1>Welcome to the team!</h1>
<p>
We are so happy to finally have someone with the technical know-how to make digital versions of our famous recipes!
</p>

<p>
You can not imagine how stressful it is to always have to worry about losing the old recipe book when we come to work.
</p>

<p>
I have to go for now, customers are waiting, good luck with the job!
</p>
`;

const hintVM: HintScreenViewModel = {
    generalComment: "This is the tutorial recipe so allmost everything is already given. Try to get familiar with the controls.",
    requiredElements: [
        getPElementHint(),
        getH1ElementHint()
    ]
}

export function getTutorialLevel(): Level {
    return {
        name: "Tutorial Level",
        completed: false,
        load: () => {
            return {
                goalHTML,
                hintVM,
                customBlocks: [new HtmlPageBlock(), new Heading1Block(), new ParagraphBlock()],
                workSpaceXML: `<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
                                    <block type="html_body" id="2}pD0ohd?eOQABj^8xHc" x="163" y="63">
                                        <statement name="body">
                                            <block type="heading_1">
                                                <field name="body">Welcome to the team!</field>
                                                <next>
                                                    <block type="paragraph">
                                                        <field name="body">We are so happy to finally have someone with the technical know-how to make digital versions of our famous recipes!</field>
                                                            <next>
                                                                <block type="paragraph">
                                                                    <field name="body">You can not imagine how stressful it is to always have to worry about losing the old recipe book when we come to work.</field>
                                                                </block>
                                                            </next>
                                                    </block>
                                                </next>
                                            </block>
                                        </statement>
                                    </block>
                                </xml>`,
                toolboxXML: `<xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
                                <category name="headings">
                                    <block type="heading_1">
                                        <field name="body">heading 1</field>
                                    </block>
                                </category>
                                <category name="content">
                                    <block type="paragraph">
                                        <field name="body">paragraph</field>
                                    </block>
                                </category>
                                <category name="tutorial blocks">
                                    <block type="heading_1">
                                        <field name="body">Welcome to the team!</field>
                                    </block>
                                    <block type="paragraph">
                                        <field name="body">We are so happy to finally have someone with the technical know-how to make digital versions of our famous recipes!</field>
                                    </block>
                                    <block type="paragraph">
                                        <field name="body">You can not imagine how stressful it is to always have to worry about losing the old recipe book when we come to work.</field>
                                    </block>
                                    <block type="paragraph">
                                        <field name="body">I have to go for now, customers are waiting, good luck with the job!</field>
                                    </block>
                                </category>
                            </xml>`

            }
        }
    }
}