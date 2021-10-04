import { object, string } from "yup";

export const createUserSchema = object({
    body: object({
        name: string().required("Name is required"),
        password: string().required("password is required")
            .min(6, "password is too short, should be at least 6 characters")
            .matches(/^[a-zA-Z0-9_.-]*$/, "Password can only contain Latin letters."),


        email: string()
            .email("Must be a valid email")
            .required("Email is required")

    })
});