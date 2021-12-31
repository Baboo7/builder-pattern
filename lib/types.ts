type SetKey<Key extends string> = `set${Capitalize<Key>}`;

type SetterFunctions<T, TC> = {
  [K in keyof TC as SetKey<string & K>]: (value: TC[K]) => Builder<T, TC>;
};

type CtorBuilder<T, TC> = new (...args: any[]) => Builder<T, TC>;

export type Builder<T, TC> = CtorBuilder<T, TC> &
  SetterFunctions<T, TC> & {
    build: () => T;
  };

export type Ctor<T> = new (...args: any[]) => T;
