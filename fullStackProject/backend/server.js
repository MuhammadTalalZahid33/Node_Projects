import express from 'express'

const app = express();
const users = [
    { id: 1, name: 'Alice', age: 30 },
    { id: 2, name: 'Bob', age: 24 },
    { id: 3, name: 'Charlie', age: 35 }
];

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});