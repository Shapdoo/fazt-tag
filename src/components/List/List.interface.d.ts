import { Keyword } from '../../models/interfaces';

export interface ListProps {
    keywords: Keyword[],
    handleNewFlag: (keyword: Keyword) => void
 }