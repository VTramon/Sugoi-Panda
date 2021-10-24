import { createContext, SetStateAction } from 'react'
import { ApiProps } from 'src/interfaces/API'

export const SearchContext = createContext({
  animeData: [],
  singleData: {},
  search: (searchTerm: string) => {},
  setData: (data: SetStateAction<never[]>) => {},
  setSingle: (data: SetStateAction<{}>) => {},
})
