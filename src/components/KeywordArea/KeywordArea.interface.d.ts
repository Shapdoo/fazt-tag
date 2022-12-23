import { Keyword } from "../../models/interfaces";

export interface KeywordAreaState{
    isToggled: boolean
    keywords: string
}

export interface KeywordAreaProps{
    selectedKeywords: Keyword[]
}