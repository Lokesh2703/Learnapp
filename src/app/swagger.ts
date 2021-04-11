export interface ISwagger{
    slug:string,
    title:string,
    link:string,
    id:number,
    page:IModel[]
}

export interface IModel{
    model:string,
    pk:number,
    fields:IField
}

export interface IField{
    slug:string,
    title:string,
    sub_title:string,
    content:string
}