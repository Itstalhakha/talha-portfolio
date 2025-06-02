const config = {
  API_URL: process.env.NODE_ENV === 'production'
    ? 'https://talha-portfolio.vercel.app/api'
    : 'http://localhost:5000/api',
  AUTH_TOKEN_KEY: 'token',
  USER_DATA_KEY: 'user'
};

export default config; 