const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const accessTokenSecret = '123456';
const refreshTokenSecret = '123456';

const users = [
    { id: 1, username: 'phuong2411', password: 'abc123' }
];

function generateAccessToken(user) {
    return jwt.sign(user, accessTokenSecret, { expiresIn: '20m' });
}

function generateRefreshToken(user) {
    return jwt.sign(user, refreshTokenSecret, { expiresIn: '10d' });
}

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: "Username hoặc password không chính xác" });
    }

    const accessToken = generateAccessToken({ id: user.id, username: user.username });
    const refreshToken = generateRefreshToken({ id: user.id, username: user.username });
    res.json({ accessToken, refreshToken });
});

app.listen(3003, () => {
    console.log('Server đang lắng nghe trên cổng 3003...');
});
