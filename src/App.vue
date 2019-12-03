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

    <Tab />
    <!-- <Pagetwo /> -->
    <div class="q-pa-md q-gutter-sm">
      <q-avatar color="red" text-color="white" icon="directions" />
      <q-avatar color="primary" text-color="white">J</q-avatar>
      <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
      <q-avatar size="24px" color="orange">J</q-avatar>
      <q-avatar>
        <img src="`/public/img/icons/one.jpg`" >
      </q-avatar>
    </div>
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-separator dark inset />

      <q-card-section>
        {{ lorem }}
      </q-card-section>
    </q-card>

    <div class="q-pa-md" style="max-width: 300px">
      <div class="q-gutter-md">
        <q-select v-model="model" :options="options" label="Standard" />
      </div>
    </div>

    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script>
import { date } from 'quasar'
import Menu from './components/Menu.vue'
// import Pagetwo from './components/Pagetwo.vue'
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
    // Pagetwo,
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
