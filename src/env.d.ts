interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly NODE_ENV: string;
  readonly NG_APP_API_URL: string;
  readonly NG_APP_GET_ALL: string;
  [key: string]: any;
}
