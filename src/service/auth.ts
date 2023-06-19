export type BasicUser = {
    username: string;
    email: string;
};

export type SignupUser = BasicUser & { password: string };
