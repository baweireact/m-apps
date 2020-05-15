export interface IStore {
  title: string,
  list: any[],
  currentId: number,
  isRealScroll: boolean,
  myBooks: IBook[],
  count: number  
}

export interface IBook {
  checked: boolean,
  count: number,
  id: number,
  title: string,
  avatar: string,
  price: number,
  stars: number 
}