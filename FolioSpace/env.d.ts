/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly GITHUB_TOKEN: string;
    // add other env variables here if needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
