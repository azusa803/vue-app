//CustomerTable.vue
<template>
  <table class="table table-striped">
  <thead class="thead-light">
    <tr> 
      <th scope="col">Nama</th>
      <th scope="col">NoHP</th>
      <th scope="col">Email</th>  
      <th scope="col">Alamat</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="customer in customers" :key="customer.id"> 
        <template v-if="customerId === customer.id">
        <td class="sm-4">
            <label for="name" class="font-weight-bold">Nama:</label>
            <div> 
                <input type="text" v-model="customer.name" class="form-control" />
            </div>
        </td>
        <td>
            <label for="name" class="font-weight-bold">NoHP:</label>
            <div> 
                <input type="text" v-model="customer.nohp" class="form-control" />
            </div>
        </td>
        <td>
            <label for="name" class="font-weight-bold">Email:</label>
            <div> 
                <input type="text" v-model="customer.email" class="form-control" />
            </div>
        </td>
        <td>
            <label for="name" class="font-weight-bold">Address:</label>
            <div> 
                <input type="text" v-model="customer.address" class="form-control" />
            </div>
        </td>
        <td>
            <button class="btn btn-success m-2" @click="saveEdit(customer)">Save</button>
            <button class="btn btn-danger" @click="cancelEdit(customer)" >Cancel</button>
        </td>
        </template>
        <template v-else>
            <td>{{customer.name}}</td>
            <td>{{customer.nohp}}</td>
            <td>{{customer.email}}</td>
            <td>{{customer.address}}</td>
            <td>
                <div class="text-center">
                    <button class="btn btn-primary mr-2" @click="editCustomer(customer)">Edit</button>
                    <button class="btn btn-danger" @click="deleteCustomer(customer.id)">Hapus</button> 
                </div>
            </td>
        </template>
    </tr>  
  </tbody>
</table>
</template>


<script>
import swal from 'sweetalert';

  export default {
    name: 'customer-table',
    props: {
        customers: Array,
    },
    data() {
        return {
            customerId: null,
        }
    },
    methods: {
        editCustomer(customer) {
            this.data = Object.assign({}, customer)
            this.customerId = customer.id
            // console.log(this.data);
        },
        saveEdit(customer) {
            let id = this.data.id
            this.$emit('edit-customer', id, customer)
            this.customerId = null
            swal('Updated','Berhasil Update Data','warning')
        },
        cancelEdit(customer) {
            Object.assign(customer, this.data)
            this.customerId = null;
            swal('Canceled','Update Data Canceled','warning')
        // console.log(this.customerId);
        },
        deleteCustomer(id){
            this.$emit('delete-customer', id) 
            swal('Deleted','The Data has been Deleted','warning') 
        }
    }
  }
</script>

<style scoped>

</style>