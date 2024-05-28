export interface IProduct {
    id:string,
    title:string,
    category:string,
    description:string,
    image:string,
    price:number,
    rating:{
        rate:number,
        count:number
    }

}