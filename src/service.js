const data = require('./MOCK_DATA.json'); // Importamos los datos

module.exports = {
  getUsers: () => data, // Exportamos la función getUsers

  getUser: (id) => {
    let identificador = Number(id); // Convertimos el id a número
    let user = data.filter((usuario) => usuario.id === identificador)[0];
    return user;
  },

  createUser: (newUser) => {
    let User = {
      id: data.length + 1,
      ...newUser,
    }
    data.push(User); // Agregamos el usuario
    return User; // Retornamos el usuario
  },

  updateUser: (id, first_name, last_name, email) => {
    let idUser = Number(id);
    let User = data.find((usuario) => usuario.id === idUser);
    let Update = {
      first_name,
      last_name,
      email,
    }
    Object.assign(User, Update); // Actualizamos el usuario
    return User; // Retornamos el usuario
  },

  deleteUser: (id) => {
    let idUser = Number(id);
    let User = data.find((usuario) => usuario.id === idUser);
    data.splice(data.indexof(User),1); // Eliminamos el usuario
  }
}