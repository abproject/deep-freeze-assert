export interface Config extends ConfigOptions {
  setFn: SetFunction;
  deletePropertyFn: DeletePropertyFunction;
}

export interface ConfigOptions {
  silent?: boolean;
  setFn?: SetFunction;
  deletePropertyFn?: DeletePropertyFunction;
}

export type SetFunction = (target: any[], p: PropertyKey, value: any, receiver: any) => boolean;

export type DeletePropertyFunction = (target: any[], p: PropertyKey) => boolean;