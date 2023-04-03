import http from "./http";

export const signUp = payload => http.post('/sign-up', payload)

export const signIn = payload => http.post('/sign-in', payload)