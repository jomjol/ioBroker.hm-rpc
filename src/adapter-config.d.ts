// This file extends the AdapterConfig type from "@types/iobroker"

// Augment the globally declared type ioBroker.AdapterConfig
declare global {
    namespace ioBroker {
        interface AdapterConfig {
            homematicAddress: string;
            adapterAddress: string;
            homematicPort: string;
            callbackAddress: string;
            port: string;
            type: string;
            daemon: string;
            checkInitInterval: number;
            reconnectInterval: number;
            forceReInit: boolean;
            username: string;
            password: string;
            useHttps: boolean;
            dontDelete: boolean;
        }
    }
}

// this is required so the above AdapterConfig is found by TypeScript / type checking
export {};
