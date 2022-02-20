import { ProductProps } from "../../components/Card";

export type subscribeProps = {
    name: string;
    email: string;
    submitted: boolean;
}

export interface SelectedModal{
    activite: boolean
    data: ProductProps
}