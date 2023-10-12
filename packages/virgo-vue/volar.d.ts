declare module 'vue' {
  export interface GlobalComponents {
    ABtn: typeof import('virgo-vue')['ABtn']
    ASpinner: typeof import('virgo-vue')['ASpinner']
  }
}

export  {}