import { LevelGroup } from "src/app/model/level-group.interface";
import { aboutOpenHPSlevel } from "./about-openhps.level";
import { photoBookLevel } from "./photo-book.level";

export const linksAndMediaGroup: LevelGroup = {
    name: "Links and Media",
    levels: [aboutOpenHPSlevel, photoBookLevel]
}