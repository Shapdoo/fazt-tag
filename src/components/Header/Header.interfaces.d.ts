import { SetStateAction } from "react";
import { Keyword } from '../../models/interfaces';

export interface HeaderProps {
    setKeywords: (keyword: Keyword) => void
}