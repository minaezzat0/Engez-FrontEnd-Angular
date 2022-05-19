export interface Offer {
  id: number,
  content: string,
  job_id: number,
  user_id: number,
  offer_amount: number,
  status: string,
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

}
