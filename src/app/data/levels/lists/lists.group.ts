import { LevelGroup } from "src/app/model/level-group.interface";
import { muffinRecipeLevel } from "./muffin-recipe.level";
import { shoppingListLevel } from "./shopping-list.level";

export const listsGroup: LevelGroup = {
    name: "Lists",
    levels: [shoppingListLevel, muffinRecipeLevel]
}