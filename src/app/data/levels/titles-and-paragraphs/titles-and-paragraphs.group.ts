import { LevelGroup } from "src/app/model/level-group.interface";
import { WelcomePartyRecipe } from "./welcome-party.recipe";
import { employeeManual } from "./employee-manual.level";
import { aboutWiseLevel } from "./about-wise.level";

export const titlesAndParagraphsGroup: LevelGroup = {
    name: "Titles and Paragraphs",
    levels: [WelcomePartyRecipe, employeeManual, aboutWiseLevel],
    presentationMarkdown: "# hello"
}