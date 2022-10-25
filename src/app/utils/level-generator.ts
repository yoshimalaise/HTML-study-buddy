import { LevelDetails } from "../model/level-details.interface";
import { Level } from "../model/level.interface";
import { Converter } from 'showdown';
import { ElementHint, HintScreenViewModel } from "../model/hint-screen-vm.interface";
import { getH1ElementHint, getH2ElementHint, getH3ElementHint, getH4ElementHint, getH5ElementHint, getH6ElementHint, getLiHint, getOlHint, getPElementHint, getUlHint } from "../data/element-hints/element-hints";
import { CustomBlock } from "ngx-blockly";
import { Heading1Block, Heading2Block, Heading3Block, Heading4Block, Heading5Block, Heading6Block } from "../data/shared-blocks/headings.block";
import { ParagraphBlock, ParagraphWithBodyBlock } from "../data/shared-blocks/paragraph.block";
import { HtmlPageBlock } from "../data/shared-blocks/html-page.block";
import { OrderedListBlock } from "../data/shared-blocks/ordered-list.block";
import { UnorderedListBlock } from "../data/shared-blocks/unordered-list.block";
import { ListItemBlock, ListItemWithBodyBlock } from "../data/shared-blocks/list-item.block";
import { PlainTextBlock } from "../data/shared-blocks/plain-text.block";

export function markdownToLevel(name, description, markdown): Level {
    const converter = new Converter();
    const html = stripIds(converter.makeHtml(markdown));
    return htmlToLevel(name, description, html);
}

export function htmlToLevel(name, description, html): Level {
    return {
        name,
        completed: false,
        load: () => getLevelDetails(html, description)
    }
}

// this is where the magic will happen, parse the HTML into a dom
// then perform a treewalk so we can see which hint/blocks/etc to include 
function getLevelDetails(goalHTML, description): LevelDetails {
    const parser = new DOMParser();
    const doc = parser.parseFromString(goalHTML, 'text/html');

    const { toolboxXML, customBlocks, workSpaceXML} = constructBlocksAndToolbox(doc, goalHTML);
   
    const hintVM: HintScreenViewModel = {
        generalComment: description,
        requiredElements: constructElementHints(goalHTML.toLowerCase())
    }

    return {
        goalHTML,
        customBlocks,
        toolboxXML,
        workSpaceXML,
        hintVM
    }
}

function constructElementHints(html: string): ElementHint[] {
    const hints: ElementHint[] = [];
    // we show the hint as soon as the tag appears in the goal html
    const mappings = [
        { tagname: "<h1", load: getH1ElementHint },
        { tagname: "<h2", load: getH2ElementHint },
        { tagname: "<h3", load: getH3ElementHint },
        { tagname: "<h4", load: getH4ElementHint },
        { tagname: "<h5", load: getH5ElementHint },
        { tagname: "<h6", load: getH6ElementHint },
        { tagname: "<p>", load: getPElementHint },
        { tagname: "<ul>", load: getUlHint },
        { tagname: "<ol>", load: getOlHint },
        { tagname: "<li>", load: getLiHint },
    ];
    
    mappings.forEach(m => {
        if (html.includes(m.tagname)) {
            hints.push(m.load());
        }
    });
    return hints;
}

function stripIds(html: string): string {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    forEachTreeElement(doc, (node: any) => {
        // console.log('this is the node', node);
        if (node.id) {
            node.removeAttribute('id');
        }
    });
    return doc.documentElement.outerHTML;
}

