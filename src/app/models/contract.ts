export interface Contract {
  id: number,
  user_id: number,
  freelancer_id: number,
  title: string,
  desc: string,
  price: number,
  job_id:number,
  created_at:string;
  freelancer: {
    id: number,
    name: string,
    email: string,
    adress: string,
    password: string,
    mobilenumber: number,
    verified: string,
    img: string,
    role: string,
    id_card: string,
    category_id: number,
  },
  job: {
    id: number,
    title: string,
    desc: string,
    image: string,
    duration: string,
    balance: number,
    view_count: number,
    adress: string,
    status: number,
    user_id: number,
    category_id: number,
    created_at: number,
  }
  user: {
    id: number,
    name: string,
    email: string,
    adress: string,
    password: string,
    mobilenumber: number,
    verified: string,
    img: string,
    role: string,
    id_card: string,
    category_id: number,
  }

}

