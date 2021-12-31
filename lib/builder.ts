import { Builder, Ctor } from './types';
import { capitalize, extractConstructorParams } from './utils';

const _createBuilder = (cls: any) => {
  const paramNames: string[] = extractConstructorParams(cls);

  const builder = function () {
    this._reset = function () {
      for (const param of paramNames) {
        this[param] = undefined;
      }
    };

    for (const param of paramNames) {
      this[`set${capitalize(param)}`] = function (value: any) {
        this[param] = value;
        return this;
      };
    }

    this.build = function () {
      const values = [];
      for (const param of paramNames) {
        values.push(this[param]);
      }

      const instance = new cls(...values);
      this._reset();

      return instance;
    };
  };

  return builder;
};

export const createBuilderClass = <T, TC>(cls: Ctor<T>): Builder<T, TC> => {
  return _createBuilder(cls) as unknown as Builder<T, TC>;
};
