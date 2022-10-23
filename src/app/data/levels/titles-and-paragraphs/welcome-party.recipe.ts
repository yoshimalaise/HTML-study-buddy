import { Level } from "src/app/model/level.interface";

export const WelcomePartyRecipe: Level = {
    name: "Welcome Party",
    completed: false,
    load: () => {
        return {
            goalHTML: "<h1> Welcome Party </h1>"
        }
    }
}