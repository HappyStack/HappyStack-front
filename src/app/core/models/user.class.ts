
export interface IUser {
    id: number
    firstname: string
    lastname: string
    ddn: Date
}

export class User {
    id!: number
    firstname!: string
    lastname!: string
    ddn!: Date
}