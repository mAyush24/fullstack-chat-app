import jwt from 'jsonwebtoken';

// Generate a token and set it in a cookie
export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
        expiresIn: '7d',
    });
    res.cookie('jwt', token, {  
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        sameSite: 'strict',
        source: process.env.NODE_ENV !== 'development',
    });
    return token;
};