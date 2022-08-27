export class Auth {
    emailId: string | undefined;
    password: string | undefined;
}

export class UserInfo {
    emailId!: string;
    username!: string;
    type!: string;
    token!: string;
    authorities!: Authority[];
}

export class Authority{
    authority!: string;
}