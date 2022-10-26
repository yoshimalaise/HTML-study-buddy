import { LevelGroup } from "src/app/model/level-group.interface";
import { termsOfServiceLevel } from "./terms-of-service.level";


const presentationMarkdown = `

# Inputs

---

`;

export const inputsGroup: LevelGroup = {
    name: "Inputs",
    levels: [termsOfServiceLevel],
    presentationMarkdown
}