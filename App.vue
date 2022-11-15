<template>
  <div id="app">
    <div class="container">
      <h1 class="mb-4">List Contact</h1>
      <hr>
      <!-- //-------------------------------// -->
      <customer-table v-bind:customers='customers' @edit-customer="editCustomer" @delete-customer="deleteCustomer"/>
      <h1 class="mb-4">Form Input Contact</h1>
      <hr>
      <div class="" id="collapseExample">
        <div class="card card-body">
          <h2>Input Data Pelanggan</h2>
          <hr>
          <customer-form @add-customer="addCustomer"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import CustomerTable from '@/components/CustomerTable.vue'
import CustomerForm from '@/components/CustomerForm.vue'

export default {
  name: 'App',
  components: {
    CustomerTable,
    CustomerForm, 
  },
  data() {
    return {
      customers: [
        {
          id: 1,
          name: 'Bagus',
          nohp: '081298189990',
          email: 'bagusa622@mail.com',
          address: 'Jl.Kenanga',
        },
        {
          id: 2,
          name: 'Shine',
          nohp: '089123412312',
          email: 'sshiinee23@mail.com',
          address: 'Jl.Mangga',
        },
        {
          id: 3,
          name: 'Selena',
          nohp: '082989012981',
          email: 'selena13@mail.com',
          address: 'Jl.Mataram',
        },
      ],
    }
  },
  methods: {
    addCustomer(customer) {
      this.customers.push(customer);
    },
    editCustomer(id, data) {
      this.customers = this.customers.map(function (customer) { 
        return customer.id === id ? data : customer;
      });
    },
    deleteCustomer(id) {
      this.customers = this.customers.filter(function (customer) { 
        return customer.id !== id;
      });
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>