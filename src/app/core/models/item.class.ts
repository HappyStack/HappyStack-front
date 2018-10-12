import { IStringTMap } from '../interfaces'
import { ServingType } from '../enums'

export default class Item {
    id!: number
    name!: string
    picture?: IStringTMap<string>
    dosage?: string
    takenToday!: boolean
    servingSize!: number
    servingType!: ServingType
    timing!: Date
}