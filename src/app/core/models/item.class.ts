import { IStringTMap } from '../interfaces'
import { ServingType } from '../enums'

export class Item {
    id!: number
    name!: string
    picture?: IStringTMap<string>
    dosage?: string
    takenToday!: boolean
    servingSize!: number
    servingType!: String //ServingType
    timing!: String //Date
}