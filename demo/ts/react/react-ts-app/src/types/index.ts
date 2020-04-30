export interface IBookState {
  title: string,
  currentId: number,
  isRealScroll: boolean,
  list: any[],
  myBooks: any[]
}

export interface IStore {
  book: IBookState
}

export interface IAction {
  type: string,
  key: string,
  value: any
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

export interface IList {
  id: number,
  title: string,
  list: IBook[]
}