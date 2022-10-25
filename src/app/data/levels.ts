import { LevelGroup } from "../model/level-group.interface";
import { inputsGroup } from "./levels/inputs/inputs.group";
import { linksAndMediaGroup } from "./levels/links-and-media/links-and-media.group";
import { listsGroup } from "./levels/lists/lists.group";
import { titlesAndParagraphsGroup } from "./levels/titles-and-paragraphs/titles-and-paragraphs.group";

export const allLevelGroups:  LevelGroup[] = [
    titlesAndParagraphsGroup, listsGroup, linksAndMediaGroup
];