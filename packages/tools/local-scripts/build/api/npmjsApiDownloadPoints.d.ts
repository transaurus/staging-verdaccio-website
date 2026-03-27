import { Command } from 'clipanion';
export declare class FetchMonthlyDataCommand extends Command {
    static paths: string[][];
    execute(): Promise<void>;
}
export declare class FetchYearlyDataCommand extends Command {
    static paths: string[][];
    execute(): Promise<void>;
}
