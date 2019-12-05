<template>
  <q-list>
    <div id="profile">
      <img src="@/statics/img/avatar.svg" class="avatar">
      <div id="user-name">
        <span class="text-white"> Aung Aung </span>
        <hr>
      </div>
      <div id="user-actions">
        <q-btn
          size="7px"
          color="primary"
          label="Text"
        />
        <q-btn
          size="7px"
          color="primary"
          label="Text"
        />
        <q-btn
          size="7px"
          color="primary"
          label="Exit"
          @click='logout'
        />
        <!-- <button class="bordered blue small" ><i>person</i></button>
        <button class="bordered blue small" ><i>lock</i></button>
        <button class="bordered blue small" @click='logOut'><i>exit_to_app</i></button> -->
     </div>
    </div>

    <q-item clickable tag="a" target="" href="/setting">
      <q-item-section avatar>
        <q-icon name="settings" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Setting</q-item-label>
        <!-- <q-item-label caption>quasar.dev</q-item-label> -->
      </q-item-section>
    </q-item>
    <q-item clickable tag="a" target="_blank" href="https://github.com/quasarframework/">
      <q-item-section avatar>
        <q-icon name="code" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Github</q-item-label>
        <!-- <q-item-label caption>github.com/quasarframework</q-item-label> -->
      </q-item-section>
    </q-item>
    <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
      <q-item-section avatar>
        <q-icon name="chat" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Discord Chat Channel</q-item-label>
        <!-- <q-item-label caption>chat.quasar.dev</q-item-label> -->
      </q-item-section>
    </q-item>
    <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
      <q-item-section avatar>
        <q-icon name="forum" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Forum</q-item-label>
        <!-- <q-item-label caption>forum.quasar.dev</q-item-label> -->
      </q-item-section>
    </q-item>
    <q-item clickable tag="a" target="_blank" href="https://twitter.com/quasarframework">
      <q-item-section avatar>
        <q-icon name="rss_feed" />
      </q-item-section>
      <q-item-section>
        <q-item-label>Twitter</q-item-label>
        <!-- <q-item-label caption>@quasarframework</q-item-label> -->
      </q-item-section>
    </q-item>

    <div class="fixed-bottom text-center light text-italic">
      version - {{ $q.version }}
    </div>
  </q-list>
</template>

<script>
export default {

  name: 'menu',
  data () {
    return {
      sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
      icons: [
        'navigation',
        'add_a_photo',
        'camera',
        'camera_font',
        'my_location'
      ]
    }
  },
  methods: {
    logout() {

    }
  }
}
</script>

<style scoped>
  .fixed-bottom {
    margin-bottom: 1%;
  }

  .fixed-bottom a img {
    width: 25px;
    height: 25px;
  }
  .avatar{
    /* padding: 20px; */
    margin: 17px;
  }
  #profile {
    height: 130px;
    background-color: #009688;
  }
  #user-name {
    left: 90px;
    bottom: 77px;
    position: relative;
    width: 159px;
  }
  #user-actions {
    left: 90px;
    bottom: 71px;
    position: relative;
    width: 171px;
  }
  #menu-collapse {
    margin-top: 5%;
  }
</style>
