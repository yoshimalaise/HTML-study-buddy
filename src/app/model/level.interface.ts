import { LevelDetails } from "./level-details.interface";

export interface Level {
    name: string;
    completed: boolean;
    load: () => LevelDetails ;
}