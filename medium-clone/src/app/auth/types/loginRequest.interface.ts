export interface LoginRequest {
    user: User;
}

interface User {
    email: string;
    password: string
}