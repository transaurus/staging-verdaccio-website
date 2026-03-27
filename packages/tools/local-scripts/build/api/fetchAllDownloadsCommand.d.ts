import { Command } from 'clipanion';
export declare class FetchAllDownloadsCommand extends Command {
    static paths: string[][];
    execute(): Promise<void>;
}
