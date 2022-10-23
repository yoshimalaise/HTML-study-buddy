import { LevelGroup } from "../model/level-group.interface";

export const allLevelGroups:  LevelGroup[] = [
    {
        name: "titles and paragraphs",
        levels: [
            {
                id: 1,
                name: "Welcome drinks",
                completed: false,
                load: () => {}
            },
            {
                id: 2,
                name: "Welcome drinks",
                completed: false,
                load: () => {}
            }
        ]
    },
    {
        name: "lists",
        levels: [
            {
                id: 3,
                name: "Welcome drinks",
                completed: false,
                load: () => {}
            },
            {
                id: 4,
                name: "Welcome drinks",
                completed: false,
                load: () => {}
            }
        ]
    }
];