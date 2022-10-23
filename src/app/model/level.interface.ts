export interface Level {
    name: string;
    id: number; 
    completed: boolean;
    load: () => void ;
}