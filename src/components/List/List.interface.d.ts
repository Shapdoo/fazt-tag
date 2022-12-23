import { Keyword } from '../../models/interfaces';

export interface ListProps {
    keywords: Keyword[],
    handleNewFlag: (id: string) => void,
    handleDelete: (id: string) => void
 }