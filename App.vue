<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav me-auto mb-2 mb-md-0">
              <li class="nav-item">
                <router-link class="nav-link" 
                onclick="document.getElementById('list').style.visibility='visible';
                document.getElementById('list').style.display='block';
                document.getElementById('add').style.visibility='none';
                document.getElementById('add').style.display='none';">
                LIST CONTACT
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link"
                onclick="document.getElementById('add').style.visibility='visible';
                document.getElementById('add').style.display='block';
                document.getElementById('list').style.visibility='none';
                document.getElementById('list').style.display='none';">
                ADD CONTACT</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view> </router-view>
      <div id="list">
        <h1 class="mb-4">List Contact</h1>
        <hr>
        <!-- //-------------------------------// -->
        <customer-table v-bind:customers='customers' @edit-customer="editCustomer" @delete-customer="deleteCustomer"/>
      </div>
      <div id="add" class="block">
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
  </div>
</template>

<!--  <script src="unpkg.com/vue"></script> -->
<script>

// const routes = [
//   {path:'/', component: CustomerTable},
//   {path:'/add', component: CustomerForm}
// ]
// const router = new VueRouter({
//   routes
// })
// new Vue({
//   el: "#app",
//   router
// });

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
        {
          id: 4,
          name: 'Mell',
          nohp: '089998213828',
          email: 'mell22@mail.com',
          address: 'Jl.Linggarjati',
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
.block {
  display: none;
  visibility: hidden;
}
</style>