export interface RegisterRequest {
    user: User;
}

interface User {
    username: string;
    email: string;
    password: string
}