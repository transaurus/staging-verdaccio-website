export interface MonthlyDownloadEntry {
    downloads: number;
    start: string;
    end: string;
    package: string;
}
export interface DockerPullEntry {
    pullCount: number;
    ipCount: number;
}
export interface NpmjsDownloadsEntry {
    [version: string]: number;
}
export interface YearlyDownloadsEntry {
    [year: string]: number;
}
export interface TranslationProgress {
    translationProgress: number;
    approvalProgress: number;
}
export interface ProgressLangEntry {
    [language: string]: TranslationProgress;
}
export declare const getISODateOnly: () => string;
export declare function fetchMonthlyData(): Promise<void>;
export declare function fetchYearlyData(): Promise<void>;
export declare function fetchNpmjsApiDownloadsWeekly(): Promise<void>;
export declare function dockerPullWeekly(): Promise<void>;
export interface EcosystemDownloadsEntry {
    [packageName: string]: {
        [month: string]: number;
    };
}
export declare function fetchEcosystemDownloads(): Promise<void>;
export declare function fetchAllDownloads(): Promise<void>;
export declare function fetchTranslationsAPI(): Promise<void>;
