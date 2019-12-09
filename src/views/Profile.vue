<template lang="html">
	<!-- <div class="q-pa-lg"> -->
	<div class="">
		<div id="profile">
			<div class="column items-center">
	      <img src="@/statics/img/avatar.svg" class="avatar">
	    </div>
	    <hr>
	    <!-- <div class="column items-center"> -->
	<!--     </div> -->
      <!-- <div id="user-actions"> -->
        <!-- <q-btn
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
        /> -->
        <!-- <button class="bordered blue small" ><i>person</i></button>
        <button class="bordered blue small" ><i>lock</i></button>
        <button class="bordered blue small" @click='logOut'><i>exit_to_app</i></button> -->
     <!-- </div> -->
    </div>
    <div id="user-name">
	  	<span class="text-white"> Aung Aung </span>
	  </div>

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