function constructBlocksAndToolbox(doc: Node, html: string): { toolboxXML: string, customBlocks: CustomBlock[], workSpaceXML: string } {
    const toolboxSnippets = [];
    const customBlocks = [new HtmlPageBlock()];

    const pushUnique = (x) => {
        if (!toolboxSnippets.map(s => s.id).includes(x.id)) {
            toolboxSnippets.push(x);
        }
    }

    forEachTreeElement(doc, (node: any) => {
        const tagname = node.tagName;
        
        if (node.nodeType === Node.TEXT_NODE && node.textContent.replace(/\s/g,'') !== "") {
            const txt =  node.textContent.trim();
            customBlocks.push(new PlainTextBlock());
            pushUnique({ 
                id: `raw-text-${txt}`,
                category: "raw text", 
                snippet: `
                <block type="plain_text_node">
                    <field name="body">${txt}</field>
                </block>
                `});
        }
        if (tagname) {
            switch (tagname.toLowerCase()) {
                case 'h1':
                    customBlocks.push(new Heading1Block());
                    pushUnique({ 
                        id: `h1-${node.innerText}`,
                        category: "headings", 
                        snippet: `
                        <block type="heading_1">
                            <field name="body">${node.innerText}</field>
                        </block>
                        `});
                    break;
                case 'h2':
                    customBlocks.push(new Heading2Block());
                    pushUnique({ 
                        id: `h2-${node.innerText}`,
                        category: "headings", 
                        snippet: `
                        <block type="heading_2">
                            <field name="body">${node.innerText}</field>
                        </block>
                        `});
                    break;
                case 'h3':
                    customBlocks.push(new Heading3Block());
                    pushUnique({ 
                        id: `h3-${node.innerText}`,
                        category: "headings", 
                        snippet: `
                        <block type="heading_3">
                            <field name="body">${node.innerText}</field>
                        </block>
                        `});
                    break;
                case 'h4':
                    customBlocks.push(new Heading4Block());
                    toolboxSnippets.push({ 
                        id: `h4-${node.innerText}`,
                        category: "headings", 
                        snippet: `
                        <block type="heading_4">
                            <field name="body">${node.innerText}</field>
                        </block>
                        `});
                    break;
                case 'h5':
                    customBlocks.push(new Heading5Block());
                    toolboxSnippets.push({ 
                        id: `h5-${node.innerText}`,
                        category: "headings", 
                        snippet: `
                        <block type="heading_5">
                            <field name="body">${node.innerText}</field>
                        </block>
                        `});
                    break;
                case 'h6':
                    customBlocks.push(new Heading6Block());
                    pushUnique({ 
                        id: `h6-${node.innerText}`,
                        category: "headings", 
                        snippet: `
                        <block type="heading_6">
                            <field name="body">${node.innerText}</field>
                        </block>
                        `});
                    break;
                case 'p':
                    customBlocks.push(new ParagraphWithBodyBlock());
                    customBlocks.push(new ParagraphBlock());
                    pushUnique({ 
                        id: `p-${node.innerText}`,
                        category: "content", 
                        snippet: `
                        <block type="paragraph">
                            <field name="body">${node.innerText}</field>
                        </block>
                        `});
                        pushUnique({ 
                            id: `p`,
                            category: "content", 
                            snippet: `
                            <block type="paragraph_with_body">
                            </block>
                            `});
                    break;
                case 'ol':
                    customBlocks.push(new OrderedListBlock());
                    pushUnique({ 
                        id: `ordered-list`,
                        category: "lists", 
                        snippet: `
                        <block type="ordered_list">
                        </block>
                        `});
                    break;
                case 'ul':
                    customBlocks.push(new UnorderedListBlock());
                    pushUnique({ 
                        id: `unordered-list`,
                        category: "lists", 
                        snippet: `
                        <block type="unordered_list">
                        </block>
                        `});
                    break;
                case 'li':
                    customBlocks.push(new ListItemBlock());
                    customBlocks.push(new ListItemWithBodyBlock());
                    if (node.innerText && node.innerText !== "") {
                        pushUnique({ 
                            id: `list-item-${node.innerText}`,
                            category: "lists", 
                            snippet: `
                            <block type="list_item">
                                <field name="body">${node.innerText}</field>
                            </block>
                            `});
                    }
                    pushUnique({ 
                        id: `list-item-body`,
                        category: "lists", 
                        snippet: `
                        <block type="list_item_with_body">
                        </block>
                        `});
                    break;
            }
        }
    });

    const toolboxXML = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
        ${[...new Set([...toolboxSnippets.map(ts => ts.category)])].map(cat => {

            const blocks = toolboxSnippets.filter(ts => ts.category === cat)
                                        .map(ts => ts.snippet)
                                        .join("\n");

            return `
            <category name="${cat}">
                ${blocks}
            </category>
            `
        }).join('\n')}
    </xml>
    `;

    
    const workSpaceXML = `
    <xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none">
        <block type="html_body" id="2}pD0ohd?eOQABj^8xHc" x="163" y="63"></block>
    </xml>`;
    return { toolboxXML, workSpaceXML, customBlocks }
}


function forEachTreeElement(doc, callback: (Node) => void) {
    const walker = document.createTreeWalker(doc);
    let currentNode = walker.currentNode;
    while(currentNode) {
        callback(currentNode);
        if(currentNode.hasChildNodes()) {
            currentNode.childNodes.forEach(n => forEachTreeElement(n, callback));
        }
        currentNode = walker.nextNode();
    }
}