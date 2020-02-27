export type eventHandler<T> = (event: React.SyntheticEvent<T>) => void;
export type keyValuePair<T> = {
  [key: string]: T;
};
