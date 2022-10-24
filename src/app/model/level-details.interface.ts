import { CustomBlock } from "ngx-blockly";
import { HintScreenViewModel } from "./hint-screen-vm.interface";


export interface LevelDetails {
    goalHTML: string;
    customBlocks: CustomBlock[];
    toolboxXML: string;
    workSpaceXML: string;
    hintVM: HintScreenViewModel;
}