/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_WEBSOCKET_API_URL: string;
  readonly PORT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
