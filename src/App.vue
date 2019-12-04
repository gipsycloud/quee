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

        <div>{{ todaysDate }} | v- {{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <Menu />
    </q-drawer>
    <!-- <Pagetwo /> -->
    <q-layout>
      <q-page-container>
        <router-view />
        <Data />
        <Tab />
      </q-page-container>
    </q-layout>
  </q-layout>
</template>

<script>
import { date } from 'quasar'
import Data from './components/Data.vue'
import Menu from './components/layout/drawer/Menu.vue'
import Tab from './components/Tabs.vue'

export default {
  name: 'LayoutDefault',
  methods: {
    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    trigger () {
      const bar = this.$refs.bar

      bar.start()

      this.timer = setTimeout(() => {
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  },
  components: {
    Menu,
    Data,
    Tab
  },
  data () {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop
      leftDrawerOpen: false
    }
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'YYYY-MM-DD')
    }
  }
}
</script>

  <style lang="css" scoped>

  </style>
