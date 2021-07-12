export interface Content {
    config: ContentConfig;
}

export interface ContentConfig {
    name: string;
    isEligible?: boolean;
    role?: string;
    permissions?: string[];
    data?: any;
}