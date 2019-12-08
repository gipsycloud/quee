<template lang="html">
	<div class="q-pa-lg">
		<div class="q-gutter-xl" style="">
			<q-input v-model="text" label="Profile" />
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
