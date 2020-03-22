<template>
  <q-page class="bg-light-blue window-height window-width row justify-center items-center">
    <q-card inline style="width: 500px">
      <q-card-media>
        <!-- <img src="~assets/donuts.png"> -->
        <img src="@/assets/donuts.png" class="">
      </q-card-media>
      <q-card-title>
        Cafe Basilico
        <q-rating slot="subtitle" v-model="stars" :max="5" />
        <div slot="right" class="row items-center">
          <q-icon name="place" /> 250 ft
        </div>
      </q-card-title>
      <q-card-main>
        <p>$・Italian, Cafe</p>
        <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat round small><q-icon name="event" /></q-btn>
        <q-btn flat>5:30PM</q-btn>
        <q-btn flat>7:30PM</q-btn>
        <q-btn flat>9:00PM</q-btn>
        <q-btn flat color="primary">Reserve</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style>
.q-card {
  width: 360px;
}
</style>
