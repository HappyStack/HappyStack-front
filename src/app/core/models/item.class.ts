import { IStringTMap } from '../interfaces'
import { ServingType } from '../enums'

export interface IItem {
    id: number
    name: string
    picture?: IStringTMap<string>
    dosage: string
    takenToday: boolean
    servingSize: number
    servingType: ServingType //ServingType
    timing: String
}

export class Item {
    id!: number
    name!: string
    picture?: IStringTMap<string>
    dosage?: string
    takenToday!: boolean
    servingSize!: number
    servingType!: ServingType //ServingType
    timing!: String //Date
}