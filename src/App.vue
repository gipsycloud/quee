<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          App
        </q-toolbar-title>

        <div>App v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
    <Menu />
    </q-drawer>

    <q-page-container>
      <Tab />
      <HelloWorld />
    </q-page-container>
  </q-layout>
</template>

<script>
import Menu from './components/Menu.vue'
import HelloWorld from './components/HelloWorld.vue'
import Tab from './components/Tabs.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Menu,
    HelloWorld,
    Tab

  },

  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  }
}
</script>

<style>
</style>
