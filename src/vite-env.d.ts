/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly APP_TITLE: string;
  readonly VITE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
