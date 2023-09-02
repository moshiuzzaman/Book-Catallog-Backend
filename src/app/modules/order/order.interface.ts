export type IOrderedBook = {
    bookId: string;
    quantity: number;
};

export type IOrder = {
    orderedBooks: IOrderedBook[];
};