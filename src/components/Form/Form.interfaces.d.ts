import { Keyword } from "../../models/interfaces"

export interface FormState {
    keyword: Keyword
    error: boolean
}

export interface FromProps {
    setKeywords: (keyword: Keyword) => void
}