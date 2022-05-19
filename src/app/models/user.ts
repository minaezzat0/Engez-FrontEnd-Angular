export interface User {
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
  category: {
    name: string
  }

}
