import { LevelDetails } from "../model/level-details.interface";
import { Level } from "../model/level.interface";
import { Converter } from 'showdown';
import { ElementHint, HintScreenViewModel } from "../model/hint-screen-vm.interface";
import { getH1ElementHint, getH2ElementHint, getH3ElementHint, getH4ElementHint, getH5ElementHint, getH6ElementHint, getPElementHint } from "../data/element-hints/element-hints";
import { CustomBlock } from "ngx-blockly";

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

    const { toolboxXML, customBlocks} = constructBlocksAndToolbox(doc);
    const workSpaceXML = '<xml xmlns="https://developers.google.com/blockly/xml" id="workspaceBlocks" style="display: none"></xml>';
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
    console.log('the html we are basing our hints on', html);
    // we show the hint as soon as the tag appears in the goal html
    const mappings = [
        { tagname: "<h1", load: getH1ElementHint },
        { tagname: "<h2", load: getH2ElementHint },
        { tagname: "<h3", load: getH3ElementHint },
        { tagname: "<h4", load: getH4ElementHint },
        { tagname: "<h5", load: getH5ElementHint },
        { tagname: "<h6", load: getH6ElementHint },
        { tagname: "<p>", load: getPElementHint }
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

function constructBlocksAndToolbox(doc: Node): { toolboxXML: string, customBlocks: CustomBlock[] } {
    forEachTreeElement(doc, (node: any) => {
        // console.log('this is the node', node);
        
        
    });

    const customBlocks = []

    return { toolboxXML: `
    <xml xmlns="https://developers.google.com/blockly/xml" id="toolbox" style="display: none">
    </xml>`, 
    customBlocks }
}

// currently ignores childs, we'll need to fix this
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