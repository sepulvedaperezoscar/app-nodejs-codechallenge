export interface ICreateTransactionController<P, R> {
    create(param: P): Promise<R>;
}