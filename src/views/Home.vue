<template>
  <div class="q-pa-md row items-start q-gutter-md">
<!--
  	<q-card class="my-card">
  		<q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
	  	<div id="main">
			  <ul>
			    <li v-for="(post, index) in posts" v-bind:post="post">
			      <a @click="setDescription(post)">{{ post.title }}</a>
			    </li>
			  </ul>
			</div>
			<div id="item-description">{{ currentDescription }}</div>
		</q-card> -->

		<q-card class="my-card" id="example-1" v-for="(post, index) in posts" :key="index">
			<q-img :src="require('@/statics/img/donuts.png')" v-on:click="setDescription(post)">
				<div class="absolute-bottom">
	        <div class="text-h4">{{ post.title }}</div>
	        <div class="text-h5">{{ currentDescription }}</div>
	      </div>
			</q-img>
		</q-card>

    <q-card class="my-card" v-for="(post, index) in posts" :key="index" v-on:click="setDescription(post)">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            {{ post.title }}
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <!-- <div class="text-subtitle1">
          $・Italian, Cafe
        </div> -->
        <div class="text-caption text-grey">
          currentDescription
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card>

 <!--    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />

      <q-card-section>
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%);"
        />

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Cafe Basilico
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          $・Italian, Cafe
        </div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card> -->
  </div>
</template>

<script>
export default {
	el: '#example-1',
  data () {
    return {
      stars: 4,
      counter: 0,
      posts: [{
	      id: 1,
	      title: 'Post title 1',
	      description: 'Post description 1'
	  		}, {
	      id: 2,
	      title: 'Post title 2',
	      description: 'Post description 2'
	  		}, {
	      id: 3,
	      title: 'Post title 3',
	      description: 'Post description 3'
			  }
	  	],
	  currentDescription: null
    }
  },
  methods: {
    setDescription(item) {
      this.currentDescription = item.description;
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 100%
</style>
