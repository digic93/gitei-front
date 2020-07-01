const url = "http://localhost:3000";

// traer todas las personas
function getPersonas() {
  return fetch(`${url}/personas`)
    .then(res => res.json())
    .then(res => res);
}

// traer una persona por personaId
function getPersonasById(personaId) {
  return fetch(`${url}/personas/${personaId}`)
    .then(function(response) {
      if (!response.ok) {
        throw new Error(response.json());
      } else {
        return response.json();
      }
    })
    .then(res => res);
}

// crear una persona
function registrarPersona(persona) {
  return fetch(`${url}/personas`, {
    method: "post",
    body: JSON.stringify(persona),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => res);
}

// Actualizar persona por personaId
function actualizarPersona(personaId, persona) {
  return fetch(`${url}/personas/${personaId}`, {
    method: "put",
    body: JSON.stringify(persona),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .then(res => res);
}

// Borar persona por personaId
function borrarPersonaById(personaId) {
  return fetch(`${url}/personas/${personaId}`, { method: "delete" })
    .then(res => res.json())
    .then(res => res);
}

// borrar todas las personas creadas
function borrarPersonas() {
  return fetch(`${url}/personas`, { method: "delete" })
    .then(res => res.json())
    .then(res => res);
}

export default {
  getPersonas,
  getPersonasById,
  registrarPersona,
  actualizarPersona,
  borrarPersonaById,
  borrarPersonas
};
