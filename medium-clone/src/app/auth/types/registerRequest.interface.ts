export interface RegisterRequest {
    user: User;
}

export interface User {
    username: string;
    email: string;
    password: string
}