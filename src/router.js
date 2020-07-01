import Vue from "vue";
import Router from "vue-router";

import Error from "@/views/Error";
import Registro from "@/views/Registro";
import Personas from "@/views/Personas";
import Modificar from "@/views/Modificar";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/registro"
    },
    {
      path: "/registro",
      name: "registro",
      component: Registro
    },
    {
      path: "/personas",
      name: "personas",
      component: Personas
    },
    {
      path: "/modificar/:personaId",
      name: "modifcar",
      component: Modificar
    },
    {
      path: "*",
      name: "error",
      component: Error
    }
  ]
});
