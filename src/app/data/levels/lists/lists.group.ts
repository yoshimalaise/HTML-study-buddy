import { LevelGroup } from "src/app/model/level-group.interface";
import { arduinoBoatloaderLevel } from "./arduino-bbotloader.level";
import { muffinRecipeLevel } from "./muffin-recipe.level";
import { shoppingListLevel } from "./shopping-list.level";

export const listsGroup: LevelGroup = {
    name: "Lists",
    levels: [shoppingListLevel, muffinRecipeLevel, arduinoBoatloaderLevel],
    presentationMarkdown: "# hello"
}