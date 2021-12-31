Implementation of the [Builder Pattern](https://en.wikipedia.org/wiki/Builder_pattern) for both Javascript/Typescript and compatible with ES5/ES6 classes.

## Why This Library?

I have been using NestJs for some time now which I love. The framework is relying heavily on OOP and DDD, and I was looking for a clean and convenient way to instantiate my Domain Models.

The Builder Pattern, as implemented by the Java library Lombok, gave me the idea to transpose it to Typescript.

To learn more about this library, see the section [Articles](#articles).

## Installation

Install the package using `npm`

```bash
npm i builder-pattern
```

or `yarn`

```bash
yarn add builder-pattern
```

## Features

- Automatic generation of the Builder class.
- Auto-completion of the Builder's methods and their typing.
- Compatible with pure Javascript and Typescript.
- Compatible with ES5/ES6 classes.

## Usage

Generate the Builder of a class using the function `createBuilderClass`.

Its setters are based on the parameter names of the constructor of the class. For Example, if the constructor has a parameter `id`, the Builder will expose a setter `setId`.

### Typescript Example

```typescript
import { Builder, createBuilderClass } from 'builder-pattern';

/**
 * 1. Create your domain model.
 */
class MrMeeseeks {
  constructor(private readonly goal: string, private readonly lifespan: number) {}

  public getGoal() {
    return this.goal;
  }

  public getLifespan() {
    return this.lifespan;
  }
}

/**
 * 2. (If using typescript) Describe its constructor parameters.
 */
interface MrMeeseeksCtor {
  goal: string;
  lifespan: number;
}

/**
 * 3. Generate the Builder class.
 */
const MrMeeseeksBuilder: Builder<MrMeeseeks, MrMeeseeksCtor> = createBuilderClass<MrMeeseeks, MrMeeseeksCtor>(MrMeeseeks);

/**
 * 4. Use it!
 */
const builder = new MrMeeseeksBuilder();

const mr = builder.setGoal('Open jam jar').setLifespan(12).build();

console.log(mr.getGoal()); // 'Open jam jar'
console.log(mr.getLifespan()); // 12
```

### Javascript ES5 Example

```typescript
const { createBuilderClass } = require('builder-pattern');

/**
 * 1. Create your domain model.
 */
function MrMeeseeks(goal, lifespan) {
  this.goal = goal;
  this.lifespan = lifespan;

  this.getGoal = function () {
    return this.goal;
  };

  this.getLifespan = function () {
    return this.lifespan;
  };
}

/**
 * 2. Generate the Builder class.
 */
const MrMeeseeksBuilder = createBuilderClass(MrMeeseeks);

/**
 * 3. Use it!
 */
const builder = new MrMeeseeksBuilder();

const mr = builder.setGoal('Open jam jar').setLifespan(12).build();

console.log(mr.getGoal()); // 'Open jam jar'
console.log(mr.getLifespan()); // 12
```

## Articles

Learn more about the implementation of this library on my tech blog:

- [Builder Pattern : Une Version Typescript Compatible](https://basile-mousketon.com/builder-pattern-une-version-typescript-compatible/) [FR]

## License

[MIT](./LICENSE)
