export const floatingConfig = {
	classes:{
		transitionBody: 'transform'
	}
}

export type floatingClassesValidKeys = keyof typeof floatingConfig.classes

export type floatingClasses = Record<floatingClassesValidKeys, string>
