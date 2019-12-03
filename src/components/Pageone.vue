<template>
  <q-page class="flex flex-center">
    <!-- <img alt="Quasar logo" src="../statics/img/one.jpg" class="responsive"> -->
    <q-img
      :src="'./statics/img/avatar.jpg'"
      spinner-color="white"
      style="height: 140px; max-width: 150px"
    />

    <div class="q-pa-md" style="max-width: 300px">
      <q-input
        v-model="text"
        filled
        autogrow
      />
    </div>

    <div id="q-app">
      <div class="q-pa-md">
          <q-table
            title="Treats"
            :data="data"
            :columns="columns"
            row-key="name"
          >
            <template v-slot:body-cell-temp="props" >
              <!-- you can do anything you want here!!! -->
              <q-td class="text-right">
                <q-badge
                  style="height: 25px"
                  :color="getColor(props.value)"
                  :label="props.value"
                ></q-badge>
              </q-td>
            </template>
        </q-table>
        </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'pageone',
  methods: {
    getColor(val) {
      if (val === 'cold') return 'green'
      if (val === 'room') return 'yellow'
      if (val === 'warm') return 'red'
    }
  },
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Dessert (100g serving)',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'calories', align: 'center', label: 'Calories', field: 'calories', sortable: true },
        { name: 'fat', label: 'Fat (g)', field: 'fat', sortable: true },
        { name: 'carbs', label: 'Carbs (g)', field: 'carbs' },
        { name: 'protein', label: 'Protein (g)', field: 'protein' },
        { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        { name: 'temp', label: 'Serving Temp', field: 'temp', sortable: true}
      ],
      data: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%',
          temp: 'cold'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%',
          temp: 'room'
        }
      ]
    }
  }
}
</script>
