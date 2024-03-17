import { createTransition } from '@/composables/create-transition'

export const transitions = [
  'fade',
  'scale',
  'slide-y',
  'slide-y-reverse',
  'scroll-y',
  'scroll-y-reverse',
  'slide-x',
  'slide-x-reverse',
  'scroll-x',
  'scroll-x-reverse',
  'view-next',
  'view-previous',
] as const

export const VirgoFadeTransition = createTransition('fade')
export const VirgoScaleTransition = createTransition('scale')
export const VirgoSlideYTransition = createTransition('slide-y')
export const VirgoSlideYReverseTransition = createTransition('slide-y-reverse')
export const VirgoScrollYTransition = createTransition('scroll-y')
export const VirgoScrollYReverseTransition = createTransition('scroll-y-reverse')
export const VirgoSlideXTransition = createTransition('slide-x')
export const VirgoSlideXReverseTransition = createTransition('slide-x-reverse')
export const VirgoScrollXTransition = createTransition('scroll-x')
export const VirgoScrollXReverseTransition = createTransition('scroll-x-reverse')
export const VirgoViewNextTransition = createTransition('view-next')
export const VirgoViewPreviousTransition = createTransition('view-previous')

export type Transitions = typeof transitions[number]
