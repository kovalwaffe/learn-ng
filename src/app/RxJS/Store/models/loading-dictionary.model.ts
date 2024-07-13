export type LoadingDictionary<T> = {
  [P in keyof T]: boolean;
};
