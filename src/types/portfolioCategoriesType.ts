export type categoriesType = {
    id: number,
    name: string,
    url: string
}

type categoriesItemType = {
    id: number,
    title: string,
    desc: string,
    image: string
}

export type categoriesItems = {
    [key: string]: categoriesItemType[]
}