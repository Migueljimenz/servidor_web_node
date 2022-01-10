const express = require('express'); // Importamos express
const Service = require('./src/service'); // Importamos el servicio
const app = express(); // Creamos una instancia de express
const PORT = 3000; // Puerto en el que escucharemos

app.use(express.json()); // Permite que el servidor entienda los datos en formato JSON

app.get('/', (req, res) => { // Definimos la ruta 
  res.json({
    messaje:'Lista de usuarios',
    body: Service.getUsers(),
  });
});

app.get('/:id', (req, res) => { 
  let { params: { id } } = req; 
  let User = Service.getUser(id); 
  res.json({
    mensaje: `Usuario ${id}`,
    body: User,
  })
});

app.post('/', (req, res) => {
  let { body: newUser } = req; 
  let User = Service.createUser(newUser); 
  res.json({
    mensaje: 'Usuario creado',
    body: User,
  })
});

app.put('/:id', (req, res) => {
  let { params: { id }, body: { first_name, last_name, email} } = req;
  let User = Service.updateUser(id, first_name, last_name, email);
  res.json({
    mensaje: `Usuario ${id} actualizado`,
    body: User,
  })
});

app.delete('/:id', (req, res) => {
  let { params: { id } } = req;
  let User = Service.deleteUser(id);
  res.json({
    mensaje: `Usuario ${id} eliminado`,
    body: User,
  })
});

app.listen(PORT, () => { // Iniciamos el servidor
  console.log(`servidor corriendo en http://localhost:${PORT}`);
});