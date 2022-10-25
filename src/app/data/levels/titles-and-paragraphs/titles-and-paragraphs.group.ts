import { LevelGroup } from "src/app/model/level-group.interface";
import { WelcomePartyRecipe } from "./welcome-party.recipe";
import { markdownTest } from "./markdown-test.level";

export const titlesAndParagraphsGroup: LevelGroup = {
    name: "Titles and Paragraphs",
    levels: [WelcomePartyRecipe, markdownTest]
}