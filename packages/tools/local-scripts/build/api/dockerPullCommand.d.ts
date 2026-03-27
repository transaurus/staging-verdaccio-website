import { Command } from 'clipanion';
export declare class DockerPullCommand extends Command {
    static paths: string[][];
    execute(): Promise<void>;
}
