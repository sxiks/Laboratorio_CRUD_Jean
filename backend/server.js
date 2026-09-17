const app = require('./src/app.js');
const env = require('./src/config/env.js');
const seedAdmin = require('./src/startup/seedAdmin.js')

async function start() {
    await seedAdmin();

    app.listen(env.port, ()=>{
        console.log(`Laboratorio API CRUD ejecutandose en http:/localhost:${env.port}`);
    });
}

start();