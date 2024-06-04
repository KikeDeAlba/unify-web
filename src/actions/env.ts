'use server'

export const getEnv = (key: string) => {
    return process.env[key]
}