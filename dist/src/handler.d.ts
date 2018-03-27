import { SetFunction, DeletePropertyFunction } from './types';
export declare function handler(setFn: SetFunction, deletePropertyFn: DeletePropertyFunction): {
    set: (target: any, p: PropertyKey, value: any, receiver: any) => boolean;
    deleteProperty: (target: any[], p: PropertyKey) => boolean;
};
