<template>
  <div>
    <h1>Admin Page</h1>
    <a style="padding-right: 5px;" href="/admin/services">Services</a>
    <a style="padding-right: 5px;" href="/admin/employees">Employees</a>
    <a style="padding-right: 5px;" href="/admin/contacts">Contacts</a>
    <a style="padding-right: 5px;" href="/admin/inbox">Inbox</a>
    <a href="/addservice" type="button">Add New Service</a>
    <br>
    <table>
      <thead>
        <th>Service id</th>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
      </thead>
      <tbody>
        <tr v-for="service in services" :key="service.id">
          <td>{{ service.id }}</td>
          <td>{{ service.name}}</td>
          <td>{{ service.description }}</td>
          <td>{{ service.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'AdminServices',
  data() {
    return {
      services: [],
    };
  },

  created() {
    this.getServices();
  },

  methods: {
    async getServices() {
      try {
        const response = await axios.get("http://localhost:3000/services");
        this.services = response.data;
        console.log(this.services);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
