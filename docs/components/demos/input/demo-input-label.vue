<template>
	<div class="grid-row sm:grid-cols-2 place-items-stretch">
		<virgo-input
			label="Email"
			type="email"
			value="user@domain.com"
		/>

		<!-- 👉 Custom label -->
		<virgo-input
			id="form-x"
			value="user@domain.com"
			type="email"
		>
			<template #label>
				<label for="virgo-input-form-x">
					<span>Awesome </span>
					<span class="text-red">*</span>
				</label>
			</template>
		</virgo-input>
	</div>
</template>
