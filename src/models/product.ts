import { CategoryDTO } from "./category";

export type ProductDTO = {
    id: number;
    name: string;
    desciption: string;
    price: number;
    imgUrl: string;
    categories: CategoryDTO[];
};

//DTO data transfer object - objeto que trafega dados