import { LevelGroup } from "../model/level-group.interface";
import { listsGroup } from "./levels/lists/lists.group";
import { titlesAndParagraphsGroup } from "./levels/titles-and-paragraphs/titles-and-paragraphs.group";

export const allLevelGroups:  LevelGroup[] = [
    titlesAndParagraphsGroup, listsGroup
];