<template>
  <b-container>
    <b-row>
      <b-col>
        <h3>Personas Registradas</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit dictum libero,
          purus suscipit orci etiam cum curae imperdiet nibh dapibus, sed
          fringilla penatibus iaculis habitasse fermentum netus pharetra.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table striped hover :items="personas" :fields="fields">
          <template v-slot:cell(id)="data">
            <a :href="`/modificar/${data.item.id}`">Modificar</a>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <router-link to="/">
        <strong>
          <u>
            Ir a Registro
          </u>
        </strong>
      </router-link>
    </b-row>
  </b-container>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      personas: [],
      fields: [
        {
          key: "cedula",
          sortable: true
        },
        {
          key: "nombre",
          sortable: false
        },
        {
          key: "apellido",
          sortable: true
        },
        {
          key: "id",
          label: "modificar",
          sortable: false
        }
      ]
    };
  },
  created() {
    api.getPersonas().then(personas => (this.personas = personas));
  }
};
</script>
