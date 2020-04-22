<template lang="html">
	<div class="q-pa-md">
    <div class="row">
      <q-date v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
      <q-time v-model="model" mask="YYYY-MM-DD HH:mm" color="purple" />
    </div>
  </div>
</template>

<script>
export default {
	name: 'AppSetting',
	methods: {
	},
	data () {
		return {
			model: '2019-02-22 21:02'
		}
	}
}
</script>

<style lang="css" scoped>
</style>