import type { CSSEntries, Preset } from '@unocss/core'

const variants: Preset['variants'] = [
  // `em:` variant converts rem unit into em
	(matcher: string) => {
		if (!matcher.startsWith('i:')) return matcher

		return {
			// slice `i:` prefix and passed to the next variants and rules
			matcher: matcher.slice(2),
			selector: (s: string) => `${s} > i`
		}
	},
	(matcher: string) => {
		if (!matcher.startsWith('em:'))
			return matcher

		return {
			// slice `em:` prefix and passed to the next variants and rules
			matcher: matcher.slice(3),
			body: (body: CSSEntries) => {
				body.forEach(v => {
					// v[1] can also be number
					if (typeof v[1] === 'string') {
						if (v[1].endsWith('rem'))
							v[1] = `${v[1].slice(0, -3)}em`

						// Handle spacing variant usage\
						else if (v[1].endsWith('rem * var(--virgo-spacing, 1))'))
							v[1] = `${v[1].slice(0, -26)}em * var(--virgo-spacing, 1))`
					}
				})

				return body
			},
		}
	},

	// `spacing:` variant adds --virgo-spacing CSS var
	(matcher: string) => {
		if (!matcher.startsWith('spacing:'))
			return matcher

		return {
			// slice `spacing:` prefix and passed to the next variants and rules
			matcher: matcher.slice(8),
			body: (body: CSSEntries) => {
				body.forEach(v => {
					v[1] = `calc(${v[1]} * var(--virgo-spacing, 1))`
				})

				return body
			},
		}
	}
]

export { variants }
