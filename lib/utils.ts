export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.substring(1);

const CONSTRUCTOR_REGEX_ES5 = /\((.*)\)/;
const CONSTRUCTOR_REGEX_ES6 = /constructor\s*\((.*)\)/;
const COMMENT_REGEX = /\/\*\*.*\*\//g;
const SPACE_REGEX = /\s*/g;

export const isEs5Class = (clsSourceCode: string) => {
  return clsSourceCode.split(/\s/)[0] === 'function';
};

export const extractConstructorParams = (cls): string[] => {
  const clsSourceCode = cls.toString();

  const ctorRegex = isEs5Class(clsSourceCode) ? CONSTRUCTOR_REGEX_ES5 : CONSTRUCTOR_REGEX_ES6;

  return (ctorRegex.exec(clsSourceCode)?.[1] || '')
    .replace(COMMENT_REGEX, '')
    .replace(SPACE_REGEX, '')
    .split(',')
    .map((param) => param.split('=')[0])
    .filter((param) => !!param);
};
