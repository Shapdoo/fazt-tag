import { Keyword } from "./models/interfaces"

export interface AppState {
    keywords: Keyword[]
    selectedKeywords: Keyword[]
}