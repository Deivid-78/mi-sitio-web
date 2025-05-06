fetch('https://midominio.com/api', {
  method: 'POST', // o GET, PUT, DELETE, etc.
  body: datos, // puede ser un objeto JSON, un FormData, etc.
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
.then(response => response.json()) // convierte la respuesta en JSON
.then(data => {
  console.log("Respuesta del servidor:", data); // procesamos la respuesta
})
.catch(error => {
  console.error("Ocurrió un error:", error); // manejo de errores
});
