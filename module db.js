const pg = require("pg")

const client = new pg.Client({
    host: 'pgadmin.jvh.kfs.es',
    port: 5435,
    database: "curso",
    user: "postgres",
    password: "postgres"
})

async function query() {
    await client.connect();
    try {
        const r = await client.query("SELECT $1 AS campo1", ["hello"]);
    } catch (e) {
        return e
    }
    console.log(r.rows)
    await client.end();
}

query();