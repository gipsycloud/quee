<template lang="html">
	<div class="q-pa-lg">
		<div class="q-gutter-xl" style="">
			<q-input v-model="text" label="Name" required minlength="4" maxlength="8" size="10" />
		</div>

		<div class="q-gutter-xl" style="">
			<q-input v-model="text" label="Phone Number" required minlength="4" maxlength="8" size="10" />
		</div>

		<div class="q-gutter-xl" style="">
			<q-input v-model="text" label="Country" required minlength="4" maxlength="8" size="10" />
		</div>

		<div class="q-gutter-xl" style="">
			<q-input v-model="text" label="Address" required minlength="4" maxlength="8" size="10" />
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			text: ''
		}
	}
}
</script>

<style lang="css" scoped>
</style>
