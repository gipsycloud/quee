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
        <q-toolbar-title>App</q-toolbar-title>
        <q-tabs
          v-model="tab"
          class=""
        >
          <q-tab name="mails" icon="mail" label="" >
            <q-badge color="primary" text-color="white" floating>2</q-badge>
          </q-tab>
        </q-tabs>
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
      <router-view />
    </q-page-container>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="accent" ></q-btn>
    </q-page-sticky>


    <div class="fixed-bottom text-center light text-bold">
      <Tab />
    </div>

  </q-layout>
</template>

<script>
import { date } from 'quasar'
import Menu from './components/layout/drawer/Menu.vue'
import Tab from './components/layout/drawer/Tabs.vue'

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
