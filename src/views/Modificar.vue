<template>
  <b-container>
    <b-alert
      :show="dismissCountDown"
      dismissible
      :variant="alertType"
      :dismiss-count-down="dismissCountSeconts"
      @dismissed="dismissCountDown = 0"
    >
      <p>{{ messageAlert }}</p>
    </b-alert>
    <b-row>
      <b-col md="6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit dictum libero,
          purus suscipit orci etiam cum curae imperdiet nibh dapibus, sed
          fringilla penatibus iaculis habitasse fermentum netus pharetra.
        </p>
        <div>
          <b-form @submit="onSubmit">
            <b-form-group
              id="id_label_nombre"
              label="Nombre:"
              label-for="Nombre"
            >
              <b-form-input
                id="id_nombre"
                v-model="persona.nombre"
                type="text"
                required
                placeholder="Ingrese su nombre"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="id_label_apellido"
              label="Apeellido:"
              label-for="Apeellido"
            >
              <b-form-input
                id="id_apellido"
                v-model="persona.apellido"
                type="text"
                required
                placeholder="Ingrese sus apellidos"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="id_label_cedula"
              label="Cédula ciudadanía:"
              label-for="Cédula"
            >
              <b-form-input
                id="id_cedula"
                v-model="persona.cedula"
                type="number"
                required
                disabled
                placeholder="Ingrese su cédula de ciudadanía"
              ></b-form-input>
            </b-form-group>
            <br />
            <router-link to="/personas">
              <strong>
                <u>
                  Ver Todos los Registros
                </u>
              </strong>
            </router-link>

            <b-row>
              <b-col sm="6">
                <br />
                <b-button block class="button-naranja" type="submit">
                  Actualizar Datos
                </b-button>
              </b-col>
              <b-col sm="6">
                <br />
                <b-button
                  block
                  class="button-naranja"
                  type="button"
                  v-on:click="borrarPersona"
                >
                  Borrar Usuario
                </b-button>
              </b-col>
            </b-row>
          </b-form>
        </div>
      </b-col>
      <b-col class="col-image" md="6"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import api from "@/api";

export default {
  name: "registro_persona",
  data() {
    return {
      alertType: "danger",
      messageAlert: "",
      dismissCountDown: 0,
      dismissCountSeconts: 10,
      persona: {
        id: 0,
        nombre: "",
        apellido: "",
        cedula: ""
      }
    };
  },
  methods: {
    showAlert(alertType, messageAlert) {
      this.alertType = alertType;
      this.messageAlert = messageAlert;
      this.dismissCountDown = this.dismissCountSeconts;
    },
    successRegister(persona) {
      this.showAlert(
        "success",
        `Se Actualizo ${persona.nombre} ${persona.apellido} con exito.`
      );
    },
    successBorrarPersona() {
      this.showAlert("success", `Se Borro con exito.`);
      this.persona = {
        id: 0,
        nombre: "",
        apellido: "",
        cedula: ""
      };
    },
    alertPersonIdNoExiste(error) {
      console.log(error);
      alert(
        "La persona con id: " +
          this.$route.params.personaId +
          " no se encuentra"
      );
      this.$router.push("/personas");
    },
    onSubmit(evt) {
      evt.preventDefault();
      api
        .actualizarPersona(this.persona.id, this.persona)
        .then(response => this.successRegister(response))
        .catch(error =>
          this.showAlert("danger", "Error al Conectar con el servidor " + error)
        );
    },
    borrarPersona() {
      api.borrarPersonaById(this.persona.id);
    }
  },
  created() {
    api
      .getPersonasById(this.$route.params.personaId)
      .catch(error => this.alertPersonIdNoExiste(error))
      .then(persona => (this.persona = persona));
  }
};
</script>

<style scoped>
.col-image {
  border-left-style: solid;
  border-left-color: rgb(86, 89, 96, 0.37);
  border-left-width: 1px;
}
</style>
