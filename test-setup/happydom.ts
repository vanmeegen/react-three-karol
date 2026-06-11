import { GlobalRegistrator } from "@happy-dom/global-registrator";

GlobalRegistrator.register();

// let React act() know it is running in a test environment
(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;
