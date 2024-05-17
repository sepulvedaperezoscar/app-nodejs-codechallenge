export interface IUpdateStatusController<P, R> {
    update(param: P): Promise<R>;
}