export const AUTH_CALLBACKS = {
    twitch: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/auth/twitch'
        : 'https://unify-web.vercel.app/api/auth/twitch'
}