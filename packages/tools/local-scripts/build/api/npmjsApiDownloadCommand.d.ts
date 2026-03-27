import { Command } from 'clipanion';
export declare class NpmjsApiDownloadCommand extends Command {
    static paths: string[][];
    execute(): Promise<void>;
}
