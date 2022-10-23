import { CustomBlock } from "ngx-blockly";


export interface LevelDetails {
    goalHTML: string;
    customBlocks: CustomBlock[];
    toolboxXML: string;
    workSpaceXML: string;
}