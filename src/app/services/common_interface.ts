export interface Feature {
    title?: string;
    imgUrl?: string;
    routerLink?: string;
    key?: string;
}

export interface MainFeature {
    mainNavData?: Feature[];
    featuresData?: Feature[];
}