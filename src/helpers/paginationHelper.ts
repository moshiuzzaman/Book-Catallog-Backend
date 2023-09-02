type IOptions = {
    page?: number;
    size?: number;
    sortBy?: string;
    sortOrder?: string;
    minPrice?: number;
    maxPrice?: number;
};

type IOptionsResult = {
    page: number;
    size: number;
    skip: number;
    sortBy: string;
    sortOrder: string;
    minPrice: number;
    maxPrice: number;
};

const calculatePagination = (options: IOptions): IOptionsResult => {
    const page = Number(options.page ?? 1);
    const size = Number(options.size ?? 10);
    const skip = (page - 1) * size;

    const sortBy = options.sortBy ?? 'createdAt';
    const sortOrder = options.sortOrder ?? 'desc';
    const minPrice = options.minPrice ?? 0;
    const maxPrice = options.maxPrice ?? 100000000000000;

    return {
        page,
        size,
        skip,
        sortBy,
        sortOrder,
        minPrice,
        maxPrice
    };
};

export const paginationHelpers = {
    calculatePagination
};
