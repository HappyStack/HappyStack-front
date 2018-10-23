import { Item } from './item.class'

export interface IStack {
    id: number
    name: string
    items: Item[]
}

export class Stack {
    id!: number
    name!: string
    items!: Item[]
}
  