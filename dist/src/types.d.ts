export interface Config extends ConfigOptions {
    setFn: SetFunction;
    deletePropertyFn: DeletePropertyFunction;
}
export interface ConfigOptions {
    silent?: boolean;
    setFn?: SetFunction;
    deletePropertyFn?: DeletePropertyFunction;
}
export declare type SetFunction = (target: any, p: PropertyKey, value: any, receiver: any) => boolean;
export declare type DeletePropertyFunction = (target: any, p: PropertyKey) => boolean;
