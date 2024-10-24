interface Account {
    id: number,
    username: string,
    email: string,
    firstName: string,
    lastName: string,
    gender: string,
    image: string,
    token: string,
    refreshToken: string
}


interface LoginPayload {
    username: string;
    password: string;
}