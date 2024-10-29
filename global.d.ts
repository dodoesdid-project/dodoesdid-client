// global.d.ts
export {};

declare global {
  interface Window {
    gtag: (
      type: string,
      action: string,
      params: { [key: string]: unknown },
    ) => void;
  }
}
