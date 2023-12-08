import { System } from "./system";
export declare namespace Constants {
    enum Messages {
        test = "hello"
    }
    enum MessageCode {
        error = -1,
        unknown = 0,
        success = 1,
        confirmed = 2
    }
}
export declare const Defaults: {
    router: number;
    logLevel: System.LogLevel;
    external: string;
    autoDefineIp: boolean;
    localDiscovery: boolean;
    localDiscoveryPort: boolean;
    userName: string;
    nodeName: string;
};
