const Surreal = require('surrealdb.js').default;

const db = new Surreal('http://127.0.0.1:8000/rpc');

const login = async () => 
{
    return await db.signin({
        user: 'root',
        pass: 'root',
    });
}

const main = async () =>
{
    let token = await login();

    console.log(token);
}

main();