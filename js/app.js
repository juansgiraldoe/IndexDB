document.addEventListener('DOMContentLoaded', ()=>{
  crmDB();
})

function crmDB() {
  //Crear base de datos version 1.0
  let crmDB = window.indexedDB.open('crm', 1);
  //Si hay error.
  crmDB.onerror = function () {
    console.log('Hubo un error.');
  };
  //Si se creo bien.
  crmDB.onsuccess = function () {
    console.log('Base de datos creada.');
  };
  //Configuracion de la base de datos.
  crmDB.onupgradeneeded = function (e) {
    const db = e.target.result;
    const objecStore = db.createObjectStore('crm', {
      keyPath: 'crm',
      autoIncrement: true,
    });
    //Definir las columnas.
    objecStore.createIndex('nombre', 'nombre', {unique: false});
    objecStore.createIndex('email', 'email', {unique: true});
    objecStore.createIndex('telefono', 'telefono', {unique: false});
    console.log('Columnas creadas.');
  };
};