export interface HintScreenViewModel {
    generalComment: string,
    requiredElements: ElementHint[];
}

export interface ElementHint {
    name: string;
    description: string;
    link: string;
}