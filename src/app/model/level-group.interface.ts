import { Level } from "./level.interface";

export interface LevelGroup {
    presentationMarkdown: string;
    name: string;
    levels: Level[];
}