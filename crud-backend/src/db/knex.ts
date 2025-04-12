const knex = require('knex')({
    client: 'postgres',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'postgres',
      password: 'al280622',
      database: 'tareas_db',
    },
  });

