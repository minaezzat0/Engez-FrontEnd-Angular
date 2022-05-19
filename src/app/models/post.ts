export interface Post {
  id: number,
  title: string,
  desc: string,
  image: string,
  duration: number,
  balance : number,
  view_count : number,
  adress:string,
  status : number,
  user_id: number,
  category_id:number,
  created_at:number,
  user:{
    name : string,
    email:string

  },
  category:{
    name : string
  }


}
