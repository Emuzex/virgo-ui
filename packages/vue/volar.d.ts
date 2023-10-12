declare module 'vue' {
  export interface GlobalComponents {
    ABtn: typeof import('@virgo-ui/vue')['ABtn']
    ASpinner: typeof import('@virgo-ui/vue')['ASpinner']
  }
}

export  {}