type NavigationType = {icon : string, label : string, link : string}
export type TNavigation = NavigationType & {
    subItem? : NavigationType[]
}

export type TLevel = {
    id : number
    nameLevel : string
}