import {object, string} from "zod"

export const userSchema = object({
    username: string({required_error: "username is required"})
        .max(255, "username must be less than 255 characters"),
    email: string({required_error: "email is required"})
        .max(255, "email must be less than 255 characters")
        .email("invalid email address"),
    password: string({required_error: "password is required"})
})
export const passwordSchema = object({
    password: string({required_error: "password is required"})
})

export const emailSchema = object({
    email: string({required_error: "email is required"})
        .max(255, "email must be less than 255 characters")
        .email("invalid email address"),
})