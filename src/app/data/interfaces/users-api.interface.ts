export interface IUser {
    id: string;
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: string;
    created_at: string;
    updated_at: string;
    access_token?: string;
}
