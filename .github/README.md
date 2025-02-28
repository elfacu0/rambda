# Rambda

`Rambda` is smaller and faster alternative to the popular functional programming library **Ramda**. - [Documentation](https://selfrefactor.github.io/rambda/#/)

[![CircleCI](https://circleci.com/gh/selfrefactor/rambda/tree/master.svg?style=svg)](https://circleci.com/gh/selfrefactor/rambda/tree/master)
[![codecov](https://codecov.io/gh/selfrefactor/rambda/branch/master/graph/badge.svg)](https://codecov.io/gh/selfrefactor/rambda)
![Commit activity](https://img.shields.io/github/commit-activity/y/selfrefactor/rambda)
![All contributors](https://img.shields.io/github/contributors/selfrefactor/rambda)
![Library size](https://img.shields.io/bundlephobia/minzip/rambda)
[![install size](https://packagephobia.com/badge?p=rambda)](https://packagephobia.com/result?p=rambda)

## ❯ Example use

```javascript
import { compose, map, filter } from 'rambda'

const result = compose(
  map(x => x * 2),
  filter(x => x > 2)
)([1, 2, 3, 4])
// => [6, 8]
```

You can test this example in <a href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Rambda's REPL</a>

* [Differences between Rambda and Ramda](#differences-between-rambda-and-ramda)
* [API](#api)
* [Changelog](#-changelog)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-example-use)

## ❯ Rambda's advantages

### Typescript included

Typescript definitions are included in the library, in comparison to **Ramda**, where you need to additionally install `@types/ramda`.

Still, you need to be aware that functional programming features in `Typescript` are in development, which means that using **R.compose/R.pipe** can be problematic.

Important - Rambda version `7.0.0`(or higher) requires Typescript version `4.2.2`(or higher).

> Alternative TS definitions are available as `rambda/immutable`. These are Rambda definitions linted with ESLint `functional/prefer-readonly-type` plugin.

### Smaller size

The size of a library affects not only the build bundle size but also the dev bundle size and build time. This is important advantage, expecially for big projects.

### Tree-shaking

Currently **Rambda** is more tree-shakable than **Ramda** - proven in the following [repo](https://github.com/selfrefactor/rambda-tree-shaking).

The repo holds two `Angular9` applications: one with small example code of *Ramda* and the other - same code but with *Rambda* as import library.

The test shows that **Rambda** bundle size is **2 MB** less than its **Ramda** counterpart.

There is also [Webpack/Rollup/Parcel/Esbuild tree-shaking example including several libraries](https://github.com/mischnic/tree-shaking-example) including `Ramda`, `Rambda` and `Rambdax`. 

> actually tree-shaking is the initial reason for creation of `Rambda`

### Dot notation for `R.path`, `R.paths`, `R.assocPath` and `R.lensPath`

Standard usage of `R.path` is `R.path(['a', 'b'], {a: {b: 1} })`.

In **Rambda** you have the choice to use dot notation(which is arguably more readable):

```
R.path('a.b', {a: {b: 1} })
```

### Comma notation for `R.pick` and `R.omit`

Similar to dot notation, but the separator is comma(`,`) instead of dot(`.`).

```
R.pick('a,b', {a: 1 , b: 2, c: 3} })
// No space allowed between properties
```

### Speed

**Rambda** is generally more performant than `Ramda` as the [benchmarks](#-benchmarks) can prove that.

### Support

Most of the valid issues are fixed within 2-3 days.

Closing the issue is usually accompanied by publishing a new patch version of `Rambda` to NPM.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-rambdas-advantages)

## ❯ Missing Ramda methods

<details>
<summary>
  Click to see the full list of 90 Ramda methods not implemented in Rambda 
</summary>

- __
- addIndex
- ap
- aperture
- applyTo
- ascend
- binary
- call
- collectBy
- comparator
- composeWith
- construct
- constructN
- count
- countBy
- descend
- differenceWith
- dissocPath
- empty
- eqBy
- forEachObjIndexed
- gt
- gte
- hasIn
- innerJoin
- insert
- insertAll
- into
- invert
- invertObj
- invoker
- juxt
- keysIn
- lift
- liftN
- lt
- lte
- mapAccum
- mapAccumRight
- memoizeWith
- mergeDeepLeft
- mergeDeepWith
- mergeDeepWithKey
- mergeRight
- mergeWith
- mergeWithKey
- modify
- modifyPath
- nAry
- partialObject
- nthArg
- o
- on
- otherwise
- pair
- partialRight
- pathSatisfies
- pickBy
- pipeWith
- project
- promap
- propSatisfies
- reduceBy
- reduceRight
- reduceWhile
- reduced
- remove
- scan
- sequence
- sortWith
- splitWhenever
- symmetricDifferenceWith
- andThen
- toPairsIn
- transduce
- traverse
- unary
- uncurryN
- unfold
- unionWith
- uniqBy
- unnest
- until
- unwind
- useWith
- valuesIn
- whereAny
- xprod
- thunkify
- default

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-missing-ramda-methods)
  
## ❯ Install

- **yarn add rambda**

- For UMD usage either use `./dist/rambda.umd.js` or the following CDN link:

```
https://unpkg.com/rambda@CURRENT_VERSION/dist/rambda.umd.js
```

- with deno

```
import {compose, add} from 'https://raw.githubusercontent.com/selfrefactor/rambda/master/dist/rambda.esm.js'
```

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-install)

## Differences between Rambda and Ramda

- Rambda's **type** detects async functions and unresolved `Promises`. The returned values are `'Async'` and `'Promise'`.

- Rambda's **type** handles *NaN* input, in which case it returns `NaN`.

- Rambda's **forEach** can iterate over objects not only arrays.

- Rambda's **map**, **filter**, **partition** when they iterate over objects, they pass property and input object as predicate's argument.

- Rambda's **filter** returns empty array with bad input(`null` or `undefined`), while Ramda throws.

- Ramda's **clamp** work with strings, while Rambda's method work only with numbers.

- Ramda's **indexOf/lastIndexOf** work with strings and lists, while Rambda's method work only with lists as iterable input.

- Error handling, when wrong inputs are provided, may not be the same. This difference will be better documented once all brute force tests are completed.

- Typescript definitions between `rambda` and `@types/ramda` may vary.

> If you need more **Ramda** methods in **Rambda**, you may either submit a `PR` or check the extended version of **Rambda** - [Rambdax](https://github.com/selfrefactor/rambdax). In case of the former, you may want to consult with [Rambda contribution guidelines.](CONTRIBUTING.md)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-differences-between-rambda-and-ramda)

## ❯ Benchmarks

<details>

<summary>
Click to expand all benchmark results

There are methods which are benchmarked only with `Ramda` and `Rambda`(i.e. no `Lodash`).

Note that some of these methods, are called with and without curring. This is done in order to give more detailed performance feedback.

The benchmarks results are produced from latest versions of *Rambda*, *Lodash*(4.17.21) and *Ramda*(0.27.1).

</summary>

method | Rambda | Ramda | Lodash
--- |--- | --- | ---
 *add* | 🚀 Fastest | 21.52% slower | 82.15% slower
 *adjust* | 8.48% slower | 🚀 Fastest | 🔳
 *all* | 🚀 Fastest | 1.81% slower | 🔳
 *allPass* | 🚀 Fastest | 91.09% slower | 🔳
 *allPass* | 🚀 Fastest | 98.56% slower | 🔳
 *and* | 🚀 Fastest | 89.09% slower | 🔳
 *any* | 🚀 Fastest | 92.87% slower | 45.82% slower
 *anyPass* | 🚀 Fastest | 98.25% slower | 🔳
 *append* | 🚀 Fastest | 2.07% slower | 🔳
 *applySpec* | 🚀 Fastest | 80.43% slower | 🔳
 *assoc* | 72.32% slower | 60.08% slower | 🚀 Fastest
 *clone* | 🚀 Fastest | 91.86% slower | 86.48% slower
 *compose* | 🚀 Fastest | 32.45% slower | 13.68% slower
 *converge* | 78.63% slower | 🚀 Fastest | 🔳
 *curry* | 🚀 Fastest | 28.86% slower | 🔳
 *curryN* | 🚀 Fastest | 41.05% slower | 🔳
 *defaultTo* | 🚀 Fastest | 48.91% slower | 🔳
 *drop* | 🚀 Fastest | 82.35% slower | 🔳
 *dropLast* | 🚀 Fastest | 86.74% slower | 🔳
 *equals* | 58.37% slower | 96.73% slower | 🚀 Fastest
 *filter* | 6.7% slower | 72.03% slower | 🚀 Fastest
 *find* | 🚀 Fastest | 85.14% slower | 42.65% slower
 *findIndex* | 🚀 Fastest | 86.48% slower | 72.27% slower
 *flatten* | 🚀 Fastest | 95.26% slower | 10.27% slower
 *ifElse* | 🚀 Fastest | 58.56% slower | 🔳
 *includes* | 🚀 Fastest | 84.63% slower | 🔳
 *indexOf* | 🚀 Fastest | 76.63% slower | 🔳
 *indexOf* | 🚀 Fastest | 82.2% slower | 🔳
 *init* | 🚀 Fastest | 92.24% slower | 13.3% slower
 *is* | 🚀 Fastest | 57.69% slower | 🔳
 *isEmpty* | 🚀 Fastest | 97.14% slower | 54.99% slower
 *last* | 🚀 Fastest | 93.43% slower | 5.28% slower
 *lastIndexOf* | 🚀 Fastest | 85.19% slower | 🔳
 *map* | 🚀 Fastest | 86.6% slower | 11.73% slower
 *match* | 🚀 Fastest | 44.83% slower | 🔳
 *merge* | 🚀 Fastest | 12.21% slower | 55.76% slower
 *none* | 🚀 Fastest | 96.48% slower | 🔳
 *objOf* | 🚀 Fastest | 38.05% slower | 🔳
 *omit* | 🚀 Fastest | 69.95% slower | 97.34% slower
 *over* | 🚀 Fastest | 56.23% slower | 🔳
 *path* | 37.81% slower | 77.81% slower | 🚀 Fastest
 *pick* | 🚀 Fastest | 19.07% slower | 80.2% slower
 *pipe* | 0.87% slower | 🚀 Fastest | 🔳
 *prop* | 🚀 Fastest | 87.95% slower | 🔳
 *propEq* | 🚀 Fastest | 91.92% slower | 🔳
 *range* | 🚀 Fastest | 61.8% slower | 57.44% slower
 *reduce* | 60.48% slower | 77.1% slower | 🚀 Fastest
 *repeat* | 48.57% slower | 68.98% slower | 🚀 Fastest
 *replace* | 33.45% slower | 33.99% slower | 🚀 Fastest
 *set* | 🚀 Fastest | 50.35% slower | 🔳
 *sort* | 🚀 Fastest | 40.23% slower | 🔳
 *sortBy* | 🚀 Fastest | 25.29% slower | 56.88% slower
 *split* | 🚀 Fastest | 55.37% slower | 17.64% slower
 *splitEvery* | 🚀 Fastest | 71.98% slower | 🔳
 *take* | 🚀 Fastest | 91.96% slower | 4.72% slower
 *takeLast* | 🚀 Fastest | 93.39% slower | 19.22% slower
 *test* | 🚀 Fastest | 82.34% slower | 🔳
 *type* | 🚀 Fastest | 48.6% slower | 🔳
 *uniq* | 🚀 Fastest | 90.24% slower | 🔳
 *uniqWith* | 25.38% slower | 🚀 Fastest | 🔳
 *uniqWith* | 14.23% slower | 🚀 Fastest | 🔳
 *update* | 🚀 Fastest | 52.35% slower | 🔳
 *view* | 🚀 Fastest | 76.15% slower | 🔳

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-benchmarks)

## ❯ Used by

- [WatermelonDB](https://github.com/Nozbe/WatermelonDB)

- [Walmart Canada](https://www.walmart.ca) reported by [w-b-dev](https://github.com/w-b-dev) 

- [VSCode Slack intergration](https://github.com/verydanny/vcslack)

- [Webpack PostCSS](https://github.com/sectsect/webpack-postcss)

- [MobX-State-Tree decorators](https://github.com/farwayer/mst-decorators)

- [Rewrite of the Betaflight configurator](https://github.com/freshollie/fresh-configurator)

- [MineFlayer plugin](https://github.com/G07cha/MineflayerArmorManager)

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-used-by)

## API

### add

```typescript

add(a: number, b: number): number
```

It adds `a` and `b`.

> :boom: It doesn't work with strings, as the inputs are parsed to numbers before calculation.

```javascript
R.add(2, 3) // =>  5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.add(2%2C%203)%20%2F%2F%20%3D%3E%20%205">Try this <strong>R.add</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
add(a: number, b: number): number;
add(a: number): (b: number) => number;
```

</details>

<details>

<summary><strong>R.add</strong> source</summary>

```javascript
export function add(a, b) {
  if (arguments.length === 1) return _b => add(a, _b)

  return Number(a) + Number(b)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {add} from './add'
import {add as addRamda} from 'ramda'
import {compareCombinations} from './_internals/testUtils'

test('with number', () => {
  expect(add(2, 3)).toEqual(5)
  expect(add(7)(10)).toEqual(17)
})

test('string is bad input', () => {
  expect(add('foo', 'bar')).toBeNaN()
})

test('ramda specs', () => {
  expect(add('1', '2')).toEqual(3)
  expect(add(1, '2')).toEqual(3)
  expect(add(true, false)).toEqual(1)
  expect(add(null, null)).toEqual(0)
  expect(add(undefined, undefined)).toEqual(NaN)
  expect(add(new Date(1), new Date(2))).toEqual(3)
})

const possibleInputs = [
  /foo/,
  'foo',
  true,
  3,
  NaN,
  4,
  [],
  Promise.resolve(1),
]

describe('brute force', () => {
  compareCombinations({
    fn: add,
    fnRamda: addRamda,
    firstInput: possibleInputs,
    secondInput: possibleInputs,
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 64,
        }
      `)
    },
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {add} from 'rambda'

describe('R.add', () => {
  it('happy', () => {
    const result = add(4, 1)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = add(4)(1)

    result // $ExpectType number
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 21.52% slower and Lodash is 82.15% slower</summary>

```text
const R = require('../../dist/rambda.js')

const add = [
  {
    label: 'Rambda',
    fn: () => {
      R.add(1, 1)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.add(1, 1)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.add(1, 1)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#add)

### adjust

```typescript

adjust<T>(index: number, replaceFn: (x: T) => T, list: T[]): T[]
```

It replaces `index` in array `list` with the result of `replaceFn(list[i])`.

```javascript
R.adjust(
  0,
  a => a + 1,
  [0, 100]
) // => [1, 100]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.adjust(%0A%20%200%2C%0A%20%20a%20%3D%3E%20a%20%2B%201%2C%0A%20%20%5B0%2C%20100%5D%0Aconst%20result%20%3D%20)%20%2F%2F%20%3D%3E%20%5B1%2C%20100%5D">Try this <strong>R.adjust</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
adjust<T>(index: number, replaceFn: (x: T) => T, list: T[]): T[];
adjust<T>(index: number, replaceFn: (x: T) => T): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.adjust</strong> source</summary>

```javascript
import {curry} from './curry'
import {cloneList} from './_internals/cloneList'

function adjustFn(index, replaceFn, list) {
  const actualIndex = index < 0 ? list.length + index : index
  if (index >= list.length || actualIndex < 0) return list

  const clone = cloneList(list)
  clone[actualIndex] = replaceFn(clone[actualIndex])

  return clone
}

export const adjust = curry(adjustFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {add} from './add'
import {adjust} from './adjust'
import {pipe} from './pipe'

const list = [0, 1, 2]
const expected = [0, 11, 2]

test('happy', () => {})

test('happy', () => {
  expect(adjust(1, add(10), list)).toEqual(expected)
})

test('with curring type 1 1 1', () => {
  expect(adjust(1)(add(10))(list)).toEqual(expected)
})

test('with curring type 1 2', () => {
  expect(adjust(1)(add(10), list)).toEqual(expected)
})

test('with curring type 2 1', () => {
  expect(adjust(1, add(10))(list)).toEqual(expected)
})

test('with negative index', () => {
  expect(adjust(-2, add(10), list)).toEqual(expected)
})

test('when index is out of bounds', () => {
  const list = [0, 1, 2, 3]
  expect(adjust(4, add(1), list)).toEqual(list)
  expect(adjust(-5, add(1), list)).toEqual(list)
})
```

</details>

<details>

<summary>Rambda is slower than Ramda with 8.48%</summary>

```text
const R = require('../../dist/rambda.js')

const list = [0, 1, 2]
const fn = x => x + 1
const index = 1

const adjust = [
  {
    label: 'Rambda',
    fn: () => {
      R.adjust(index, fn, list)
      R.adjust(index, fn)(list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.adjust(index, fn, list)
      Ramda.adjust(index, fn)(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#adjust)

### all

```typescript

all<T>(predicate: (x: T) => boolean, list: T[]): boolean
```

It returns `true`, if all members of array `list` returns `true`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > -1

const result = R.all(predicate, list)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%20-1%0A%0Aconst%20result%20%3D%20R.all(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.all</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
all<T>(predicate: (x: T) => boolean, list: T[]): boolean;
all<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.all</strong> source</summary>

```javascript
export function all(predicate, list) {
  if (arguments.length === 1) return _list => all(predicate, _list)

  for (let i = 0; i < list.length; i++) {
    if (!predicate(list[i])) return false
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {all} from './all'

const list = [0, 1, 2, 3, 4]

test('when true', () => {
  const fn = x => x > -1

  expect(all(fn)(list)).toBeTrue()
})

test('when false', () => {
  const fn = x => x > 2

  expect(all(fn, list)).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {all} from 'rambda'

describe('all', () => {
  it('happy', () => {
    const result = all(
      x => {
        x // $ExpectType number
        return x > 0
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })
  it('curried needs a type', () => {
    const result = all<number>(x => {
      x // $ExpectType number
      return x > 0
    })([1, 2, 3])
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 1.81%</summary>

```text
const R = require('../../dist/rambda.js')

const {
  uniqListOfObjects,
  uniqListOfStrings,
  rangeOfNumbers,
  uniqListOfLists,
} = require('./_utils.js')

const limit = 100

const modes = [
  [uniqListOfObjects(limit), x => Object.keys(x).length > 2],
  [uniqListOfStrings(limit), x => x.length > 0],
  [uniqListOfLists(limit), x => x.length > 0],
  [rangeOfNumbers(limit), x => x > -1],
]

const applyBenchmark = (fn, input) => {
  return fn(input[1], input[0])
}

const tests = [
  {
    label: 'Rambda',
    fn: R.all,
  },
  {
    label: 'Ramda',
    fn: Ramda.all,
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#all)

### allPass

```typescript

allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean
```

It returns `true`, if all functions of `predicates` return `true`, when `input` is their argument.

```javascript
const input = {
  a : 1,
  b : 2,
}
const predicates = [
  x => x.a === 1,
  x => x.b === 2,
]
const result = R.allPass(predicates)(input) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%7D%0Aconst%20predicates%20%3D%20%5B%0A%20%20x%20%3D%3E%20x.a%20%3D%3D%3D%201%2C%0A%20%20x%20%3D%3E%20x.b%20%3D%3D%3D%202%2C%0A%5D%0Aconst%20result%20%3D%20R.allPass(predicates)(input)%20%2F%2F%20%3D%3E%20true">Try this <strong>R.allPass</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
allPass<T>(predicates: ((x: T) => boolean)[]): (input: T) => boolean;
```

</details>

<details>

<summary><strong>R.allPass</strong> source</summary>

```javascript
export function allPass(predicates) {
  return (...input) => {
    let counter = 0
    while (counter < predicates.length) {
      if (!predicates[counter](...input)) {
        return false
      }
      counter++
    }

    return true
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {allPass} from './allPass'

test('happy', () => {
  const rules = [x => typeof x === 'number', x => x > 10, x => x * 7 < 100]

  expect(allPass(rules)(11)).toBeTrue()

  expect(allPass(rules)(undefined)).toBeFalse()
})

test('when returns true', () => {
  const conditionArr = [val => val.a === 1, val => val.b === 2]

  expect(
    allPass(conditionArr)({
      a: 1,
      b: 2,
    })
  ).toBeTrue()
})

test('when returns false', () => {
  const conditionArr = [val => val.a === 1, val => val.b === 3]

  expect(
    allPass(conditionArr)({
      a: 1,
      b: 2,
    })
  ).toBeFalse()
})

test('works with multiple inputs', () => {
  var fn = function (w, x, y, z) {
    return w + x === y + z
  }
  expect(allPass([fn])(3, 3, 3, 3)).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {allPass} from 'rambda'

describe('allPass', () => {
  it('happy', () => {
    const x = allPass<number>([
      y => {
        y // $ExpectType number
        return typeof y === 'number'
      },
      y => {
        return y > 0
      },
    ])(11)

    x // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 91.09%</summary>

```text
const R = require('../../dist/rambda.js')

const {random} = require('rambdax')

const limit = 100
const min = 10
const max = 1200
function createListOfFunctions(fn, fnLimit) {
  return Array(fnLimit)
    .fill(null)
    .map(() => fn())
}

const modes = [
  [
    {foo: 1500},
    createListOfFunctions(
      () => x => Number(x.foo) > random(min, max),
      limit
    ),
  ],
  [
    '1500',
    createListOfFunctions(() => x => Number(x) > random(min, max), limit),
  ],
  [
    [1, 2, 1500],
    createListOfFunctions(() => x => x[2] > random(min, max), limit),
  ],
  [1500, createListOfFunctions(() => x => x > random(min, max), limit)],
]

const applyBenchmark = (fn, input) => {
  return fn(input[1])(input[0])
}
const tests = [
  {
    label: 'Rambda',
    fn: R.allPass,
  },
  {
    label: 'Ramda',
    fn: Ramda.allPass,
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#allPass)

### always

```typescript

always<T>(x: T): (...args: unknown[]) => T
```

It returns function that always returns `x`.

```javascript
const fn = R.always(7)

const result = fn()
// => 7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.always(7)%0A%0Aconst%20result%20%3D%20fn()%0A%2F%2F%20%3D%3E%207">Try this <strong>R.always</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
always<T>(x: T): (...args: unknown[]) => T;
```

</details>

<details>

<summary><strong>R.always</strong> source</summary>

```javascript
export function always(x) {
  return () => x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {always} from './always'
import {F} from './F'

test('happy', () => {
  const fn = always(7)

  expect(fn()).toEqual(7)
  expect(fn()).toEqual(7)
})

test('f', () => {
  const fn = always(F())

  expect(fn()).toBeFalse()
  expect(fn()).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {always} from 'rambda'

describe('R.always', () => {
  it('happy', () => {
    const fn = always('foo')
    fn // $ExpectType (...args: unknown[]) => string
    const result = fn()
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#always)

### and

Logical AND

```javascript
R.and(true, true); // => true
R.and(false, true); // => false
R.and(true, 'foo'); // => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.and(true%2C%20true)%3B%20%2F%2F%20%3D%3E%20true%0AR.and(false%2C%20true)%3B%20%2F%2F%20%3D%3E%20false%0Aconst%20result%20%3D%20R.and(true%2C%20'foo')%3B%20%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.and</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#and)

### any

```typescript

any<T>(predicate: (x: T) => boolean, list: T[]): boolean
```

It returns `true`, if at least one member of `list` returns true, when passed to a `predicate` function.

```javascript
const list = [1, 2, 3]
const predicate = x => x * x > 8
R.any(fn, list)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20*%20x%20%3E%208%0Aconst%20result%20%3D%20R.any(fn%2C%20list)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.any</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
any<T>(predicate: (x: T) => boolean, list: T[]): boolean;
any<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.any</strong> source</summary>

```javascript
export function any(predicate, list) {
  if (arguments.length === 1) return _list => any(predicate, _list)

  let counter = 0
  while (counter < list.length) {
    if (predicate(list[counter], counter)) {
      return true
    }
    counter++
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {any} from './any'

const list = [1, 2, 3]

test('happy', () => {
  expect(any(x => x < 0, list)).toBeFalse()
})

test('with curry', () => {
  expect(any(x => x > 2)(list)).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {any} from 'rambda'

describe('R.any', () => {
  it('happy', () => {
    const result = any(
      x => {
        x // $ExpectType number
        return x > 2
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })

  it('when curried needs a type', () => {
    const result = any<number>(x => {
      x // $ExpectType number
      return x > 2
    })([1, 2, 3])
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 92.87% slower and Lodash is 45.82% slower</summary>

```text
const R = require('../../dist/rambda.js')

const input = [1, 2, 3, 4]
const fn = val => val > 2

const any = [
  {
    label: 'Rambda',
    fn: () => {
      R.any(fn, input)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.any(fn, input)
    },
  },
  {
    label: 'Lodash.some',
    fn: () => {
      _.some(input, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#any)

### anyPass

```typescript

anyPass<T>(predicates: SafePred<T>[]): SafePred<T>
```

It accepts list of `predicates` and returns a function. This function with its `input` will return `true`, if any of `predicates` returns `true` for this `input`.

```javascript
const isBig = x => x > 20
const isOdd = x => x % 2 === 1
const input = 11

const fn = R.anyPass(
  [isBig, isOdd]
)

const result = fn(input) 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20isBig%20%3D%20x%20%3D%3E%20x%20%3E%2020%0Aconst%20isOdd%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%201%0Aconst%20input%20%3D%2011%0A%0Aconst%20fn%20%3D%20R.anyPass(%0A%20%20%5BisBig%2C%20isOdd%5D%0A)%0A%0Aconst%20result%20%3D%20fn(input)%20%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.anyPass</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
anyPass<T>(predicates: SafePred<T>[]): SafePred<T>;
```

</details>

<details>

<summary><strong>R.anyPass</strong> source</summary>

```javascript
export function anyPass(predicates) {
  return (...input) => {
    let counter = 0
    while (counter < predicates.length) {
      if (predicates[counter](...input)) {
        return true
      }
      counter++
    }

    return false
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {anyPass} from './anyPass'

test('happy', () => {
  const rules = [x => typeof x === 'string', x => x > 10]
  const predicate = anyPass(rules)
  expect(predicate('foo')).toBeTrue()
  expect(predicate(6)).toBeFalse()
})

test('happy', () => {
  const rules = [x => typeof x === 'string', x => x > 10]

  expect(anyPass(rules)(11)).toBeTrue()

  expect(anyPass(rules)(undefined)).toBeFalse()
})

const obj = {
  a: 1,
  b: 2,
}

test('when returns true', () => {
  const conditionArr = [val => val.a === 1, val => val.a === 2]

  expect(anyPass(conditionArr)(obj)).toBeTrue()
})

test('when returns false + curry', () => {
  const conditionArr = [val => val.a === 2, val => val.b === 3]

  expect(anyPass(conditionArr)(obj)).toBeFalse()
})

test('with empty predicates list', () => {
  expect(anyPass([])(3)).toEqual(false)
})

test('works with multiple inputs', () => {
  var fn = function (w, x, y, z) {
    console.log(w, x, y, z)
    return w + x === y + z
  }
  expect(anyPass([fn])(3, 3, 3, 3)).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {anyPass} from 'rambda'

describe('anyPass', () => {
  it('happy', () => {
    const x = anyPass<number>([
      y => {
        y // $ExpectType number
        return typeof y === 'number'
      },
      y => {
        return y > 0
      },
    ])(11)

    x // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 98.25%</summary>

```text
const R = require('../../dist/rambda.js')

const rules = [x => typeof x === 'boolean', x => x > 20, x => x * 7 < 100]

const anyPass = [
  {
    label: 'Rambda',
    fn: () => {
      R.anyPass(rules)(11)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.anyPass(rules)(11)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#anyPass)

### append

```typescript

append<T>(x: T, list: T[]): T[]
```

It adds element `x` at the end of `list`.

```javascript
const x = 'foo'

const result = R.append(x, ['bar', 'baz'])
// => ['bar', 'baz', 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20R.append(x%2C%20%5B'bar'%2C%20'baz'%5D)%0A%2F%2F%20%3D%3E%20%5B'bar'%2C%20'baz'%2C%20'foo'%5D">Try this <strong>R.append</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
append<T>(x: T, list: T[]): T[];
append<T>(x: T): <T>(list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.append</strong> source</summary>

```javascript
import {cloneList} from './_internals/cloneList'

export function append(x, input) {
  if (arguments.length === 1) return _input => append(x, _input)

  if (typeof input === 'string') return input.split('').concat(x)

  const clone = cloneList(input)
  clone.push(x)

  return clone
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {append} from './append'

test('happy', () => {
  expect(append('tests', ['write', 'more'])).toEqual([
    'write',
    'more',
    'tests',
  ])
})

test('append to empty array', () => {
  expect(append('tests')([])).toEqual(['tests'])
})

test('with strings', () => {
  expect(append('o', 'fo')).toEqual(['f', 'o', 'o'])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {append} from 'rambda'

const list = [1, 2, 3]

describe('R.append', () => {
  it('happy', () => {
    const result = append(4, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = append(4)(list)

    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 2.07%</summary>

```text
const R = require('../../dist/rambda.js')

const append = [
  {
    label: 'Rambda',
    fn: () => {
      R.append(0)([1, 2, 3, 4])
      R.append('bar')('foo')
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.append(0)([1, 2, 3, 4])
      Ramda.append('bar')('foo')
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#append)

### apply

```typescript

apply<T = any>(fn: (...args: any[]) => T, args: any[]): T
```

It applies function `fn` to the list of arguments. 

This is useful for creating a fixed-arity function from a variadic function. `fn` should be a bound function if context is significant.

```javascript
const result = R.apply(Math.max, [42, -Infinity, 1337])
// => 1337
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.apply(Math.max%2C%20%5B42%2C%20-Infinity%2C%201337%5D)%0A%2F%2F%20%3D%3E%201337">Try this <strong>R.apply</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
apply<T = any>(fn: (...args: any[]) => T, args: any[]): T;
apply<T = any>(fn: (...args: any[]) => T): (args: any[]) => T;
```

</details>

<details>

<summary><strong>R.apply</strong> source</summary>

```javascript
export function apply(fn, args) {
  if (arguments.length === 1) {
    return _args => apply(fn, _args)
  }

  return fn.apply(this, args)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {apply} from './apply'
import {bind} from './bind'
import {identity} from './identity'

test('happy', () => {
  expect(apply(identity, [1, 2, 3])).toEqual(1)
})

test('applies function to argument list', function () {
  expect(apply(Math.max, [1, 2, 3, -99, 42, 6, 7])).toEqual(42)
})

test('provides no way to specify context', function () {
  const obj = {
    method: function () {
      return this === obj
    },
  }
  expect(apply(obj.method, [])).toEqual(false)
  expect(apply(bind(obj.method, obj), [])).toEqual(true)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {apply, identity} from 'rambda'

describe('R.apply', () => {
  it('happy', () => {
    const result = apply<number>(identity, [1, 2, 3])

    result // $ExpectType number
  })
  it('curried', () => {
    const fn = apply<number>(identity)
    const result = fn([1, 2, 3])

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#apply)

### applySpec

```typescript

applySpec<Spec extends Record<string, (...args: any[]) => any>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> }
```

> :boom: The currying in this function works best with functions with 4 arguments or less. (arity of 4)

```javascript
const fn = R.applySpec({
  sum: R.add,
  nested: { mul: R.multiply }
})
const result = fn(2, 4) 
// => { sum: 6, nested: { mul: 8 } }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.applySpec(%7B%0A%20%20sum%3A%20R.add%2C%0A%20%20nested%3A%20%7B%20mul%3A%20R.multiply%20%7D%0A%7D)%0Aconst%20result%20%3D%20fn(2%2C%204)%20%0A%2F%2F%20%3D%3E%20%7B%20sum%3A%206%2C%20nested%3A%20%7B%20mul%3A%208%20%7D%20%7D">Try this <strong>R.applySpec</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
applySpec<Spec extends Record<string, (...args: any[]) => any>>(
  spec: Spec
): (
  ...args: Parameters<ValueOfRecord<Spec>>
) => { [Key in keyof Spec]: ReturnType<Spec[Key]> };
applySpec<T>(spec: any): (...args: any[]) => T;
```

</details>

<details>

<summary><strong>R.applySpec</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'

// recursively traverse the given spec object to find the highest arity function
function __findHighestArity(spec, max = 0) {
  for (const key in spec) {
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue

    if (typeof spec[key] === 'object') {
      max = Math.max(max, __findHighestArity(spec[key]))
    }

    if (typeof spec[key] === 'function') {
      max = Math.max(max, spec[key].length)
    }
  }

  return max
}

function __filterUndefined() {
  const defined = []
  let i = 0
  const l = arguments.length
  while (i < l) {
    if (typeof arguments[i] === 'undefined') break
    defined[i] = arguments[i]
    i++
  }

  return defined
}

function __applySpecWithArity(spec, arity, cache) {
  const remaining = arity - cache.length

  if (remaining === 1)
    return x =>
      __applySpecWithArity(spec, arity, __filterUndefined(...cache, x))
  if (remaining === 2)
    return (x, y) =>
      __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y))
  if (remaining === 3)
    return (x, y, z) =>
      __applySpecWithArity(spec, arity, __filterUndefined(...cache, x, y, z))
  if (remaining === 4)
    return (x, y, z, a) =>
      __applySpecWithArity(
        spec,
        arity,
        __filterUndefined(...cache, x, y, z, a)
      )
  if (remaining > 4)
    return (...args) =>
      __applySpecWithArity(spec, arity, __filterUndefined(...cache, ...args))

  // handle spec as Array
  if (_isArray(spec)) {
    const ret = []
    let i = 0
    const l = spec.length
    for (; i < l; i++) {
      // handle recursive spec inside array
      if (typeof spec[i] === 'object' || _isArray(spec[i])) {
        ret[i] = __applySpecWithArity(spec[i], arity, cache)
      }
      // apply spec to the key
      if (typeof spec[i] === 'function') {
        ret[i] = spec[i](...cache)
      }
    }

    return ret
  }

  // handle spec as Object
  const ret = {}
  // apply callbacks to each property in the spec object
  for (const key in spec) {
    if (spec.hasOwnProperty(key) === false || key === 'constructor') continue

    // apply the spec recursively
    if (typeof spec[key] === 'object') {
      ret[key] = __applySpecWithArity(spec[key], arity, cache)
      continue
    }

    // apply spec to the key
    if (typeof spec[key] === 'function') {
      ret[key] = spec[key](...cache)
    }
  }

  return ret
}

export function applySpec(spec, ...args) {
  // get the highest arity spec function, cache the result and pass to __applySpecWithArity
  const arity = __findHighestArity(spec)

  if (arity === 0) {
    return () => ({})
  }
  const toReturn = __applySpecWithArity(spec, arity, args)

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {applySpec as applySpecRamda, nAry} from 'ramda'
import {add, always, compose, dec, inc, map, path, prop, T} from '../rambda'
import {applySpec} from './applySpec'

test('different than Ramda when bad spec', () => {
  const result = applySpec({sum: {a: 1}})(1, 2)
  const ramdaResult = applySpecRamda({sum: {a: 1}})(1, 2)
  expect(result).toEqual({})
  expect(ramdaResult).toEqual({sum: {a: {}}})
})

test('works with empty spec', () => {
  expect(applySpec({})()).toEqual({})
  expect(applySpec([])(1, 2)).toEqual({})
  expect(applySpec(null)(1, 2)).toEqual({})
})

test('works with unary functions', () => {
  const result = applySpec({
    v: inc,
    u: dec,
  })(1)
  const expected = {
    v: 2,
    u: 0,
  }
  expect(result).toEqual(expected)
})

test('works with binary functions', () => {
  const result = applySpec({sum: add})(1, 2)
  expect(result).toEqual({sum: 3})
})

test('works with nested specs', () => {
  const result = applySpec({
    unnested: always(0),
    nested: {sum: add},
  })(1, 2)
  const expected = {
    unnested: 0,
    nested: {sum: 3},
  }
  expect(result).toEqual(expected)
})

test('works with arrays of nested specs', () => {
  const result = applySpec({
    unnested: always(0),
    nested: [{sum: add}],
  })(1, 2)

  expect(result).toEqual({
    unnested: 0,
    nested: [{sum: 3}],
  })
})

test('works with arrays of spec objects', () => {
  const result = applySpec([{sum: add}])(1, 2)

  expect(result).toEqual([{sum: 3}])
})

test('works with arrays of functions', () => {
  const result = applySpec([map(prop('a')), map(prop('b'))])([
    {
      a: 'a1',
      b: 'b1',
    },
    {
      a: 'a2',
      b: 'b2',
    },
  ])
  const expected = [
    ['a1', 'a2'],
    ['b1', 'b2'],
  ]
  expect(result).toEqual(expected)
})

test('works with a spec defining a map key', () => {
  expect(applySpec({map: prop('a')})({a: 1})).toEqual({map: 1})
})

test('cannot retains the highest arity', () => {
  const f = applySpec({
    f1: nAry(2, T),
    f2: nAry(5, T),
  })
  const fRamda = applySpecRamda({
    f1: nAry(2, T),
    f2: nAry(5, T),
  })
  expect(f.length).toBe(0)
  expect(fRamda.length).toBe(5)
})

test('returns a curried function', () => {
  expect(applySpec({sum: add})(1)(2)).toEqual({sum: 3})
})

// Additional tests
// ============================================
test('arity', () => {
  const spec = {
    one: x1 => x1,
    two: (x1, x2) => x1 + x2,
    three: (x1, x2, x3) => x1 + x2 + x3,
  }
  expect(applySpec(spec, 1, 2, 3)).toEqual({
    one: 1,
    two: 3,
    three: 6,
  })
})

test('arity over 5 arguments', () => {
  const spec = {
    one: x1 => x1,
    two: (x1, x2) => x1 + x2,
    three: (x1, x2, x3) => x1 + x2 + x3,
    four: (x1, x2, x3, x4) => x1 + x2 + x3 + x4,
    five: (x1, x2, x3, x4, x5) => x1 + x2 + x3 + x4 + x5,
  }
  expect(applySpec(spec, 1, 2, 3, 4, 5)).toEqual({
    one: 1,
    two: 3,
    three: 6,
    four: 10,
    five: 15,
  })
})

test('curried', () => {
  const spec = {
    one: x1 => x1,
    two: (x1, x2) => x1 + x2,
    three: (x1, x2, x3) => x1 + x2 + x3,
  }
  expect(applySpec(spec)(1)(2)(3)).toEqual({
    one: 1,
    two: 3,
    three: 6,
  })
})

test('curried over 5 arguments', () => {
  const spec = {
    one: x1 => x1,
    two: (x1, x2) => x1 + x2,
    three: (x1, x2, x3) => x1 + x2 + x3,
    four: (x1, x2, x3, x4) => x1 + x2 + x3 + x4,
    five: (x1, x2, x3, x4, x5) => x1 + x2 + x3 + x4 + x5,
  }
  expect(applySpec(spec)(1)(2)(3)(4)(5)).toEqual({
    one: 1,
    two: 3,
    three: 6,
    four: 10,
    five: 15,
  })
})

test('undefined property', () => {
  const spec = {prop: path(['property', 'doesnt', 'exist'])}
  expect(applySpec(spec, {})).toEqual({prop: undefined})
})

test('restructure json object', () => {
  const spec = {
    id: path('user.id'),
    name: path('user.firstname'),
    profile: path('user.profile'),
    doesntExist: path('user.profile.doesntExist'),
    info: {views: compose(inc, prop('views'))},
    type: always('playa'),
  }

  const data = {
    user: {
      id: 1337,
      firstname: 'john',
      lastname: 'shaft',
      profile: 'shaft69',
    },
    views: 42,
  }

  expect(applySpec(spec, data)).toEqual({
    id: 1337,
    name: 'john',
    profile: 'shaft69',
    doesntExist: undefined,
    info: {views: 43},
    type: 'playa',
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {multiply, applySpec, inc, dec, add} from 'rambda'

describe('applySpec', () => {
  it('ramda 1', () => {
    const result = applySpec({
      v: inc,
      u: dec,
    })(1)
    result // $ExpectType { v: number; u: number; }
  })
  it('ramda 1', () => {
    interface Output {
      sum: number
      multiplied: number
    }
    const result = applySpec<Output>({
      sum: add,
      multiplied: multiply,
    })(1, 2)

    result // $ExpectType Output
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 80.43%</summary>

```text
const R = require('../../dist/rambda.js')

const curryN = [
  {
    label: 'Rambda',
    fn: () => {
      const data = {
        a: {
          b: {c: 1},
          d: 2,
        },
      }
      const spec = {
        c: R.path(['a', 'b', 'c']),
        d: R.path(['a', 'd']),
      }
      R.applySpec(spec, data)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const data = {
        a: {
          b: {c: 1},
          d: 2,
        },
      }
      const spec = {
        c: Ramda.path(['a', 'b', 'c']),
        d: Ramda.path(['a', 'd']),
      }
      Ramda.applySpec(spec, data)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#applySpec)

### assoc

```typescript

assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & Omit<U, K>
```

It makes a shallow clone of `obj` with setting or overriding the property `prop` with `newValue`.

> :boom: This copies and flattens prototype properties
onto the new object as well. All non-primitive properties are copied by
reference.

```javascript
R.assoc('c', 3, {a: 1, b: 2})
// => {a: 1, b: 2, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.assoc('c'%2C%203%2C%20%7Ba%3A%201%2C%20b%3A%202%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D">Try this <strong>R.assoc</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
assoc<T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & Omit<U, K>;
assoc<T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & Omit<U, K>;
assoc<K extends string>(prop: K): AssocPartialOne<K>;
```

</details>

<details>

<summary><strong>R.assoc</strong> source</summary>

```javascript
import {curry} from './curry'

function assocFn(prop, newValue, obj) {
  return Object.assign({}, obj, {[prop]: newValue})
}

export const assoc = curry(assocFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {assoc} from './assoc'

test('adds a key to an empty object', () => {
  expect(assoc('a', 1, {})).toEqual({a: 1})
})

test('adds a key to a non-empty object', () => {
  expect(assoc('b', 2, {a: 1})).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assoc('b', 2)({a: 1})).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assoc('b')(2, {a: 1})).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assoc('b')(2)({a: 1})

  expect(result).toEqual({
    a: 1,
    b: 2,
  })
})

test('changes an existing key', () => {
  expect(assoc('a', 2, {a: 1})).toEqual({a: 2})
})

test('undefined is considered an empty object', () => {
  expect(assoc('a', 1, undefined)).toEqual({a: 1})
})

test('null is considered an empty object', () => {
  expect(assoc('a', 1, null)).toEqual({a: 1})
})

test('value can be null', () => {
  expect(assoc('a', null, null)).toEqual({a: null})
})

test('value can be undefined', () => {
  expect(assoc('a', undefined, null)).toEqual({a: undefined})
})

test('assignment is shallow', () => {
  expect(assoc('a', {b: 2}, {a: {c: 3}})).toEqual({a: {b: 2}})
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {assoc} from 'rambda'

const obj = {a: 1}
const newValue = 2
const newProp = 'b'

describe('R.assoc', () => {
  it('happy', () => {
    const result = assoc(newProp, newValue, obj)

    result.a // $ExpectType number
    result.b // $ExpectType number
  })
  it('curried 1', () => {
    const result = assoc(newProp, newValue)(obj)

    result.a // $ExpectType number
    result.b // $ExpectType number
  })
  it('curried 2', () => {
    const result = assoc(newProp)(newValue)(obj)

    result.a // $ExpectType number
    result.b // $ExpectType number
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 72.32% slower and Ramda is 60.08% slower</summary>

```text
const R = require('../../dist/rambda.js')

const input = {
  a: 1,
  b: 2,
}
const key = 'c'
const value = 3

const assoc = [
  {
    label: 'Rambda',
    fn: () => {
      R.assoc(key, value, input)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.assoc(key, value, input)
    },
  },
  {
    label: 'Lodash.set',
    fn: () => {
      _.set(input, key, value)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#assoc)

### assocPath

```typescript

assocPath<Output>(path: Path, newValue: any, obj: object): Output
```

It makes a shallow clone of `obj` with setting or overriding with `newValue` the property found with `path`.

```javascript
const path = 'b.c'
const newValue = 2
const obj = { a: 1 }

R.assocPath(path, newValue, obj)
// => { a : 1, b : { c : 2 }}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20path%20%3D%20'b.c'%0Aconst%20newValue%20%3D%202%0Aconst%20obj%20%3D%20%7B%20a%3A%201%20%7D%0A%0Aconst%20result%20%3D%20R.assocPath(path%2C%20newValue%2C%20obj)%0A%2F%2F%20%3D%3E%20%7B%20a%20%3A%201%2C%20b%20%3A%20%7B%20c%20%3A%202%20%7D%7D">Try this <strong>R.assocPath</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
assocPath<Output>(path: Path, newValue: any, obj: object): Output;
assocPath<Output>(path: Path, newValue: any): (obj: object) => Output;
assocPath<Output>(path: Path): (newValue: any) => (obj: object) => Output;
```

</details>

<details>

<summary><strong>R.assocPath</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {_isInteger} from './_internals/_isInteger'
import {assoc} from './assoc'
import {curry} from './curry'
import {cloneList} from './_internals/cloneList'

function assocPathFn(path, newValue, input) {
  const pathArrValue =
    typeof path === 'string'
      ? path.split('.').map(x => (_isInteger(Number(x)) ? Number(x) : x))
      : path
  if (pathArrValue.length === 0) {
    return newValue
  }

  const index = pathArrValue[0]
  if (pathArrValue.length > 1) {
    const condition =
      typeof input !== 'object' ||
      input === null ||
      !input.hasOwnProperty(index)

    const nextinput = condition
      ? _isInteger(pathArrValue[1])
        ? []
        : {}
      : input[index]

    newValue = assocPathFn(
      Array.prototype.slice.call(pathArrValue, 1),
      newValue,
      nextinput
    )
  }

  if (_isInteger(index) && _isArray(input)) {
    const arr = cloneList(input)
    arr[index] = newValue

    return arr
  }

  return assoc(index, newValue, input)
}

export const assocPath = curry(assocPathFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {assocPath} from './assocPath'

test('string can be used as path input', () => {
  const testObj = {
    a: [{b: 1}, {b: 2}],
    d: 3,
  }
  const result = assocPath('a.0.b', 10, testObj)
  const expected = {
    a: [{b: 10}, {b: 2}],
    d: 3,
  }
  expect(result).toEqual(expected)
})

test('bug', () => {
  /*
    https://github.com/selfrefactor/rambda/issues/524
  */
  const state = {}

  const withDateLike = assocPath(
    ['outerProp', '2020-03-10'],
    {prop: 2},
    state
  )
  const withNumber = assocPath(['outerProp', '5'], {prop: 2}, state)

  const withDateLikeExpected = {outerProp: {'2020-03-10': {prop: 2}}}
  const withNumberExpected = {outerProp: {5: {prop: 2}}}
  expect(withDateLike).toEqual(withDateLikeExpected)
  expect(withNumber).toEqual(withNumberExpected)
})

test('adds a key to an empty object', () => {
  expect(assocPath(['a'], 1, {})).toEqual({a: 1})
})

test('adds a key to a non-empty object', () => {
  expect(assocPath('b', 2, {a: 1})).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a nested key to a non-empty object', () => {
  expect(assocPath('b.c', 2, {a: 1})).toEqual({
    a: 1,
    b: {c: 2},
  })
})

test('adds a nested key to a nested non-empty object - curry case 1', () => {
  expect(
    assocPath(
      'b.d',
      3
    )({
      a: 1,
      b: {c: 2},
    })
  ).toEqual({
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
  })
})

test('adds a key to a non-empty object - curry case 1', () => {
  expect(assocPath('b', 2)({a: 1})).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a nested key to a non-empty object - curry case 1', () => {
  expect(assocPath('b.c', 2)({a: 1})).toEqual({
    a: 1,
    b: {c: 2},
  })
})

test('adds a key to a non-empty object - curry case 2', () => {
  expect(assocPath('b')(2, {a: 1})).toEqual({
    a: 1,
    b: 2,
  })
})

test('adds a key to a non-empty object - curry case 3', () => {
  const result = assocPath('b')(2)({a: 1})

  expect(result).toEqual({
    a: 1,
    b: 2,
  })
})

test('changes an existing key', () => {
  expect(assocPath('a', 2, {a: 1})).toEqual({a: 2})
})

test('undefined is considered an empty object', () => {
  expect(assocPath('a', 1, undefined)).toEqual({a: 1})
})

test('null is considered an empty object', () => {
  expect(assocPath('a', 1, null)).toEqual({a: 1})
})

test('value can be null', () => {
  expect(assocPath('a', null, null)).toEqual({a: null})
})

test('value can be undefined', () => {
  expect(assocPath('a', undefined, null)).toEqual({a: undefined})
})

test('assignment is shallow', () => {
  expect(assocPath('a', {b: 2}, {a: {c: 3}})).toEqual({a: {b: 2}})
})

test('empty array as path', () => {
  const result = assocPath([], 3, {
    a: 1,
    b: 2,
  })
  expect(result).toEqual(3)
})

test('happy', () => {
  const expected = {foo: {bar: {baz: 42}}}
  const result = assocPath(['foo', 'bar', 'baz'], 42, {foo: null})
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {assocPath} from 'rambda'

interface Output {
  a: number
  foo: {bar: number}
}

describe('R.assocPath - user must explicitly set type of output', () => {
  it('with array as path input', () => {
    const result = assocPath<Output>(['foo', 'bar'], 2, {a: 1})

    result // $ExpectType Output
  })
  it('with string as path input', () => {
    const result = assocPath<Output>('foo.bar', 2, {a: 1})

    result // $ExpectType Output
  })
})

describe('R.assocPath - curried', () => {
  it('with array as path input', () => {
    const result = assocPath<Output>(['foo', 'bar'], 2)({a: 1})

    result // $ExpectType Output
  })
  it('with string as path input', () => {
    const result = assocPath<Output>('foo.bar', 2)({a: 1})

    result // $ExpectType Output
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#assocPath)

### bind

```typescript

bind<F extends (...args: any[]) => any, T>(fn: F, thisObj: T): (...args: Parameters<F>) => ReturnType<F>
```

Creates a function that is bound to a context.

> :boom: R.bind does not provide the additional argument-binding capabilities of [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).

```javascript
const log = R.bind(console.log, console)
const result = R.pipe(
  R.assoc('a', 2), 
  R.tap(log), 
  R.assoc('a', 3)
)({a: 1}); 
// => result - `{a: 3}`
// => console log - `{a: 2}`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20log%20%3D%20R.bind(console.log%2C%20console)%0Aconst%20result%20%3D%20R.pipe(%0A%20%20R.assoc('a'%2C%202)%2C%20%0A%20%20R.tap(log)%2C%20%0A%20%20R.assoc('a'%2C%203)%0A)(%7Ba%3A%201%7D)%3B%20%0A%2F%2F%20%3D%3E%20result%20-%20%60%7Ba%3A%203%7D%60%0A%2F%2F%20%3D%3E%20console%20log%20-%20%60%7Ba%3A%202%7D%60">Try this <strong>R.bind</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
bind<F extends (...args: any[]) => any, T>(fn: F, thisObj: T): (...args: Parameters<F>) => ReturnType<F>;
bind<F extends (...args: any[]) => any, T>(fn: F): (thisObj: T) => (...args: Parameters<F>) => ReturnType<F>;
```

</details>

<details>

<summary><strong>R.bind</strong> source</summary>

```javascript
import {curryN} from './curryN'

export function bind(fn, thisObj) {
  if (arguments.length === 1) {
    return _thisObj => bind(fn, _thisObj)
  }

  return curryN(fn.length, (...args) => fn.apply(thisObj, args))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {bind} from './bind'

function Foo(x) {
  this.x = x
}
function add(x) {
  return this.x + x
}
function Bar(x, y) {
  this.x = x
  this.y = y
}
Bar.prototype = new Foo()
Bar.prototype.getX = function () {
  return 'prototype getX'
}

test('returns a function', function () {
  expect(typeof bind(add)(Foo)).toEqual('function')
})

test('returns a function bound to the specified context object', function () {
  const f = new Foo(12)
  function isFoo() {
    return this instanceof Foo
  }
  const isFooBound = bind(isFoo, f)
  expect(isFoo()).toEqual(false)
  expect(isFooBound()).toEqual(true)
})

test('works with built-in types', function () {
  const abc = bind(String.prototype.toLowerCase, 'ABCDEFG')
  expect(typeof abc).toEqual('function')
  expect(abc()).toEqual('abcdefg')
})

test('works with user-defined types', function () {
  const f = new Foo(12)
  function getX() {
    return this.x
  }
  const getXFooBound = bind(getX, f)
  expect(getXFooBound()).toEqual(12)
})

test('works with plain objects', function () {
  const pojso = {
    x: 100,
  }
  function incThis() {
    return this.x + 1
  }
  const incPojso = bind(incThis, pojso)
  expect(typeof incPojso).toEqual('function')
  expect(incPojso()).toEqual(101)
})

test('does not interfere with existing object methods', function () {
  const b = new Bar('a', 'b')
  function getX() {
    return this.x
  }
  const getXBarBound = bind(getX, b)
  expect(b.getX()).toEqual('prototype getX')
  expect(getXBarBound()).toEqual('a')
})

test('preserves arity', function () {
  const f0 = function () {
    return 0
  }
  const f1 = function (a) {
    return a
  }
  const f2 = function (a, b) {
    return a + b
  }
  const f3 = function (a, b, c) {
    return a + b + c
  }

  expect(bind(f0, {}).length).toEqual(0)
  expect(bind(f1, {}).length).toEqual(1)
  expect(bind(f2, {}).length).toEqual(2)
  expect(bind(f3, {}).length).toEqual(3)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {bind} from 'rambda'

class Foo {}
function isFoo<T = any>(this: T): boolean {
  return this instanceof Foo
}

describe('R.bind', () => {
  it('happy', () => {
    const foo = new Foo()
    const result = bind(isFoo, foo)()

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#bind)

### both

```typescript

both(pred1: Pred, pred2: Pred): Pred
```

It returns a function with `input` argument. 

This function will return `true`, if both `firstCondition` and `secondCondition` return `true` when `input` is passed as their argument.

```javascript
const firstCondition = x => x > 10
const secondCondition = x => x < 20
const fn = R.both(secondCondition)

const result = [fn(15), fn(30)]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20firstCondition%20%3D%20x%20%3D%3E%20x%20%3E%2010%0Aconst%20secondCondition%20%3D%20x%20%3D%3E%20x%20%3C%2020%0Aconst%20fn%20%3D%20R.both(secondCondition)%0A%0Aconst%20result%20%3D%20%5Bfn(15)%2C%20fn(30)%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.both</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
both(pred1: Pred, pred2: Pred): Pred;
both<T>(pred1: Predicate<T>, pred2: Predicate<T>): Predicate<T>;
both<T>(pred1: Predicate<T>): (pred2: Predicate<T>) => Predicate<T>;
both(pred1: Pred): (pred2: Pred) => Pred;
```

</details>

<details>

<summary><strong>R.both</strong> source</summary>

```javascript
export function both(f, g) {
  if (arguments.length === 1) return _g => both(f, _g)

  return (...input) => f(...input) && g(...input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {both} from './both'

const firstFn = val => val > 0
const secondFn = val => val < 10

test('with curry', () => {
  expect(both(firstFn)(secondFn)(17)).toBeFalse()
})

test('without curry', () => {
  expect(both(firstFn, secondFn)(7)).toBeTrue()
})

test('with multiple inputs', () => {
  const between = function (a, b, c) {
    return a < b && b < c
  }
  const total20 = function (a, b, c) {
    return a + b + c === 20
  }
  const fn = both(between, total20)
  expect(fn(5, 7, 8)).toBeTrue()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function () {
    return false
  }
  const Z = function () {
    effect = 'Z got evaluated'
  }
  both(F, Z)()

  expect(effect).toBe('not evaluated')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {both} from 'rambda'

describe('R.both', () => {
  it('with passed type', () => {
    const fn = both<number>(
      x => x > 1,
      x => x % 2 === 0
    )
    fn // $ExpectType Predicate<number>
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('with passed type - curried', () => {
    const fn = both<number>(x => x > 1)(x => x % 2 === 0)
    fn // $ExpectType Predicate<number>
    const result = fn(2)
    result // $ExpectType boolean
  })
  it('no type passed', () => {
    const fn = both(
      x => {
        x // $ExpectType any
        return x > 1
      },
      x => {
        x // $ExpectType any
        return x % 2 === 0
      }
    )
    const result = fn(2)
    result // $ExpectType boolean
  })
  it('no type passed - curried', () => {
    const fn = both((x: number) => {
      x // $ExpectType number
      return x > 1
    })((x: number) => {
      x // $ExpectType number
      return x % 2 === 0
    })
    const result = fn(2)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#both)

### chain

```typescript

chain<T, U>(fn: (n: T) => U[], list: T[]): U[]
```

The method is also known as `flatMap`.

```javascript
const duplicate = n => [ n, n ]
const list = [ 1, 2, 3 ]

const result = chain(duplicate, list)
// => [ 1, 1, 2, 2, 3, 3 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20duplicate%20%3D%20n%20%3D%3E%20%5B%20n%2C%20n%20%5D%0Aconst%20list%20%3D%20%5B%201%2C%202%2C%203%20%5D%0A%0Aconst%20result%20%3D%20chain(duplicate%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%201%2C%201%2C%202%2C%202%2C%203%2C%203%20%5D">Try this <strong>R.chain</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
chain<T, U>(fn: (n: T) => U[], list: T[]): U[];
chain<T, U>(fn: (n: T) => U[]): (list: T[]) => U[];
```

</details>

<details>

<summary><strong>R.chain</strong> source</summary>

```javascript
export function chain(fn, list) {
  if (arguments.length === 1) {
    return _list => chain(fn, _list)
  }

  return [].concat(...list.map(fn))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {chain} from './chain'
import {chain as chainRamda} from 'ramda'

const duplicate = n => [n, n]

test('happy', () => {
  const fn = x => [x * 2]
  const list = [1, 2, 3]

  const result = chain(fn, list)

  expect(result).toEqual([2, 4, 6])
})

test('maps then flattens one level', () => {
  expect(chain(duplicate, [1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('maps then flattens one level - curry', () => {
  expect(chain(duplicate)([1, 2, 3])).toEqual([1, 1, 2, 2, 3, 3])
})

test('flattens only one level', () => {
  const nest = n => [[n]]
  expect(chain(nest, [1, 2, 3])).toEqual([[1], [2], [3]])
})

test('can compose', () => {
  function dec(x) {
    return [x - 1]
  }
  function times2(x) {
    return [x * 2]
  }

  var mdouble = chain(times2)
  var mdec = chain(dec)
  expect(mdec(mdouble([10, 20, 30]))).toEqual([19, 39, 59])
})

test('@types/ramda broken test', () => {
  const score = {
    maths: 90,
    physics: 80,
  }

  const calculateTotal = score => {
    const {maths, physics} = score
    return maths + physics
  }

  const assocTotalToScore = (total, score) => ({...score, total})

  const calculateAndAssocTotalToScore = chainRamda(
    assocTotalToScore,
    calculateTotal
  )
  expect(() => calculateAndAssocTotalToScore(score)).toThrow()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {chain} from 'rambda'

const list = [1, 2, 3]
const fn = (x: number) => [`${x}`, `${x}`]

describe('R.chain', () => {
  it('without passing type', () => {
    const result = chain(fn, list)
    result // $ExpectType string[]

    const curriedResult = chain(fn)(list)
    curriedResult // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#chain)

### clamp

Restrict a number `input` to be within `min` and `max` limits.

If `input` is bigger than `max`, then the result is `max`.

If `input` is smaller than `min`, then the result is `min`.

```javascript
const result = [
  R.clamp(0, 10, 5), 
  R.clamp(0, 10, -1),
  R.clamp(0, 10, 11)
]
// => [5, 0, 10]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.clamp(0%2C%2010%2C%205)%2C%20%0A%20%20R.clamp(0%2C%2010%2C%20-1)%2C%0A%20%20R.clamp(0%2C%2010%2C%2011)%0A%5D%0A%2F%2F%20%3D%3E%20%5B5%2C%200%2C%2010%5D">Try this <strong>R.clamp</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#clamp)

### clone

It creates a deep copy of the `input`, which may contain (nested) Arrays and Objects, Numbers, Strings, Booleans and Dates.

```javascript
const objects = [{a: 1}, {b: 2}];
const objectsClone = R.clone(objects);

const result = [
  R.equals(objects, objectsClone),
  R.equals(objects[0], objectsClone[0]),
] // => [ true, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20objects%20%3D%20%5B%7Ba%3A%201%7D%2C%20%7Bb%3A%202%7D%5D%3B%0Aconst%20objectsClone%20%3D%20R.clone(objects)%3B%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.equals(objects%2C%20objectsClone)%2C%0A%20%20R.equals(objects%5B0%5D%2C%20objectsClone%5B0%5D)%2C%0A%5D%20%2F%2F%20%3D%3E%20%5B%20true%2C%20true%20%5D">Try this <strong>R.clone</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#clone)

### complement

It returns `inverted` version of `origin` function that accept `input` as argument.

The return value of `inverted` is the negative boolean value of `origin(input)`.

```javascript
const origin = x => x > 5
const inverted = complement(origin)

const result = [
  origin(7),
  inverted(7)
] => [ true, false ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20origin%20%3D%20x%20%3D%3E%20x%20%3E%205%0Aconst%20inverted%20%3D%20complement(origin)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20origin(7)%2C%0A%20%20inverted(7)%0A%5D%20%3D%3E%20%5B%20true%2C%20false%20%5D">Try this <strong>R.complement</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#complement)

### compose

It performs right-to-left function composition.

```javascript
const result = R.compose(
  R.map(x => x * 2),
  R.filter(x => x > 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try this <strong>R.compose</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#compose)

### concat

It returns a new string or array, which is the result of merging `x` and `y`.

```javascript
R.concat([1, 2])([3, 4]) // => [1, 2, 3, 4]
R.concat('foo', 'bar') // => 'foobar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.concat(%5B1%2C%202%5D)(%5B3%2C%204%5D)%20%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20result%20%3D%20R.concat('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'foobar'">Try this <strong>R.concat</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#concat)

### cond

It takes list with `conditions` and returns a new function `fn` that expects `input` as argument. 

This function will start evaluating the `conditions` in order to find the first winner(order of conditions matter). 

The winner is this condition, which left side returns `true` when `input` is its argument. Then the evaluation of the right side of the winner will be the final result.

If no winner is found, then `fn` returns `undefined`.

```javascript
const fn = R.cond([
  [ x => x > 25, R.always('more than 25') ],
  [ x => x > 15, R.always('more than 15') ],
  [ R.T, x => `${x} is nothing special` ],
])

const result = [
  fn(30),
  fn(20),
  fn(10),
] 
// => ['more than 25', 'more than 15', '10 is nothing special']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.cond(%5B%0A%20%20%5B%20x%20%3D%3E%20x%20%3E%2025%2C%20R.always('more%20than%2025')%20%5D%2C%0A%20%20%5B%20x%20%3D%3E%20x%20%3E%2015%2C%20R.always('more%20than%2015')%20%5D%2C%0A%20%20%5B%20R.T%2C%20x%20%3D%3E%20%60%24%7Bx%7D%20is%20nothing%20special%60%20%5D%2C%0A%5D)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fn(30)%2C%0A%20%20fn(20)%2C%0A%20%20fn(10)%2C%0A%5D%20%0A%2F%2F%20%3D%3E%20%5B'more%20than%2025'%2C%20'more%20than%2015'%2C%20'10%20is%20nothing%20special'%5D">Try this <strong>R.cond</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#cond)

### converge

Accepts a converging function and a list of branching functions and returns a new function. When invoked, this new function is applied to some arguments, each branching function is applied to those same arguments. The results of each branching function are passed as arguments to the converging function to produce the return value.

> :boom: Explanation is taken from `Ramda` documentation

```javascript
const result = R.converge(R.multiply)([ R.add(1), R.add(3) ])(2)
// => 15
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.converge(R.multiply)(%5B%20R.add(1)%2C%20R.add(3)%20%5D)(2)%0A%2F%2F%20%3D%3E%2015">Try this <strong>R.converge</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#converge)

### curry

It expects a function as input and returns its curried version.

```javascript
const fn = (a, b, c) => a + b + c
const curried = R.curry(fn)
const sum = curried(1,2)

const result = sum(3) // => 6
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(a%2C%20b%2C%20c)%20%3D%3E%20a%20%2B%20b%20%2B%20c%0Aconst%20curried%20%3D%20R.curry(fn)%0Aconst%20sum%20%3D%20curried(1%2C2)%0A%0Aconst%20result%20%3D%20sum(3)%20%2F%2F%20%3D%3E%206">Try this <strong>R.curry</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#curry)

### curryN

It returns a curried equivalent of the provided function, with the specified arity.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#curryN)

### dec

It decrements a number.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dec)

### defaultTo

```typescript

defaultTo<T>(defaultValue: T, input: T | null | undefined): T
```

It returns `defaultValue`, if all of `inputArguments` are `undefined`, `null` or `NaN`.

Else, it returns the first truthy `inputArguments` instance(from left to right).

> :boom: Rambda's **defaultTo** accept indefinite number of arguments when non curried, i.e. `R.defaultTo(2, foo, bar, baz)`.

```javascript
R.defaultTo('foo', 'bar') // => 'bar'
R.defaultTo('foo', undefined) // => 'foo'

// Important - emtpy string is not falsy value(same as Ramda)
R.defaultTo('foo', '') // => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.defaultTo('foo'%2C%20'bar')%20%2F%2F%20%3D%3E%20'bar'%0AR.defaultTo('foo'%2C%20undefined)%20%2F%2F%20%3D%3E%20'foo'%0A%0A%2F%2F%20Important%20-%20emtpy%20string%20is%20not%20falsy%20value(same%20as%20Ramda)%0Aconst%20result%20%3D%20R.defaultTo('foo'%2C%20'')%20%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.defaultTo</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
defaultTo<T>(defaultValue: T, input: T | null | undefined): T;
defaultTo<T>(defaultValue: T): (input: T | null | undefined) => T;
```

</details>

<details>

<summary><strong>R.defaultTo</strong> source</summary>

```javascript
function isFalsy(input) {
  return (
    input === undefined || input === null || Number.isNaN(input) === true
  )
}

export function defaultTo(defaultArgument, input) {
  if (arguments.length === 1) {
    return _input => defaultTo(defaultArgument, _input)
  }

  return isFalsy(input) ? defaultArgument : input
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {defaultTo} from './defaultTo'

test('with undefined', () => {
  expect(defaultTo('foo')(undefined)).toEqual('foo')
})

test('with null', () => {
  expect(defaultTo('foo')(null)).toEqual('foo')
})

test('with NaN', () => {
  expect(defaultTo('foo')(NaN)).toEqual('foo')
})

test('with empty string', () => {
  expect(defaultTo('foo', '')).toEqual('')
})

test('with false', () => {
  expect(defaultTo('foo', false)).toEqual(false)
})

test('when inputArgument passes initial check', () => {
  expect(defaultTo('foo', 'bar')).toEqual('bar')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {defaultTo} from 'rambda'

describe('R.defaultTo with Ramda spec', () => {
  it('happy', () => {
    const result = defaultTo('foo', '')
    result // $ExpectType "" | "foo"
  })
  it('with explicit type', () => {
    const result = defaultTo<string>('foo', null)
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 48.91%</summary>

```text
const R = require('../../dist/rambda.js')

const input = [null, undefined, 5]

const defaultTo = [
  {
    label: 'Rambda',
    fn: () => {
      R.defaultTo(3, input[0])
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.defaultTo(3, input[0])
    },
  },
  {
    label: 'Rambda with multiple arguments',
    fn: () => {
      R.defaultTo(3, ...input)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#defaultTo)

### difference

```typescript

difference<T>(a: T[], b: T[]): T[]
```

It returns the uniq set of all elements in the first list `a` not contained in the second list `b`.

`R.equals` is used to determine equality.

```javascript
const a = [ 1, 2, 3, 4 ]
const b = [ 3, 4, 5, 6 ]

const result = difference(a, b)
// => [ 1, 2 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20a%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20b%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20difference(a%2C%20b)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%20%5D">Try this <strong>R.difference</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
difference<T>(a: T[], b: T[]): T[];
difference<T>(a: T[]): (b: T[]) => T[];
```

</details>

<details>

<summary><strong>R.difference</strong> source</summary>

```javascript
import {includes} from './includes'
import {uniq} from './uniq'

export function difference(a, b) {
  if (arguments.length === 1) return _b => difference(a, _b)

  return uniq(a).filter(aInstance => !includes(aInstance, b))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {difference} from './difference'
import {difference as differenceRamda} from 'ramda'

test('difference', () => {
  const a = [1, 2, 3, 4]
  const b = [3, 4, 5, 6]
  expect(difference(a)(b)).toEqual([1, 2])

  expect(difference([], [])).toEqual([])
})

test('difference with objects', () => {
  const a = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
  const b = [{id: 3}, {id: 4}, {id: 5}, {id: 6}]
  expect(difference(a, b)).toEqual([{id: 1}, {id: 2}])
})

test('no duplicates in first list', () => {
  const M2 = [1, 2, 3, 4, 1, 2, 3, 4]
  const N2 = [3, 3, 4, 4, 5, 5, 6, 6]
  expect(difference(M2, N2)).toEqual([1, 2])
})

test('should use R.equals', () => {
  expect(difference([1], [1]).length).toEqual(0)
  expect(differenceRamda([NaN], [NaN]).length).toEqual(0)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {difference} from 'rambda'

const list1 = [1, 2, 3]
const list2 = [1, 2, 4]

describe('R.difference', () => {
  it('happy', () => {
    const result = difference(list1, list2)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = difference(list1)(list2)

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#difference)

### dissoc

It returns a new object that does not contain property `prop`.

```javascript
R.dissoc('b', {a: 1, b: 2, c: 3})
// => {a: 1, c: 3}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dissoc('b'%2C%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20c%3A%203%7D">Try this <strong>R.dissoc</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dissoc)

### divide

```javascript
R.divide(71, 100) // => 0.71
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.divide(71%2C%20100)%20%2F%2F%20%3D%3E%200.71">Try this <strong>R.divide</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#divide)

### drop

```typescript

drop<T>(howMany: number, input: T[]): T[]
```

It returns `howMany` items dropped from beginning of list or string `input`.

```javascript
R.drop(2, ['foo', 'bar', 'baz']) // => ['baz']
R.drop(2, 'foobar')  // => 'obar'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.drop(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'baz'%5D%0Aconst%20result%20%3D%20R.drop(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'obar'">Try this <strong>R.drop</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
drop<T>(howMany: number, input: T[]): T[];
drop(howMany: number, input: string): string;
drop<T>(howMany: number): {
  <T>(input: T[]): T[];
  (input: string): string;
};
```

</details>

<details>

<summary><strong>R.drop</strong> source</summary>

```javascript
export function drop(howManyToDrop, listOrString) {
  if (arguments.length === 1) return _list => drop(howManyToDrop, _list)

  return listOrString.slice(howManyToDrop > 0 ? howManyToDrop : 0)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import {drop} from './drop'

test('with array', () => {
  expect(drop(2)(['foo', 'bar', 'baz'])).toEqual(['baz'])
  expect(drop(3, ['foo', 'bar', 'baz'])).toEqual([])
  expect(drop(4, ['foo', 'bar', 'baz'])).toEqual([])
})

test('with string', () => {
  expect(drop(3, 'rambda')).toEqual('bda')
})

test('with non-positive count', () => {
  expect(drop(0, [1, 2, 3])).toEqual([1, 2, 3])
  expect(drop(-1, [1, 2, 3])).toEqual([1, 2, 3])
  expect(drop(-Infinity, [1, 2, 3])).toEqual([1, 2, 3])
})

test('should return copy', () => {
  const xs = [1, 2, 3]

  assert.notStrictEqual(drop(0, xs), xs)
  assert.notStrictEqual(drop(-1, xs), xs)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {drop} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.drop - array', () => {
  it('happy', () => {
    const result = drop(howMany, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = drop(howMany)(list)
    result // $ExpectType number[]
  })
})

describe('R.drop - string', () => {
  it('happy', () => {
    const result = drop(howMany, str)
    result // $ExpectType string
  })
  it('curried', () => {
    const result = drop(howMany)(str)
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 82.35%</summary>

```text
const R = require('../../dist/rambda.js')

const input = [1, 2, 3, 4]

const drop = [
  {
    label: 'Rambda',
    fn: () => {
      R.drop(3, input)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.drop(3, input)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#drop)

### dropLast

```typescript

dropLast<T>(howMany: number, input: T[]): T[]
```

It returns `howMany` items dropped from the end of list or string `input`.

```javascript
R.dropLast(2, ['foo', 'bar', 'baz']) // => ['foo']
R.dropLast(2, 'foobar')  // => 'foob'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.dropLast(2%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'foo'%5D%0Aconst%20result%20%3D%20R.dropLast(2%2C%20'foobar')%20%20%2F%2F%20%3D%3E%20'foob'">Try this <strong>R.dropLast</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
dropLast<T>(howMany: number, input: T[]): T[];
dropLast(howMany: number, input: string): string;
dropLast<T>(howMany: number): {
  <T>(input: T[]): T[];
  (input: string): string;
};
```

</details>

<details>

<summary><strong>R.dropLast</strong> source</summary>

```javascript
export function dropLast(howManyToDrop, listOrString) {
  if (arguments.length === 1) {
    return _listOrString => dropLast(howManyToDrop, _listOrString)
  }

  return howManyToDrop > 0
    ? listOrString.slice(0, -howManyToDrop)
    : listOrString.slice()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import {dropLast} from './dropLast'

test('with array', () => {
  expect(dropLast(2)(['foo', 'bar', 'baz'])).toEqual(['foo'])
  expect(dropLast(3, ['foo', 'bar', 'baz'])).toEqual([])
  expect(dropLast(4, ['foo', 'bar', 'baz'])).toEqual([])
})

test('with string', () => {
  expect(dropLast(3, 'rambda')).toEqual('ram')
})

test('with non-positive count', () => {
  expect(dropLast(0, [1, 2, 3])).toEqual([1, 2, 3])
  expect(dropLast(-1, [1, 2, 3])).toEqual([1, 2, 3])
  expect(dropLast(-Infinity, [1, 2, 3])).toEqual([1, 2, 3])
})

test('should return copy', () => {
  const xs = [1, 2, 3]

  assert.notStrictEqual(dropLast(0, xs), xs)
  assert.notStrictEqual(dropLast(-1, xs), xs)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {dropLast} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.dropLast - array', () => {
  it('happy', () => {
    const result = dropLast(howMany, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = dropLast(howMany)(list)
    result // $ExpectType number[]
  })
})

describe('R.dropLast - string', () => {
  it('happy', () => {
    const result = dropLast(howMany, str)
    result // $ExpectType string
  })
  it('curried', () => {
    const result = dropLast(howMany)(str)
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 86.74%</summary>

```text
const R = require('../../dist/rambda.js')

const input = [1, 2, 3, 4]

const dropLast = [
  {
    label: 'Rambda',
    fn: () => {
      R.dropLast(3, input)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.dropLast(3, input)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLast)

### dropLastWhile

```javascript
const list = [1, 2, 3, 4, 5];
const predicate = x => x >= 3

const result = dropLastWhile(predicate, list);
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%3B%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%3D%203%0A%0Aconst%20result%20%3D%20dropLastWhile(predicate%2C%20list)%3B%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.dropLastWhile</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropLastWhile)

### dropRepeats

```typescript

dropRepeats<T>(list: T[]): T[]
```

It removes any successive duplicates according to `R.equals`.

```javascript
const result = R.dropRepeats([
  1, 
  1, 
  {a: 1}, 
  {a:1}, 
  1
])
// => [1, {a: 1}, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.dropRepeats(%5B%0A%20%201%2C%20%0A%20%201%2C%20%0A%20%20%7Ba%3A%201%7D%2C%20%0A%20%20%7Ba%3A1%7D%2C%20%0A%20%201%0A%5D)%0A%2F%2F%20%3D%3E%20%5B1%2C%20%7Ba%3A%201%7D%2C%201%5D">Try this <strong>R.dropRepeats</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
dropRepeats<T>(list: T[]): T[];
```

</details>

<details>

<summary><strong>R.dropRepeats</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {equals} from './equals'

export function dropRepeats(list) {
  if (!_isArray(list)) {
    throw new Error(`${list} is not a list`)
  }

  const toReturn = []

  list.reduce((prev, current) => {
    if (!equals(prev, current)) {
      toReturn.push(current)
    }

    return current
  }, undefined)

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {dropRepeats as dropRepeatsRamda} from 'ramda'

import {compareCombinations} from './_internals/testUtils'
import {add} from './add'
import {dropRepeats} from './dropRepeats'

const list = [1, 2, 2, 2, 3, 4, 4, 5, 5, 3, 2, 2, {a: 1}, {a: 1}]
const listClean = [1, 2, 3, 4, 5, 3, 2, {a: 1}]

test('happy', () => {
  const result = dropRepeats(list)
  expect(result).toEqual(listClean)
})

const possibleLists = [
  [add(1), async () => {}, [1], [1], [2], [2]],
  [add(1), add(1), add(2)],
  [],
  1,
  /foo/g,
  Promise.resolve(1),
]

describe('brute force', () => {
  compareCombinations({
    firstInput: possibleLists,
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 1,
          "SHOULD_NOT_THROW": 3,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 6,
        }
      `)
    },
    fn: dropRepeats,
    fnRamda: dropRepeatsRamda,
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {dropRepeats} from 'rambda'

describe('R.dropRepeats', () => {
  it('happy', () => {
    const result = dropRepeats([1, 2, 2, 3])

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeats)

### dropRepeatsWith

```javascript
const list = [{a:1,b:2}, {a:1,b:3}, {a:2, b:4}]
const result = R.dropRepeatsWith(R.prop('a'), list)

// => [{a:1,b:2}, {a:2, b:4}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A1%2Cb%3A3%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D%0Aconst%20result%20%3D%20R.dropRepeatsWith(R.prop('a')%2C%20list)%0A%0A%2F%2F%20%3D%3E%20%5B%7Ba%3A1%2Cb%3A2%7D%2C%20%7Ba%3A2%2C%20b%3A4%7D%5D">Try this <strong>R.dropRepeatsWith</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropRepeatsWith)

### dropWhile

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x < 3
const result = R.dropWhile(predicate, list)
// => [3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3C%203%0Aconst%20result%20%3D%20R.dropWhile(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try this <strong>R.dropWhile</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#dropWhile)

### either

```typescript

either(firstPredicate: Pred, secondPredicate: Pred): Pred
```

It returns a new `predicate` function from `firstPredicate` and `secondPredicate` inputs.

This `predicate` function will return `true`, if any of the two input predicates return `true`.

```javascript
const firstPredicate = x => x > 10
const secondPredicate = x => x % 2 === 0
const predicate = R.either(firstPredicate, secondPredicate)

const result = [
  predicate(15),
  predicate(8),
  predicate(7),
]
// => [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20firstPredicate%20%3D%20x%20%3D%3E%20x%20%3E%2010%0Aconst%20secondPredicate%20%3D%20x%20%3D%3E%20x%20%25%202%20%3D%3D%3D%200%0Aconst%20predicate%20%3D%20R.either(firstPredicate%2C%20secondPredicate)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20predicate(15)%2C%0A%20%20predicate(8)%2C%0A%20%20predicate(7)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try this <strong>R.either</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
either(firstPredicate: Pred, secondPredicate: Pred): Pred;
either<T>(firstPredicate: Predicate<T>, secondPredicate: Predicate<T>): Predicate<T>;
either<T>(firstPredicate: Predicate<T>): (secondPredicate: Predicate<T>) => Predicate<T>;
either(firstPredicate: Pred): (secondPredicate: Pred) => Pred;
```

</details>

<details>

<summary><strong>R.either</strong> source</summary>

```javascript
export function either(firstPredicate, secondPredicate) {
  if (arguments.length === 1) {
    return _secondPredicate => either(firstPredicate, _secondPredicate)
  }

  return (...input) =>
    Boolean(firstPredicate(...input) || secondPredicate(...input))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {either} from './either'

test('with multiple inputs', () => {
  const between = function (a, b, c) {
    return a < b && b < c
  }
  const total20 = function (a, b, c) {
    return a + b + c === 20
  }
  const fn = either(between, total20)
  expect(fn(7, 8, 5)).toBeTrue()
})

test('skip evaluation of the second expression', () => {
  let effect = 'not evaluated'
  const F = function () {
    return true
  }
  const Z = function () {
    effect = 'Z got evaluated'
  }
  either(F, Z)()

  expect(effect).toBe('not evaluated')
})

test('case 1', () => {
  const firstFn = val => val > 0
  const secondFn = val => val * 5 > 10

  expect(either(firstFn, secondFn)(1)).toBeTrue()
})

test('case 2', () => {
  const firstFn = val => val > 0
  const secondFn = val => val === -10
  const fn = either(firstFn)(secondFn)

  expect(fn(-10)).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {either} from 'rambda'

describe('R.either', () => {
  it('with passed type', () => {
    const fn = either<number>(
      x => x > 1,
      x => x % 2 === 0
    )
    fn // $ExpectType Predicate<number>
    const result = fn(2) // $ExpectType boolean
    result // $ExpectType boolean
  })
  it('with passed type - curried', () => {
    const fn = either<number>(x => x > 1)(x => x % 2 === 0)
    fn // $ExpectType Predicate<number>
    const result = fn(2)
    result // $ExpectType boolean
  })
  it('no type passed', () => {
    const fn = either(
      x => {
        x // $ExpectType any
        return x > 1
      },
      x => {
        x // $ExpectType any
        return x % 2 === 0
      }
    )
    const result = fn(2)
    result // $ExpectType boolean
  })
  it('no type passed - curried', () => {
    const fn = either((x: number) => {
      x // $ExpectType number
      return x > 1
    })((x: number) => {
      x // $ExpectType number
      return x % 2 === 0
    })
    const result = fn(2)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#either)

### endsWith

```typescript

endsWith(target: string, iterable: string): boolean
```

When iterable is a string, then it behaves as `String.prototype.endsWith`.
When iterable is a list, then it uses R.equals to determine if the target list ends in the same way as the given target.

```javascript
const str = 'foo-bar'
const list = [{a:1}, {a:2}, {a:3}]

const result = [
  R.endsWith('bar', str),
  R.endsWith([{a:1}, {a:2}], list)
]
// => [true, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0Aconst%20list%20%3D%20%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%2C%20%7Ba%3A3%7D%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.endsWith('bar'%2C%20str)%2C%0A%20%20R.endsWith(%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%5D%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%5D">Try this <strong>R.endsWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
endsWith(target: string, iterable: string): boolean;
endsWith(target: string): (iterable: string) => boolean;
endsWith<T>(target: T[], list: T[]): boolean;
endsWith<T>(target: T[]): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.endsWith</strong> source</summary>

```javascript
import {equals} from './equals.js'
import {_isArray} from './_internals/_isArray.js'

export function endsWith(target, iterable) {
  if (arguments.length === 1) return _iterable => endsWith(target, _iterable)

  if (typeof iterable === 'string') {
    return iterable.endsWith(target)
  }
  if (!_isArray(target)) return false

  const diff = iterable.length - target.length
  let correct = true
  const filtered = target.filter((x, index) => {
    if (!correct) return false
    const result = equals(x, iterable[index + diff])
    if (!result) correct = false
    return result
  })

  return filtered.length === target.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {endsWith} from './endsWith'
import {endsWith as endsWithRamda} from 'ramda'
import {compareCombinations} from './_internals/testUtils'

test('with string', () => {
  expect(endsWith('bar', 'foo-bar')).toBeTrue()
  expect(endsWith('baz')('foo-bar')).toBeFalse()
})

test('use R.equals with array', () => {
  const list = [{a: 1}, {a: 2}, {a: 3}]
  expect(endsWith({a: 3}, list)).toBeFalse(),
    expect(endsWith([{a: 3}], list)).toBeTrue()
  expect(endsWith([{a: 2}, {a: 3}], list)).toBeTrue()
  expect(endsWith(list, list)).toBeTrue()
  expect(endsWith([{a: 1}], list)).toBeFalse()
})

export const possibleTargets = [
  NaN,
  [NaN],
  /foo/,
  [/foo/],
  Promise.resolve(1),
  [Promise.resolve(1)],
  Error('foo'),
  [Error('foo')],
]

export const possibleIterables = [
  [Promise.resolve(1), Promise.resolve(2)],
  [/foo/, /bar/],
  [NaN],
  [Error('foo'), Error('bar')],
]

describe('brute force', () => {
  compareCombinations({
    fn: endsWith,
    fnRamda: endsWithRamda,
    firstInput: possibleTargets,
    secondInput: possibleIterables,
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 32,
        }
      `)
    },
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {endsWith} from 'rambda'

describe('R.endsWith - array as iterable', () => {
  const target = [{a: 2}]
  const iterable = [{a: 1}, {a: 2}]
  it('happy', () => {
    const result = endsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(iterable)

    result // $ExpectType boolean
  })
})

describe('R.endsWith - string as iterable', () => {
  const target = 'bar'
  const iterable = 'foo bar'
  it('happy', () => {
    const result = endsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = endsWith(target)(iterable)

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#endsWith)

### eqProps

It returns `true` if property `prop` in `obj1` is equal to property `prop` in `obj2` according to `R.equals`.

```javascript
const obj1 = {a: 1, b:2}
const obj2 = {a: 1, b:3}
const result = R.eqProps('a', obj1, obj2)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj1%20%3D%20%7Ba%3A%201%2C%20b%3A2%7D%0Aconst%20obj2%20%3D%20%7Ba%3A%201%2C%20b%3A3%7D%0Aconst%20result%20%3D%20R.eqProps('a'%2C%20obj1%2C%20obj2)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.eqProps</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#eqProps)

### equals

```typescript

equals<T>(x: T, y: T): boolean
```

It deeply compares `x` and `y` and returns `true` if they are equal.

> :boom: It doesn't handle cyclical data structures and functions

```javascript
R.equals(
  [1, {a:2}, [{b: 3}]],
  [1, {a:2}, [{b: 3}]]
) // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.equals(%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%2C%0A%20%20%5B1%2C%20%7Ba%3A2%7D%2C%20%5B%7Bb%3A%203%7D%5D%5D%0Aconst%20result%20%3D%20)%20%2F%2F%20%3D%3E%20true">Try this <strong>R.equals</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
equals<T>(x: T, y: T): boolean;
equals<T>(x: T): (y: T) => boolean;
```

</details>

<details>

<summary><strong>R.equals</strong> source</summary>

```javascript
import {type} from './type'
import {_isArray} from './_internals/_isArray'

export function _lastIndexOf(valueToFind, list) {
  if (!_isArray(list)) {
    throw new Error(`Cannot read property 'indexOf' of ${list}`)
  }
  const typeOfValue = type(valueToFind)
  if (!['Object', 'Array', 'NaN', 'RegExp'].includes(typeOfValue))
    return list.lastIndexOf(valueToFind)

  const {length} = list
  let index = length
  let foundIndex = -1

  while (--index > -1 && foundIndex === -1) {
    if (equals(list[index], valueToFind)) {
      foundIndex = index
    }
  }

  return foundIndex
}

export function _indexOf(valueToFind, list) {
  if (!_isArray(list)) {
    throw new Error(`Cannot read property 'indexOf' of ${list}`)
  }
  const typeOfValue = type(valueToFind)
  if (!['Object', 'Array', 'NaN', 'RegExp'].includes(typeOfValue))
    return list.indexOf(valueToFind)

  let index = -1
  let foundIndex = -1
  const {length} = list

  while (++index < length && foundIndex === -1) {
    if (equals(list[index], valueToFind)) {
      foundIndex = index
    }
  }

  return foundIndex
}

function _arrayFromIterator(iter) {
  const list = []
  let next
  while (!(next = iter.next()).done) {
    list.push(next.value)
  }
  return list
}

function _equalsSets(a, b) {
  if (a.size !== b.size) {
    return false
  }
  const aList = _arrayFromIterator(a.values())
  const bList = _arrayFromIterator(b.values())

  const filtered = aList.filter(
    aInstance => _indexOf(aInstance, bList) === -1
  )
  return filtered.length === 0
}

function parseError(maybeError) {
  const typeofError = maybeError.__proto__.toString()
  if (!['Error', 'TypeError'].includes(typeofError)) return []

  return [typeofError, maybeError.message]
}

function parseDate(maybeDate) {
  if (!maybeDate.toDateString) return [false]

  return [true, maybeDate.getTime()]
}

function parseRegex(maybeRegex) {
  if (maybeRegex.constructor !== RegExp) return [false]

  return [true, maybeRegex.toString()]
}

function equalsSets(a, b) {
  if (a.size !== b.size) {
    return false
  }
  const aList = _arrayFromIterator(a.values())
  const bList = _arrayFromIterator(b.values())

  const filtered = aList.filter(
    aInstance => _indexOf(aInstance, bList) === -1
  )
  return filtered.length === 0
}

export function equals(a, b) {
  if (arguments.length === 1) return _b => equals(a, _b)

  const aType = type(a)

  if (aType !== type(b)) return false
  if (aType === 'Function') {
    return a.name === undefined ? false : a.name === b.name
  }

  if (['NaN', 'Undefined', 'Null'].includes(aType)) return true

  if (aType === 'Number') {
    if (Object.is(-0, a) !== Object.is(-0, b)) return false

    return a.toString() === b.toString()
  }

  if (['String', 'Boolean'].includes(aType)) {
    return a.toString() === b.toString()
  }

  if (aType === 'Array') {
    const aClone = Array.from(a)
    const bClone = Array.from(b)

    if (aClone.toString() !== bClone.toString()) {
      return false
    }

    let loopArrayFlag = true
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag) {
        if (
          aCloneInstance !== bClone[aCloneIndex] &&
          !equals(aCloneInstance, bClone[aCloneIndex])
        ) {
          loopArrayFlag = false
        }
      }
    })

    return loopArrayFlag
  }

  const aRegex = parseRegex(a)
  const bRegex = parseRegex(b)

  if (aRegex[0]) {
    return bRegex[0] ? aRegex[1] === bRegex[1] : false
  } else if (bRegex[0]) return false

  const aDate = parseDate(a)
  const bDate = parseDate(b)

  if (aDate[0]) {
    return bDate[0] ? aDate[1] === bDate[1] : false
  } else if (bDate[0]) return false

  const aError = parseError(a)
  const bError = parseError(b)

  if (aError[0]) {
    return bError[0]
      ? aError[0] === bError[0] && aError[1] === bError[1]
      : false
  }
  if (aType === 'Set') {
    return _equalsSets(a, b)
  }
  if (aType === 'Object') {
    const aKeys = Object.keys(a)

    if (aKeys.length !== Object.keys(b).length) {
      return false
    }

    let loopObjectFlag = true
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag) {
        const aValue = a[aKeyInstance]
        const bValue = b[aKeyInstance]

        if (aValue !== bValue && !equals(aValue, bValue)) {
          loopObjectFlag = false
        }
      }
    })

    return loopObjectFlag
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {equals} from './equals'
import {equals as equalsRamda} from 'ramda'
import {compareCombinations} from './_internals/testUtils'
import {variousTypes} from './benchmarks/_utils'

test('compare functions', () => {
  function foo() {}
  function bar() {}
  const baz = () => {}

  const expectTrue = equals(foo, foo)
  const expectFalseFirst = equals(foo, bar)
  const expectFalseSecond = equals(foo, baz)

  expect(expectTrue).toBeTrue()
  expect(expectFalseFirst).toBeFalse()
  expect(expectFalseSecond).toBeFalse()
})

test('with array of objects', () => {
  const list1 = [{a: 1}, [{b: 2}]]
  const list2 = [{a: 1}, [{b: 2}]]
  const list3 = [{a: 1}, [{b: 3}]]

  expect(equals(list1, list2)).toBeTrue()
  expect(equals(list1, list3)).toBeFalse()
})

test('with regex', () => {
  expect(equals(/s/, /s/)).toEqual(true)
  expect(equals(/s/, /d/)).toEqual(false)
  expect(equals(/a/gi, /a/gi)).toEqual(true)
  expect(equals(/a/gim, /a/gim)).toEqual(true)
  expect(equals(/a/gi, /a/i)).toEqual(false)
})

test('not a number', () => {
  expect(equals([NaN], [NaN])).toBeTrue()
})

test('new number', () => {
  expect(equals(new Number(0), new Number(0))).toEqual(true)
  expect(equals(new Number(0), new Number(1))).toEqual(false)
  expect(equals(new Number(1), new Number(0))).toEqual(false)
})

test('new string', () => {
  expect(equals(new String(''), new String(''))).toEqual(true)
  expect(equals(new String(''), new String('x'))).toEqual(false)
  expect(equals(new String('x'), new String(''))).toEqual(false)
  expect(equals(new String('foo'), new String('foo'))).toEqual(true)
  expect(equals(new String('foo'), new String('bar'))).toEqual(false)
  expect(equals(new String('bar'), new String('foo'))).toEqual(false)
})

test('new Boolean', () => {
  expect(equals(new Boolean(true), new Boolean(true))).toEqual(true)
  expect(equals(new Boolean(false), new Boolean(false))).toEqual(true)
  expect(equals(new Boolean(true), new Boolean(false))).toEqual(false)
  expect(equals(new Boolean(false), new Boolean(true))).toEqual(false)
})

test('new Error', () => {
  expect(equals(new Error('XXX'), {})).toEqual(false)
  expect(equals(new Error('XXX'), new TypeError('XXX'))).toEqual(false)
  expect(equals(new Error('XXX'), new Error('YYY'))).toEqual(false)
  expect(equals(new Error('XXX'), new Error('XXX'))).toEqual(true)
  expect(equals(new Error('XXX'), new TypeError('YYY'))).toEqual(false)
})

test('with dates', () => {
  expect(equals(new Date(0), new Date(0))).toEqual(true)
  expect(equals(new Date(1), new Date(1))).toEqual(true)
  expect(equals(new Date(0), new Date(1))).toEqual(false)
  expect(equals(new Date(1), new Date(0))).toEqual(false)
  expect(equals(new Date(0), {})).toEqual(false)
  expect(equals({}, new Date(0))).toEqual(false)
})

test('ramda spec', () => {
  expect(equals({}, {})).toEqual(true)

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 2,
      }
    )
  ).toEqual(true)

  expect(
    equals(
      {
        a: 2,
        b: 3,
      },
      {
        b: 3,
        a: 2,
      }
    )
  ).toEqual(true)

  expect(
    equals(
      {
        a: 2,
        b: 3,
      },
      {
        a: 3,
        b: 3,
      }
    )
  ).toEqual(false)

  expect(
    equals(
      {
        a: 2,
        b: 3,
        c: 1,
      },
      {
        a: 2,
        b: 3,
      }
    )
  ).toEqual(false)
})

test('works with boolean tuple', () => {
  expect(equals([true, false], [true, false])).toBeTrue()
  expect(equals([true, false], [true, true])).toBeFalse()
})

test('works with equal objects within array', () => {
  const objFirst = {
    a: {
      b: 1,
      c: 2,
      d: [1],
    },
  }
  const objSecond = {
    a: {
      b: 1,
      c: 2,
      d: [1],
    },
  }

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equals(x, y)).toBeTrue()
})

test('works with different objects within array', () => {
  const objFirst = {a: {b: 1}}
  const objSecond = {a: {b: 2}}

  const x = [1, 2, objFirst, null, '', []]
  const y = [1, 2, objSecond, null, '', []]
  expect(equals(x, y)).toBeFalse()
})

test('works with undefined as second argument', () => {
  expect(equals(1, undefined)).toBeFalse()

  expect(equals(undefined, undefined)).toBeTrue()
})

test('compare sets', () => {
  const toCompareDifferent = new Set([{a: 1}, {a: 2}])
  const toCompareSame = new Set([{a: 1}, {a: 2}, {a: 1}])
  const testSet = new Set([{a: 1}, {a: 2}, {a: 1}])
  expect(equals(toCompareSame, testSet)).toBeTruthy()
  expect(equals(toCompareDifferent, testSet)).toBeFalsy()
  expect(equalsRamda(toCompareSame, testSet)).toBeTruthy()
  expect(equalsRamda(toCompareDifferent, testSet)).toBeFalsy()
})

test('compare simple sets', () => {
  const testSet = new Set(['2', '3', '3', '2', '1'])
  expect(equals(new Set(['3', '2', '1']), testSet)).toBeTruthy()
  expect(equals(new Set(['3', '2', '0']), testSet)).toBeFalsy()
})

test('various examples', () => {
  expect(equals([1, 2, 3])([1, 2, 3])).toBeTrue()

  expect(equals([1, 2, 3], [1, 2])).toBeFalse()

  expect(equals(1, 1)).toBeTrue()

  expect(equals(1, '1')).toBeFalse()

  expect(equals({}, {})).toBeTrue()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        b: 2,
        a: 1,
      }
    )
  ).toBeTrue()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        a: 1,
        b: 1,
      }
    )
  ).toBeFalse()

  expect(
    equals(
      {
        a: 1,
        b: false,
      },
      {
        a: 1,
        b: 1,
      }
    )
  ).toBeFalse()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        b: 2,
        a: 1,
        c: 3,
      }
    )
  ).toBeFalse()

  expect(
    equals(
      {
        x: {
          a: 1,
          b: 2,
        },
      },
      {
        x: {
          b: 2,
          a: 1,
          c: 3,
        },
      }
    )
  ).toBeFalse()

  expect(
    equals(
      {
        a: 1,
        b: 2,
      },
      {
        b: 3,
        a: 1,
      }
    )
  ).toBeFalse()

  expect(equals({a: {b: {c: 1}}}, {a: {b: {c: 1}}})).toBeTrue()

  expect(equals({a: {b: {c: 1}}}, {a: {b: {c: 2}}})).toBeFalse()

  expect(equals({a: {}}, {a: {}})).toBeTrue()

  expect(equals('', '')).toBeTrue()

  expect(equals('foo', 'foo')).toBeTrue()

  expect(equals('foo', 'bar')).toBeFalse()

  expect(equals(0, false)).toBeFalse()

  expect(equals(/\s/g, null)).toBeFalse()

  expect(equals(null, null)).toBeTrue()

  expect(equals(false)(null)).toBeFalse()
})

test('with custom functions', () => {
  function foo() {
    return 1
  }
  foo.prototype.toString = () => ''
  const result = equals(foo, foo)

  expect(result).toBeTrue()
})

test('with classes', () => {
  class Foo {}
  const foo = new Foo()
  const result = equals(foo, foo)

  expect(result).toBeTrue()
})

test('with negative zero', () => {
  expect(equals(-0, -0)).toBeTrue()
  expect(equals(-0, 0)).toBeFalse()
  expect(equals(0, 0)).toBeTrue()
  expect(equals(-0, 1)).toBeFalse()
})

const possibleInputs = variousTypes

describe('brute force', () => {
  compareCombinations({
    fn: equals,
    fnRamda: equalsRamda,
    firstInput: possibleInputs,
    secondInput: possibleInputs,
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 5,
          "SHOULD_NOT_THROW": 4,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 289,
        }
      `)
    },
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {equals} from 'rambda'

describe('R.equals', () => {
  it('happy', () => {
    const result = equals(4, 1)
    result // $ExpectType boolean
  })
  it('with object', () => {
    const foo = {a: 1}
    const bar = {a: 2}
    const result = equals(foo, bar)
    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = equals(4)(1)

    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 58.37% slower and Ramda is 96.73% slower</summary>

```text
const R = require('../../dist/rambda.js')

const limit = 10000

const strings = Array(limit)
  .fill(null)
  .map(() => Math.floor(Math.random() * 1000))

const equals = [
  {
    label: 'Rambda',
    fn: () => {
      strings.forEach(x => R.equals(x, 'ss'))
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      strings.forEach(x => Ramda.equals(x, 'ss'))
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      strings.forEach(x => _.isEqual(x, 'ss'))
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#equals)

### evolve

```typescript

evolve<T, U>(rules: ((x: T) => U)[], list: T[]): U[]
```

It takes object or array of functions as set of rules. These `rules` are applied to the `iterable` input to produce the result.

> :boom: Error handling of this method differs between Ramda and Rambda. Ramda for some wrong inputs returns result and for other - it returns one of the inputs. Rambda simply throws when inputs are not correct. Full details for this mismatch are listed in `source/_snapshots/evolve.spec.js.snap` file.

```javascript
const rules = {
  foo : add(1),
  bar : add(-1),
}
const input = {
  a   : 1,
  foo : 2,
  bar : 3,
}
const result = evolve(rules, input)
const expected = {
  a   : 1,
  foo : 3,
  bar : 2,
})
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20rules%20%3D%20%7B%0A%20%20foo%20%3A%20add(1)%2C%0A%20%20bar%20%3A%20add(-1)%2C%0A%7D%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%20%20%3A%201%2C%0A%20%20foo%20%3A%202%2C%0A%20%20bar%20%3A%203%2C%0A%7D%0Aconst%20result%20%3D%20evolve(rules%2C%20input)%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%20%20%3A%201%2C%0A%20%20foo%20%3A%203%2C%0A%20%20bar%20%3A%202%2C%0A%7D)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.evolve</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
evolve<T, U>(rules: ((x: T) => U)[], list: T[]): U[];
evolve<T, U>(rules: ((x: T) => U)[]) : (list: T[]) => U[];
evolve<E extends Evolver, V extends Evolvable<E>>(rules: E, obj: V): Evolve<V, E>;
evolve<E extends Evolver>(rules: E): <V extends Evolvable<E>>(obj: V) => Evolve<V, E>;
```

</details>

<details>

<summary><strong>R.evolve</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {mapArray, mapObject} from './map'
import {type} from './type'

export function evolveArray(rules, list) {
  return mapArray(
    (x, i) => {
      if (type(rules[i]) === 'Function') {
        return rules[i](x)
      }

      return x
    },
    list,
    true
  )
}

export function evolveObject(rules, iterable) {
  return mapObject((x, prop) => {
    if (type(x) === 'Object') {
      const typeRule = type(rules[prop])
      if (typeRule === 'Function') {
        return rules[prop](x)
      }
      if (typeRule === 'Object') {
        return evolve(rules[prop], x)
      }

      return x
    }
    if (type(rules[prop]) === 'Function') {
      return rules[prop](x)
    }

    return x
  }, iterable)
}

export function evolve(rules, iterable) {
  if (arguments.length === 1) {
    return _iterable => evolve(rules, _iterable)
  }
  const rulesType = type(rules)
  const iterableType = type(iterable)

  if (iterableType !== rulesType) {
    throw new Error('iterableType !== rulesType')
  }

  if (!['Object', 'Array'].includes(rulesType)) {
    throw new Error(
      `'iterable' and 'rules' are from wrong type ${rulesType}`
    )
  }

  if (iterableType === 'Object') {
    return evolveObject(rules, iterable)
  }

  return evolveArray(rules, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {evolve as evolveRamda} from 'ramda'

import {add} from '../rambda'
import {compareCombinations, compareToRamda} from './_internals/testUtils'
import {evolve} from './evolve'

test('happy', () => {
  const rules = {
    foo: add(1),
    nested: {bar: x => Object.keys(x).length},
  }
  const input = {
    a: 1,
    foo: 2,
    nested: {bar: {z: 3}},
  }
  const result = evolve(rules, input)
  expect(result).toEqual({
    a: 1,
    foo: 3,
    nested: {bar: 1},
  })
})

test('nested rule is wrong', () => {
  const rules = {
    foo: add(1),
    nested: {bar: 10},
  }
  const input = {
    a: 1,
    foo: 2,
    nested: {bar: {z: 3}},
  }
  const result = evolve(rules)(input)
  expect(result).toEqual({
    a: 1,
    foo: 3,
    nested: {bar: {z: 3}},
  })
})

test('is recursive', () => {
  const rules = {
    nested: {
      second: add(-1),
      third: add(1),
    },
  }
  const object = {
    first: 1,
    nested: {
      second: 2,
      third: 3,
    },
  }
  const expected = {
    first: 1,
    nested: {
      second: 1,
      third: 4,
    },
  }
  const result = evolve(rules, object)
  expect(result).toEqual(expected)
})

test('ignores primitive values', () => {
  const rules = {
    n: 2,
    m: 'foo',
  }
  const object = {
    n: 0,
    m: 1,
  }
  const expected = {
    n: 0,
    m: 1,
  }
  const result = evolve(rules, object)
  expect(result).toEqual(expected)
})

test('with array', () => {
  const rules = [add(1), add(-1)]
  const list = [100, 1400]
  const expected = [101, 1399]
  const result = evolve(rules, list)
  expect(result).toEqual(expected)
})

const rulesObject = {a: add(1)}
const rulesList = [add(1)]
const possibleIterables = [null, undefined, '', 42, [], [1], {a: 1}]
const possibleRules = [...possibleIterables, rulesList, rulesObject]

describe('brute force', () => {
  compareCombinations({
    firstInput: possibleRules,
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 4,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 51,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 63,
        }
      `)
    },
    secondInput: possibleIterables,
    fn: evolve,
    fnRamda: evolveRamda,
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {evolve, add} from 'rambda'

describe('R.evolve', () => {
  it('happy', () => {
    const input = {
      foo: 2,
      nested: {
        a: 1,
        bar: 3,
      },
    }
    const rules = {
      foo: add(1),
      nested: {
        a: add(-1),
        bar: add(1),
      },
    }
    const result = evolve(rules, input)
    const curriedResult = evolve(rules)(input)

    result.nested.a // $ExpectType number
    curriedResult.nested.a // $ExpectType number
    result.nested.bar // $ExpectType number
    result.foo // $ExpectType number
  })
  it('with array', () => {
    const rules = [String, String]
    const input = [100, 1400]
    const result = evolve(rules, input)
    const curriedResult = evolve(rules)(input)
    result // $ExpectType string[]
    curriedResult // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#evolve)

### F

```typescript

F(): boolean
```

```javascript
F() // => false
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20F()%20%2F%2F%20%3D%3E%20false">Try this <strong>R.F</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
F(): boolean;
```

</details>

<details>

<summary><strong>R.F</strong> source</summary>

```javascript
export function F() {
  return false
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#F)

### filter

```typescript

filter<T>(predicate: Predicate<T>): (input: T[]) => T[]
```

It filters list or object `input` using a `predicate` function.

```javascript
const list = [3, 4, 3, 2]
const listPredicate = x => x > 2

const object = {abc: 'fo', xyz: 'bar', baz: 'foo'}
const objectPredicate = (x, prop) => x.length + prop.length > 5

const result = [
  R.filter(listPredicate, list),
  R.filter(objectPredicate, object)
]
// => [ [3, 4], { xyz: 'bar', baz: 'foo'} ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B3%2C%204%2C%203%2C%202%5D%0Aconst%20listPredicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20object%20%3D%20%7Babc%3A%20'fo'%2C%20xyz%3A%20'bar'%2C%20baz%3A%20'foo'%7D%0Aconst%20objectPredicate%20%3D%20(x%2C%20prop)%20%3D%3E%20x.length%20%2B%20prop.length%20%3E%205%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.filter(listPredicate%2C%20list)%2C%0A%20%20R.filter(objectPredicate%2C%20object)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%5B3%2C%204%5D%2C%20%7B%20xyz%3A%20'bar'%2C%20baz%3A%20'foo'%7D%20%5D">Try this <strong>R.filter</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
filter<T>(predicate: Predicate<T>): (input: T[]) => T[];
filter<T>(predicate: Predicate<T>, input: T[]): T[];
filter<T, U>(predicate: ObjectPredicate<T>): (x: Dictionary<T>) => Dictionary<T>;
filter<T>(predicate: ObjectPredicate<T>, x: Dictionary<T>): Dictionary<T>;
```

</details>

<details>

<summary><strong>R.filter</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'

export function filterObject(predicate, obj) {
  const willReturn = {}

  for (const prop in obj) {
    if (predicate(obj[prop], prop, obj)) {
      willReturn[prop] = obj[prop]
    }
  }

  return willReturn
}

export function filterArray(predicate, list, indexed = false) {
  let index = 0
  const len = list.length
  const willReturn = []

  while (index < len) {
    const predicateResult = indexed
      ? predicate(list[index], index)
      : predicate(list[index])
    if (predicateResult) {
      willReturn.push(list[index])
    }

    index++
  }

  return willReturn
}

export function filter(predicate, iterable) {
  if (arguments.length === 1)
    return _iterable => filter(predicate, _iterable)
  if (!iterable) {
    throw new Error('Incorrect iterable input')
  }

  if (_isArray(iterable)) return filterArray(predicate, iterable, false)

  return filterObject(predicate, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {T} from './T'
import {filter} from './filter'
import {filter as filterRamda} from 'ramda'

const sampleObject = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

test('happy', () => {
  const isEven = n => n % 2 === 0

  expect(filter(isEven, [1, 2, 3, 4])).toEqual([2, 4])
  expect(
    filter(isEven, {
      a: 1,
      b: 2,
      d: 3,
    })
  ).toEqual({b: 2})
})

test('predicate when input is object', () => {
  const obj = {
    a: 1,
    b: 2,
  }
  const predicate = (val, prop, inputObject) => {
    expect(inputObject).toEqual(obj)
    expect(typeof prop).toEqual('string')

    return val < 2
  }
  expect(filter(predicate, obj)).toEqual({a: 1})
})

test('with object', () => {
  const isEven = n => n % 2 === 0
  const result = filter(isEven, sampleObject)
  const expectedResult = {
    b: 2,
    d: 4,
  }

  expect(result).toEqual(expectedResult)
})

test('bad inputs difference between Ramda and Rambda', () => {
  expect(() => filter(T, null)).toThrowWithMessage(
    Error,
    `Incorrect iterable input`
  )
  expect(() => filter(T)(undefined)).toThrowWithMessage(
    Error,
    `Incorrect iterable input`
  )
  expect(() => filterRamda(T, null)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of null (reading 'filter')`
  )
  expect(() => filterRamda(T, undefined)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of undefined (reading 'filter')`
  )
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {filter} from 'rambda'

const list = [1, 2, 3]
const obj = {a: 1, b: 2}

describe('R.filter with array', () => {
  it('happy', () => {
    const result = filter<number>(x => {
      x // $ExpectType number
      return x > 1
    }, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = filter<number>(x => {
      x // $ExpectType number
      return x > 1
    })(list)
    result // $ExpectType number[]
  })
})

describe('R.filter with objects', () => {
  it('happy', () => {
    const result = filter<number>((val, prop, origin) => {
      val // $ExpectType number
      prop // $ExpectType string
      origin // $ExpectType Dictionary<number>

      return val > 1
    }, obj)
    result // $ExpectType Dictionary<number>
  })
  it('curried version requires second dummy type', () => {
    const result = filter<number, any>((val, prop, origin) => {
      val // $ExpectType number
      prop // $ExpectType string
      origin // $ExpectType Dictionary<number>

      return val > 1
    })(obj)
    result // $ExpectType Dictionary<number>
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 6.7% slower and Ramda is 72.03% slower</summary>

```text
const R = require('../../dist/rambda.js')

const arr = [1, 2, 3, 4]
const fn = x => x > 2
const filter = [
  {
    label: 'Rambda',
    fn: () => {
      R.filter(fn, arr)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.filter(fn, arr)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.filter(arr, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#filter)

### find

```typescript

find<T>(predicate: (x: T) => boolean, list: T[]): T | undefined
```

It returns the first element of `list` that satisfy the `predicate`.

If there is no such element, it returns `undefined`.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.find(predicate, list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.find(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try this <strong>R.find</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
find<T>(predicate: (x: T) => boolean, list: T[]): T | undefined;
find<T>(predicate: (x: T) => boolean): (list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.find</strong> source</summary>

```javascript
export function find(predicate, list) {
  if (arguments.length === 1) return _list => find(predicate, _list)

  let index = 0
  const len = list.length

  while (index < len) {
    const x = list[index]
    if (predicate(x)) {
      return x
    }

    index++
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {find} from './find'
import {propEq} from './propEq'

const list = [{a: 1}, {a: 2}, {a: 3}]

test('happy', () => {
  const fn = propEq('a', 2)
  expect(find(fn, list)).toEqual({a: 2})
})

test('with curry', () => {
  const fn = propEq('a', 4)
  expect(find(fn)(list)).toBeUndefined()
})

test('with empty list', () => {
  expect(find(() => true, [])).toBeUndefined()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {find} from 'rambda'

const list = [1, 2, 3]

describe('R.find', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = find(predicate, list)
    result // $ExpectType number | undefined
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = find(predicate)(list)
    result // $ExpectType number | undefined
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 85.14% slower and Lodash is 42.65% slower</summary>

```text
const R = require('../../dist/rambda.js')

const fn = x => x > 2
const list = [1, 2, 3, 4]

const find = [
  {
    label: 'Rambda',
    fn: () => {
      R.find(fn, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.find(fn, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.find(list, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#find)

### findIndex

```typescript

findIndex<T>(predicate: (x: T) => boolean, list: T[]): number
```

It returns the index of the first element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 'bar'}, {foo: 1}]

const result = R.findIndex(predicate, list)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%20'bar'%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findIndex(predicate%2C%20list)%0A%2F%2F%20%3D%3E%201">Try this <strong>R.findIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
findIndex<T>(predicate: (x: T) => boolean, list: T[]): number;
findIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.findIndex</strong> source</summary>

```javascript
export function findIndex(predicate, list) {
  if (arguments.length === 1) return _list => findIndex(predicate, _list)

  const len = list.length
  let index = -1

  while (++index < len) {
    if (predicate(list[index])) {
      return index
    }
  }

  return -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {findIndex} from './findIndex'
import {propEq} from './propEq'

const list = [{a: 1}, {a: 2}, {a: 3}]

test('happy', () => {
  expect(findIndex(propEq('a', 2), list)).toEqual(1)

  expect(findIndex(propEq('a', 1))(list)).toEqual(0)

  expect(findIndex(propEq('a', 4))(list)).toEqual(-1)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {findIndex} from 'rambda'

const list = [1, 2, 3]

describe('R.findIndex', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = findIndex(predicate, list)
    result // $ExpectType number
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = findIndex(predicate)(list)
    result // $ExpectType number
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 86.48% slower and Lodash is 72.27% slower</summary>

```text
const R = require('../../dist/rambda.js')

const fn = x => x > 2
const list = [1, 2, 3, 4]

const findIndex = [
  {
    label: 'Rambda',
    fn: () => {
      R.findIndex(fn, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.findIndex(fn, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.findIndex(list, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findIndex)

### findLast

```typescript

findLast<T>(fn: (x: T) => boolean, list: T[]): T | undefined
```

It returns the last element of `list` satisfying the `predicate` function.

If there is no such element, then `undefined` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLast(predicate, list)
// => {foo: 1}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLast(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%201%7D">Try this <strong>R.findLast</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
findLast<T>(fn: (x: T) => boolean, list: T[]): T | undefined;
findLast<T>(fn: (x: T) => boolean): (list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.findLast</strong> source</summary>

```javascript
export function findLast(predicate, list) {
  if (arguments.length === 1) return _list => findLast(predicate, _list)

  let index = list.length

  while (--index >= 0) {
    if (predicate(list[index])) {
      return list[index]
    }
  }

  return undefined
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {findLast} from './findLast'

test('happy', () => {
  const result = findLast(x => x > 1, [1, 1, 1, 2, 3, 4, 1])
  expect(result).toEqual(4)

  expect(findLast(x => x === 0, [0, 1, 1, 2, 3, 4, 1])).toEqual(0)
})

test('with curry', () => {
  expect(findLast(x => x > 1)([1, 1, 1, 2, 3, 4, 1])).toEqual(4)
})

const obj1 = {x: 100}
const obj2 = {x: 200}
const a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0]
const even = function (x) {
  return x % 2 === 0
}
const gt100 = function (x) {
  return x > 100
}
const isStr = function (x) {
  return typeof x === 'string'
}
const xGt100 = function (o) {
  return o && o.x > 100
}

test('ramda 1', () => {
  expect(findLast(even, a)).toEqual(0)
  expect(findLast(gt100, a)).toEqual(300)
  expect(findLast(isStr, a)).toEqual('cow')
  expect(findLast(xGt100, a)).toEqual(obj2)
})

test('ramda 2', () => {
  expect(findLast(even, ['zing'])).toEqual(undefined)
})

test('ramda 3', () => {
  expect(findLast(even, [2, 3, 5])).toEqual(2)
})

test('ramda 4', () => {
  expect(findLast(even, [])).toEqual(undefined)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {findLast} from 'rambda'

const list = [1, 2, 3]

describe('R.findLast', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = findLast(predicate, list)
    result // $ExpectType number | undefined
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = findLast(predicate)(list)
    result // $ExpectType number | undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findLast)

### findLastIndex

```typescript

findLastIndex<T>(predicate: (x: T) => boolean, list: T[]): number
```

It returns the index of the last element of `list` satisfying the `predicate` function.

If there is no such element, then `-1` is returned.

```javascript
const predicate = x => R.type(x.foo) === 'Number'
const list = [{foo: 0}, {foo: 1}]

const result = R.findLastIndex(predicate, list)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20predicate%20%3D%20x%20%3D%3E%20R.type(x.foo)%20%3D%3D%3D%20'Number'%0Aconst%20list%20%3D%20%5B%7Bfoo%3A%200%7D%2C%20%7Bfoo%3A%201%7D%5D%0A%0Aconst%20result%20%3D%20R.findLastIndex(predicate%2C%20list)%0A%2F%2F%20%3D%3E%201">Try this <strong>R.findLastIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
findLastIndex<T>(predicate: (x: T) => boolean, list: T[]): number;
findLastIndex<T>(predicate: (x: T) => boolean): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.findLastIndex</strong> source</summary>

```javascript
export function findLastIndex(fn, list) {
  if (arguments.length === 1) return _list => findLastIndex(fn, _list)

  let index = list.length

  while (--index >= 0) {
    if (fn(list[index])) {
      return index
    }
  }

  return -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {findLastIndex} from './findLastIndex'

test('happy', () => {
  const result = findLastIndex(x => x > 1, [1, 1, 1, 2, 3, 4, 1])

  expect(result).toEqual(5)

  expect(findLastIndex(x => x === 0, [0, 1, 1, 2, 3, 4, 1])).toEqual(0)
})

test('with curry', () => {
  expect(findLastIndex(x => x > 1)([1, 1, 1, 2, 3, 4, 1])).toEqual(5)
})

const obj1 = {x: 100}
const obj2 = {x: 200}
const a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0]
const even = function (x) {
  return x % 2 === 0
}
const gt100 = function (x) {
  return x > 100
}
const isStr = function (x) {
  return typeof x === 'string'
}
const xGt100 = function (o) {
  return o && o.x > 100
}

test('ramda 1', () => {
  expect(findLastIndex(even, a)).toEqual(15)
  expect(findLastIndex(gt100, a)).toEqual(9)
  expect(findLastIndex(isStr, a)).toEqual(3)
  expect(findLastIndex(xGt100, a)).toEqual(10)
})

test('ramda 2', () => {
  expect(findLastIndex(even, ['zing'])).toEqual(-1)
})

test('ramda 3', () => {
  expect(findLastIndex(even, [2, 3, 5])).toEqual(0)
})

test('ramda 4', () => {
  expect(findLastIndex(even, [])).toEqual(-1)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {findLastIndex} from 'rambda'

const list = [1, 2, 3]

describe('R.findLastIndex', () => {
  it('happy', () => {
    const predicate = (x: number) => x > 2
    const result = findLastIndex(predicate, list)
    result // $ExpectType number
  })
  it('curried', () => {
    const predicate = (x: number) => x > 2
    const result = findLastIndex(predicate)(list)
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#findLastIndex)

### flatten

```typescript

flatten<T>(list: any[]): T[]
```

It deeply flattens an array.

```javascript
const result = R.flatten([
  1, 
  2, 
  [3, 30, [300]], 
  [4]
])
// => [ 1, 2, 3, 30, 300, 4 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.flatten(%5B%0A%20%201%2C%20%0A%20%202%2C%20%0A%20%20%5B3%2C%2030%2C%20%5B300%5D%5D%2C%20%0A%20%20%5B4%5D%0A%5D)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%203%2C%2030%2C%20300%2C%204%20%5D">Try this <strong>R.flatten</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
flatten<T>(list: any[]): T[];
```

</details>

<details>

<summary><strong>R.flatten</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'

export function flatten(list, input) {
  const willReturn = input === undefined ? [] : input

  for (let i = 0; i < list.length; i++) {
    if (_isArray(list[i])) {
      flatten(list[i], willReturn)
    } else {
      willReturn.push(list[i])
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {flatten} from './flatten'

test('happy', () => {
  expect(flatten([1, 2, 3, [[[[[4]]]]]])).toEqual([1, 2, 3, 4])

  expect(flatten([1, [2, [[3]]], [4]])).toEqual([1, 2, 3, 4])

  expect(flatten([1, [2, [[[3]]]], [4]])).toEqual([1, 2, 3, 4])

  expect(flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]])).toEqual(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  )
})

test('readme example', () => {
  const result = flatten([1, 2, [3, 30, [300]], [4]])
  expect(result).toEqual([1, 2, 3, 30, 300, 4])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {flatten} from 'rambda'

describe('flatten', () => {
  it('happy', () => {
    const result = flatten<number>([1, 2, [3, [4]]])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 95.26% slower and Lodash is 10.27% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [1, [2, [3, 4, 6]]]

const flatten = [
  {
    label: 'Rambda',
    fn: () => {
      R.flatten(list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.flatten(list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.flatten(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flatten)

### flip

It returns function which calls `fn` with exchanged first and second argument.

> :boom: Rambda's **flip** will throw if the arity of the input function is greater or equal to 5.

```javascript
const subtractFlip = R.flip(R.subtract)

const result = [
  subtractFlip(1,7),
  R.subtract(1, 6)
]  
// => [6, -6]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20subtractFlip%20%3D%20R.flip(R.subtract)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20subtractFlip(1%2C7)%2C%0A%20%20R.subtract(1%2C%206)%0A%5D%20%20%0A%2F%2F%20%3D%3E%20%5B6%2C%20-6%5D">Try this <strong>R.flip</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#flip)

### forEach

```typescript

forEach<T>(fn: Iterator<T, void>, list: T[]): T[]
```

It applies `iterable` function over all members of `list` and returns `list`.

> :boom: It works with objects, unlike `Ramda`.

```javascript
const sideEffect = {}
const result = R.forEach(
  x => sideEffect[`foo${x}`] = x
)([1, 2])

sideEffect // => {foo1: 1, foo2: 2}
result // => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20sideEffect%20%3D%20%7B%7D%0Aconst%20result%20%3D%20R.forEach(%0A%20%20x%20%3D%3E%20sideEffect%5B%60foo%24%7Bx%7D%60%5D%20%3D%20x%0A)(%5B1%2C%202%5D)%0A%0AsideEffect%20%2F%2F%20%3D%3E%20%7Bfoo1%3A%201%2C%20foo2%3A%202%7D%0Aresult%20%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.forEach</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
forEach<T>(fn: Iterator<T, void>, list: T[]): T[];
forEach<T>(fn: Iterator<T, void>): (list: T[]) => T[];
forEach<T>(fn: ObjectIterator<T, void>, list: Dictionary<T>): Dictionary<T>;
forEach<T, U>(fn: ObjectIterator<T, void>): (list: Dictionary<T>) => Dictionary<T>;
```

</details>

<details>

<summary><strong>R.forEach</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {_keys} from './_internals/_keys'

export function forEach(fn, list) {
  if (arguments.length === 1) return _list => forEach(fn, _list)

  if (list === undefined) {
    return
  }

  if (_isArray(list)) {
    let index = 0
    const len = list.length

    while (index < len) {
      fn(list[index])
      index++
    }
  } else {
    let index = 0
    const keys = _keys(list)
    const len = keys.length

    while (index < len) {
      const key = keys[index]
      fn(list[key], key, list)
      index++
    }
  }

  return list
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {forEach} from './forEach'
import {type} from './type'

test('happy', () => {
  const sideEffect = {}
  forEach(x => (sideEffect[`foo${x}`] = x + 10))([1, 2])

  expect(sideEffect).toEqual({
    foo1: 11,
    foo2: 12,
  })
})

test('iterate over object', () => {
  const obj = {
    a: 1,
    b: [1, 2],
    c: {d: 7},
    f: 'foo',
  }
  const result = {}
  const returned = forEach((val, prop, inputObj) => {
    expect(type(inputObj)).toBe('Object')
    result[prop] = `${prop}-${type(val)}`
  })(obj)

  const expected = {
    a: 'a-Number',
    b: 'b-Array',
    c: 'c-Object',
    f: 'f-String',
  }

  expect(result).toEqual(expected)
  expect(returned).toEqual(obj)
})

test('with empty list', () => {
  const list = []
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})

test('with wrong input', () => {
  const list = undefined
  const result = forEach(x => x * x)(list)

  expect(result).toBeUndefined()
})

test('returns the input', () => {
  const list = [1, 2, 3]
  const result = forEach(x => x * x)(list)

  expect(result).toEqual(list)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {forEach} from 'rambda'

const list = [1, 2, 3]
const obj = {a: 1, b: 2}

describe('R.forEach with arrays', () => {
  it('happy', () => {
    const result = forEach(a => {
      a // $ExpectType number
    }, list)
    result // $ExpectType number[]
  })
  it('curried require an explicit typing', () => {
    const result = forEach<number>(a => {
      a // $ExpectType number
    })(list)
    result // $ExpectType number[]
  })
})

describe('R.forEach with objects', () => {
  it('happy', () => {
    const result = forEach((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    }, obj)
    result // $ExpectType Dictionary<number>
  })
  it('curried require an input typing and a dummy third typing', () => {
    // Required in order all typings to work
    const result = forEach<number, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
    })(obj)
    result // $ExpectType Dictionary<number>
  })
  it('iterator without property', () => {
    const result = forEach(a => {
      a // $ExpectType number
    }, obj)
    result // $ExpectType Dictionary<number>
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#forEach)

### fromPairs

It transforms a `listOfPairs` to an object.

```javascript
const listOfPairs = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]
const expected = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}

const result = R.fromPairs(listOfPairs)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listOfPairs%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0Aconst%20expected%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0A%0Aconst%20result%20%3D%20R.fromPairs(listOfPairs)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.fromPairs</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#fromPairs)

### groupBy

It splits `list` according to a provided `groupFn` function and returns an object.

```javascript
const list = [ 'a', 'b', 'aa', 'bb' ]
const groupFn = x => x.length

const result = R.groupBy(groupFn, list)
// => { '1': ['a', 'b'], '2': ['aa', 'bb'] }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20'a'%2C%20'b'%2C%20'aa'%2C%20'bb'%20%5D%0Aconst%20groupFn%20%3D%20x%20%3D%3E%20x.length%0A%0Aconst%20result%20%3D%20R.groupBy(groupFn%2C%20list)%0A%2F%2F%20%3D%3E%20%7B%20'1'%3A%20%5B'a'%2C%20'b'%5D%2C%20'2'%3A%20%5B'aa'%2C%20'bb'%5D%20%7D">Try this <strong>R.groupBy</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#groupBy)

### groupWith

It returns separated version of list or string `input`, where separation is done with equality `compareFn` function.

```javascript
const compareFn = (x, y) => x === y
const list = [1, 2, 2, 1, 1, 2]

const result = R.groupWith(isConsecutive, list)
// => [[1], [2,2], [1,1], [2]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20(x%2C%20y)%20%3D%3E%20x%20%3D%3D%3D%20y%0Aconst%20list%20%3D%20%5B1%2C%202%2C%202%2C%201%2C%201%2C%202%5D%0A%0Aconst%20result%20%3D%20R.groupWith(isConsecutive%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%5B2%2C2%5D%2C%20%5B1%2C1%5D%2C%20%5B2%5D%5D">Try this <strong>R.groupWith</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#groupWith)

### has

```typescript

has<T>(prop: string, obj: T): boolean
```

It returns `true` if `obj` has property `prop`.

```javascript
const obj = {a: 1}

const result = [
  R.has('a', obj),
  R.has('b', obj)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.has('a'%2C%20obj)%2C%0A%20%20R.has('b'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.has</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
has<T>(prop: string, obj: T): boolean;
has(prop: string): <T>(obj: T) => boolean;
```

</details>

<details>

<summary><strong>R.has</strong> source</summary>

```javascript
export function has(prop, obj) {
  if (arguments.length === 1) return _obj => has(prop, _obj)

  if (!obj) return false

  return obj.hasOwnProperty(prop)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {has} from './has'

test('happy', () => {
  expect(has('a')({a: 1})).toBeTrue()
  expect(has('b', {a: 1})).toBeFalse()
})

test('with non-object', () => {
  expect(has('a', undefined)).toEqual(false)
  expect(has('a', null)).toEqual(false)
  expect(has('a', true)).toEqual(false)
  expect(has('a', '')).toEqual(false)
  expect(has('a', /a/)).toEqual(false)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {has} from 'rambda'

describe('R.has', () => {
  it('happy', () => {
    const result = has('foo', {a: 1})
    const curriedResult = has('bar')({a: 1})
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#has)

### hasPath

```typescript

hasPath<T>(
  path: string | string[],
  input: object
): boolean
```

It will return true, if `input` object has truthy `path`(calculated with `R.path`).

```javascript
const path = 'a.b'
const pathAsArray = ['a', 'b']
const obj = {a: {b: []}}

const result = [
  R.hasPath(path, obj),
  R.hasPath(pathAsArray, obj),
  R.hasPath('a.c', obj),
]
// => [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20path%20%3D%20'a.b'%0Aconst%20pathAsArray%20%3D%20%5B'a'%2C%20'b'%5D%0Aconst%20obj%20%3D%20%7Ba%3A%20%7Bb%3A%20%5B%5D%7D%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.hasPath(path%2C%20obj)%2C%0A%20%20R.hasPath(pathAsArray%2C%20obj)%2C%0A%20%20R.hasPath('a.c'%2C%20obj)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try this <strong>R.hasPath</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
hasPath<T>(
  path: string | string[],
  input: object
): boolean;
hasPath<T>(
  path: string | string[]
): (input: object) => boolean;
```

</details>

<details>

<summary><strong>R.hasPath</strong> source</summary>

```javascript
import {path} from './path'

export function hasPath(pathInput, obj) {
  if (arguments.length === 1) {
    return objHolder => hasPath(pathInput, objHolder)
  }

  return path(pathInput, obj) !== undefined
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {hasPath} from './hasPath'

test('when true', () => {
  const path = 'a.b'
  const obj = {a: {b: []}}

  const result = hasPath(path)(obj)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const path = 'a.b'
  const obj = {}

  const result = hasPath(path, obj)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {hasPath} from 'rambda'

describe('R.hasPath', () => {
  it('string path', () => {
    const obj = {a: {b: 1}}
    const result = hasPath('a.b', obj)
    const curriedResult = hasPath('a.c')(obj)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
  it('array path', () => {
    const obj = {a: {b: 1}}
    const result = hasPath(['a', 'b'], obj)
    const curriedResult = hasPath(['a', 'c'])(obj)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#hasPath)

### head

```typescript

head(input: string): string
```

It returns the first element of list or string `input`.

```javascript
const result = [
  R.head([1, 2, 3]),
  R.head('foo') 
]
// => [1, 'f']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.head(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.head('foo')%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'f'%5D">Try this <strong>R.head</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
head(input: string): string;
head(emptyList: []): undefined;
head<T>(input: T[]): T | undefined;
```

</details>

<details>

<summary><strong>R.head</strong> source</summary>

```javascript
export function head(listOrString) {
  if (typeof listOrString === 'string') return listOrString[0] || ''

  return listOrString[0]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {head} from './head'

test('head', () => {
  expect(head(['fi', 'fo', 'fum'])).toEqual('fi')
  expect(head([])).toEqual(undefined)
  expect(head('foo')).toEqual('f')
  expect(head('')).toEqual('')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {head} from 'rambda'

describe('R.head', () => {
  it('string', () => {
    const result = head('foo')
    result // $ExpectType string
  })

  it('array', () => {
    const result = head([1, 2, 3])
    result // $ExpectType number | undefined
  })

  it('empty array - case 1', () => {
    const result = head([])
    result // $ExpectType undefined
  })
  it('empty array - case 2', () => {
    const list = ['foo', 'bar'].filter(x => x.startsWith('a'))
    const result = head(list)
    result // $ExpectType string | undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#head)

### identical

It returns `true` if its arguments `a` and `b` are identical.

Otherwise, it returns `false`.

> :boom: Values are identical if they reference the same memory. `NaN` is identical to `NaN`; `0` and `-0` are not identical.

```javascript
const objA = {a: 1};
const objB = {a: 1};
R.identical(objA, objA); // => true
R.identical(objA, objB); // => false
R.identical(1, 1); // => true
R.identical(1, '1'); // => false
R.identical([], []); // => false
R.identical(0, -0); // => false
R.identical(NaN, NaN); // => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20objA%20%3D%20%7Ba%3A%201%7D%3B%0Aconst%20objB%20%3D%20%7Ba%3A%201%7D%3B%0AR.identical(objA%2C%20objA)%3B%20%2F%2F%20%3D%3E%20true%0AR.identical(objA%2C%20objB)%3B%20%2F%2F%20%3D%3E%20false%0AR.identical(1%2C%201)%3B%20%2F%2F%20%3D%3E%20true%0AR.identical(1%2C%20'1')%3B%20%2F%2F%20%3D%3E%20false%0AR.identical(%5B%5D%2C%20%5B%5D)%3B%20%2F%2F%20%3D%3E%20false%0AR.identical(0%2C%20-0)%3B%20%2F%2F%20%3D%3E%20false%0Aconst%20result%20%3D%20R.identical(NaN%2C%20NaN)%3B%20%2F%2F%20%3D%3E%20true">Try this <strong>R.identical</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#identical)

### identity

```typescript

identity<T>(input: T): T
```

It just passes back the supplied `input` argument.

> :boom: Logic

```javascript
R.identity(7) // => 7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.identity(7)%20%2F%2F%20%3D%3E%207">Try this <strong>R.identity</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
identity<T>(input: T): T;
```

</details>

<details>

<summary><strong>R.identity</strong> source</summary>

```javascript
export function identity(x) {
  return x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {identity} from './identity'

test('happy', () => {
  expect(identity(7)).toEqual(7)
  expect(identity(true)).toEqual(true)
  expect(identity({a: 1})).toEqual({a: 1})
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {identity} from 'rambda'

describe('R.identity', () => {
  it('happy', () => {
    const result = identity(4)
    result // $ExpectType 4
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#identity)

### ifElse

```typescript

ifElse<TArgs extends any[], TOnTrueResult, TOnFalseResult>(fn: (...args: TArgs) => boolean, onTrue: (...args: TArgs) => TOnTrueResult, onFalse: (...args: TArgs) => TOnFalseResult): (...args: TArgs) => TOnTrueResult | TOnFalseResult
```

It expects `condition`, `onTrue` and `onFalse` functions as inputs and it returns a new function with example name of `fn`. 

When `fn`` is called with `input` argument, it will return either `onTrue(input)` or `onFalse(input)` depending on `condition(input)` evaluation.

```javascript
const fn = R.ifElse(
 x => x>10,
 x => x*2,
 x => x*10
)

const result = [ fn(8), fn(18) ]
// => [80, 36]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.ifElse(%0A%20x%20%3D%3E%20x%3E10%2C%0A%20x%20%3D%3E%20x*2%2C%0A%20x%20%3D%3E%20x*10%0A)%0A%0Aconst%20result%20%3D%20%5B%20fn(8)%2C%20fn(18)%20%5D%0A%2F%2F%20%3D%3E%20%5B80%2C%2036%5D">Try this <strong>R.ifElse</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
ifElse<TArgs extends any[], TOnTrueResult, TOnFalseResult>(fn: (...args: TArgs) => boolean, onTrue: (...args: TArgs) => TOnTrueResult, onFalse: (...args: TArgs) => TOnFalseResult): (...args: TArgs) => TOnTrueResult | TOnFalseResult;
```

</details>

<details>

<summary><strong>R.ifElse</strong> source</summary>

```javascript
import {curry} from './curry'

function ifElseFn(condition, onTrue, onFalse) {
  return (...input) => {
    const conditionResult =
      typeof condition === 'boolean' ? condition : condition(...input)

    if (conditionResult === true) {
      return onTrue(...input)
    }

    return onFalse(...input)
  }
}

export const ifElse = curry(ifElseFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {always} from './always'
import {has} from './has'
import {identity} from './identity'
import {ifElse} from './ifElse'
import {prop} from './prop'

const condition = has('foo')
const v = function (a) {
  return typeof a === 'number'
}
const t = function (a) {
  return a + 1
}
const ifFn = x => prop('foo', x).length
const elseFn = () => false

test('happy', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({foo: 'bar'})).toEqual(3)
  expect(fn({fo: 'bar'})).toEqual(false)
})

test('ramda spec', () => {
  const ifIsNumber = ifElse(v)
  expect(ifIsNumber(t, identity)(15)).toEqual(16)
  expect(ifIsNumber(t, identity)('hello')).toEqual('hello')
})

test('pass all arguments', () => {
  const identity = function (a) {
    return a
  }
  const v = function () {
    return true
  }
  const onTrue = function (a, b) {
    expect(a).toEqual(123)
    expect(b).toEqual('abc')
  }
  ifElse(v, onTrue, identity)(123, 'abc')
})

test('accept constant as condition', () => {
  const fn = ifElse(true)(always(true))(always(false))

  expect(fn()).toEqual(true)
})

test('accept constant as condition - case 2', () => {
  const fn = ifElse(false, always(true), always(false))

  expect(fn()).toEqual(false)
})

test('curry 1', () => {
  const fn = ifElse(condition, ifFn)(elseFn)

  expect(fn({foo: 'bar'})).toEqual(3)
  expect(fn({fo: 'bar'})).toEqual(false)
})

test('curry 2', () => {
  const fn = ifElse(condition)(ifFn)(elseFn)

  expect(fn({foo: 'bar'})).toEqual(3)
  expect(fn({fo: 'bar'})).toEqual(false)
})

test('simple arity of 1', () => {
  const condition = x => x > 5
  const onTrue = x => x + 1
  const onFalse = x => x + 10
  const result = ifElse(condition, onTrue, onFalse)(1)
  expect(result).toBe(11)
})

test('simple arity of 2', () => {
  const condition = (x, y) => x + y > 5
  const onTrue = (x, y) => x + y + 1
  const onFalse = (x, y) => x + y + 10
  const result = ifElse(condition, onTrue, onFalse)(1, 10)
  expect(result).toBe(12)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {ifElse} from 'rambda'

describe('R.ifElse', () => {
  it('happy', () => {
    const condition = (x: number) => x > 5
    const onTrue = (x: number) => `foo${x}`
    const onFalse = (x: number) => `bar${x}`
    const fn = ifElse(condition, onTrue, onFalse)
    fn // $ExpectType (x: number) => string
    const result = fn(3)
    result // $ExpectType string
  })
  it('arity of 2', () => {
    const condition = (x: number, y: string) => x + y.length > 5
    const onTrue = (x: number, y: string) => `foo${x}-${y}`
    const onFalse = (x: number, y: string) => `bar${x}-${y}`
    const fn = ifElse(condition, onTrue, onFalse)
    fn // $ExpectType (x: number, y: string) => string
    const result = fn(3, 'hello')
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 58.56%</summary>

```text
const R = require('../../dist/rambda.js')

const condition = R.has('foo')
const v = function (a) {
  return typeof a === 'number'
}
const t = function (a) {
  return a + 1
}
const ifFn = x => R.prop('foo', x).length
const elseFn = () => false

const ifElse = [
  {
    label: 'Rambda',
    fn: () => {
      const fn = R.ifElse(condition, ifFn)(elseFn)

      fn({foo: 'bar'})
      fn({fo: 'bar'})

      const ifIsNumber = R.ifElse(v)
      ifIsNumber(t, R.identity)(15)
      ifIsNumber(t, R.identity)('hello')
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      const fn = Ramda.ifElse(condition, ifFn)(elseFn)

      fn({foo: 'bar'})
      fn({fo: 'bar'})

      const ifIsNumber = Ramda.ifElse(v)
      ifIsNumber(t, R.identity)(15)
      ifIsNumber(t, R.identity)('hello')
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#ifElse)

### inc

It increments a number.

```javascript
R.inc(1) // => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.inc(1)%20%2F%2F%20%3D%3E%202">Try this <strong>R.inc</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#inc)

### includes

```typescript

includes(valueToFind: string, input: string[] | string): boolean
```

If `input` is string, then this method work as native `String.includes`.

If `input` is array, then `R.equals` is used to define if `valueToFind` belongs to the list.

```javascript
const result = [
  R.includes('oo', 'foo'),
  R.includes({a: 1}, [{a: 1}])
]
// => [true, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.includes('oo'%2C%20'foo')%2C%0A%20%20R.includes(%7Ba%3A%201%7D%2C%20%5B%7Ba%3A%201%7D%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%20%5D">Try this <strong>R.includes</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
includes(valueToFind: string, input: string[] | string): boolean;
includes(valueToFind: string): (input: string[] | string) => boolean;
includes<T>(valueToFind: T, input: T[]): boolean;
includes<T>(valueToFind: T): (input: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.includes</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {_indexOf} from './equals'

export function includes(valueToFind, iterable) {
  if (arguments.length === 1)
    return _iterable => includes(valueToFind, _iterable)
  if (typeof iterable === 'string') {
    return iterable.includes(valueToFind)
  }
  if (!iterable) {
    throw new TypeError(`Cannot read property \'indexOf\' of ${iterable}`)
  }
  if (!_isArray(iterable)) return false

  return _indexOf(valueToFind, iterable) > -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {includes} from './includes'
import {includes as includesRamda} from 'ramda'

test('with string as iterable', () => {
  const str = 'foo bar'

  expect(includes('bar')(str)).toBeTrue()
  expect(includesRamda('bar')(str)).toBeTrue()
  expect(includes('never', str)).toBeFalse()
  expect(includesRamda('never', str)).toBeFalse()
})

test('with array as iterable', () => {
  const arr = [1, 2, 3]

  expect(includes(2)(arr)).toBeTrue()
  expect(includesRamda(2)(arr)).toBeTrue()

  expect(includes(4, arr)).toBeFalse()
  expect(includesRamda(4, arr)).toBeFalse()
})

test('with list of objects as iterable', () => {
  const arr = [{a: 1}, {b: 2}, {c: 3}]

  expect(includes({c: 3}, arr)).toBeTrue()
  expect(includesRamda({c: 3}, arr)).toBeTrue()
})

test('with NaN', () => {
  const result = includes(NaN, [NaN])
  const ramdaResult = includesRamda(NaN, [NaN])
  expect(result).toBeTrue()
  expect(ramdaResult).toBeTrue()
})

test('with wrong input that does not throw', () => {
  const result = includes(1, /foo/g)
  const ramdaResult = includesRamda(1, /foo/g)
  expect(result).toBeFalse()
  expect(ramdaResult).toBeFalse()
})

test('throws on wrong input - match ramda behaviour', () => {
  expect(() => includes(2, null)).toThrowWithMessage(
    TypeError,
    "Cannot read property 'indexOf' of null"
  )
  expect(() => includesRamda(2, null)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of null (reading 'indexOf')`
  )
  expect(() => includes(2, undefined)).toThrowWithMessage(
    TypeError,
    "Cannot read property 'indexOf' of undefined"
  )
  expect(() => includesRamda(2, undefined)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of undefined (reading 'indexOf')`
  )
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {includes} from 'rambda'

const list = [{a: {b: '1'}}, {a: {c: '2'}}, {a: {b: '3'}}]

describe('R.includes', () => {
  it('happy', () => {
    const result = includes({a: {b: '1'}}, list)
    result // $ExpectType boolean
  })
  it('with string', () => {
    const result = includes('oo', 'foo')
    const curriedResult = includes('oo')('foo')

    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 84.63%</summary>

```text
const R = require('../../dist/rambda.js')

const {
  uniqListOfStrings,
  uniqListOfBooleans,
  uniqListOfObjects,
  uniqListOfLists,
  listOfVariousTypes,
  rangeOfNumbers,
} = require('./_utils.js')

const limit = 100
const additionalModes = listOfVariousTypes.map(unknownType => [
  unknownType,
  uniqListOfLists(limit),
])

const modes = [
  [99, rangeOfNumbers(limit)],
  [200, rangeOfNumbers(limit)],
  ...additionalModes,
  ['zeppelin', uniqListOfStrings(limit)],
  [null, uniqListOfBooleans(limit)],
  [{foo: true, bar: true}, uniqListOfObjects(limit)],
  [1, uniqListOfLists(limit)],
  [[1], uniqListOfLists(limit)],
]

function applyBenchmark(fn, input) {
  return fn(input[0], input[1])
}

const tests = [
  {
    label: 'Rambda',
    fn: R.includes,
  },
  {
    label: 'Ramda',
    fn: Ramda.includes,
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#includes)

### indexBy

It generates object with properties provided by `condition` and values provided by `list` array.

If `condition` is a function, then all list members are passed through it.

If `condition` is a string, then all list members are passed through `R.path(condition)`.

```javascript
const list = [ {id: 10}, {id: 20} ]

const withFunction = R.indexBy(
  x => x.id,
  list
)
const withString = R.indexBy(
  'id',
  list
)
const result = [
  withFunction, 
  R.equals(withFunction, withString)
]
// => [ { 10: {id: 10}, 20: {id: 20} }, true ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%20%7Bid%3A%2010%7D%2C%20%7Bid%3A%2020%7D%20%5D%0A%0Aconst%20withFunction%20%3D%20R.indexBy(%0A%20%20x%20%3D%3E%20x.id%2C%0A%20%20list%0A)%0Aconst%20withString%20%3D%20R.indexBy(%0A%20%20'id'%2C%0A%20%20list%0A)%0Aconst%20result%20%3D%20%5B%0A%20%20withFunction%2C%20%0A%20%20R.equals(withFunction%2C%20withString)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%7B%2010%3A%20%7Bid%3A%2010%7D%2C%2020%3A%20%7Bid%3A%2020%7D%20%7D%2C%20true%20%5D">Try this <strong>R.indexBy</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#indexBy)

### indexOf

It returns the index of the first element of `list` equals to `valueToFind`.

If there is no such element, it returns `-1`.

> :boom: It uses `R.equals` for list of objects/arrays or native `indexOf` for any other case.

```javascript
const list = [0, 1, 2, 3]

const result = [
  R.indexOf(2, list),
  R.indexOf(0, list)
]
// => [2, -1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B0%2C%201%2C%202%2C%203%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.indexOf(2%2C%20list)%2C%0A%20%20R.indexOf(0%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B2%2C%20-1%5D">Try this <strong>R.indexOf</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#indexOf)

### init

```typescript

init<T>(input: T[]): T[]
```

It returns all but the last element of list or string `input`.

```javascript
const result = [
  R.init([1, 2, 3]) , 
  R.init('foo')  // => 'fo'
]
// => [[1, 2], 'fo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.init(%5B1%2C%202%2C%203%5D)%20%2C%20%0A%20%20R.init('foo')%20%20%2F%2F%20%3D%3E%20'fo'%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20'fo'%5D">Try this <strong>R.init</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
init<T>(input: T[]): T[];
init(input: string): string;
```

</details>

<details>

<summary><strong>R.init</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice'

export function init(listOrString) {
  if (typeof listOrString === 'string') return listOrString.slice(0, -1)

  return listOrString.length ? baseSlice(listOrString, 0, -1) : []
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {init} from './init'

test('with array', () => {
  expect(init([1, 2, 3])).toEqual([1, 2])
  expect(init([1, 2])).toEqual([1])
  expect(init([1])).toEqual([])
  expect(init([])).toEqual([])
  expect(init([])).toEqual([])
  expect(init([1])).toEqual([])
})

test('with string', () => {
  expect(init('foo')).toEqual('fo')
  expect(init('f')).toEqual('')
  expect(init('')).toEqual('')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {init} from 'rambda'

describe('R.init', () => {
  it('with string', () => {
    const result = init('foo')

    result // $ExpectType string
  })
  it('with list', () => {
    const result = init([1, 2, 3])

    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 92.24% slower and Lodash is 13.3% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [1, 2, 3, 4]

const init = [
  {
    label: 'Rambda',
    fn: () => {
      R.init(list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.init(list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.initial(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#init)

### intersection

It loops throw `listA` and `listB` and returns the intersection of the two according to `R.equals`.

```javascript
const listA = [ { id : 1 }, { id : 2 }, { id : 3 }, { id : 4 } ]
const listB = [ { id : 3 }, { id : 4 }, { id : 5 }, { id : 6 } ]

const result = intersection(listA, listB)
// => [{ id : 3 }, { id : 4 }]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20listA%20%3D%20%5B%20%7B%20id%20%3A%201%20%7D%2C%20%7B%20id%20%3A%202%20%7D%2C%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%20%5D%0Aconst%20listB%20%3D%20%5B%20%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%2C%20%7B%20id%20%3A%205%20%7D%2C%20%7B%20id%20%3A%206%20%7D%20%5D%0A%0Aconst%20result%20%3D%20intersection(listA%2C%20listB)%0A%2F%2F%20%3D%3E%20%5B%7B%20id%20%3A%203%20%7D%2C%20%7B%20id%20%3A%204%20%7D%5D">Try this <strong>R.intersection</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersection)

### intersperse

It adds a `separator` between members of `list`.

```javascript
const list = [ 0, 1, 2, 3 ]
const separator = '|'
const result = intersperse(separator, list)
// => [0, '|', 1, '|', 2, '|', 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%20%5D%0Aconst%20separator%20%3D%20'%7C'%0Aconst%20result%20%3D%20intersperse(separator%2C%20list)%0A%2F%2F%20%3D%3E%20%5B0%2C%20'%7C'%2C%201%2C%20'%7C'%2C%202%2C%20'%7C'%2C%203%5D">Try this <strong>R.intersperse</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#intersperse)

### is

It returns `true` if `x` is instance of `targetPrototype`.

```javascript
const result = [
  R.is(String, 'foo'),  
  R.is(Array, 1)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.is(String%2C%20'foo')%2C%20%20%0A%20%20R.is(Array%2C%201)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.is</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#is)

### isEmpty

```typescript

isEmpty<T>(x: T): boolean
```

It returns `true` if `x` is `empty`.

```javascript
const result = [
  R.isEmpty(''),
  R.isEmpty({ x : 0 })
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isEmpty('')%2C%0A%20%20R.isEmpty(%7B%20x%20%3A%200%20%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.isEmpty</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
isEmpty<T>(x: T): boolean;
```

</details>

<details>

<summary><strong>R.isEmpty</strong> source</summary>

```javascript
import {type} from './type'

export function isEmpty(input) {
  const inputType = type(input)
  if (['Undefined', 'NaN', 'Number', 'Null'].includes(inputType))
    return false
  if (!input) return true

  if (inputType === 'Object') {
    return Object.keys(input).length === 0
  }

  if (inputType === 'Array') {
    return input.length === 0
  }

  return false
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {isEmpty} from './isEmpty'

test('happy', () => {
  expect(isEmpty(undefined)).toEqual(false)
  expect(isEmpty('')).toEqual(true)
  expect(isEmpty(null)).toEqual(false)
  expect(isEmpty(' ')).toEqual(false)
  expect(isEmpty(new RegExp(''))).toEqual(false)
  expect(isEmpty([])).toEqual(true)
  expect(isEmpty([[]])).toEqual(false)
  expect(isEmpty({})).toEqual(true)
  expect(isEmpty({x: 0})).toEqual(false)
  expect(isEmpty(0)).toEqual(false)
  expect(isEmpty(NaN)).toEqual(false)
  expect(isEmpty([''])).toEqual(false)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {isEmpty} from 'rambda'

describe('R.isEmpty', () => {
  it('happy', () => {
    const result = isEmpty('foo')
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 97.14% slower and Lodash is 54.99% slower</summary>

```text
const R = require('../../dist/rambda.js')

const isEmpty = [
  {
    label: 'Rambda',
    fn: () => {
      R.isEmpty(undefined)
      R.isEmpty('')
      R.isEmpty(null)
      R.isEmpty(' ')
      R.isEmpty(new RegExp(''))
      R.isEmpty([])
      R.isEmpty([[]])
      R.isEmpty({})
      R.isEmpty({x: 0})
      R.isEmpty(0)
      R.isEmpty(NaN)
      R.isEmpty([''])
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.isEmpty(undefined)
      Ramda.isEmpty('')
      Ramda.isEmpty(null)
      Ramda.isEmpty(' ')
      Ramda.isEmpty(new RegExp(''))
      Ramda.isEmpty([])
      Ramda.isEmpty([[]])
      Ramda.isEmpty({})
      Ramda.isEmpty({x: 0})
      Ramda.isEmpty(0)
      Ramda.isEmpty(NaN)
      Ramda.isEmpty([''])
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.isEmpty(undefined)
      _.isEmpty('')
      _.isEmpty(null)
      _.isEmpty(' ')
      _.isEmpty(new RegExp(''))
      _.isEmpty([])
      _.isEmpty([[]])
      _.isEmpty({})
      _.isEmpty({x: 0})
      _.isEmpty(0)
      _.isEmpty(NaN)
      _.isEmpty([''])
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isEmpty)

### isNil

```typescript

isNil(x: any): x is null | undefined
```

It returns `true` if `x` is either `null` or `undefined`.

```javascript
const result = [
  R.isNil(null),
  R.isNil(1),
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.isNil(null)%2C%0A%20%20R.isNil(1)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.isNil</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
isNil(x: any): x is null | undefined;
```

</details>

<details>

<summary><strong>R.isNil</strong> source</summary>

```javascript
export function isNil(x) {
  return x === undefined || x === null
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {isNil} from './isNil'

test('happy', () => {
  expect(isNil(null)).toBeTrue()

  expect(isNil(undefined)).toBeTrue()

  expect(isNil([])).toBeFalse()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#isNil)

### join

```typescript

join<T>(glue: string, list: T[]): string
```

It returns a string of all `list` instances joined with a `glue`.

```javascript
R.join('-', [1, 2, 3])  // => '1-2-3'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.join('-'%2C%20%5B1%2C%202%2C%203%5D)%20%20%2F%2F%20%3D%3E%20'1-2-3'">Try this <strong>R.join</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
join<T>(glue: string, list: T[]): string;
join<T>(glue: string): (list: T[]) => string;
```

</details>

<details>

<summary><strong>R.join</strong> source</summary>

```javascript
export function join(glue, list) {
  if (arguments.length === 1) return _list => join(glue, _list)

  return list.join(glue)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {join} from './join'

test('curry', () => {
  expect(join('|')(['foo', 'bar', 'baz'])).toEqual('foo|bar|baz')

  expect(join('|', [1, 2, 3])).toEqual('1|2|3')

  const spacer = join(' ')

  expect(spacer(['a', 2, 3.4])).toEqual('a 2 3.4')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {join} from 'rambda'

describe('R.join', () => {
  it('happy', () => {
    const result = join('|', [1, 2, 3])
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#join)

### keys

```typescript

keys<T extends object>(x: T): (keyof T)[]
```

It applies `Object.keys` over `x` and returns its keys.

```javascript
R.keys({a:1, b:2})  // => ['a', 'b']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.keys(%7Ba%3A1%2C%20b%3A2%7D)%20%20%2F%2F%20%3D%3E%20%5B'a'%2C%20'b'%5D">Try this <strong>R.keys</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
keys<T extends object>(x: T): (keyof T)[];
keys<T>(x: T): string[];
```

</details>

<details>

<summary><strong>R.keys</strong> source</summary>

```javascript
export function keys(x) {
  return Object.keys(x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {keys} from './keys'

test('happy', () => {
  expect(keys({a: 1})).toEqual(['a'])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {keys} from 'rambda'

const obj = {a: 1, b: 2}

describe('R.keys', () => {
  it('happy', () => {
    const result = keys(obj)
    result // $ExpectType ("b" | "a")[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#keys)

### last

```typescript

last(str: string): string
```

It returns the last element of `input`, as the `input` can be either a string or an array.

```javascript
const result = [
  R.last([1, 2, 3]),
  R.last('foo'),
]
// => [3, 'o']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.last(%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.last('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%20'o'%5D">Try this <strong>R.last</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
last(str: string): string;
last(emptyList: []): undefined;
last<T extends any>(list: T[]): T | undefined;
```

</details>

<details>

<summary><strong>R.last</strong> source</summary>

```javascript
export function last(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString[listOrString.length - 1] || ''
  }

  return listOrString[listOrString.length - 1]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {last} from './last'

test('with list', () => {
  expect(last([1, 2, 3])).toBe(3)
  expect(last([])).toBeUndefined()
})

test('with string', () => {
  expect(last('abc')).toEqual('c')
  expect(last('')).toEqual('')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {last} from 'rambda'

describe('R.last', () => {
  it('string', () => {
    const result = last('foo')
    result // $ExpectType string
  })

  it('array', () => {
    const result = last([1, 2, 3])
    result // $ExpectType number | undefined
  })

  it('empty array - case 1', () => {
    const result = last([])
    result // $ExpectType undefined
  })
  it('empty array - case 2', () => {
    const list = ['foo', 'bar'].filter(x => x.startsWith('a'))
    const result = last(list)
    result // $ExpectType string | undefined
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 93.43% slower and Lodash is 5.28% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [1, 2, 3, 4]

const last = [
  {
    label: 'Rambda',
    fn: () => {
      R.last(list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.last(list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.last(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#last)

### lastIndexOf

```typescript

lastIndexOf<T>(target: T, list: T[]): number
```

It returns the last index of `target` in `list` array.

`R.equals` is used to determine equality between `target` and members of `list`.

If there is no such index, then `-1` is returned.

```javascript
const list = [1, 2, 3, 1, 2, 3]
const result = [
  R.lastIndexOf(2, list),
  R.lastIndexOf(4, list),
]
// => [4, -1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%201%2C%202%2C%203%5D%0Aconst%20result%20%3D%20%5B%0A%20%20R.lastIndexOf(2%2C%20list)%2C%0A%20%20R.lastIndexOf(4%2C%20list)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B4%2C%20-1%5D">Try this <strong>R.lastIndexOf</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lastIndexOf<T>(target: T, list: T[]): number;
lastIndexOf<T>(target: T): (list: T[]) => number;
```

</details>

<details>

<summary><strong>R.lastIndexOf</strong> source</summary>

```javascript
import {_lastIndexOf} from './equals'

export function lastIndexOf(valueToFind, list) {
  if (arguments.length === 1) {
    return _list => _lastIndexOf(valueToFind, _list)
  }

  return _lastIndexOf(valueToFind, list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {lastIndexOf} from './lastIndexOf'
import {lastIndexOf as lastIndexOfRamda} from 'ramda'
import {compareCombinations} from './_internals/testUtils'
import {possibleTargets, possibleIterables} from './indexOf.spec.js'

test('with NaN', () => {
  expect(lastIndexOf(NaN, [NaN])).toEqual(0)
})

test('will throw with bad input', () => {
  expect(lastIndexOfRamda([], true)).toEqual(-1)
  expect(() => indexOf([], true)).toThrow()
})

test('without list of objects - no R.equals', () => {
  expect(lastIndexOf(3, [1, 2, 3, 4])).toEqual(2)
  expect(lastIndexOf(10)([1, 2, 3, 4])).toEqual(-1)
})

test('list of objects uses R.equals', () => {
  const listOfObjects = [{a: 1}, {b: 2}, {c: 3}]
  expect(lastIndexOf({c: 4}, listOfObjects)).toBe(-1)
  expect(lastIndexOf({c: 3}, listOfObjects)).toBe(2)
})

test('list of arrays uses R.equals', () => {
  const listOfLists = [[1], [2, 3], [2, 3, 4], [2, 3], [1], []]
  expect(lastIndexOf([], listOfLists)).toBe(5)
  expect(lastIndexOf([1], listOfLists)).toBe(4)
  expect(lastIndexOf([2, 3, 4], listOfLists)).toBe(2)
  expect(lastIndexOf([2, 3, 5], listOfLists)).toBe(-1)
})

test('with string as iterable', () => {
  expect(() => lastIndexOf('a', 'abc')).toThrowWithMessage(
    Error,
    `Cannot read property 'indexOf' of abc`
  )
  expect(lastIndexOfRamda('a', 'abc')).toBe(0)
})

describe('brute force', () => {
  compareCombinations({
    fn: lastIndexOf,
    fnRamda: lastIndexOfRamda,
    firstInput: possibleTargets,
    secondInput: possibleIterables,
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 34,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 51,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 170,
        }
      `)
    },
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lastIndexOf} from 'rambda'

const list = [1, 2, 3]

describe('R.lastIndexOf', () => {
  it('happy', () => {
    const result = lastIndexOf(2, list)
    result // $ExpectType number
  })
  it('curried', () => {
    const result = lastIndexOf(2)(list)
    result // $ExpectType number
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 85.19%</summary>

```text
const R = require('../../dist/rambda.js')

const isEven = n => n % 2 === 0
const arr = [1, 3, 5, 7, 9, 11]

const lastIndexOf = [
  {
    label: 'Rambda',
    fn: () => {
      R.lastIndexOf(1, [1, 2, 3, 1, 2])
      R.lastIndexOf(1)([1, 2, 3, 1, 2])
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.lastIndexOf(1, [1, 2, 3, 1, 2])
      Ramda.lastIndexOf(1)([1, 2, 3, 1, 2])
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lastIndexOf)

### length

```typescript

length<T>(input: T[]): number
```

It returns the `length` property of list or string `input`.

```javascript
const result = [
  R.length([1, 2, 3, 4]),
  R.length('foo'),
]
// => [4, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.length(%5B1%2C%202%2C%203%2C%204%5D)%2C%0A%20%20R.length('foo')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B4%2C%203%5D">Try this <strong>R.length</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
length<T>(input: T[]): number;
```

</details>

<details>

<summary><strong>R.length</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'

export function length(x) {
  if (_isArray(x)) return x.length
  if (typeof x === 'string') return x.length

  return NaN
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {length} from './length'
import {length as lengthRamda} from 'ramda'

test('happy', () => {
  expect(length('foo')).toEqual(3)
  expect(length([1, 2, 3])).toEqual(3)
  expect(length([])).toEqual(0)
})

test('with empty string', () => {
  expect(length('')).toEqual(0)
})

test('with bad input returns NaN', () => {
  expect(length(0)).toBeNaN()
  expect(length({})).toBeNaN()
  expect(length(null)).toBeNaN()
  expect(length(undefined)).toBeNaN()
})

test('with length as property', () => {
  const input1 = {length: '123'}
  const input2 = {length: null}
  const input3 = {length: ''}

  expect(length(input1)).toBeNaN()
  expect(lengthRamda(input1)).toBeNaN()
  expect(length(input2)).toBeNaN()
  expect(lengthRamda(input2)).toBeNaN()
  expect(length(input3)).toBeNaN()
  expect(lengthRamda(input3)).toBeNaN()
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#length)

### lens

```typescript

lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens
```

It returns a `lens` for the given `getter` and `setter` functions. 

The `getter` **gets** the value of the focus; the `setter` **sets** the value of the focus. 

The setter should not mutate the data structure.

```javascript
const xLens = R.lens(R.prop('x'), R.assoc('x'));

R.view(xLens, {x: 1, y: 2}) // => 1
R.set(xLens, 4, {x: 1, y: 2}) // => {x: 4, y: 2}
R.over(xLens, R.negate, {x: 1, y: 2}) // => {x: -1, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20xLens%20%3D%20R.lens(R.prop('x')%2C%20R.assoc('x'))%3B%0A%0AR.view(xLens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%201%0AR.set(xLens%2C%204%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0Aconst%20result%20%3D%20R.over(xLens%2C%20R.negate%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try this <strong>R.lens</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lens<T, U, V>(getter: (s: T) => U, setter: (a: U, s: T) => V): Lens;
```

</details>

<details>

<summary><strong>R.lens</strong> source</summary>

```javascript
export function lens(getter, setter) {
  return function (functor) {
    return function (target) {
      return functor(getter(target)).map(focus => setter(focus, target))
    }
  }
}
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lens, assoc} from 'rambda'

interface Input {
  foo: string
}

describe('R.lens', () => {
  it('happy', () => {
    const fn = lens<Input, string, string>((x: Input) => {
      x.foo // $ExpectType string
      return x.foo
    }, assoc('name'))
    fn // $ExpectType Lens
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lens)

### lensIndex

```typescript

lensIndex(index: number): Lens
```

It returns a lens that focuses on specified `index`.

```javascript
const list = ['a', 'b', 'c']
const headLens = R.lensIndex(0)

R.view(headLens, list) // => 'a'
R.set(headLens, 'x', list) // => ['x', 'b', 'c']
R.over(headLens, R.toUpper, list) // => ['A', 'b', 'c']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%5D%0Aconst%20headLens%20%3D%20R.lensIndex(0)%0A%0AR.view(headLens%2C%20list)%20%2F%2F%20%3D%3E%20'a'%0AR.set(headLens%2C%20'x'%2C%20list)%20%2F%2F%20%3D%3E%20%5B'x'%2C%20'b'%2C%20'c'%5D%0Aconst%20result%20%3D%20R.over(headLens%2C%20R.toUpper%2C%20list)%20%2F%2F%20%3D%3E%20%5B'A'%2C%20'b'%2C%20'c'%5D">Try this <strong>R.lensIndex</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lensIndex(index: number): Lens;
```

</details>

<details>

<summary><strong>R.lensIndex</strong> source</summary>

```javascript
import {lens} from './lens'
import {nth} from './nth'
import {update} from './update'

export function lensIndex(index) {
  return lens(nth(index), update(index))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {compose} from './compose'
import {keys} from './keys'
import {lensIndex} from './lensIndex'
import {over} from './over'
import {set} from './set'
import {view} from './view'

const testList = [{a: 1}, {b: 2}, {c: 3}]

test('focuses list element at the specified index', () => {
  expect(view(lensIndex(0), testList)).toEqual({a: 1})
})

test('returns undefined if the specified index does not exist', () => {
  expect(view(lensIndex(10), testList)).toEqual(undefined)
})

test('sets the list value at the specified index', () => {
  expect(set(lensIndex(0), 0, testList)).toEqual([0, {b: 2}, {c: 3}])
})

test('applies function to the value at the specified list index', () => {
  expect(over(lensIndex(2), keys, testList)).toEqual([{a: 1}, {b: 2}, ['c']])
})

test('can be composed', () => {
  const nestedList = [0, [10, 11, 12], 1, 2]
  const composedLens = compose(lensIndex(1), lensIndex(0))

  expect(view(composedLens, nestedList)).toEqual(10)
})

test('set s (get s) === s', () => {
  expect(set(lensIndex(0), view(lensIndex(0), testList), testList)).toEqual(
    testList
  )
})

test('get (set s v) === v', () => {
  expect(view(lensIndex(0), set(lensIndex(0), 0, testList))).toEqual(0)
})

test('get (set(set s v1) v2) === v2', () => {
  expect(
    view(
      lensIndex(0),
      set(lensIndex(0), 11, set(lensIndex(0), 10, testList))
    )
  ).toEqual(11)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {view, lensIndex} from 'rambda'

interface Input {
  a: number
}
const testList: Input[] = [{a: 1}, {a: 2}, {a: 3}]

describe('R.lensIndex', () => {
  it('happy', () => {
    const result = view<Input[], Input>(lensIndex(0), testList)
    result // $ExpectType Input
    result.a // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensIndex)

### lensPath

```typescript

lensPath(path: RamdaPath): Lens
```

It returns a lens that focuses on specified `path`.

```javascript
const lensPath = R.lensPath(['x', 0, 'y'])
const input = {x: [{y: 2, z: 3}, {y: 4, z: 5}]}

R.view(lensPath, input) // => 2

R.set(lensPath, 1, input) 
// => {x: [{y: 1, z: 3}, {y: 4, z: 5}]}

R.over(xHeadYLens, R.negate, input) 
// => {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20lensPath%20%3D%20R.lensPath(%5B'x'%2C%200%2C%20'y'%5D)%0Aconst%20input%20%3D%20%7Bx%3A%20%5B%7By%3A%202%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0AR.view(lensPath%2C%20input)%20%2F%2F%20%3D%3E%202%0A%0AR.set(lensPath%2C%201%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%20%5B%7By%3A%201%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D%0A%0Aconst%20result%20%3D%20R.over(xHeadYLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%20%5B%7By%3A%20-2%2C%20z%3A%203%7D%2C%20%7By%3A%204%2C%20z%3A%205%7D%5D%7D">Try this <strong>R.lensPath</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lensPath(path: RamdaPath): Lens;
lensPath(path: string): Lens;
```

</details>

<details>

<summary><strong>R.lensPath</strong> source</summary>

```javascript
import {assocPath} from './assocPath'
import {lens} from './lens'
import {path} from './path'

export function lensPath(key) {
  return lens(path(key), assocPath(key))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {compose} from './compose'
import {identity} from './identity'
import {inc} from './inc'
import {lensPath} from './lensPath'
import {lensProp} from './lensProp'
import {over} from './over'
import {set} from './set'
import {view} from './view'

const testObj = {
  a: [{b: 1}, {b: 2}],
  d: 3,
}

test('view', () => {
  expect(view(lensPath('d'), testObj)).toEqual(3)
  expect(view(lensPath('a.0.b'), testObj)).toEqual(1)
  // this is different to ramda, as ramda will return a clone of the input object
  expect(view(lensPath(''), testObj)).toEqual(undefined)
})

test('set', () => {
  expect(set(lensProp('d'), 0, testObj)).toEqual({
    a: [{b: 1}, {b: 2}],
    d: 0,
  })
  expect(set(lensPath('a.0.b'), 0, testObj)).toEqual({
    a: [{b: 0}, {b: 2}],
    d: 3,
  })
  expect(set(lensPath('a.0.X'), 0, testObj)).toEqual({
    a: [
      {
        b: 1,
        X: 0,
      },
      {b: 2},
    ],
    d: 3,
  })
  expect(set(lensPath([]), 0, testObj)).toEqual(0)
})

test('over', () => {
  expect(over(lensPath('d'), inc, testObj)).toEqual({
    a: [{b: 1}, {b: 2}],
    d: 4,
  })
  expect(over(lensPath('a.1.b'), inc, testObj)).toEqual({
    a: [{b: 1}, {b: 3}],
    d: 3,
  })
  expect(over(lensProp('X'), identity, testObj)).toEqual({
    a: [{b: 1}, {b: 2}],
    d: 3,
    X: undefined,
  })
  expect(over(lensPath('a.0.X'), identity, testObj)).toEqual({
    a: [
      {
        b: 1,
        X: undefined,
      },
      {b: 2},
    ],
    d: 3,
  })
})

test('compose', () => {
  const composedLens = compose(lensPath('a'), lensPath('1.b'))
  expect(view(composedLens, testObj)).toEqual(2)
})

test('set s (get s) === s', () => {
  expect(
    set(lensPath(['d']), view(lensPath(['d']), testObj), testObj)
  ).toEqual(testObj)
  expect(
    set(
      lensPath(['a', 0, 'b']),
      view(lensPath(['a', 0, 'b']), testObj),
      testObj
    )
  ).toEqual(testObj)
})

test('get (set s v) === v', () => {
  expect(view(lensPath(['d']), set(lensPath(['d']), 0, testObj))).toEqual(0)
  expect(
    view(lensPath(['a', 0, 'b']), set(lensPath(['a', 0, 'b']), 0, testObj))
  ).toEqual(0)
})

test('get (set(set s v1) v2) === v2', () => {
  const p = ['d']
  const q = ['a', 0, 'b']
  expect(
    view(lensPath(p), set(lensPath(p), 11, set(lensPath(p), 10, testObj)))
  ).toEqual(11)
  expect(
    view(lensPath(q), set(lensPath(q), 11, set(lensPath(q), 10, testObj)))
  ).toEqual(11)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lensPath, view} from 'rambda'

interface Input {
  foo: number[]
  bar: {
    a: string
    b: string
  }
}

const testObject: Input = {
  foo: [1, 2],
  bar: {
    a: 'x',
    b: 'y',
  },
}

const path = lensPath(['bar', 'a'])
const pathAsString = lensPath('bar.a')

describe('R.lensPath', () => {
  it('happy', () => {
    const result = view<Input, string>(path, testObject)
    result // $ExpectType string
  })
  it('using string as path input', () => {
    const result = view<Input, string>(pathAsString, testObject)
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensPath)

### lensProp

```typescript

lensProp(prop: string): {
  <T, U>(obj: T): U
```

It returns a lens that focuses on specified property `prop`.

```javascript
const xLens = R.lensProp('x');
const input = {x: 1, y: 2}

R.view(xLens, input) // => 1

R.set(xLens, 4, input) 
// => {x: 4, y: 2}

R.over(xLens, R.negate, input) 
// => {x: -1, y: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20xLens%20%3D%20R.lensProp('x')%3B%0Aconst%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0A%0AR.view(xLens%2C%20input)%20%2F%2F%20%3D%3E%201%0A%0AR.set(xLens%2C%204%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%204%2C%20y%3A%202%7D%0A%0Aconst%20result%20%3D%20R.over(xLens%2C%20R.negate%2C%20input)%20%0A%2F%2F%20%3D%3E%20%7Bx%3A%20-1%2C%20y%3A%202%7D">Try this <strong>R.lensProp</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
lensProp(prop: string): {
  <T, U>(obj: T): U;
  set<T, U, V>(val: T, obj: U): V;
};
```

</details>

<details>

<summary><strong>R.lensProp</strong> source</summary>

```javascript
import {assoc} from './assoc'
import {lens} from './lens'
import {prop} from './prop'

export function lensProp(key) {
  return lens(prop(key), assoc(key))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {compose} from './compose'
import {identity} from './identity'
import {inc} from './inc'
import {lensProp} from './lensProp'
import {over} from './over'
import {set} from './set'
import {view} from './view'

const testObj = {
  a: 1,
  b: 2,
  c: 3,
}

test('focuses object the specified object property', () => {
  expect(view(lensProp('a'), testObj)).toEqual(1)
})

test('returns undefined if the specified property does not exist', () => {
  expect(view(lensProp('X'), testObj)).toEqual(undefined)
})

test('sets the value of the object property specified', () => {
  expect(set(lensProp('a'), 0, testObj)).toEqual({
    a: 0,
    b: 2,
    c: 3,
  })
})

test("adds the property to the object if it doesn't exist", () => {
  expect(set(lensProp('d'), 4, testObj)).toEqual({
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  })
})

test('applies function to the value of the specified object property', () => {
  expect(over(lensProp('a'), inc, testObj)).toEqual({
    a: 2,
    b: 2,
    c: 3,
  })
})

test("applies function to undefined and adds the property if it doesn't exist", () => {
  expect(over(lensProp('X'), identity, testObj)).toEqual({
    a: 1,
    b: 2,
    c: 3,
    X: undefined,
  })
})

test('can be composed', () => {
  const nestedObj = {
    a: {b: 1},
    c: 2,
  }
  const composedLens = compose(lensProp('a'), lensProp('b'))

  expect(view(composedLens, nestedObj)).toEqual(1)
})

test('set s (get s) === s', () => {
  expect(set(lensProp('a'), view(lensProp('a'), testObj), testObj)).toEqual(
    testObj
  )
})

test('get (set s v) === v', () => {
  expect(view(lensProp('a'), set(lensProp('a'), 0, testObj))).toEqual(0)
})

test('get (set(set s v1) v2) === v2', () => {
  expect(
    view(
      lensProp('a'),
      set(lensProp('a'), 11, set(lensProp('a'), 10, testObj))
    )
  ).toEqual(11)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lensProp, view} from 'rambda'

interface Input {
  foo: string
}

const testObject: Input = {
  foo: 'Led Zeppelin',
}

const lens = lensProp('foo')

describe('R.lensProp', () => {
  it('happy', () => {
    const result = view<Input, string>(lens, testObject)
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#lensProp)

### map

```typescript

map<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>
```

It returns the result of looping through `iterable` with `fn`.

It works with both array and object.

> :boom: Unlike Ramda's `map`, here property and input object are passed as arguments to `fn`, when `iterable` is an object.

```javascript
const fn = x => x * 2
const fnWhenObject = (val, prop)=>{
  return `${prop}-${val}`
}

const iterable = [1, 2]
const obj = {a: 1, b: 2}

const result = [ 
  R.map(fn, list),
  R.map(fnWhenObject, obj)
]
// => [ [1, 4], {a: 'a-1', b: 'b-2'}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20fnWhenObject%20%3D%20(val%2C%20prop)%3D%3E%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%0A%0Aconst%20iterable%20%3D%20%5B1%2C%202%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20%5B%20%0A%20%20R.map(fn%2C%20list)%2C%0A%20%20R.map(fnWhenObject%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%20%5B1%2C%204%5D%2C%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D%5D">Try this <strong>R.map</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
map<T, U>(fn: ObjectIterator<T, U>, iterable: Dictionary<T>): Dictionary<U>;
map<T, U>(fn: Iterator<T, U>, iterable: T[]): U[];
map<T, U>(fn: Iterator<T, U>): (iterable: T[]) => U[];
map<T, U, S>(fn: ObjectIterator<T, U>): (iterable: Dictionary<T>) => Dictionary<U>;
map<T>(fn: Iterator<T, T>): (iterable: T[]) => T[];
map<T>(fn: Iterator<T, T>, iterable: T[]): T[];
```

</details>

<details>

<summary><strong>R.map</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {_keys} from './_internals/_keys'

export function mapArray(fn, list, isIndexed = false) {
  let index = 0
  const willReturn = Array(list.length)

  while (index < list.length) {
    willReturn[index] = isIndexed ? fn(list[index], index) : fn(list[index])

    index++
  }

  return willReturn
}

export function mapObject(fn, obj) {
  let index = 0
  const keys = _keys(obj)
  const len = keys.length
  const willReturn = {}

  while (index < len) {
    const key = keys[index]
    willReturn[key] = fn(obj[key], key, obj)
    index++
  }

  return willReturn
}

export const mapObjIndexed = mapObject

export function map(fn, iterable) {
  if (arguments.length === 1) return _iterable => map(fn, _iterable)
  if (!iterable) {
    throw new Error('Incorrect iterable input')
  }

  if (_isArray(iterable)) return mapArray(fn, iterable)

  return mapObject(fn, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {map} from './map'
import {map as mapRamda} from 'ramda'

const double = x => x * 2

describe(`with array`, () => {
  test('happy', () => {
    expect(map(double, [1, 2, 3])).toEqual([2, 4, 6])
  })

  test('curried', () => {
    expect(map(double)([1, 2, 3])).toEqual([2, 4, 6])
  })
})

describe(`with object`, () => {
  const obj = {
    a: 1,
    b: 2,
  }

  test('happy', () => {
    expect(map(double, obj)).toEqual({
      a: 2,
      b: 4,
    })
  })
  test('property as second and input object as third argument', () => {
    const obj = {
      a: 1,
      b: 2,
    }
    const iterator = (val, prop, inputObject) => {
      expect(prop).toBeString()
      expect(inputObject).toEqual(obj)

      return val * 2
    }

    expect(map(iterator)(obj)).toEqual({
      a: 2,
      b: 4,
    })
  })
})

test('bad inputs difference between Ramda and Rambda', () => {
  expect(() => map(double, null)).toThrowWithMessage(
    Error,
    `Incorrect iterable input`
  )
  expect(() => map(double)(undefined)).toThrowWithMessage(
    Error,
    `Incorrect iterable input`
  )
  expect(() => mapRamda(double, null)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of null (reading 'fantasy-land/map')`
  )
  expect(() => mapRamda(double, undefined)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of undefined (reading 'fantasy-land/map')`
  )
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {map} from 'rambda'

describe('R.map with arrays', () => {
  it('iterable returns the same type as the input', () => {
    const result = map<number>(
      (x: number) => {
        x // $ExpectType number
        return x + 2
      },
      [1, 2, 3]
    )
    result // $ExpectType number[]
  })
  it('iterable returns the same type as the input - curried', () => {
    const result = map<number>((x: number) => {
      x // $ExpectType number
      return x + 2
    })([1, 2, 3])
    result // $ExpectType number[]
  })
  it('iterable returns different type as the input', () => {
    const result = map<number, string>(
      (x: number) => {
        x // $ExpectType number
        return String(x)
      },
      [1, 2, 3]
    )
    result // $ExpectType string[]
  })
})

describe('R.map with objects', () => {
  it('iterable with all three arguments - curried', () => {
    // It requires dummy third typing argument
    // in order to identify compared to curry typings for arrays
    // ============================================
    const result = map<number, string, any>((a, b, c) => {
      a // $ExpectType number
      b // $ExpectType string
      c // $ExpectType Dictionary<number>
      return `${a}`
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<string>
  })
  it('iterable with all three arguments', () => {
    const result = map<number, string>(
      (a, b, c) => {
        a // $ExpectType number
        b // $ExpectType string
        c // $ExpectType Dictionary<number>
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
  it('iterable with property argument', () => {
    const result = map<number, string>(
      (a, b) => {
        a // $ExpectType number
        b // $ExpectType string
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
  it('iterable with no property argument', () => {
    const result = map<number, string>(
      a => {
        a // $ExpectType number
        return `${a}`
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<string>
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 86.6% slower and Lodash is 11.73% slower</summary>

```text
const R = require('../../dist/rambda.js')

const arr = [1, 2, 3, 4]
const fn = x => x * 2
const map = [
  {
    label: 'Rambda',
    fn: () => {
      R.map(fn, arr)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.map(fn, arr)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.map(arr, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#map)

### mapObjIndexed

It works the same way as `R.map` does for objects. It is added as Ramda also has this method.

```javascript
const fn = (val, prop) => {
  return `${prop}-${val}`
}

const obj = {a: 1, b: 2}

const result = R.map(mapObjIndexed, obj)
// => {a: 'a-1', b: 'b-2'}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(val%2C%20prop)%20%3D%3E%20%7B%0A%20%20return%20%60%24%7Bprop%7D-%24%7Bval%7D%60%0A%7D%0A%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0A%0Aconst%20result%20%3D%20R.map(mapObjIndexed%2C%20obj)%0A%2F%2F%20%3D%3E%20%7Ba%3A%20'a-1'%2C%20b%3A%20'b-2'%7D">Try this <strong>R.mapObjIndexed</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mapObjIndexed)

### match

```typescript

match(regExpression: RegExp, str: string): string[]
```

Curried version of `String.prototype.match` which returns empty array, when there is no match.

```javascript
const result = [
  R.match('a', 'foo'),
  R.match(/([a-z]a)/g, 'bananas')
]
// => [[], ['ba', 'na', 'na']]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.match('a'%2C%20'foo')%2C%0A%20%20R.match(%2F(%5Ba-z%5Da)%2Fg%2C%20'bananas')%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B%5D%2C%20%5B'ba'%2C%20'na'%2C%20'na'%5D%5D">Try this <strong>R.match</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
match(regExpression: RegExp, str: string): string[];
match(regExpression: RegExp): (str: string) => string[];
```

</details>

<details>

<summary><strong>R.match</strong> source</summary>

```javascript
export function match(pattern, input) {
  if (arguments.length === 1) return _input => match(pattern, _input)

  const willReturn = input.match(pattern)

  return willReturn === null ? [] : willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {equals} from './equals'
import {match} from './match'

test('happy', () => {
  expect(match(/a./g)('foo bar baz')).toEqual(['ar', 'az'])
})

test('fallback', () => {
  expect(match(/a./g)('foo')).toEqual([])
})

test('with string', () => {
  expect(match('a', 'foo')).toEqual([])
  expect(equals(match('o', 'foo'), ['o'])).toBeTrue()
})

test('throwing', () => {
  expect(() => {
    match(/a./g, null)
  }).toThrowWithMessage(
    TypeError,
    `Cannot read properties of null (reading 'match')`
  )
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {match} from 'rambda'

const str = 'foo bar'

describe('R.match', () => {
  it('happy', () => {
    const result = match(/foo/, str)
    result // $ExpectType string[]
  })
  it('curried', () => {
    const result = match(/foo/)(str)
    result // $ExpectType string[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 44.83%</summary>

```text
const R = require('../../dist/rambda.js')

const match = [
  {
    label: 'Rambda',
    fn: () => {
      R.match(/a./g)('foo bar baz')
      R.match(/a./g, 'foo bar baz')
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.match(/a./g)('foo bar baz')
      Ramda.match(/a./g, 'foo bar baz')
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#match)

### mathMod

`R.mathMod` behaves like the modulo operator should mathematically, unlike the `%` operator (and by extension, `R.modulo`). So while `-17 % 5` is `-2`, `mathMod(-17, 5)` is `3`.

> :boom: Explanation is taken from `Ramda` documentation site.

```javascript
const result = [
  R.mathMod(-17, 5),
  R.mathMod(17, 5),
  R.mathMod(17, -5),  
  R.mathMod(17, 0)   
]
// => [3, 2, NaN, NaN]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.mathMod(-17%2C%205)%2C%0A%20%20R.mathMod(17%2C%205)%2C%0A%20%20R.mathMod(17%2C%20-5)%2C%20%20%0A%20%20R.mathMod(17%2C%200)%20%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%202%2C%20NaN%2C%20NaN%5D">Try this <strong>R.mathMod</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mathMod)

### max

It returns the greater value between `x` and `y`.

```javascript
const result = [
  R.max(5, 7),  
  R.max('bar', 'foo'),  
]
// => [7, 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.max(5%2C%207)%2C%20%20%0A%20%20R.max('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B7%2C%20'foo'%5D">Try this <strong>R.max</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#max)

### maxBy

It returns the greater value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.maxBy(compareFn, 5, -7) // => -7
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20Math.abs%0A%0Aconst%20result%20%3D%20R.maxBy(compareFn%2C%205%2C%20-7)%20%2F%2F%20%3D%3E%20-7">Try this <strong>R.maxBy</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#maxBy)

### mean

```typescript

mean(list: number[]): number
```

It returns the mean value of `list` input.

```javascript
R.mean([ 2, 7 ])
// => 4.5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mean(%5B%202%2C%207%20%5D)%0A%2F%2F%20%3D%3E%204.5">Try this <strong>R.mean</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mean(list: number[]): number;
```

</details>

<details>

<summary><strong>R.mean</strong> source</summary>

```javascript
import {sum} from './sum'

export function mean(list) {
  return sum(list) / list.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {mean} from './mean'

test('happy', () => {
  expect(mean([2, 7])).toBe(4.5)
})

test('with NaN', () => {
  expect(mean([])).toBeNaN()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {mean} from 'rambda'

describe('R.mean', () => {
  it('happy', () => {
    const result = mean([1, 2, 3])

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mean)

### median

```typescript

median(list: number[]): number
```

It returns the median value of `list` input.

```javascript
R.median([ 7, 2, 10, 9 ]) // => 8
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.median(%5B%207%2C%202%2C%2010%2C%209%20%5D)%20%2F%2F%20%3D%3E%208">Try this <strong>R.median</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
median(list: number[]): number;
```

</details>

<details>

<summary><strong>R.median</strong> source</summary>

```javascript
import {mean} from './mean'

export function median(list) {
  const len = list.length
  if (len === 0) return NaN
  const width = 2 - (len % 2)
  const idx = (len - width) / 2

  return mean(
    Array.prototype.slice
      .call(list, 0)
      .sort((a, b) => {
        if (a === b) return 0

        return a < b ? -1 : 1
      })
      .slice(idx, idx + width)
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {median} from './median'

test('happy', () => {
  expect(median([2])).toEqual(2)
  expect(median([7, 2, 10, 2, 9])).toEqual(7)
})

test('with empty array', () => {
  expect(median([])).toBeNaN()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {median} from 'rambda'

describe('R.median', () => {
  it('happy', () => {
    const result = median([1, 2, 3])

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#median)

### merge

```typescript

merge<A, B>(target: A, newProps: B): A & B
export function merge<Output>(target: any): (newProps: any) => Output
```

It creates a copy of `target` object with overidden `newProps` properties.

```javascript
const target = { 'foo': 0, 'bar': 1 }
const newProps = { 'foo': 7 }

const result = R.merge(target, newProps)
// => { 'foo': 7, 'bar': 1 }
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20target%20%3D%20%7B%20'foo'%3A%200%2C%20'bar'%3A%201%20%7D%0Aconst%20newProps%20%3D%20%7B%20'foo'%3A%207%20%7D%0A%0Aconst%20result%20%3D%20R.merge(target%2C%20newProps)%0A%2F%2F%20%3D%3E%20%7B%20'foo'%3A%207%2C%20'bar'%3A%201%20%7D">Try this <strong>R.merge</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
merge<A, B>(target: A, newProps: B): A & B
merge<Output>(target: any): (newProps: any) => Output;
```

</details>

<details>

<summary><strong>R.merge</strong> source</summary>

```javascript
export function merge(target, newProps) {
  if (arguments.length === 1) return _newProps => merge(target, _newProps)

  return Object.assign({}, target || {}, newProps || {})
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {merge} from './merge'

const obj = {
  foo: 1,
  bar: 2,
}

test('happy', () => {
  expect(merge(obj, {bar: 20})).toEqual({
    foo: 1,
    bar: 20,
  })
})

test('curry', () => {
  expect(merge(obj)({baz: 3})).toEqual({
    foo: 1,
    bar: 2,
    baz: 3,
  })
})

/**
 * https://github.com/selfrefactor/rambda/issues/77
 */
test('when undefined or null instead of object', () => {
  expect(merge(null, undefined)).toEqual({})
  expect(merge(obj, null)).toEqual(obj)
  expect(merge(obj, undefined)).toEqual(obj)
  expect(merge(undefined, obj)).toEqual(obj)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {merge} from 'rambda'

interface Output {
  foo: number
  bar: number
}

describe('R.merge', () => {
  const result = merge({foo: 1}, {bar: 2})
  const curriedResult = merge<Output>({foo: 1})({bar: 2})

  result.foo // $ExpectType number
  result.bar // $ExpectType number
  curriedResult.bar // $ExpectType number
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 12.21% slower and Lodash is 55.76% slower</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {bar: 'yes'}
const a = {
  foo: 'bar',
  bar: 'baz',
}
const merge = [
  {
    label: 'Rambda',
    fn: () => {
      R.merge(a, obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.merge(a, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.merge(a, obj)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#merge)

### mergeAll

```typescript

mergeAll<T>(list: object[]): T
```

It merges all objects of `list` array sequentially and returns the result.

```javascript
const list = [
  {a: 1},
  {b: 2},
  {c: 3}
]
const result = R.mergeAll(list)
const expected = {
  a: 1,
  b: 2,
  c: 3
}
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Bb%3A%202%7D%2C%0A%20%20%7Bc%3A%203%7D%0A%5D%0Aconst%20result%20%3D%20R.mergeAll(list)%0Aconst%20expected%20%3D%20%7B%0A%20%20a%3A%201%2C%0A%20%20b%3A%202%2C%0A%20%20c%3A%203%0A%7D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.mergeAll</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mergeAll<T>(list: object[]): T;
mergeAll(list: object[]): object;
```

</details>

<details>

<summary><strong>R.mergeAll</strong> source</summary>

```javascript
import {map} from './map'
import {merge} from './merge'

export function mergeAll(arr) {
  let willReturn = {}
  map(val => {
    willReturn = merge(willReturn, val)
  }, arr)

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {mergeAll} from './mergeAll'

test('case 1', () => {
  const arr = [{a: 1}, {b: 2}, {c: 3}]
  const expectedResult = {
    a: 1,
    b: 2,
    c: 3,
  }
  expect(mergeAll(arr)).toEqual(expectedResult)
})

test('case 2', () => {
  expect(mergeAll([{foo: 1}, {bar: 2}, {baz: 3}])).toEqual({
    foo: 1,
    bar: 2,
    baz: 3,
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {mergeAll} from 'rambda'

describe('R.mergeAll', () => {
  it('with passing type', () => {
    interface Output {
      foo: number
      bar: number
    }
    const result = mergeAll<Output>([{foo: 1}, {bar: 2}])
    result.foo // $ExpectType number
    result.bar // $ExpectType number
  })

  it('without passing type', () => {
    const result = mergeAll([{foo: 1}, {bar: 2}])
    result // $ExpectType unknown
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeAll)

### mergeDeepRight

```typescript

mergeDeepRight<Output>(target: object, newProps: object): Output
```

Creates a new object with the own properties of the first object merged with the own properties of the second object. If a key exists in both objects:

  - and both values are objects, the two values will be recursively merged
  - otherwise the value from the second object will be used.

<details>

<summary>All Typescript definitions</summary>

```typescript
mergeDeepRight<Output>(target: object, newProps: object): Output;
mergeDeepRight<Output>(target: object): (newProps: object) => Output;
```

</details>

<details>

<summary><strong>R.mergeDeepRight</strong> source</summary>

```javascript
import {type} from './type'

export function mergeDeepRight(target, source) {
  if (arguments.length === 1) {
    return sourceHolder => mergeDeepRight(target, sourceHolder)
  }

  const willReturn = JSON.parse(JSON.stringify(target))

  Object.keys(source).forEach(key => {
    if (type(source[key]) === 'Object') {
      if (type(target[key]) === 'Object') {
        willReturn[key] = mergeDeepRight(target[key], source[key])
      } else {
        willReturn[key] = source[key]
      }
    } else {
      willReturn[key] = source[key]
    }
  })

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
// import { mergeDeepRight } from 'ramda'
import {mergeDeepRight} from './mergeDeepRight'

const slave = {
  name: 'evilMe',
  age: 10,
  contact: {
    a: 1,
    email: 'foo@example.com',
  },
}
const master = {
  age: 40,
  contact: {email: 'baz@example.com'},
  songs: {title: 'Remains the same'},
}

test('happy', () => {
  const result = mergeDeepRight(slave, master)
  const curryResult = mergeDeepRight(slave)(master)
  const expected = {
    age: 40,
    name: 'evilMe',
    contact: {
      a: 1,
      email: 'baz@example.com',
    },
    songs: {title: 'Remains the same'},
  }

  expect(result).toEqual(expected)
  expect(curryResult).toEqual(expected)
})

test('ramda compatible test 1', () => {
  const a = {
    w: 1,
    x: 2,
    y: {z: 3},
  }
  const b = {
    a: 4,
    b: 5,
    c: {d: 6},
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    w: 1,
    x: 2,
    y: {z: 3},
    a: 4,
    b: 5,
    c: {d: 6},
  }

  expect(result).toEqual(expected)
})

test('ramda compatible test 2', () => {
  const a = {
    a: {
      b: 1,
      c: 2,
    },
    y: 0,
  }
  const b = {
    a: {
      b: 3,
      d: 4,
    },
    z: 0,
  }
  const result = mergeDeepRight(a, b)
  const expected = {
    a: {
      b: 3,
      c: 2,
      d: 4,
    },
    y: 0,
    z: 0,
  }

  expect(result).toEqual(expected)
})

test('ramda compatible test 3', () => {
  const a = {
    w: 1,
    x: {y: 2},
  }
  const result = mergeDeepRight(a, {x: {y: 3}})
  const expected = {
    w: 1,
    x: {y: 3},
  }
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {mergeDeepRight} from 'rambda'

interface Output {
  foo: {
    bar: number
  }
}

describe('R.mergeDeepRight', () => {
  const result = mergeDeepRight<Output>({foo: {bar: 1}}, {foo: {bar: 2}})
  result.foo.bar // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeDeepRight)

### mergeLeft

```typescript

mergeLeft<Output>(newProps: object, target: object): Output
```

Same as `R.merge`, but in opposite direction.

```javascript
const result = R.mergeLeft(
  {a: 10},
  {a: 1, b: 2}
)
// => {a:10, b: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.mergeLeft(%0A%20%20%7Ba%3A%2010%7D%2C%0A%20%20%7Ba%3A%201%2C%20b%3A%202%7D%0A)%0A%2F%2F%20%3D%3E%20%7Ba%3A10%2C%20b%3A%202%7D">Try this <strong>R.mergeLeft</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
mergeLeft<Output>(newProps: object, target: object): Output;
mergeLeft<Output>(newProps: object): (target: object) => Output;
```

</details>

<details>

<summary><strong>R.mergeLeft</strong> source</summary>

```javascript
import {merge} from './merge'

export function mergeLeft(x, y) {
  if (arguments.length === 1) return _y => mergeLeft(x, _y)

  return merge(y, x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {mergeLeft} from './mergeLeft'

const obj = {
  foo: 1,
  bar: 2,
}

test('happy', () => {
  expect(mergeLeft({bar: 20}, obj)).toEqual({
    foo: 1,
    bar: 20,
  })
})

test('curry', () => {
  expect(mergeLeft({baz: 3})(obj)).toEqual({
    foo: 1,
    bar: 2,
    baz: 3,
  })
})

test('when undefined or null instead of object', () => {
  expect(mergeLeft(null, undefined)).toEqual({})
  expect(mergeLeft(obj, null)).toEqual(obj)
  expect(mergeLeft(obj, undefined)).toEqual(obj)
  expect(mergeLeft(undefined, obj)).toEqual(obj)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {mergeLeft} from 'rambda'

interface Output {
  foo: number
  bar: number
}

describe('R.mergeLeft', () => {
  const result = mergeLeft<Output>({foo: 1}, {bar: 2})
  const curriedResult = mergeLeft<Output>({foo: 1})({bar: 2})

  result.foo // $ExpectType number
  result.bar // $ExpectType number
  curriedResult.bar // $ExpectType number
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#mergeLeft)

### min

It returns the lesser value between `x` and `y`.

```javascript
const result = [
  R.min(5, 7),  
  R.min('bar', 'foo'),  
]
// => [5, 'bar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.min(5%2C%207)%2C%20%20%0A%20%20R.min('bar'%2C%20'foo')%2C%20%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B5%2C%20'bar'%5D">Try this <strong>R.min</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#min)

### minBy

It returns the lesser value between `x` and `y` according to `compareFn` function.

```javascript
const compareFn = Math.abs

R.minBy(compareFn, -5, 2) // => -5
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20compareFn%20%3D%20Math.abs%0A%0Aconst%20result%20%3D%20R.minBy(compareFn%2C%20-5%2C%202)%20%2F%2F%20%3D%3E%20-5">Try this <strong>R.minBy</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#minBy)

### modulo

Curried version of `x%y`.

```javascript
R.modulo(17, 3) // => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.modulo(17%2C%203)%20%2F%2F%20%3D%3E%202">Try this <strong>R.modulo</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#modulo)

### move

It returns a copy of `list` with exchanged `fromIndex` and `toIndex` elements.

> :boom: Rambda.move doesn't support negative indexes - it throws an error.

```javascript
const list = [1, 2, 3]
const result = R.move(0, 1, list)
// => [2, 1, 3]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20result%20%3D%20R.move(0%2C%201%2C%20list)%0A%2F%2F%20%3D%3E%20%5B2%2C%201%2C%203%5D">Try this <strong>R.move</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#move)

### multiply

Curried version of `x*y`.

```javascript
R.multiply(2, 4) // => 8
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.multiply(2%2C%204)%20%2F%2F%20%3D%3E%208">Try this <strong>R.multiply</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#multiply)

### negate

```javascript
R.negate(420)// => -420
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.negate(420)%2F%2F%20%3D%3E%20-420">Try this <strong>R.negate</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#negate)

### none

```typescript

none<T>(predicate: (x: T) => boolean, list: T[]): boolean
```

It returns `true`, if all members of array `list` returns `false`, when applied as argument to `predicate` function.

```javascript
const list = [ 0, 1, 2, 3, 4 ]
const predicate = x => x > 6

const result = R.none(predicate, arr)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%200%2C%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%206%0A%0Aconst%20result%20%3D%20R.none(predicate%2C%20arr)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.none</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
none<T>(predicate: (x: T) => boolean, list: T[]): boolean;
none<T>(predicate: (x: T) => boolean): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.none</strong> source</summary>

```javascript
export function none(predicate, list) {
  if (arguments.length === 1) return _list => none(predicate, _list)

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i])) return false
  }

  return true
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {none} from './none'

const isEven = n => n % 2 === 0

test('when true', () => {
  expect(none(isEven, [1, 3, 5, 7])).toBeTrue()
})

test('when false curried', () => {
  expect(none(isOdd)([1, 3, 5, 8])).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {none} from 'rambda'

describe('R.none', () => {
  it('happy', () => {
    const result = none(
      x => {
        x // $ExpectType number
        return x > 0
      },
      [1, 2, 3]
    )
    result // $ExpectType boolean
  })
  it('curried needs a type', () => {
    const result = none<number>(x => {
      x // $ExpectType number
      return x > 0
    })([1, 2, 3])
    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 96.48%</summary>

```text
const R = require('../../dist/rambda.js')

const isEven = n => n % 2 === 0
const arr = [1, 3, 5, 7, 9, 11]

const none = [
  {
    label: 'Rambda',
    fn: () => {
      R.none(isEven, arr)
      R.none(isEven)(arr)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.none(isEven, arr)
      Ramda.none(isEven)(arr)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#none)

### not

```typescript

not(input: any): boolean
```

It returns a boolean negated version of `input`.

```javascript
R.not(false) // true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.not(false)%20%2F%2F%20true">Try this <strong>R.not</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
not(input: any): boolean;
```

</details>

<details>

<summary><strong>R.not</strong> source</summary>

```javascript
export function not(input) {
  return !input
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {not} from './not'

test('not', () => {
  expect(not(false)).toEqual(true)
  expect(not(true)).toEqual(false)
  expect(not(0)).toEqual(true)
  expect(not(1)).toEqual(false)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {not} from 'rambda'

describe('R.not', () => {
  it('happy', () => {
    const result = not(4)

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#not)

### nth

```typescript

nth<T>(index: number, list: T[]): T | undefined
```

Curried version of `list[index]`.

```javascript
const list = [1, 2, 3]
const str = 'foo'

const result = [
  R.nth(2, list),
  R.nth(6, list),
  R.nth(0, str),
]
// => [3, undefined, 'f']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20str%20%3D%20'foo'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.nth(2%2C%20list)%2C%0A%20%20R.nth(6%2C%20list)%2C%0A%20%20R.nth(0%2C%20str)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B3%2C%20undefined%2C%20'f'%5D">Try this <strong>R.nth</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
nth<T>(index: number, list: T[]): T | undefined;	
nth(index: number): <T>(list: T[]) => T | undefined;
```

</details>

<details>

<summary><strong>R.nth</strong> source</summary>

```javascript
export function nth(index, list) {
  if (arguments.length === 1) return _list => nth(index, _list)

  const idx = index < 0 ? list.length + index : index

  return Object.prototype.toString.call(list) === '[object String]'
    ? list.charAt(idx)
    : list[idx]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {nth} from './nth'

test('happy', () => {
  expect(nth(2, [1, 2, 3, 4])).toEqual(3)
})

test('with curry', () => {
  expect(nth(2)([1, 2, 3, 4])).toEqual(3)
})

test('with string', () => {
  expect(nth(2)('foo')).toEqual('o')
})

test('with negative index', () => {
  expect(nth(-3)([1, 2, 3, 4])).toEqual(2)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {nth} from 'rambda'

const list = [1, 2, 3]

describe('R.nth', () => {
  it('happy', () => {
    const result = nth(4, list)

    result // $ExpectType number | undefined
  })
  it('curried', () => {
    const result = nth(1)(list)

    result // $ExpectType number | undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#nth)

### objOf

It creates an object with a single key-value pair.

```javascript
const result = R.objOf('foo', 'bar')
// => {foo: 'bar'}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.objOf('foo'%2C%20'bar')%0A%2F%2F%20%3D%3E%20%7Bfoo%3A%20'bar'%7D">Try this <strong>R.objOf</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#objOf)

### of

```typescript

of<T>(x: T): T[]
```

```javascript
R.of(null); // => [null]
R.of([42]); // => [[42]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.of(null)%3B%20%2F%2F%20%3D%3E%20%5Bnull%5D%0Aconst%20result%20%3D%20R.of(%5B42%5D)%3B%20%2F%2F%20%3D%3E%20%5B%5B42%5D%5D">Try this <strong>R.of</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
of<T>(x: T): T[];
```

</details>

<details>

<summary><strong>R.of</strong> source</summary>

```javascript
export function of(value) {
  return [value]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {of} from './of'

test('happy', () => {
  expect(of(3)).toEqual([3])

  expect(of(null)).toEqual([null])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {of} from 'ramda'

const list = [1, 2, 3]

describe('R.of', () => {
  it('happy', () => {
    const result = of(4)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = of(list)

    result // $ExpectType number[][]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#of)

### omit

```typescript

omit<T, K extends string>(propsToOmit: K[], obj: T): Omit<T, K>
```

It returns a partial copy of an `obj` without `propsToOmit` properties.

> :boom: When using this method with `TypeScript`, it is much easier to pass `propsToOmit` as an array. If passing a string, you will need to explicitly declare the output type.

```javascript
const obj = {a: 1, b: 2, c: 3}
const propsToOmit = 'a,c,d'
const propsToOmitList = ['a', 'c', 'd']

const result = [
  R.omit(propsToOmit, obj), 
  R.omit(propsToOmitList, obj) 
]
// => [{b: 2}, {b: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20propsToOmit%20%3D%20'a%2Cc%2Cd'%0Aconst%20propsToOmitList%20%3D%20%5B'a'%2C%20'c'%2C%20'd'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.omit(propsToOmit%2C%20obj)%2C%20%0A%20%20R.omit(propsToOmitList%2C%20obj)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%7Bb%3A%202%7D%2C%20%7Bb%3A%202%7D%5D">Try this <strong>R.omit</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
omit<T, K extends string>(propsToOmit: K[], obj: T): Omit<T, K>;
omit<K extends string>(propsToOmit: K[]): <T>(obj: T) => Omit<T, K>;
omit<T, U>(propsToOmit: string, obj: T): U;
omit<T, U>(propsToOmit: string): (obj: T) => U;
omit<T>(propsToOmit: string, obj: object): T;
omit<T>(propsToOmit: string): (obj: object) => T;
```

</details>

<details>

<summary><strong>R.omit</strong> source</summary>

```javascript
export function omit(propsToOmit, obj) {
  if (arguments.length === 1) return _obj => omit(propsToOmit, _obj)

  if (obj === null || obj === undefined) {
    return undefined
  }

  const propsToOmitValue =
    typeof propsToOmit === 'string' ? propsToOmit.split(',') : propsToOmit

  const willReturn = {}

  for (const key in obj) {
    if (!propsToOmitValue.includes(key)) {
      willReturn[key] = obj[key]
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {omit} from './omit'

test('with string as condition', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const result = omit('a,c', obj)
  const resultCurry = omit('a,c')(obj)
  const expectedResult = {b: 2}

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('with null', () => {
  expect(omit('a,b', null)).toEqual(undefined)
})

test("doesn't work with number as property", () => {
  expect(
    omit([42], {
      a: 1,
      42: 2,
    })
  ).toEqual({
    42: 2,
    a: 1,
  })
})

test('happy', () => {
  expect(
    omit(['a', 'c'])({
      a: 'foo',
      b: 'bar',
      c: 'baz',
    })
  ).toEqual({b: 'bar'})
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {omit} from 'rambda'

describe('R.omit with array as props input', () => {
  it('allow Typescript to infer object type', () => {
    const input = {a: 'foo', b: 2, c: 3, d: 4}
    const result = omit(['b,c'], input)

    result.a // $ExpectType string
    result.d // $ExpectType number

    const curriedResult = omit(['a,c'], input)

    curriedResult.a // $ExpectType string
    curriedResult.d // $ExpectType number
  })

  it('declare type of input object', () => {
    interface Input {
      a: string
      b: number
      c: number
      d: number
    }
    const input: Input = {a: 'foo', b: 2, c: 3, d: 4}
    const result = omit(['b,c'], input)
    result // $ExpectType Omit<Input, "b,c">

    result.a // $ExpectType string
    result.d // $ExpectType number

    const curriedResult = omit(['a,c'], input)

    curriedResult.a // $ExpectType string
    curriedResult.d // $ExpectType number
  })
})

describe('R.omit with string as props input', () => {
  interface Output {
    b: number
    d: number
  }

  it('explicitly declare output', () => {
    const result = omit<Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.b // $ExpectType number

    const curriedResult = omit<Output>('a,c')({a: 1, b: 2, c: 3, d: 4})

    curriedResult.b // $ExpectType number
  })

  it('explicitly declare input and output', () => {
    interface Input {
      a: number
      b: number
      c: number
      d: number
    }
    const result = omit<Input, Output>('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType Output
    result.b // $ExpectType number

    const curriedResult = omit<Input, Output>('a,c')({
      a: 1,
      b: 2,
      c: 3,
      d: 4,
    })

    curriedResult.b // $ExpectType number
  })

  it('without passing type', () => {
    const result = omit('a,c', {a: 1, b: 2, c: 3, d: 4})
    result // $ExpectType unknown
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 69.95% slower and Lodash is 97.34% slower</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {
  a: 'foo',
  b: 'bar',
  c: 'baz',
}
const toOmit = ['a', 'c']
const omit = [
  {
    label: 'Rambda',
    fn: () => {
      R.omit(toOmit, obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.omit(toOmit, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.omit(obj, toOmit)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#omit)

### once

```typescript

once<T extends (...args: any[]) => any>(func: T): T
```

It returns a function, which invokes only once `fn` function.

```javascript
let result = 0
const addOnce = R.once((x) => result = result + x)

addOnce(1)
addOnce(1)
// => 1
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?let%20result%20%3D%200%0Aconst%20addOnce%20%3D%20R.once((x)%20%3D%3E%20result%20%3D%20result%20%2B%20x)%0A%0AaddOnce(1)%0Aconst%20result%20%3D%20addOnce(1)%0A%2F%2F%20%3D%3E%201">Try this <strong>R.once</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
once<T extends (...args: any[]) => any>(func: T): T;
```

</details>

<details>

<summary><strong>R.once</strong> source</summary>

```javascript
import {curry} from './curry'

function onceFn(fn, context) {
  let result

  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments)
      fn = null
    }

    return result
  }
}

export function once(fn, context) {
  if (arguments.length === 1) {
    const wrap = onceFn(fn, context)

    return curry(wrap)
  }

  return onceFn(fn, context)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {once} from './once'

test('with counter', () => {
  let counter = 0
  const runOnce = once(x => {
    counter++

    return x + 2
  })
  expect(runOnce(1)).toEqual(3)
  runOnce(1)
  runOnce(1)
  runOnce(1)
  expect(counter).toEqual(1)
})

test('happy path', () => {
  const addOneOnce = once((a, b, c) => a + b + c, 1)

  expect(addOneOnce(10, 20, 30)).toBe(60)
  expect(addOneOnce(40)).toEqual(60)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {once} from 'rambda'

describe('R.once', () => {
  it('happy', () => {
    const runOnce = once((x: number) => {
      return x + 2
    })

    const result = runOnce(1)
    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#once)

### or

Logical OR

```javascript
R.or(false, true); // => true
R.or(false, false); // => false
R.or(false, 'foo'); // => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.or(false%2C%20true)%3B%20%2F%2F%20%3D%3E%20true%0AR.or(false%2C%20false)%3B%20%2F%2F%20%3D%3E%20false%0Aconst%20result%20%3D%20R.or(false%2C%20'foo')%3B%20%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.or</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#or)

### over

```typescript

over<T>(lens: Lens, fn: Arity1Fn, value: T): T
```

It returns a copied **Object** or **Array** with modified value received by applying function `fn` to `lens` focus.

```javascript
const headLens = R.lensIndex(0)
 
R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']) // => ['FOO', 'bar', 'baz']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20headLens%20%3D%20R.lensIndex(0)%0A%20%0Aconst%20result%20%3D%20R.over(headLens%2C%20R.toUpper%2C%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D)%20%2F%2F%20%3D%3E%20%5B'FOO'%2C%20'bar'%2C%20'baz'%5D">Try this <strong>R.over</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
over<T>(lens: Lens, fn: Arity1Fn, value: T): T;
over<T>(lens: Lens, fn: Arity1Fn, value: T[]): T[];
over(lens: Lens, fn: Arity1Fn): <T>(value: T) => T;
over(lens: Lens, fn: Arity1Fn): <T>(value: T[]) => T[];
over(lens: Lens): <T>(fn: Arity1Fn, value: T) => T;
over(lens: Lens): <T>(fn: Arity1Fn, value: T[]) => T[];
```

</details>

<details>

<summary><strong>R.over</strong> source</summary>

```javascript
import {curry} from './curry'

const Identity = x => ({
  x,
  map: fn => Identity(fn(x)),
})

function overFn(lens, fn, object) {
  return lens(x => Identity(fn(x)))(object).x
}

export const over = curry(overFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {assoc} from './assoc'
import {lens} from './lens'
import {lensIndex} from './lensIndex'
import {lensPath} from './lensPath'
import {over} from './over'
import {prop} from './prop'
import {toUpper} from './toUpper'

const testObject = {
  foo: 'bar',
  baz: {
    a: 'x',
    b: 'y',
  },
}

test('assoc lens', () => {
  const assocLens = lens(prop('foo'), assoc('foo'))
  const result = over(assocLens, toUpper, testObject)
  const expected = {
    ...testObject,
    foo: 'BAR',
  }
  expect(result).toEqual(expected)
})

test('path lens', () => {
  const pathLens = lensPath('baz.a')
  const result = over(pathLens, toUpper, testObject)
  const expected = {
    ...testObject,
    baz: {
      a: 'X',
      b: 'y',
    },
  }
  expect(result).toEqual(expected)
})

test('index lens', () => {
  const indexLens = lensIndex(0)
  const result = over(indexLens, toUpper)(['foo', 'bar'])
  expect(result).toEqual(['FOO', 'bar'])
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 56.23%</summary>

```text
const R = require('../../dist/rambda.js')

const testObj = {a: 1}

const last = [
  {
    label: 'Rambda',
    fn: () => {
      R.over(R.lensProp('a'), R.inc, testObj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.over(Ramda.lensProp('a'), Ramda.inc, testObj)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#over)

### partial

```typescript

partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V0]): (x1: V1) => T
```

It is very similar to `R.curry`, but you can pass initial arguments when you create the curried function.

`R.partial` will keep returning a function until all the arguments that the function `fn` expects are passed.
The name comes from the fact that you partially inject the inputs.

> :boom: Rambda's partial doesn't need the input arguments to be wrapped as array.

```javascript
const fn = (title, firstName, lastName) => {
  return title + ' ' + firstName + ' ' + lastName + '!'
}

const canPassAnyNumberOfArguments = R.partial(fn, 'Hello')
const ramdaStyle = R.partial(fn, ['Hello'])

const finalFn = canPassAnyNumberOfArguments('Foo')

finalFn('Bar') // =>  'Hello, Foo Bar!'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20(title%2C%20firstName%2C%20lastName)%20%3D%3E%20%7B%0A%20%20return%20title%20%2B%20'%20'%20%2B%20firstName%20%2B%20'%20'%20%2B%20lastName%20%2B%20'!'%0A%7D%0A%0Aconst%20canPassAnyNumberOfArguments%20%3D%20R.partial(fn%2C%20'Hello')%0Aconst%20ramdaStyle%20%3D%20R.partial(fn%2C%20%5B'Hello'%5D)%0A%0Aconst%20finalFn%20%3D%20canPassAnyNumberOfArguments('Foo')%0A%0Aconst%20result%20%3D%20finalFn('Bar')%20%2F%2F%20%3D%3E%20%20'Hello%2C%20Foo%20Bar!'">Try this <strong>R.partial</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
partial<V0, V1, T>(fn: (x0: V0, x1: V1) => T, args: [V0]): (x1: V1) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0, V1]): (x2: V2) => T;
partial<V0, V1, V2, T>(fn: (x0: V0, x1: V1, x2: V2) => T, args: [V0]): (x1: V1, x2: V2) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1, V2]): (x2: V3) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0, V1]): (x2: V2, x3: V3) => T;
partial<V0, V1, V2, V3, T>(fn: (x0: V0, x1: V1, x2: V2, x3: V3) => T, args: [V0]): (x1: V1, x2: V2, x3: V3) => T;
partial<T>(fn: (...a: any[]) => T, args: any[]): (...x: any[]) => T;
```

</details>

<details>

<summary><strong>R.partial</strong> source</summary>

```javascript
export function partial(fn, ...args) {
  const len = fn.length

  return (...rest) => {
    if (args.length + rest.length >= len) {
      return fn(...args, ...rest)
    }

    return partial(fn, ...[...args, ...rest])
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {partial} from './partial'
import {type} from './type'

const greet = (salutation, title, firstName, lastName) =>
  salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!'

test('happy', () => {
  const canPassAnyNumberOfArguments = partial(greet, 'Hello', 'Ms.')
  const fn = canPassAnyNumberOfArguments('foo')
  const sayHello = partial(greet, ['Hello'])
  const sayHelloRamda = partial(sayHello, ['Ms.'])

  expect(type(fn)).toBe('Function')

  expect(fn('bar')).toBe('Hello, Ms. foo bar!')
  expect(sayHelloRamda('foo', 'bar')).toBe('Hello, Ms. foo bar!')
})

test('extra arguments are ignored', () => {
  const canPassAnyNumberOfArguments = partial(greet, 'Hello', 'Ms.')
  const fn = canPassAnyNumberOfArguments('foo')

  expect(type(fn)).toBe('Function')

  expect(fn('bar', 1, 2)).toBe('Hello, Ms. foo bar!')
})

test('when array is input', () => {
  const fooFn = (a, b, c, d) => ({
    a,
    b,
    c,
    d,
  })
  const barFn = partial(fooFn, [1, 2], [])

  expect(barFn(1, 2)).toEqual({
    a: [1, 2],
    b: [],
    c: 1,
    d: 2,
  })
})

test('ramda spec', () => {
  const sayHello = partial(greet, 'Hello')
  const sayHelloToMs = partial(sayHello, 'Ms.')

  expect(sayHelloToMs('Jane', 'Jones')).toBe('Hello, Ms. Jane Jones!')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {partial} from 'rambda'

describe('R.partial', () => {
  it('happy', () => {
    function greet(
      salutation: string,
      title: string,
      firstName: string,
      lastName: string
    ) {
      return `${salutation}, ${title} ${firstName} ${lastName}!`
    }

    const sayHello = partial(greet, ['Hello'])
    const sayHelloToMs = partial(sayHello, ['Ms.'])
    const result = sayHelloToMs('Jane', 'Jones')
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partial)

### partition

```typescript

partition<T>(
  predicate: Predicate<T>,
  input: T[]
): [T[], T[]]
```

It will return array of two objects/arrays according to `predicate` function. The first member holds all instances of `input` that pass the `predicate` function, while the second member - those who doesn't.

```javascript
const list = [1, 2, 3]
const obj = {a: 1, b: 2, c: 3}
const predicate = x => x > 2

const result = [
  R.partition(predicate, list),
  R.partition(predicate, obj)
]
const expected = [
  [[3], [1, 2]],
  [{c: 3},  {a: 1, b: 2}],
]
// `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.partition(predicate%2C%20list)%2C%0A%20%20R.partition(predicate%2C%20obj)%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%5B%5B3%5D%2C%20%5B1%2C%202%5D%5D%2C%0A%20%20%5B%7Bc%3A%203%7D%2C%20%20%7Ba%3A%201%2C%20b%3A%202%7D%5D%2C%0A%5D%0A%2F%2F%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.partition</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
partition<T>(
  predicate: Predicate<T>,
  input: T[]
): [T[], T[]];
partition<T>(
  predicate: Predicate<T>
): (input: T[]) => [T[], T[]];
partition<T>(
  predicate: (x: T, prop?: string) => boolean,
  input: { [key: string]: T}
): [{ [key: string]: T}, { [key: string]: T}];
partition<T>(
  predicate: (x: T, prop?: string) => boolean
): (input: { [key: string]: T}) => [{ [key: string]: T}, { [key: string]: T}];
```

</details>

<details>

<summary><strong>R.partition</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'

export function partitionObject(predicate, iterable) {
  const yes = {}
  const no = {}
  Object.entries(iterable).forEach(([prop, value]) => {
    if (predicate(value, prop)) {
      yes[prop] = value
    } else {
      no[prop] = value
    }
  })

  return [yes, no]
}

export function partitionArray(predicate, list, indexed = false) {
  const yes = []
  const no = []
  let counter = -1

  while (counter++ < list.length - 1) {
    if (
      indexed ? predicate(list[counter], counter) : predicate(list[counter])
    ) {
      yes.push(list[counter])
    } else {
      no.push(list[counter])
    }
  }

  return [yes, no]
}

export function partition(predicate, iterable) {
  if (arguments.length === 1) {
    return listHolder => partition(predicate, listHolder)
  }
  if (!_isArray(iterable)) return partitionObject(predicate, iterable)

  return partitionArray(predicate, iterable)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {partition} from './partition'

test('with array', () => {
  const predicate = x => x > 2
  const list = [1, 2, 3, 4]

  const result = partition(predicate, list)
  const expectedResult = [
    [3, 4],
    [1, 2],
  ]

  expect(result).toEqual(expectedResult)
})

test('with object', () => {
  const predicate = (value, prop) => {
    expect(typeof prop).toBe('string')

    return value > 2
  }
  const hash = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  }

  const result = partition(predicate)(hash)
  const expectedResult = [
    {
      c: 3,
      d: 4,
    },
    {
      a: 1,
      b: 2,
    },
  ]

  expect(result).toEqual(expectedResult)
})

test('readme example', () => {
  const list = [1, 2, 3]
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const predicate = x => x > 2

  const result = [partition(predicate, list), partition(predicate, obj)]
  const expected = [
    [[3], [1, 2]],
    [
      {c: 3},
      {
        a: 1,
        b: 2,
      },
    ],
  ]
  expect(result).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {partition} from 'rambda'

describe('R.partition', () => {
  it('with array', () => {
    const predicate = (x: number) => {
      return x > 2
    }
    const list = [1, 2, 3, 4]

    const result = partition(predicate, list)
    const curriedResult = partition(predicate)(list)
    result // $ExpectType [number[], number[]]
    curriedResult // $ExpectType [number[], number[]]
  })

  /*
    TODO
    revert to old version of `dtslint` and `R.partition` typing
    as there is diff between VSCode types(correct) and dtslint(incorrect)
    
    it('with object', () => {
      const predicate = (value: number, prop?: string) => {
        return value > 2
      }
      const hash = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
      }
  
      const result = partition(predicate, hash)
      const curriedResult = partition(predicate)(hash)
      result[0] // $xExpectType { [key: string]: number; }
      result[1] // $xExpectType { [key: string]: number; }
      curriedResult[0] // $xExpectType { [key: string]: number; }
      curriedResult[1] // $xExpectType { [key: string]: number; }
    })
    */
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#partition)

### path

```typescript

path<Input, T>(pathToSearch: Path, obj: Input): T | undefined
```

If `pathToSearch` is `'a.b'` then it will return `1` if `obj` is `{a:{b:1}}`.

It will return `undefined`, if such path is not found.

> :boom: String anotation of `pathToSearch` is one of the differences between `Rambda` and `Ramda`.

```javascript
const obj = {a: {b: 1}}
const pathToSearch = 'a.b'
const pathToSearchList = ['a', 'b']

const result = [
  R.path(pathToSearch, obj),
  R.path(pathToSearchList, obj),
  R.path('a.b.c.d', obj)
]
// => [1, 1, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%20%7Bb%3A%201%7D%7D%0Aconst%20pathToSearch%20%3D%20'a.b'%0Aconst%20pathToSearchList%20%3D%20%5B'a'%2C%20'b'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.path(pathToSearch%2C%20obj)%2C%0A%20%20R.path(pathToSearchList%2C%20obj)%2C%0A%20%20R.path('a.b.c.d'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%201%2C%20undefined%5D">Try this <strong>R.path</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
path<Input, T>(pathToSearch: Path, obj: Input): T | undefined;
path<T>(pathToSearch: Path, obj: any): T | undefined;
path<T>(pathToSearch: Path): (obj: any) => T | undefined;
path<Input, T>(pathToSearch: Path): (obj: Input) => T | undefined;
```

</details>

<details>

<summary><strong>R.path</strong> source</summary>

```javascript
export function path(pathInput, obj) {
  if (arguments.length === 1) return _obj => path(pathInput, _obj)

  if (obj === null || obj === undefined) {
    return undefined
  }
  let willReturn = obj
  let counter = 0

  const pathArrValue =
    typeof pathInput === 'string' ? pathInput.split('.') : pathInput

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined
    }
    if (willReturn[pathArrValue[counter]] === null) return undefined

    willReturn = willReturn[pathArrValue[counter]]
    counter++
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {path} from './path'

test('with array inside object', () => {
  const obj = {a: {b: [1, {c: 1}]}}

  expect(path('a.b.1.c', obj)).toBe(1)
})

test('works with undefined', () => {
  const obj = {a: {b: {c: 1}}}

  expect(path('a.b.c.d.f', obj)).toBeUndefined()
  expect(path('foo.babaz', undefined)).toBeUndefined()
  expect(path('foo.babaz')(undefined)).toBeUndefined()
})

test('works with string instead of array', () => {
  expect(path('foo.bar.baz')({foo: {bar: {baz: 'yes'}}})).toEqual('yes')
})

test('path', () => {
  expect(path(['foo', 'bar', 'baz'])({foo: {bar: {baz: 'yes'}}})).toEqual(
    'yes'
  )

  expect(path(['foo', 'bar', 'baz'])(null)).toBeUndefined()

  expect(path(['foo', 'bar', 'baz'])({foo: {bar: 'baz'}})).toBeUndefined()
})

test('null is not a valid path', () => {
  expect(path('audio_tracks', {a: 1, audio_tracks: null})).toBeUndefined()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {path} from 'rambda'

interface Input {
  a: number
  b: {
    c: boolean
  }
}

describe('R.path', () => {
  it('without specified input type', () => {
    const input = {a: 1, b: {c: true}}
    const result = path<boolean>('a.b.c', input)
    const curriedResult = path<boolean>('a.b.c')(input)
    result // $ExpectType boolean | undefined
    curriedResult // $ExpectType boolean | undefined
  })

  it('without specified output type', () => {
    const input = {a: 1, b: {c: true}}
    const result = path('a.b.c', input)
    result // $ExpectType unknown
  })

  it('with string as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    const resultA = path<boolean>('a.b.c', input)
    const resultB = path<boolean>('a.b.c')(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
  it('with array as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    const resultA = path<boolean>(['a', 'b', 'c'], input)
    const resultB = path<boolean>(['a', 'b', 'c'])(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
})

describe('path with specified input', () => {
  it('with string as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    // const wrongInput = { a: 1, b: true }
    // const resultA = path<Input, boolean>('a.b.c', wrongInput)
    const resultA = path<Input, boolean>('a.b.c', input)
    const resultB = path<Input, boolean>('a.b.c')(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
  it('with array as path', () => {
    const input: Input = {a: 1, b: {c: true}}
    const resultA = path<Input, boolean>(['a', 'b', 'c'], input)
    const resultB = path<Input, boolean>(['a', 'b', 'c'])(input)
    resultA // $ExpectType boolean | undefined
    resultB // $ExpectType boolean | undefined
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 37.81% slower and Ramda is 77.81% slower</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {a: {b: 2}}
const pathInput = ['a', 'b']

const path = [
  {
    label: 'Rambda',
    fn: () => {
      R.path(pathInput, obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.path(pathInput, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.get(obj, pathInput)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#path)

### pathEq

```typescript

pathEq(pathToSearch: Path, target: any, input: any): boolean
```

It returns `true` if `pathToSearch` of `input` object is equal to `target` value.

`pathToSearch` is passed to `R.path`, which means that it can be either a string or an array. Also equality between `target` and the found value is determined by `R.equals`.

```javascript
const path = 'a.b'
const target = {c: 1}
const input = {a: {b: {c: 1}}}

const result = R.pathEq(
  path,
  target,
  input
)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20path%20%3D%20'a.b'%0Aconst%20target%20%3D%20%7Bc%3A%201%7D%0Aconst%20input%20%3D%20%7Ba%3A%20%7Bb%3A%20%7Bc%3A%201%7D%7D%7D%0A%0Aconst%20result%20%3D%20R.pathEq(%0A%20%20path%2C%0A%20%20target%2C%0A%20%20input%0A)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.pathEq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pathEq(pathToSearch: Path, target: any, input: any): boolean;
pathEq(pathToSearch: Path, target: any): (input: any) => boolean;
pathEq(pathToSearch: Path): (target: any) => (input: any) => boolean;
```

</details>

<details>

<summary><strong>R.pathEq</strong> source</summary>

```javascript
import {curry} from './curry'
import {equals} from './equals'
import {path} from './path'

function pathEqFn(pathToSearch, target, input) {
  return equals(path(pathToSearch, input), target)
}

export const pathEq = curry(pathEqFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {pathEq} from './pathEq'

test('when true', () => {
  const path = 'a.b'
  const obj = {a: {b: {c: 1}}}
  const target = {c: 1}

  expect(pathEq(path, target, obj)).toBeTrue()
})

test('when false', () => {
  const path = 'a.b'
  const obj = {a: {b: 1}}
  const target = 2

  expect(pathEq(path, target)(obj)).toBeFalse()
})

test('when wrong path', () => {
  const path = 'foo.bar'
  const obj = {a: {b: 1}}
  const target = 2

  expect(pathEq(path, target, obj)).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pathEq} from 'rambda'

describe('R.pathEq', () => {
  it('with string path', () => {
    const pathToSearch = 'a.b.c'
    const input = {a: {b: {c: 1}}}
    const target = {c: 1}

    const result = pathEq(pathToSearch, input, target)
    const curriedResult = pathEq(pathToSearch, input, target)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })

  it('with array path', () => {
    const pathToSearch = ['a', 'b', 'c']
    const input = {a: {b: {c: 1}}}
    const target = {c: 1}

    const result = pathEq(pathToSearch, input, target)
    const curriedResult = pathEq(pathToSearch, input, target)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})

describe('with ramda specs', () => {
  const testPath = ['x', 0, 'y']
  const testObj = {
    x: [
      {y: 2, z: 3},
      {y: 4, z: 5},
    ],
  }

  const result1 = pathEq(testPath, 2, testObj)
  const result2 = pathEq(testPath, 2)(testObj)
  const result3 = pathEq(testPath)(2)(testObj)
  result1 // $ExpectType boolean
  result2 // $ExpectType boolean
  result3 // $ExpectType boolean
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pathEq)

### pathOr

```typescript

pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T
```

It reads `obj` input and returns either `R.path(pathToSearch, obj)` result or `defaultValue` input.

```javascript
const defaultValue = 'DEFAULT_VALUE'
const pathToSearch = 'a.b'
const pathToSearchList = ['a', 'b']

const obj = {
  a : {
    b : 1
  }
}

const result = [
  R.pathOr(DEFAULT_VALUE, pathToSearch, obj),
  R.pathOr(DEFAULT_VALUE, pathToSearchList, obj), 
  R.pathOr(DEFAULT_VALUE, 'a.b.c', obj)
]
// => [1, 1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20pathToSearch%20%3D%20'a.b'%0Aconst%20pathToSearchList%20%3D%20%5B'a'%2C%20'b'%5D%0A%0Aconst%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%201%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearch%2C%20obj)%2C%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20pathToSearchList%2C%20obj)%2C%20%0A%20%20R.pathOr(DEFAULT_VALUE%2C%20'a.b.c'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%201%2C%20'DEFAULT_VALUE'%5D">Try this <strong>R.pathOr</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pathOr<T>(defaultValue: T, pathToSearch: Path, obj: any): T;
pathOr<T>(defaultValue: T, pathToSearch: Path): (obj: any) => T;
pathOr<T>(defaultValue: T): (pathToSearch: Path) => (obj: any) => T;
```

</details>

<details>

<summary><strong>R.pathOr</strong> source</summary>

```javascript
import {curry} from './curry'
import {defaultTo} from './defaultTo'
import {path} from './path'

function pathOrFn(defaultValue, pathInput, obj) {
  return defaultTo(defaultValue, path(pathInput, obj))
}

export const pathOr = curry(pathOrFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {pathOr} from './pathOr'

test('with undefined', () => {
  const result = pathOr('foo', 'x.y', {x: {y: 1}})

  expect(result).toEqual(1)
})

test('with null', () => {
  const result = pathOr('foo', 'x.y', null)

  expect(result).toEqual('foo')
})

test('with NaN', () => {
  const result = pathOr('foo', 'x.y', NaN)

  expect(result).toEqual('foo')
})

test('curry case (x)(y)(z)', () => {
  const result = pathOr('foo')('x.y.z')({x: {y: {a: 1}}})

  expect(result).toEqual('foo')
})

test('curry case (x)(y,z)', () => {
  const result = pathOr('foo', 'x.y.z')({x: {y: {a: 1}}})

  expect(result).toEqual('foo')
})

test('curry case (x,y)(z)', () => {
  const result = pathOr('foo')('x.y.z', {x: {y: {a: 1}}})

  expect(result).toEqual('foo')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pathOr} from 'rambda'

describe('R.pathOr', () => {
  it('with string path', () => {
    const x = pathOr<string>('foo', 'x.y', {x: {y: 'bar'}})
    x // $ExpectType string
  })
  it('with array path', () => {
    const x = pathOr<string>('foo', ['x', 'y'], {x: {y: 'bar'}})
    x // $ExpectType string
  })
  it('without passing type looks bad', () => {
    const x = pathOr('foo', 'x.y', {x: {y: 'bar'}})
    x // $ExpectType "foo"
  })
  it('curried', () => {
    const x = pathOr<string>('foo', 'x.y')({x: {y: 'bar'}})
    x // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pathOr)

### paths

```typescript

paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[]
```

It loops over members of `pathsToSearch` as `singlePath` and returns the array produced by `R.path(singlePath, obj)`.

Because it calls `R.path`, then `singlePath` can be either string or a list.

```javascript
const obj = {
  a : {
    b : {
      c : 1,
      d : 2
    }
  }
}

const result = R.paths([
  'a.b.c',
  'a.b.d',
  'a.b.c.d.e',
], obj)
// => [1, 2, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%20%7B%0A%20%20%20%20b%20%3A%20%7B%0A%20%20%20%20%20%20c%20%3A%201%2C%0A%20%20%20%20%20%20d%20%3A%202%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%0Aconst%20result%20%3D%20R.paths(%5B%0A%20%20'a.b.c'%2C%0A%20%20'a.b.d'%2C%0A%20%20'a.b.c.d.e'%2C%0A%5D%2C%20obj)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%20undefined%5D">Try this <strong>R.paths</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
paths<Input, T>(pathsToSearch: Path[], obj: Input): (T | undefined)[];
paths<Input, T>(pathsToSearch: Path[]): (obj: Input) => (T | undefined)[];
paths<T>(pathsToSearch: Path[], obj: any): (T | undefined)[];
paths<T>(pathsToSearch: Path[]): (obj: any) => (T | undefined)[];
```

</details>

<details>

<summary><strong>R.paths</strong> source</summary>

```javascript
import {path} from './path'

export function paths(pathsToSearch, obj) {
  if (arguments.length === 1) {
    return _obj => paths(pathsToSearch, _obj)
  }

  return pathsToSearch.map(singlePath => path(singlePath, obj))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {paths} from './paths'

const obj = {
  a: {
    b: {
      c: 1,
      d: 2,
    },
  },
  p: [{q: 3}],
  x: {
    y: 'FOO',
    z: [[{}]],
  },
}

test('with string path + curry', () => {
  const pathsInput = ['a.b.d', 'p.q']
  const expected = [2, undefined]
  const result = paths(pathsInput, obj)
  const curriedResult = paths(pathsInput)(obj)

  expect(result).toEqual(expected)
  expect(curriedResult).toEqual(expected)
})

test('with array path', () => {
  const result = paths(
    [
      ['a', 'b', 'c'],
      ['x', 'y'],
    ],
    obj
  )

  expect(result).toEqual([1, 'FOO'])
})

test('takes a paths that contains indices into arrays', () => {
  expect(
    paths(
      [
        ['p', 0, 'q'],
        ['x', 'z', 0, 0],
      ],
      obj
    )
  ).toEqual([3, {}])
  expect(
    paths(
      [
        ['p', 0, 'q'],
        ['x', 'z', 2, 1],
      ],
      obj
    )
  ).toEqual([3, undefined])
})

test("gets a deep property's value from objects", () => {
  expect(paths([['a', 'b']], obj)).toEqual([obj.a.b])
  expect(paths([['p', 0]], obj)).toEqual([obj.p[0]])
})

test('returns undefined for items not found', () => {
  expect(paths([['a', 'x', 'y']], obj)).toEqual([undefined])
  expect(paths([['p', 2]], obj)).toEqual([undefined])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {paths} from 'rambda'

interface Input {
  a: number
  b: number
  c: number
}

const input: Input = {a: 1, b: 2, c: 3}

describe('R.paths', () => {
  it('with dot notation', () => {
    const result = paths<number>(['a.b.c', 'foo.bar'], input)
    result // $ExpectType (number | undefined)[]
  })

  it('without type', () => {
    const result = paths(['a.b.c', 'foo.bar'], input)
    result // $ExpectType unknown[]
  })

  it('with array as path', () => {
    const result = paths<number>([['a', 'b', 'c'], ['foo.bar']], input)
    result // $ExpectType (number | undefined)[]
  })

  it('curried', () => {
    const result = paths<number>([['a', 'b', 'c'], ['foo.bar']])(input)
    result // $ExpectType (number | undefined)[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#paths)

### pick

```typescript

pick<T, K extends string | number | symbol>(propsToPick: K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>
```

It returns a partial copy of an `input` containing only `propsToPick` properties.

`input` can be either an object or an array.

String anotation of `propsToPick` is one of the differences between `Rambda` and `Ramda`.

> :boom: When using this method with `TypeScript`, it is much easier to pass `propsToPick` as an array. If passing a string, you will need to explicitly declare the output type.

```javascript
const obj = {
  a : 1,
  b : false,
  foo: 'cherry'
}
const list = [1, 2, 3, 4]
const propsToPick = 'a,foo'
const propsToPickList = ['a', 'foo']

const result = [
  R.pick(propsToPick, obj),
  R.pick(propsToPickList, obj),
  R.pick('a,bar', obj),
  R.pick('bar', obj),
  R.pick([0, 3, 5], list),
  R.pick('0,3,5', list),
]

const expected = [
  {a:1, foo: 'cherry'},
  {a:1, foo: 'cherry'},
  {a:1},
  {},
  {0: 1, 3: 4},
  {0: 1, 3: 4},
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pick(propsToPick%2C%20obj)%2C%0A%20%20R.pick(propsToPickList%2C%20obj)%2C%0A%20%20R.pick('a%2Cbar'%2C%20obj)%2C%0A%20%20R.pick('bar'%2C%20obj)%2C%0A%20%20R.pick(%5B0%2C%203%2C%205%5D%2C%20list)%2C%0A%20%20R.pick('0%2C3%2C5'%2C%20list)%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%7D%2C%0A%20%20%7Ba%3A1%7D%2C%0A%20%20%7B%7D%2C%0A%20%20%7B0%3A%201%2C%203%3A%204%7D%2C%0A%20%20%7B0%3A%201%2C%203%3A%204%7D%2C%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.pick</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pick<T, K extends string | number | symbol>(propsToPick: K[], input: T): Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
pick<K extends string | number | symbol>(propsToPick: K[]): <T>(input: T) => Pick<T, Exclude<keyof T, Exclude<keyof T, K>>>;
pick<T, U>(propsToPick: string, input: T): U;
pick<T, U>(propsToPick: string): (input: T) => U;
pick<T>(propsToPick: string, input: object): T;
pick<T>(propsToPick: string): (input: object) => T;
```

</details>

<details>

<summary><strong>R.pick</strong> source</summary>

```javascript
export function pick(propsToPick, input) {
  if (arguments.length === 1) return _input => pick(propsToPick, _input)

  if (input === null || input === undefined) {
    return undefined
  }
  const keys =
    typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick

  const willReturn = {}
  let counter = 0

  while (counter < keys.length) {
    if (keys[counter] in input) {
      willReturn[keys[counter]] = input[keys[counter]]
    }
    counter++
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {pick} from './pick'

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

test('props to pick is a string', () => {
  const result = pick('a,c', obj)
  const resultCurry = pick('a,c')(obj)
  const expectedResult = {
    a: 1,
    c: 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('when prop is missing', () => {
  const result = pick('a,d,f', obj)
  expect(result).toEqual({a: 1})
})

test('with list indexes as props', () => {
  const list = [1, 2, 3]
  const expected = {0: 1, 2: 3}
  expect(pick([0, 2, 3], list)).toEqual(expected)
  expect(pick('0,2,3', list)).toEqual(expected)
})

test('props to pick is an array', () => {
  expect(
    pick(['a', 'c'])({
      a: 'foo',
      b: 'bar',
      c: 'baz',
    })
  ).toEqual({
    a: 'foo',
    c: 'baz',
  })

  expect(
    pick(['a', 'd', 'e', 'f'])({
      a: 'foo',
      b: 'bar',
      c: 'baz',
    })
  ).toEqual({a: 'foo'})

  expect(pick('a,d,e,f')(null)).toEqual(undefined)
})

test('works with list as input and number as props - props to pick is an array', () => {
  const result = pick([1, 2], ['a', 'b', 'c', 'd'])
  expect(result).toEqual({
    1: 'b',
    2: 'c',
  })
})

test('works with list as input and number as props - props to pick is a string', () => {
  const result = pick('1,2', ['a', 'b', 'c', 'd'])
  expect(result).toEqual({
    1: 'b',
    2: 'c',
  })
})

test('with symbol', () => {
  const symbolProp = Symbol('s')
  expect(pick([symbolProp], {[symbolProp]: 'a'})).toMatchInlineSnapshot(`
    Object {
      Symbol(s): "a",
    }
  `)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pick} from 'rambda'

const input = {a: 'foo', b: 2, c: 3, d: 4}

describe('R.pick with array as props input', () => {
  it('without passing type', () => {
    const result = pick(['a', 'c'], input)
    result.a // $ExpectType string
    result.c // $ExpectType number
  })
})

describe('R.pick with string as props input', () => {
  interface Input {
    a: string
    b: number
    c: number
    d: number
  }
  interface Output {
    a: string
    c: number
  }
  it('explicitly declare output', () => {
    const result = pick<Output>('a,c', input)
    result // $ExpectType Output
    result.a // $ExpectType string
    result.c // $ExpectType number

    const curriedResult = pick<Output>('a,c')(input)

    curriedResult.a // $ExpectType string
  })

  it('explicitly declare input and output', () => {
    const result = pick<Input, Output>('a,c', input)
    result // $ExpectType Output
    result.a // $ExpectType string

    const curriedResult = pick<Input, Output>('a,c')(input)

    curriedResult.a // $ExpectType string
  })

  it('without passing type', () => {
    const result = pick('a,c', input)
    result // $ExpectType unknown
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 19.07% slower and Lodash is 80.2% slower</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {
  a: 'foo',
  b: 'bar',
  c: 'baz',
}
const pickInput = ['a', 'c']
const pick = [
  {
    label: 'Rambda',
    fn: () => {
      R.pick(pickInput, obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.pick(pickInput, obj)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.pick(obj, pickInput)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pick)

### pickAll

```typescript

pickAll<T, U>(propsToPick: string[], input: T): U
```

Same as `R.pick` but it won't skip the missing props, i.e. it will assign them to `undefined`.

> :boom: When using this method with `TypeScript`, it is much easier to pass `propsToPick` as an array. If passing a string, you will need to explicitly declare the output type.

```javascript
const obj = {
  a : 1,
  b : false,
  foo: 'cherry'
}
const propsToPick = 'a,foo,bar'
const propsToPickList = ['a', 'foo', 'bar']

const result = [
  R.pickAll(propsToPick, obj),
  R.pickAll(propsToPickList, obj),
  R.pickAll('a,bar', obj),
  R.pickAll('bar', obj),
]
const expected = [
  {a:1, foo: 'cherry', bar: undefined},
  {a:1, foo: 'cherry', bar: undefined},
  {a:1, bar: undefined},
  {bar: undefined}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%20false%2C%0A%20%20foo%3A%20'cherry'%0A%7D%0Aconst%20propsToPick%20%3D%20'a%2Cfoo%2Cbar'%0Aconst%20propsToPickList%20%3D%20%5B'a'%2C%20'foo'%2C%20'bar'%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.pickAll(propsToPick%2C%20obj)%2C%0A%20%20R.pickAll(propsToPickList%2C%20obj)%2C%0A%20%20R.pickAll('a%2Cbar'%2C%20obj)%2C%0A%20%20R.pickAll('bar'%2C%20obj)%2C%0A%5D%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20foo%3A%20'cherry'%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Ba%3A1%2C%20bar%3A%20undefined%7D%2C%0A%20%20%7Bbar%3A%20undefined%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.pickAll</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pickAll<T, U>(propsToPick: string[], input: T): U;
pickAll<T, U>(propsToPick: string[]): (input: T) => U;
pickAll<T, U>(propsToPick: string, input: T): U;
pickAll<T, U>(propsToPick: string): (input: T) => U;
```

</details>

<details>

<summary><strong>R.pickAll</strong> source</summary>

```javascript
export function pickAll(propsToPick, obj) {
  if (arguments.length === 1) return _obj => pickAll(propsToPick, _obj)

  if (obj === null || obj === undefined) {
    return undefined
  }
  const keysValue =
    typeof propsToPick === 'string' ? propsToPick.split(',') : propsToPick

  const willReturn = {}
  let counter = 0

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]]
    } else {
      willReturn[keysValue[counter]] = undefined
    }
    counter++
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {pickAll} from './pickAll'

test('when input is undefined or null', () => {
  expect(pickAll('a', null)).toBe(undefined)
  expect(pickAll('a', undefined)).toBe(undefined)
})

test('with string as condition', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  }
  const result = pickAll('a,c', obj)
  const resultCurry = pickAll('a,c')(obj)
  const expectedResult = {
    a: 1,
    b: undefined,
    c: 3,
  }

  expect(result).toEqual(expectedResult)
  expect(resultCurry).toEqual(expectedResult)
})

test('with array as condition', () => {
  expect(
    pickAll(['a', 'b', 'c'], {
      a: 'foo',
      c: 'baz',
    })
  ).toEqual({
    a: 'foo',
    b: undefined,
    c: 'baz',
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pickAll} from 'rambda'

interface Input {
  a: string
  b: number
  c: number
  d: number
}
interface Output {
  a?: string
  c?: number
}
const input = {a: 'foo', b: 2, c: 3, d: 4}

describe('R.pickAll with array as props input', () => {
  it('without passing type', () => {
    const result = pickAll(['a', 'c'], input)
    result // $ExpectType unknown
  })
  it('without passing type + curry', () => {
    const result = pickAll(['a', 'c'])(input)
    result // $ExpectType unknown
  })
  it('explicitly passing types', () => {
    const result = pickAll<Input, Output>(['a', 'c'], input)
    result.a // $ExpectType string | undefined
    result.c // $ExpectType number | undefined
  })
  it('explicitly passing types + curry', () => {
    const result = pickAll<Input, Output>(['a', 'c'])(input)
    result.a // $ExpectType string | undefined
    result.c // $ExpectType number | undefined
  })
})

describe('R.pickAll with string as props input', () => {
  it('without passing type', () => {
    const result = pickAll('a,c', input)
    result // $ExpectType unknown
  })
  it('without passing type + curry', () => {
    const result = pickAll('a,c')(input)
    result // $ExpectType unknown
  })
  it('explicitly passing types', () => {
    const result = pickAll<Input, Output>('a,c', input)
    result.a // $ExpectType string | undefined
    result.c // $ExpectType number | undefined
  })
  it('explicitly passing types + curry', () => {
    const result = pickAll<Input, Output>('a,c')(input)
    result.a // $ExpectType string | undefined
    result.c // $ExpectType number | undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pickAll)

### pipe

It performs left-to-right function composition.

```javascript
const result = R.pipe(
  R.filter(val => val > 2),
  R.map(a => a * 2)
)([1, 2, 3, 4])

// => [6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.pipe(%0A%20%20R.filter(val%20%3D%3E%20val%20%3E%202)%2C%0A%20%20R.map(a%20%3D%3E%20a%20*%202)%0A)(%5B1%2C%202%2C%203%2C%204%5D)%0A%0A%2F%2F%20%3D%3E%20%5B6%2C%208%5D">Try this <strong>R.pipe</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pipe)

### pluck

```typescript

pluck<K extends keyof T, T>(property: K, list: T[]): T[K][]
```

It returns list of the values of `property` taken from the all objects inside `list`.

```javascript
const list = [{a: 1}, {a: 2}, {b: 3}]
const property = 'a'

const result = R.pluck(property, list) 
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Bb%3A%203%7D%5D%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20R.pluck(property%2C%20list)%20%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.pluck</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
pluck<K extends keyof T, T>(property: K, list: T[]): T[K][];
pluck<T>(property: number, list: { [k: number]: T }[]):  T[];
pluck<P extends string>(property: P): <T>(list: Record<P, T>[]) => T[];
pluck(property: number): <T>(list: { [k: number]: T }[]) => T[];
```

</details>

<details>

<summary><strong>R.pluck</strong> source</summary>

```javascript
import {map} from './map'

export function pluck(property, list) {
  if (arguments.length === 1) return _list => pluck(property, _list)

  const willReturn = []

  map(x => {
    if (x[property] !== undefined) {
      willReturn.push(x[property])
    }
  }, list)

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {pluck} from './pluck'

test('happy', () => {
  expect(pluck('a')([{a: 1}, {a: 2}, {b: 1}])).toEqual([1, 2])
})

test('with number', () => {
  const input = [
    [1, 2],
    [3, 4],
  ]

  expect(pluck(0, input)).toEqual([1, 3])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pluck} from 'rambda'

describe('R.pluck', () => {
  it('with object', () => {
    interface ListMember {
      a: number
      b: string
    }
    const input: ListMember[] = [
      {a: 1, b: 'foo'},
      {a: 2, b: 'bar'},
    ]
    const resultA = pluck('a', input)
    const resultB = pluck('b')(input)
    resultA // $ExpectType number[]
    resultB // $ExpectType string[]
  })

  it('with array', () => {
    const input = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    const result = pluck(0, input)
    const resultCurry = pluck(0)(input)
    result // $ExpectType number[]
    resultCurry // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#pluck)

### prepend

```typescript

prepend<T>(x: T, input: T[]): T[]
```

It adds element `x` at the beginning of `list`.

```javascript
const result = R.prepend('foo', ['bar', 'baz'])
// => ['foo', 'bar', 'baz']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.prepend('foo'%2C%20%5B'bar'%2C%20'baz'%5D)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20'bar'%2C%20'baz'%5D">Try this <strong>R.prepend</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
prepend<T>(x: T, input: T[]): T[];
prepend<T>(x: T): (input: T[]) => T[];
```

</details>

<details>

<summary><strong>R.prepend</strong> source</summary>

```javascript
export function prepend(x, input) {
  if (arguments.length === 1) return _input => prepend(x, _input)

  if (typeof input === 'string') return [x].concat(input.split(''))

  return [x].concat(input)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {prepend} from './prepend'

test('happy', () => {
  expect(prepend('yes', ['foo', 'bar', 'baz'])).toEqual([
    'yes',
    'foo',
    'bar',
    'baz',
  ])
})

test('with empty list', () => {
  expect(prepend('foo')([])).toEqual(['foo'])
})

test('with string instead of array', () => {
  expect(prepend('foo')('bar')).toEqual(['foo', 'b', 'a', 'r'])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {prepend} from 'rambda'

const list = [1, 2, 3]

describe('R.prepend', () => {
  it('happy', () => {
    const result = prepend(4, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = prepend(4)(list)

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prepend)

### product

```typescript

product(list: number[]): number
```

```javascript
R.product([ 2, 3, 4 ])
// => 24)
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.product(%5B%202%2C%203%2C%204%20%5D)%0A%2F%2F%20%3D%3E%2024)">Try this <strong>R.product</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
product(list: number[]): number;
```

</details>

<details>

<summary><strong>R.product</strong> source</summary>

```javascript
import {multiply} from './multiply'
import {reduce} from './reduce'

export const product = reduce(multiply, 1)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {product} from './product'

test('happy', () => {
  expect(product([2, 3, 4])).toEqual(24)
})

test('bad input', () => {
  expect(product([null])).toEqual(0)
  expect(product([])).toEqual(1)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {product} from 'rambda'

describe('R.product', () => {
  it('happy', () => {
    const result = product([1, 2, 3])

    result // $ExpectType number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#product)

### prop

```typescript

prop<P extends keyof O, O>(propToFind: P, obj: O): O[P]
```

It returns the value of property `propToFind` in `obj`.

If there is no such property, it returns `undefined`.

```javascript
const result = [
  R.prop('x', {x: 100}), 
  R.prop('x', {a: 1}) 
]
// => [100, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.prop('x'%2C%20%7Bx%3A%20100%7D)%2C%20%0A%20%20R.prop('x'%2C%20%7Ba%3A%201%7D)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B100%2C%20undefined%5D">Try this <strong>R.prop</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
prop<P extends keyof O, O>(propToFind: P, obj: O): O[P];
prop<P extends keyof O, O>(propToFind: P): (obj: O) => O[P];
prop<P extends string | number>(propToFind: P): <T>(obj: Record<P, T>) => T;
prop<P extends string | number, T>(propToFind: P): (obj: Record<P, T>) => T;
```

</details>

<details>

<summary><strong>R.prop</strong> source</summary>

```javascript
export function prop(propToFind, obj) {
  if (arguments.length === 1) return _obj => prop(propToFind, _obj)

  if (!obj) return undefined

  return obj[propToFind]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {prop} from './prop'

test('prop', () => {
  expect(prop('foo')({foo: 'baz'})).toEqual('baz')

  expect(prop('bar')({foo: 'baz'})).toEqual(undefined)

  expect(prop('bar')(null)).toEqual(undefined)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {pipe, prop} from 'rambda'

describe('R.prop', () => {
  const obj = {a: 1, b: 'foo'}
  type Something = {a?: number, b?: string}

  it('issue #553', () => {
    const result = prop('e', {e: 'test1', d: 'test2'})
    const curriedResult = prop<string>('e')({e: 'test1', d: 'test2'})

    result // $ExpectType string
    curriedResult // $ExpectType string
  })
  it('happy', () => {
    const result = prop('a', obj)

    result // $ExpectType number
  })
  it('curried', () => {
    const result = prop('b')(obj)

    result // $ExpectType string
  })
  it('curried with explicit object type', () => {
    const result = prop<'a', Something>('a')(obj)

    result // $ExpectType number | undefined
  })
  it('curried with implicit object type', () => {
    const result = pipe((value) => value as Something, prop('b'))(obj)

    result // $ExpectType string | undefined
  })
  it('curried with explicit result type', () => {
    const result = prop<'b', string>('b')(obj)

    result // $ExpectType string
  })
})

describe('with number as prop', () => {
  const list = [1, 2, 3]
  const index = 1
  it('happy', () => {
    const result = prop(index, list)

    result // $ExpectType number
  })
  it('curried require explicit type', () => {
    const result = prop<number>(index)(list)

    result // $ExpectType number
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 87.95%</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {
  a: {c: 2},
  b: 1,
}
const propInput = 'b'

const prop = [
  {
    label: 'Rambda',
    fn: () => {
      R.prop(propInput, obj)
      R.prop(propInput)(obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.prop(propInput, obj)
      Ramda.prop(propInput)(obj)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#prop)

### propEq

```typescript

propEq<K extends string | number>(propToFind: K, valueToMatch: any, obj: Record<K, any>): boolean
```

It returns true if `obj` has property `propToFind` and its value is equal to `valueToMatch`.

```javascript
const obj = { foo: 'bar' }
const secondObj = { foo: 1 }

const propToFind = 'foo'
const valueToMatch = 'bar'

const result = [
  R.propEq(propToFind, valueToMatch, obj),
  R.propEq(propToFind, valueToMatch, secondObj)
]
// => [true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7B%20foo%3A%20'bar'%20%7D%0Aconst%20secondObj%20%3D%20%7B%20foo%3A%201%20%7D%0A%0Aconst%20propToFind%20%3D%20'foo'%0Aconst%20valueToMatch%20%3D%20'bar'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20obj)%2C%0A%20%20R.propEq(propToFind%2C%20valueToMatch%2C%20secondObj)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20false%5D">Try this <strong>R.propEq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
propEq<K extends string | number>(propToFind: K, valueToMatch: any, obj: Record<K, any>): boolean;
propEq<K extends string | number>(propToFind: K, valueToMatch: any): (obj: Record<K, any>) => boolean;
propEq<K extends string | number>(propToFind: K): {
  (valueToMatch: any, obj: Record<K, any>): boolean;
  (valueToMatch: any): (obj: Record<K, any>) => boolean;
};
```

</details>

<details>

<summary><strong>R.propEq</strong> source</summary>

```javascript
import {curry} from './curry'

function propEqFn(propToFind, valueToMatch, obj) {
  if (!obj) return false

  return obj[propToFind] === valueToMatch
}

export const propEq = curry(propEqFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {propEq} from './propEq'

test('happy', () => {
  expect(propEq('foo', 'bar')({foo: 'bar'})).toBeTrue()
  expect(propEq('foo', 'bar')({foo: 'baz'})).toBeFalse()
  expect(propEq('foo')('bar')({foo: 'baz'})).toBeFalse()
  expect(propEq('foo', 'bar', null)).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {propEq} from 'rambda'

const property = 'foo'
const numberProperty = 1
const value = 'bar'
const obj = {[property]: value}
const objWithNumberIndex = {[numberProperty]: value}

describe('R.propEq', () => {
  it('happy', () => {
    const result = propEq(property, value, obj)
    result // $ExpectType boolean
  })

  it('number is property', () => {
    const result = propEq(1, value, objWithNumberIndex)
    result // $ExpectType boolean
  })

  it('with optional property', () => {
    interface MyType {
      optional?: string | number
    }

    const myObject: MyType = {}
    const valueToFind = '1111'
    // $ExpectError
    propEq('optional', valueToFind, myObject)

    // $ExpectError
    propEq('optional', valueToFind, myObject)
  })

  it('imported from @types/ramda', () => {
    interface A {
      foo: string | null
    }
    const obj: A = {
      foo: 'bar',
    }
    const value = ''
    const result = propEq('foo', value)(obj)
    result // $ExpectType boolean

    // $ExpectError
    propEq('bar', value)(obj)
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 91.92%</summary>

```text
const R = require('../../dist/rambda.js')

const obj = {
  a: {c: 2},
  b: 1,
}
const propInput = 'b'
const expected = {c: 2}

const propEq = [
  {
    label: 'Rambda',
    fn: () => {
      R.propEq('a')(expected)(obj)

      R.propEq('a', expected)(obj)

      R.propEq('a', expected, obj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.propEq('a')(expected)(obj)

      Ramda.propEq('a', expected)(obj)

      Ramda.propEq('a', expected, obj)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propEq)

### propIs

```typescript

propIs<C extends (...args: any[]) => any, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, ReturnType<C>>
```

It returns `true` if `property` of `obj` is from `target` type.

```javascript
const obj = {a:1, b: 'foo'}

const result = [
  R.propIs(Number, 'a', obj),
  R.propIs(String, 'b', obj),
  R.propIs(Number, 'b', obj),
]
// => [true, true, false]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A%20'foo'%7D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propIs(Number%2C%20'a'%2C%20obj)%2C%0A%20%20R.propIs(String%2C%20'b'%2C%20obj)%2C%0A%20%20R.propIs(Number%2C%20'b'%2C%20obj)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%2C%20false%5D">Try this <strong>R.propIs</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
propIs<C extends (...args: any[]) => any, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, ReturnType<C>>;
propIs<C extends new (...args: any[]) => any, K extends keyof any>(type: C, name: K, obj: any): obj is Record<K, InstanceType<C>>;
propIs<C extends (...args: any[]) => any, K extends keyof any>(type: C, name: K): (obj: any) => obj is Record<K, ReturnType<C>>;
propIs<C extends new (...args: any[]) => any, K extends keyof any>(type: C, name: K): (obj: any) => obj is Record<K, InstanceType<C>>;
propIs<C extends (...args: any[]) => any>(type: C): {
    <K extends keyof any>(name: K, obj: any): obj is Record<K, ReturnType<C>>;
    <K extends keyof any>(name: K): (obj: any) => obj is Record<K, ReturnType<C>>;
};
propIs<C extends new (...args: any[]) => any>(type: C): {
    <K extends keyof any>(name: K, obj: any): obj is Record<K, InstanceType<C>>;
    <K extends keyof any>(name: K): (obj: any) => obj is Record<K, InstanceType<C>>;
};
```

</details>

<details>

<summary><strong>R.propIs</strong> source</summary>

```javascript
import {curry} from './curry'
import {is} from './is'

function propIsFn(targetPrototype, property, obj) {
  return is(targetPrototype, obj[property])
}

export const propIs = curry(propIsFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {propIs} from './propIs'

const obj = {a: 1, b: 'foo'}

test('when true', () => {
  expect(propIs(Number, 'a', obj)).toBeTrue()
  expect(propIs(String, 'b', obj)).toBeTrue()
})

test('when false', () => {
  expect(propIs(String, 'a', obj)).toBeFalse()
  expect(propIs(Number, 'b', obj)).toBeFalse()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {propIs} from 'rambda'

const property = 'a'
const obj = {a: 1}

describe('R.propIs', () => {
  it('happy', () => {
    const result = propIs(Number, property, obj)
    result // $ExpectType boolean
  })

  it('curried', () => {
    const result = propIs(Number, property)(obj)
    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propIs)

### propOr

```typescript

propOr<T, P extends string>(defaultValue: T, property: P, obj: Partial<Record<P, T>> | undefined): T
```

It returns either `defaultValue` or the value of `property` in `obj`.

```javascript
const obj = {a: 1}
const defaultValue = 'DEFAULT_VALUE'
const property = 'a'

const result = [
  R.propOr(defaultValue, property, obj),
  R.propOr(defaultValue, 'foo', obj)
]
// => [1, 'DEFAULT_VALUE']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A%201%7D%0Aconst%20defaultValue%20%3D%20'DEFAULT_VALUE'%0Aconst%20property%20%3D%20'a'%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.propOr(defaultValue%2C%20property%2C%20obj)%2C%0A%20%20R.propOr(defaultValue%2C%20'foo'%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B1%2C%20'DEFAULT_VALUE'%5D">Try this <strong>R.propOr</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
propOr<T, P extends string>(defaultValue: T, property: P, obj: Partial<Record<P, T>> | undefined): T;
propOr<T, P extends string>(defaultValue: T, property: P): (obj: Partial<Record<P, T>> | undefined) => T;
propOr<T>(defaultValue: T): {
  <P extends string>(property: P, obj: Partial<Record<P, T>> | undefined): T;
  <P extends string>(property: P): (obj: Partial<Record<P, T>> | undefined) => T;
}
```

</details>

<details>

<summary><strong>R.propOr</strong> source</summary>

```javascript
import {curry} from './curry'
import {defaultTo} from './defaultTo'

function propOrFn(defaultValue, property, obj) {
  if (!obj) return defaultValue

  return defaultTo(defaultValue, obj[property])
}

export const propOr = curry(propOrFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {propOr} from './propOr'

test('propOr (result)', () => {
  const obj = {a: 1}
  expect(propOr('default', 'a', obj)).toEqual(1)
  expect(propOr('default', 'notExist', obj)).toEqual('default')
  expect(propOr('default', 'notExist', null)).toEqual('default')
})

test('propOr (currying)', () => {
  const obj = {a: 1}
  expect(propOr('default')('a', obj)).toEqual(1)
  expect(propOr('default', 'a')(obj)).toEqual(1)
  expect(propOr('default')('notExist', obj)).toEqual('default')
  expect(propOr('default', 'notExist')(obj)).toEqual('default')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {propOr} from 'rambda'

const obj = {foo: 'bar'}
const property = 'foo'
const fallback = 'fallback'

describe('R.propOr', () => {
  it('happy', () => {
    const result = propOr(fallback, property, obj)
    result // $ExpectType string
  })
  it('curry 1', () => {
    const result = propOr(fallback)(property, obj)
    result // $ExpectType string
  })
  it('curry 2', () => {
    const result = propOr(fallback, property)(obj)
    result // $ExpectType string
  })
  it('curry 3', () => {
    const result = propOr(fallback)(property)(obj)
    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#propOr)

### props

```typescript

props<P extends string, T>(propsToPick: P[], obj: Record<P, T>): T[]
```

It takes list with properties `propsToPick` and returns a list with property values in `obj`.

```javascript
const result = R.props(
  ['a', 'b'], 
  {a:1, c:3}
)
// => [1, undefined]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.props(%0A%20%20%5B'a'%2C%20'b'%5D%2C%20%0A%20%20%7Ba%3A1%2C%20c%3A3%7D%0A)%0A%2F%2F%20%3D%3E%20%5B1%2C%20undefined%5D">Try this <strong>R.props</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
props<P extends string, T>(propsToPick: P[], obj: Record<P, T>): T[];
props<P extends string>(propsToPick: P[]): <T>(obj: Record<P, T>) => T[];
props<P extends string, T>(propsToPick: P[]): (obj: Record<P, T>) => T[];
```

</details>

<details>

<summary><strong>R.props</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {mapArray} from './map'

export function props(propsToPick, obj) {
  if (arguments.length === 1) {
    return _obj => props(propsToPick, _obj)
  }
  if (!_isArray(propsToPick)) {
    throw new Error('propsToPick is not a list')
  }

  return mapArray(prop => obj[prop], propsToPick)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {props} from './props'

const obj = {
  a: 1,
  b: 2,
}
const propsToPick = ['a', 'c']

test('happy', () => {
  const result = props(propsToPick, obj)
  expect(result).toEqual([1, undefined])
})

test('curried', () => {
  const result = props(propsToPick)(obj)
  expect(result).toEqual([1, undefined])
})

test('wrong input', () => {
  expect(() => props(null)(obj)).toThrow()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {props} from 'rambda'

const obj = {a: 1, b: 2}

describe('R.props', () => {
  it('happy', () => {
    const result = props(['a', 'b'], obj)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = props(['a', 'b'])(obj)

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#props)

### range

```typescript

range(startInclusive: number, endExclusive: number): number[]
```

It returns list of numbers between `startInclusive` to `endExclusive` markers.

```javascript
R.range(0, 5)
// => [0, 1, 2, 3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.range(0%2C%205)%0A%2F%2F%20%3D%3E%20%5B0%2C%201%2C%202%2C%203%2C%204%5D">Try this <strong>R.range</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
range(startInclusive: number, endExclusive: number): number[];
range(startInclusive: number): (endExclusive: number) => number[];
```

</details>

<details>

<summary><strong>R.range</strong> source</summary>

```javascript
export function range(start, end) {
  if (arguments.length === 1) return _end => range(start, _end)

  if (Number.isNaN(Number(start)) || Number.isNaN(Number(end))) {
    throw new TypeError('Both arguments to range must be numbers')
  }

  if (end < start) return []

  const len = end - start
  const willReturn = Array(len)

  for (let i = 0; i < len; i++) {
    willReturn[i] = start + i
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {range} from './range'

test('happy', () => {
  expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})

test('end range is bigger than start range', () => {
  expect(range(7, 3)).toEqual([])
  expect(range(5, 5)).toEqual([])
})

test('with bad input', () => {
  const throwMessage = 'Both arguments to range must be numbers'
  expect(() => range('a', 6)).toThrowWithMessage(Error, throwMessage)
  expect(() => range(6, 'z')).toThrowWithMessage(Error, throwMessage)
})

test('curry', () => {
  expect(range(0)(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {range} from 'rambda'

describe('R.range', () => {
  it('happy', () => {
    const result = range(1, 4)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = range(1)(4)

    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 61.8% slower and Lodash is 57.44% slower</summary>

```text
const R = require('../../dist/rambda.js')

const start = 12
const end = 22
const range = [
  {
    label: 'Rambda',
    fn: () => {
      R.range(start, end)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.range(start, end)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.range(start, end)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#range)

### reduce

```typescript

reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: T[]): TResult
```

> :boom: It passes index of the list as third argument to `reducer` function.

```javascript
const list = [1, 2, 3]
const initialValue = 10
const reducer = (prev, current) => prev * current

const result = R.reduce(reducer, initialValue, list)
// => 60
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0Aconst%20initialValue%20%3D%2010%0Aconst%20reducer%20%3D%20(prev%2C%20current)%20%3D%3E%20prev%20*%20current%0A%0Aconst%20result%20%3D%20R.reduce(reducer%2C%20initialValue%2C%20list)%0A%2F%2F%20%3D%3E%2060">Try this <strong>R.reduce</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
reduce<T, TResult>(reducer: (prev: TResult, current: T, i: number) => TResult, initialValue: TResult, list: T[]): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T) => TResult, initialValue: TResult, list: T[]): TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult): (initialValue: TResult, list: T[]) => TResult;
reduce<T, TResult>(reducer: (prev: TResult, current: T, i?: number) => TResult, initialValue: TResult): (list: T[]) => TResult;
```

</details>

<details>

<summary><strong>R.reduce</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {_keys} from './_internals/_keys'
import {curry} from './curry'

function reduceFn(reducer, acc, list) {
  if (!_isArray(list)) {
    throw new TypeError('reduce: list must be array or iterable')
  }
  let index = 0
  const len = list.length

  while (index < len) {
    acc = reducer(acc, list[index], index, list)
    index++
  }

  return acc
}

export const reduce = curry(reduceFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {reduce} from './reduce'

const reducer = (prev, current, i) => {
  expect(i).toBeNumber()

  return prev + current
}
const initialValue = 1
const list = [1, 2, 3]
const ERROR = 'reduce: list must be array or iterable'

test('happy', () => {
  expect(reduce(reducer, initialValue, list)).toEqual(7)
})

test('with object as iterable', () => {
  expect(() =>
    reduce(reducer, initialValue, {
      a: 1,
      b: 2,
    })
  ).toThrowWithMessage(TypeError, ERROR)
})

test('with undefined as iterable', () => {
  expect(() => reduce(reducer, 0, null)).toThrowWithMessage(TypeError, ERROR)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reduce} from 'rambda'

describe('R.reduce', () => {
  it('happy', () => {
    const result = reduce<number, number>(
      (acc, elem) => {
        acc // $ExpectType number
        elem // $ExpectType number
        return acc + elem
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('with two types', () => {
    const result = reduce<number, string>(
      (acc, elem) => {
        acc // $ExpectType string
        elem // $ExpectType number

        return `${acc}${elem}`
      },
      'foo',
      [1, 2, 3]
    )

    result // $ExpectType string
  })

  it('with index', () => {
    const result = reduce<number, number>(
      (acc, elem, i) => {
        acc // $ExpectType number
        elem // $ExpectType number
        i // $ExpectType number
        return acc + elem
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('fallback', () => {
    const result = reduce(
      (acc, val) => {
        acc // $ExpectType number
        return acc + val
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('fallback with index', () => {
    const result = reduce(
      (acc, val, i) => {
        acc // $ExpectType number
        i // $ExpectType number
        return acc + val
      },
      1,
      [1, 2, 3]
    )

    result // $ExpectType number
  })

  it('fallback with two types', () => {
    const result = reduce(
      (acc, val) => {
        acc // $ExpectType string
        return acc + val
      },
      'foo',
      [1, 2, 3]
    )

    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 60.48% slower and Ramda is 77.1% slower</summary>

```text
const R = require('../../dist/rambda.js')

const fn = (acc, value) => acc + value
const holder = [1, 2, 3]
const acc = ''

const reduce = [
  {
    label: 'Rambda',
    fn: () => {
      R.reduce(fn, acc, holder)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.reduce(fn, acc, holder)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.reduce(holder, fn, acc)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reduce)

### reject

```typescript

reject<T>(predicate: Predicate<T>, list: T[]): T[]
```

It has the opposite effect of `R.filter`.

```javascript
const list = [1, 2, 3, 4]
const obj = {a: 1, b: 2}
const predicate = x => x > 1

const result = [
  R.reject(predicate, list),
  R.reject(predicate, obj)
]
// => [[1], {a: 1}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20obj%20%3D%20%7Ba%3A%201%2C%20b%3A%202%7D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3E%201%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.reject(predicate%2C%20list)%2C%0A%20%20R.reject(predicate%2C%20obj)%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%7Ba%3A%201%7D%5D">Try this <strong>R.reject</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
reject<T>(predicate: Predicate<T>, list: T[]): T[];
reject<T>(predicate: Predicate<T>): (list: T[]) => T[];
reject<T>(predicate: Predicate<T>, obj: Dictionary<T>): Dictionary<T>;
reject<T, U>(predicate: Predicate<T>): (obj: Dictionary<T>) => Dictionary<T>;
```

</details>

<details>

<summary><strong>R.reject</strong> source</summary>

```javascript
import {filter} from './filter'

export function reject(predicate, list) {
  if (arguments.length === 1) return _list => reject(predicate, _list)

  return filter(x => !predicate(x), list)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {reject} from './reject'

const isOdd = n => n % 2 === 1

test('with array', () => {
  expect(reject(isOdd)([1, 2, 3, 4])).toEqual([2, 4])
})

test('with object', () => {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
  }
  expect(reject(isOdd, obj)).toEqual({
    b: 2,
    d: 4,
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reject} from 'rambda'

describe('R.reject with array', () => {
  it('happy', () => {
    const result = reject(
      x => {
        x // $ExpectType number
        return x > 1
      },
      [1, 2, 3]
    )
    result // $ExpectType number[]
  })
  it('curried require explicit type', () => {
    const result = reject<number>(x => {
      x // $ExpectType number
      return x > 1
    })([1, 2, 3])
    result // $ExpectType number[]
  })
})

describe('R.reject with objects', () => {
  it('happy', () => {
    const result = reject(
      x => {
        x // $ExpectType number

        return x > 1
      },
      {a: 1, b: 2}
    )
    result // $ExpectType Dictionary<number>
  })
  it('curried require dummy type', () => {
    const result = reject<number, any>(x => {
      return x > 1
    })({a: 1, b: 2})
    result // $ExpectType Dictionary<number>
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reject)

### repeat

```typescript

repeat<T>(x: T): (timesToRepeat: number) => T[]
```

```javascript
R.repeat('foo', 3)
// => ['foo', 'foo', 'foo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.repeat('foo'%2C%203)%0A%2F%2F%20%3D%3E%20%5B'foo'%2C%20'foo'%2C%20'foo'%5D">Try this <strong>R.repeat</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
repeat<T>(x: T): (timesToRepeat: number) => T[];
repeat<T>(x: T, timesToRepeat: number): T[];
```

</details>

<details>

<summary><strong>R.repeat</strong> source</summary>

```javascript
export function repeat(x, timesToRepeat) {
  if (arguments.length === 1) {
    return _timesToRepeat => repeat(x, _timesToRepeat)
  }

  return Array(timesToRepeat).fill(x)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {repeat} from './repeat'

test('repeat', () => {
  expect(repeat('')(3)).toEqual(['', '', ''])
  expect(repeat('foo', 3)).toEqual(['foo', 'foo', 'foo'])

  const obj = {}
  const arr = repeat(obj, 3)

  expect(arr).toEqual([{}, {}, {}])

  expect(arr[0] === arr[1]).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {repeat} from 'rambda'

describe('R.repeat', () => {
  it('happy', () => {
    const result = repeat(4, 7)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = repeat(4)(7)

    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 48.57% slower and Ramda is 68.98% slower</summary>

```text
const R = require('../../dist/rambda.js')

const num = 10
const str = 'foo'

const repeat = [
  {
    label: 'Rambda',
    fn: () => {
      R.repeat(str, num)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.repeat(str, num)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.repeat(str, num)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#repeat)

### replace

```typescript

replace(strOrRegex: RegExp | string, replacer: string, str: string): string
```

It replaces `strOrRegex` found in `str` with `replacer`.

```javascript
const strOrRegex = /o/g

const result = R.replace(strOrRegex, '|0|', 'foo')
// => 'f|0||0|'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20strOrRegex%20%3D%20%2Fo%2Fg%0A%0Aconst%20result%20%3D%20R.replace(strOrRegex%2C%20'%7C0%7C'%2C%20'foo')%0A%2F%2F%20%3D%3E%20'f%7C0%7C%7C0%7C'">Try this <strong>R.replace</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
replace(strOrRegex: RegExp | string, replacer: string, str: string): string;
replace(strOrRegex: RegExp | string, replacer: string): (str: string) => string;
replace(strOrRegex: RegExp | string): (replacer: string) => (str: string) => string;
```

</details>

<details>

<summary><strong>R.replace</strong> source</summary>

```javascript
import {curry} from './curry'

function replaceFn(pattern, replacer, str) {
  return str.replace(pattern, replacer)
}

export const replace = curry(replaceFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {replace} from './replace'

test('happy', () => {
  expect(replace('foo', 'yes', 'foo bar baz')).toEqual('yes bar baz')
})

test('1', () => {
  expect(replace(/\s/g)('|')('foo bar baz')).toEqual('foo|bar|baz')
})

test('2', () => {
  expect(replace(/\s/g)('|', 'foo bar baz')).toEqual('foo|bar|baz')
})

test('3', () => {
  expect(replace(/\s/g, '|')('foo bar baz')).toEqual('foo|bar|baz')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {replace} from 'rambda'

const str = 'foo bar foo'
const replacer = 'bar'

describe('R.replace', () => {
  it('happy', () => {
    const result = replace(/foo/g, replacer, str)

    result // $ExpectType string
  })
  it('with string as search pattern', () => {
    const result = replace('foo', replacer, str)

    result // $ExpectType string
  })
})

describe('R.replace - curried', () => {
  it('happy', () => {
    const result = replace(/foo/g, replacer)(str)

    result // $ExpectType string
  })
  it('with string as search pattern', () => {
    const result = replace('foo', replacer)(str)

    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Lodash is fastest. Rambda is 33.45% slower and Ramda is 33.99% slower</summary>

```text
const R = require('../../dist/rambda.js')

const replace = [
  {
    label: 'Rambda',
    fn: () => {
      R.replace(/\s/g, '|', 'foo bar baz')
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.replace(/\s/g, '|', 'foo bar baz')
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.replace('foo bar baz', /\s/g, '|')
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#replace)

### reverse

```typescript

reverse<T>(input: T[]): T[]
```

It returns a reversed copy of list or string `input`.

```javascript
const result = [
  R.reverse('foo'),
  R.reverse([1, 2, 3])
]
// => ['oof', [3, 2, 1]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.reverse('foo')%2C%0A%20%20R.reverse(%5B1%2C%202%2C%203%5D)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'oof'%2C%20%5B3%2C%202%2C%201%5D">Try this <strong>R.reverse</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
reverse<T>(input: T[]): T[];
reverse(input: string): string;
```

</details>

<details>

<summary><strong>R.reverse</strong> source</summary>

```javascript
export function reverse(listOrString) {
  if (typeof listOrString === 'string') {
    return listOrString.split('').reverse().join('')
  }

  const clone = listOrString.slice()

  return clone.reverse()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {reverse} from './reverse'

test('happy', () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1])
})

test('with string', () => {
  expect(reverse('baz')).toEqual('zab')
})

test("it doesn't mutate", () => {
  const arr = [1, 2, 3]

  expect(reverse(arr)).toEqual([3, 2, 1])

  expect(arr).toEqual([1, 2, 3])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {reverse} from 'rambda'

const list = [1, 2, 3, 4, 5]

describe('R.reverse', () => {
  it('happy', () => {
    const result = reverse(list)
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#reverse)

### set

```typescript

set<T, U>(lens: Lens, replacer: U, obj: T): T
```

It returns a copied **Object** or **Array** with modified `lens` focus set to `replacer` value.

```javascript
const input = {x: 1, y: 2}
const xLens = R.lensProp('x')

const result = [
  R.set(xLens, 4, input),
  R.set(xLens, 8, input) 
]
// => [{x: 4, y: 2}, {x: 8, y: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20input%20%3D%20%7Bx%3A%201%2C%20y%3A%202%7D%0Aconst%20xLens%20%3D%20R.lensProp('x')%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.set(xLens%2C%204%2C%20input)%2C%0A%20%20R.set(xLens%2C%208%2C%20input)%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%7Bx%3A%204%2C%20y%3A%202%7D%2C%20%7Bx%3A%208%2C%20y%3A%202%7D%5D">Try this <strong>R.set</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
set<T, U>(lens: Lens, replacer: U, obj: T): T;
set<U>(lens: Lens, replacer: U): <T>(obj: T) => T;
set(lens: Lens): <T, U>(replacer: U, obj: T) => T;
```

</details>

<details>

<summary><strong>R.set</strong> source</summary>

```javascript
import {always} from './always'
import {curry} from './curry'
import {over} from './over'

function setFn(lens, replacer, x) {
  return over(lens, always(replacer), x)
}

export const set = curry(setFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {assoc} from './assoc'
import {lens} from './lens'
import {lensIndex} from './lensIndex'
import {lensPath} from './lensPath'
import {prop} from './prop'
import {set} from './set'

const testObject = {
  foo: 'bar',
  baz: {
    a: 'x',
    b: 'y',
  },
}

test('assoc lens', () => {
  const assocLens = lens(prop('foo'), assoc('foo'))
  const result = set(assocLens, 'FOO', testObject)
  const expected = {
    ...testObject,
    foo: 'FOO',
  }
  expect(result).toEqual(expected)
})

test('path lens', () => {
  const pathLens = lensPath('baz.a')
  const result = set(pathLens, 'z', testObject)
  const expected = {
    ...testObject,
    baz: {
      a: 'z',
      b: 'y',
    },
  }
  expect(result).toEqual(expected)
})

test('index lens', () => {
  const indexLens = lensIndex(0)

  const result = set(indexLens, 3, [1, 2])
  expect(result).toEqual([3, 2])
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 50.35%</summary>

```text
const R = require('../../dist/rambda.js')

const testObj = {a: 1}

const last = [
  {
    label: 'Rambda',
    fn: () => {
      R.set(R.lensProp('a'), 2, testObj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.set(Ramda.lensProp('a'), 2, testObj)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#set)

### slice

```typescript

slice(from: number, to: number, input: string): string
```

```javascript
const list = [0, 1, 2, 3, 4, 5]
const str = 'FOO_BAR'
const from = 1
const to = 4

const result = [
  R.slice(from, to, str),
  R.slice(from, to, list)
]
// => ['OO_', [1, 2, 3]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B0%2C%201%2C%202%2C%203%2C%204%2C%205%5D%0Aconst%20str%20%3D%20'FOO_BAR'%0Aconst%20from%20%3D%201%0Aconst%20to%20%3D%204%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.slice(from%2C%20to%2C%20str)%2C%0A%20%20R.slice(from%2C%20to%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5B'OO_'%2C%20%5B1%2C%202%2C%203%5D%5D">Try this <strong>R.slice</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
slice(from: number, to: number, input: string): string;
slice<T>(from: number, to: number, input: T[]): T[];
slice(from: number, to: number): {
  (input: string): string;
  <T>(input: T[]): T[];
};
slice(from: number): {
  (to: number, input: string): string;
  <T>(to: number, input: T[]): T[];
};
```

</details>

<details>

<summary><strong>R.slice</strong> source</summary>

```javascript
import {curry} from './curry'

function sliceFn(from, to, list) {
  return list.slice(from, to)
}

export const slice = curry(sliceFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {slice} from './slice'

test('slice', () => {
  expect(slice(1, 3, ['a', 'b', 'c', 'd'])).toEqual(['b', 'c'])
  expect(slice(1, Infinity, ['a', 'b', 'c', 'd'])).toEqual(['b', 'c', 'd'])
  expect(slice(0, -1, ['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c'])
  expect(slice(-3, -1, ['a', 'b', 'c', 'd'])).toEqual(['b', 'c'])
  expect(slice(0, 3, 'ramda')).toEqual('ram')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {slice} from 'rambda'

const list = [1, 2, 3, 4, 5]

describe('R.slice', () => {
  it('happy', () => {
    const result = slice(1, 3, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = slice(1, 3)(list)
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#slice)

### sort

```typescript

sort<T>(sortFn: (a: T, b: T) => number, list: T[]): T[]
```

It returns copy of `list` sorted by `sortFn` function, where `sortFn` needs to return only `-1`, `0` or `1`.

```javascript
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = (x, y) => {
  return x.a > y.a ? 1 : -1
}

const result = R.sort(sortFn, list)
const expected = [
  {a: 1},
  {a: 2},
  {a: 3}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%2C%0A%20%20%7Ba%3A%201%7D%0A%5D%0Aconst%20sortFn%20%3D%20(x%2C%20y)%20%3D%3E%20%7B%0A%20%20return%20x.a%20%3E%20y.a%20%3F%201%20%3A%20-1%0A%7D%0A%0Aconst%20result%20%3D%20R.sort(sortFn%2C%20list)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.sort</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
sort<T>(sortFn: (a: T, b: T) => number, list: T[]): T[];
sort<T>(sortFn: (a: T, b: T) => number): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.sort</strong> source</summary>

```javascript
import {cloneList} from './_internals/cloneList'

export function sort(sortFn, list) {
  if (arguments.length === 1) return _list => sort(sortFn, _list)

  return cloneList(list).sort(sortFn)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {sort} from './sort'

const fn = (a, b) => (a > b ? 1 : -1)

test('sort', () => {
  expect(sort((a, b) => a - b)([2, 3, 1])).toEqual([1, 2, 3])
})

test("it doesn't mutate", () => {
  const list = ['foo', 'bar', 'baz']

  expect(sort(fn, list)).toEqual(['bar', 'baz', 'foo'])

  expect(list[0]).toBe('foo')
  expect(list[1]).toBe('bar')
  expect(list[2]).toBe('baz')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {sort} from 'rambda'

const list = [3, 0, 5, 2, 1]

function sortFn(a: number, b: number): number {
  return a > b ? 1 : -1
}

describe('R.sort', () => {
  it('happy', () => {
    const result = sort(sortFn, list)
    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = sort(sortFn)(list)
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 40.23%</summary>

```text
const R = require('../../dist/rambda.js')

const list = ['foo', 'bar', 'baz']
const fn = (a, b) => (a > b ? -1 : 1)

const replace = [
  {
    label: 'Rambda',
    fn: () => {
      R.sort(fn, list)
      R.sort(fn)(list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.sort(fn, list)
      Ramda.sort(fn)(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sort)

### sortBy

```typescript

sortBy<T>(sortFn: (a: T) => Ord, list: T[]): T[]
```

It returns copy of `list` sorted by `sortFn` function, where `sortFn` function returns a value to compare, i.e. it doesn't need to return only `-1`, `0` or `1`.

```javascript
const list = [
  {a: 2},
  {a: 3},
  {a: 1}
]
const sortFn = x => x.a

const result = R.sortBy(sortFn, list)
const expected = [
  {a: 1},
  {a: 2},
  {a: 3}
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%2C%0A%20%20%7Ba%3A%201%7D%0A%5D%0Aconst%20sortFn%20%3D%20x%20%3D%3E%20x.a%0A%0Aconst%20result%20%3D%20R.sortBy(sortFn%2C%20list)%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Ba%3A%201%7D%2C%0A%20%20%7Ba%3A%202%7D%2C%0A%20%20%7Ba%3A%203%7D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.sortBy</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
sortBy<T>(sortFn: (a: T) => Ord, list: T[]): T[];
sortBy<T>(sortFn: (a: T) => Ord): (list: T[]) => T[];
sortBy(sortFn: (a: any) => Ord): <T>(list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.sortBy</strong> source</summary>

```javascript
import {cloneList} from './_internals/cloneList'

export function sortBy(sortFn, list) {
  if (arguments.length === 1) return _list => sortBy(sortFn, _list)

  const clone = cloneList(list)

  return clone.sort((a, b) => {
    const aSortResult = sortFn(a)
    const bSortResult = sortFn(b)

    if (aSortResult === bSortResult) return 0

    return aSortResult < bSortResult ? -1 : 1
  })
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {compose} from './compose'
import {prop} from './prop'
import {sortBy} from './sortBy'
import {toLower} from './toLower'

test('happy', () => {
  const input = [{a: 2}, {a: 1}, {a: 1}, {a: 3}]
  const expected = [{a: 1}, {a: 1}, {a: 2}, {a: 3}]

  const result = sortBy(x => x.a)(input)
  expect(result).toEqual(expected)
})

test('with compose', () => {
  const alice = {
    name: 'ALICE',
    age: 101,
  }
  const bob = {
    name: 'Bob',
    age: -10,
  }
  const clara = {
    name: 'clara',
    age: 314.159,
  }
  const people = [clara, bob, alice]
  const sortByNameCaseInsensitive = sortBy(compose(toLower, prop('name')))

  expect(sortByNameCaseInsensitive(people)).toEqual([alice, bob, clara])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {sortBy, pipe} from 'rambda'

interface Input {
  a: number
}

describe('R.sortBy', () => {
  it('passing type to sort function', () => {
    function fn(x: any): number {
      return x.a
    }
    function fn2(x: Input): number {
      return x.a
    }

    const input = [{a: 2}, {a: 1}, {a: 0}]
    const result = sortBy(fn, input)
    const curriedResult = sortBy(fn2)(input)

    result // $ExpectType { a: number; }[]
    curriedResult // $ExpectType Input[]
    result[0].a // $ExpectType number
    curriedResult[0].a // $ExpectType number
  })
  it('passing type to sort function and list', () => {
    function fn(x: Input): number {
      return x.a
    }

    const input: Input[] = [{a: 2}, {a: 1}, {a: 0}]
    const result = sortBy(fn, input)
    const curriedResult = sortBy(fn)(input)

    result // $ExpectType Input[]
    curriedResult // $ExpectType Input[]
    result[0].a // $ExpectType number
  })
  it('with R.pipe', () => {
    interface Obj {
      value: number
    }
    const fn = pipe(sortBy<Obj>(x => x.value))

    const result = fn([{value: 1}, {value: 2}])
    result // $ExpectType Obj[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 25.29% slower and Lodash is 56.88% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [{a: 2}, {a: 1}, {a: 0}]
const fn = x => x.a

const replace = [
  {
    label: 'Rambda',
    fn: () => {
      R.sortBy(fn, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.sortBy(fn, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.sortBy(list, fn)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sortBy)

### split

```typescript

split(separator: string | RegExp): (str: string) => string[]
```

Curried version of `String.prototype.split`

```javascript
const str = 'foo|bar|baz'
const separator = '|'
const result = R.split(separator, str)
// => [ 'foo', 'bar', 'baz' ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo%7Cbar%7Cbaz'%0Aconst%20separator%20%3D%20'%7C'%0Aconst%20result%20%3D%20R.split(separator%2C%20str)%0A%2F%2F%20%3D%3E%20%5B%20'foo'%2C%20'bar'%2C%20'baz'%20%5D">Try this <strong>R.split</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
split(separator: string | RegExp): (str: string) => string[];
split(separator: string | RegExp, str: string): string[];
```

</details>

<details>

<summary><strong>R.split</strong> source</summary>

```javascript
export function split(separator, str) {
  if (arguments.length === 1) return _str => split(separator, _str)

  return str.split(separator)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {split} from './split'

const str = 'foo|bar|baz'
const splitChar = '|'
const expected = ['foo', 'bar', 'baz']

test('happy', () => {
  expect(split(splitChar, str)).toEqual(expected)
})

test('curried', () => {
  expect(split(splitChar)(str)).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {split} from 'rambda'

const str = 'foo|bar|baz'
const splitChar = '|'

describe('R.split', () => {
  it('happy', () => {
    const result = split(splitChar, str)

    result // $ExpectType string[]
  })
  it('curried', () => {
    const result = split(splitChar)(str)

    result // $ExpectType string[]
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 55.37% slower and Lodash is 17.64% slower</summary>

```text
const R = require('../../dist/rambda.js')

const str = 'foo|bar|baz'
const sep = '|'

const split = [
  {
    label: 'Rambda',
    fn: () => {
      R.split(sep, str)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.split(sep, str)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.split(str, sep)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#split)

### splitAt

```typescript

splitAt<T>(index: number, input: T[]): [T[], T[]]
```

It splits string or array at a given index.

```javascript
const list = [ 1, 2, 3 ]
const result = R.splitAt(2, list)
// => [[ 1, 2 ], [ 3 ]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%201%2C%202%2C%203%20%5D%0Aconst%20result%20%3D%20R.splitAt(2%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B%201%2C%202%20%5D%2C%20%5B%203%20%5D%5D">Try this <strong>R.splitAt</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
splitAt<T>(index: number, input: T[]): [T[], T[]];
splitAt(index: number, input: string): [string, string];
splitAt(index: number): {
    <T>(input: T[]): [T[], T[]];
    (input: string): [string, string];
};
```

</details>

<details>

<summary><strong>R.splitAt</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'
import {drop} from './drop'
import {maybe} from './maybe'
import {take} from './take'

export function splitAt(index, input) {
  if (arguments.length === 1) {
    return _list => splitAt(index, _list)
  }
  if (!input) throw new TypeError(`Cannot read property 'slice' of ${input}`)

  if (!_isArray(input) && typeof input !== 'string') return [[], []]

  const correctIndex = maybe(
    index < 0,
    input.length + index < 0 ? 0 : input.length + index,
    index
  )

  return [take(correctIndex, input), drop(correctIndex, input)]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {splitAt as splitAtRamda} from 'ramda'

import {splitAt} from './splitAt'

const list = [1, 2, 3]
const str = 'foo bar'

test('with array', () => {
  const result = splitAt(2, list)
  expect(result).toEqual([[1, 2], [3]])
})

test('with array - index is negative number', () => {
  const result = splitAt(-6, list)
  expect(result).toEqual([[], list])
})

test('with array - index is out of scope', () => {
  const result = splitAt(4, list)
  expect(result).toEqual([[1, 2, 3], []])
})

test('with string', () => {
  const result = splitAt(4, str)
  expect(result).toEqual(['foo ', 'bar'])
})

test('with string - index is negative number', () => {
  const result = splitAt(-2, str)
  expect(result).toEqual(['foo b', 'ar'])
})

test('with string - index is out of scope', () => {
  const result = splitAt(10, str)
  expect(result).toEqual([str, ''])
})

test('with array - index is out of scope', () => {
  const result = splitAt(4)(list)
  expect(result).toEqual([[1, 2, 3], []])
})

const badInputs = [1, true, /foo/g, {}]
const throwingBadInputs = [null, undefined]

test('with bad inputs', () => {
  throwingBadInputs.forEach(badInput => {
    expect(() => splitAt(1, badInput)).toThrowWithMessage(
      TypeError,
      `Cannot read property 'slice' of ${badInput}`
    )
    expect(() => splitAtRamda(1, badInput)).toThrowWithMessage(
      TypeError,
      `Cannot read properties of ${badInput} (reading 'slice')`
    )
  })

  badInputs.forEach(badInput => {
    const result = splitAt(1, badInput)
    const ramdaResult = splitAtRamda(1, badInput)
    expect(result).toEqual(ramdaResult)
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {splitAt} from 'ramda'

const index = 1
const str = 'foo'
const list = [1, 2, 3]

describe('R.splitAt with array', () => {
  it('happy', () => {
    const result = splitAt(index, list)

    result // $ExpectType [number[], number[]]
  })
  it('curried', () => {
    const result = splitAt(index)(list)

    result // $ExpectType [number[], number[]]
  })
})

describe('R.splitAt with string', () => {
  it('happy', () => {
    const result = splitAt(index, str)

    result // $ExpectType [string, string]
  })
  it('curried', () => {
    const result = splitAt(index)(str)

    result // $ExpectType [string, string]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitAt)

### splitEvery

```typescript

splitEvery<T>(sliceLength: number, input: T[]): (T[])[]
```

It splits `input` into slices of `sliceLength`.

```javascript
const result = [
  R.splitEvery(2, [1, 2, 3]), 
  R.splitEvery(3, 'foobar') 
]

const expected = [
  [[1, 2], [3]],
  ['foo', 'bar']
]
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.splitEvery(2%2C%20%5B1%2C%202%2C%203%5D)%2C%20%0A%20%20R.splitEvery(3%2C%20'foobar')%20%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%5B%5B1%2C%202%5D%2C%20%5B3%5D%5D%2C%0A%20%20%5B'foo'%2C%20'bar'%5D%0A%5D%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.splitEvery</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
splitEvery<T>(sliceLength: number, input: T[]): (T[])[];
splitEvery(sliceLength: number, input: string): string[];
splitEvery(sliceLength: number): {
  (input: string): string[];
  <T>(input: T[]): (T[])[];
};
```

</details>

<details>

<summary><strong>R.splitEvery</strong> source</summary>

```javascript
export function splitEvery(sliceLength, listOrString) {
  if (arguments.length === 1) {
    return _listOrString => splitEvery(sliceLength, _listOrString)
  }

  if (sliceLength < 1) {
    throw new Error(
      'First argument to splitEvery must be a positive integer'
    )
  }

  const willReturn = []
  let counter = 0

  while (counter < listOrString.length) {
    willReturn.push(listOrString.slice(counter, (counter += sliceLength)))
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {splitEvery} from './splitEvery'

test('happy', () => {
  expect(splitEvery(3, [1, 2, 3, 4, 5, 6, 7])).toEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7],
  ])

  expect(splitEvery(3)('foobarbaz')).toEqual(['foo', 'bar', 'baz'])
})

test('with bad input', () => {
  expect(() =>
    expect(splitEvery(0)('foo')).toEqual(['f', 'o', 'o'])
  ).toThrowWithMessage(
    Error,
    'First argument to splitEvery must be a positive integer'
  )
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {splitEvery} from 'rambda'

const list = [1, 2, 3, 4, 5, 6, 7]

describe('R.splitEvery', () => {
  it('happy', () => {
    const result = splitEvery(3, list)

    result // $ExpectType number[][]
  })
  it('curried', () => {
    const result = splitEvery(3)(list)

    result // $ExpectType number[][]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 71.98%</summary>

```text
const R = require('../../dist/rambda.js')

const list = [1, 2, 3, 4, 5, 6, 7]

const splitEvery = [
  {
    label: 'Rambda',
    fn: () => {
      R.splitEvery(3, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.splitEvery(3, list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitEvery)

### splitWhen

```typescript

splitWhen<T, U>(predicate: Predicate<T>, list: U[]): (U[])[]
```

It splits `list` to two arrays according to a `predicate` function. 

The first array contains all members of `list` before `predicate` returns `true`.

```javascript
const list = [1, 2, 1, 2]
const result = R.splitWhen(R.equals(2), list)
// => [[1], [2, 1, 2]]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%201%2C%202%5D%0Aconst%20result%20%3D%20R.splitWhen(R.equals(2)%2C%20list)%0A%2F%2F%20%3D%3E%20%5B%5B1%5D%2C%20%5B2%2C%201%2C%202%5D%5D">Try this <strong>R.splitWhen</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
splitWhen<T, U>(predicate: Predicate<T>, list: U[]): (U[])[];
splitWhen<T>(predicate: Predicate<T>): <U>(list: U[]) => (U[])[];
```

</details>

<details>

<summary><strong>R.splitWhen</strong> source</summary>

```javascript
export function splitWhen(predicate, input) {
  if (arguments.length === 1) {
    return _input => splitWhen(predicate, _input)
  }
  if (!input)
    throw new TypeError(`Cannot read property 'length' of ${input}`)

  const preFound = []
  const postFound = []
  let found = false
  let counter = -1

  while (counter++ < input.length - 1) {
    if (found) {
      postFound.push(input[counter])
    } else if (predicate(input[counter])) {
      postFound.push(input[counter])
      found = true
    } else {
      preFound.push(input[counter])
    }
  }

  return [preFound, postFound]
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {splitWhen as splitWhenRamda} from 'ramda'

import {equals} from './equals'
import {splitWhen} from './splitWhen'

const list = [1, 2, 1, 2]

test('happy', () => {
  const result = splitWhen(equals(2), list)
  expect(result).toEqual([[1], [2, 1, 2]])
})

test('when predicate returns false', () => {
  const result = splitWhen(equals(3))(list)
  expect(result).toEqual([list, []])
})

const badInputs = [1, true, /foo/g, {}]
const throwingBadInputs = [null, undefined]

test('with bad inputs', () => {
  throwingBadInputs.forEach(badInput => {
    expect(() => splitWhen(equals(2), badInput)).toThrowWithMessage(
      TypeError,
      `Cannot read property 'length' of ${badInput}`
    )
    expect(() => splitWhenRamda(equals(2), badInput)).toThrowWithMessage(
      TypeError,
      `Cannot read properties of ${badInput} (reading 'length')`
    )
  })

  badInputs.forEach(badInput => {
    const result = splitWhen(equals(2), badInput)
    const ramdaResult = splitWhenRamda(equals(2), badInput)
    expect(result).toEqual(ramdaResult)
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {splitWhen} from 'rambda'

const list = [1, 2, 1, 2]
const predicate = (x: number) => x === 2

describe('R.splitWhen', () => {
  it('happy', () => {
    const result = splitWhen(predicate, list)

    result // $ExpectType number[][]
  })
  it('curried', () => {
    const result = splitWhen(predicate)(list)

    result // $ExpectType number[][]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#splitWhen)

### startsWith

```typescript

startsWith(target: string, str: string): boolean
```

When iterable is a string, then it behaves as `String.prototype.startsWith`.
When iterable is a list, then it uses R.equals to determine if the target list starts in the same way as the given target.

> :boom: It doesn't work with arrays unlike its corresponding **Ramda** method.

```javascript
const str = 'foo-bar'
const list = [{a:1}, {a:2}, {a:3}]

const result = [
  R.startsWith('foo', str),
  R.startsWith([{a:1}, {a:2}], list)
]
// => [true, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20str%20%3D%20'foo-bar'%0Aconst%20list%20%3D%20%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%2C%20%7Ba%3A3%7D%5D%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.startsWith('foo'%2C%20str)%2C%0A%20%20R.startsWith(%5B%7Ba%3A1%7D%2C%20%7Ba%3A2%7D%5D%2C%20list)%0A%5D%0A%2F%2F%20%3D%3E%20%5Btrue%2C%20true%5D">Try this <strong>R.startsWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
startsWith(target: string, str: string): boolean;
startsWith(target: string): (str: string) => boolean;
startsWith<T>(target: T[], list: T[]): boolean;
startsWith<T>(target: T[]): (list: T[]) => boolean;
```

</details>

<details>

<summary><strong>R.startsWith</strong> source</summary>

```javascript
import {equals} from './equals.js'
import {_isArray} from './_internals/_isArray.js'

export function startsWith(target, iterable) {
  if (arguments.length === 1)
    return _iterable => startsWith(target, _iterable)

  if (typeof iterable === 'string') {
    return iterable.startsWith(target)
  }
  if (!_isArray(target)) return false

  let correct = true
  const filtered = target.filter((x, index) => {
    if (!correct) return false
    const result = equals(x, iterable[index])
    if (!result) correct = false
    return result
  })

  return filtered.length === target.length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {startsWith} from './startsWith'
import {possibleTargets, possibleIterables} from './endsWith.spec'
import {startsWith as startsWithRamda} from 'ramda'
import {compareCombinations} from './_internals/testUtils'

test('with string', () => {
  expect(startsWith('foo', 'foo-bar')).toBeTrue()
  expect(startsWith('baz')('foo-bar')).toBeFalse()
})

test('use R.equals with array', () => {
  const list = [{a: 1}, {a: 2}, {a: 3}]
  expect(startsWith({a: 1}, list)).toBeFalse()
  expect(startsWith([{a: 1}], list)).toBeTrue()
  expect(startsWith([{a: 1}, {a: 2}], list)).toBeTrue()
  expect(startsWith(list, list)).toBeTrue()
  expect(startsWith([{a: 2}], list)).toBeFalse()
})

describe('brute force', () => {
  compareCombinations({
    fn: startsWith,
    fnRamda: startsWithRamda,
    firstInput: possibleTargets,
    secondInput: possibleIterables,
    callback: errorsCounters => {
      expect(errorsCounters).toMatchInlineSnapshot(`
        Object {
          "ERRORS_MESSAGE_MISMATCH": 0,
          "ERRORS_TYPE_MISMATCH": 0,
          "RESULTS_MISMATCH": 0,
          "SHOULD_NOT_THROW": 0,
          "SHOULD_THROW": 0,
          "TOTAL_TESTS": 32,
        }
      `)
    },
  })
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {startsWith} from 'rambda'

describe('R.startsWith - array as iterable', () => {
  const target = [{a: 1}]
  const iterable = [{a: 1}, {a: 2}]
  it('happy', () => {
    const result = startsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(target)(iterable)

    result // $ExpectType boolean
  })
})

describe('R.startsWith - string as iterable', () => {
  const target = 'foo'
  const iterable = 'foo bar'
  it('happy', () => {
    const result = startsWith(target, iterable)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = startsWith(target)(iterable)

    result // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#startsWith)

### subtract

Curried version of `x - y`

```javascript
const x = 3
const y = 1

const result = R.subtract(x, y) 
// => 2
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%203%0Aconst%20y%20%3D%201%0A%0Aconst%20result%20%3D%20R.subtract(x%2C%20y)%20%0A%2F%2F%20%3D%3E%202">Try this <strong>R.subtract</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#subtract)

### sum

```typescript

sum(list: number[]): number
```

```javascript
R.sum([1, 2, 3, 4, 5]) 
// => 15
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.sum(%5B1%2C%202%2C%203%2C%204%2C%205%5D)%20%0A%2F%2F%20%3D%3E%2015">Try this <strong>R.sum</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
sum(list: number[]): number;
```

</details>

<details>

<summary><strong>R.sum</strong> source</summary>

```javascript
export function sum(list) {
  return list.reduce((prev, current) => prev + current, 0)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {sum} from './sum'

test('happy', () => {
  expect(sum([1, 2, 3, 4, 5])).toBe(15)
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#sum)

### symmetricDifference

```typescript

symmetricDifference<T>(x: T[], y: T[]): T[]
```

It returns a merged list of `x` and `y` with all equal elements removed.

`R.equals` is used to determine equality.

```javascript
const x = [ 1, 2, 3, 4 ]
const y = [ 3, 4, 5, 6 ]

const result = R.symmetricDifference(x, y)
// => [ 1, 2, 5, 6 ]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20%5B%201%2C%202%2C%203%2C%204%20%5D%0Aconst%20y%20%3D%20%5B%203%2C%204%2C%205%2C%206%20%5D%0A%0Aconst%20result%20%3D%20R.symmetricDifference(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%201%2C%202%2C%205%2C%206%20%5D">Try this <strong>R.symmetricDifference</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
symmetricDifference<T>(x: T[], y: T[]): T[];
symmetricDifference<T>(x: T[]): <T>(y: T[]) => T[];
```

</details>

<details>

<summary><strong>R.symmetricDifference</strong> source</summary>

```javascript
import {concat} from './concat'
import {filter} from './filter'
import {includes} from './includes'

export function symmetricDifference(x, y) {
  if (arguments.length === 1) {
    return _y => symmetricDifference(x, _y)
  }

  return concat(
    filter(value => !includes(value, y), x),
    filter(value => !includes(value, x), y)
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {symmetricDifference} from './symmetricDifference'

test('symmetricDifference', () => {
  const list1 = [1, 2, 3, 4]
  const list2 = [3, 4, 5, 6]
  expect(symmetricDifference(list1)(list2)).toEqual([1, 2, 5, 6])

  expect(symmetricDifference([], [])).toEqual([])
})

test('symmetricDifference with objects', () => {
  const list1 = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
  const list2 = [{id: 3}, {id: 4}, {id: 5}, {id: 6}]
  expect(symmetricDifference(list1)(list2)).toEqual([
    {id: 1},
    {id: 2},
    {id: 5},
    {id: 6},
  ])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {symmetricDifference} from 'rambda'

describe('R.symmetricDifference', () => {
  it('happy', () => {
    const list1 = [1, 2, 3, 4]
    const list2 = [3, 4, 5, 6]
    const result = symmetricDifference(list1, list2)

    result // $ExpectType number[]
  })

  it('curried', () => {
    const list1 = [{id: 1}, {id: 2}, {id: 3}, {id: 4}]
    const list2 = [{id: 3}, {id: 4}, {id: 5}, {id: 6}]
    const result = symmetricDifference(list1)(list2)

    result // $ExpectType { id: number; }[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#symmetricDifference)

### T

```typescript

T(): boolean
```

```javascript
R.T() 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.T()%20%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.T</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
T(): boolean;
```

</details>

<details>

<summary><strong>R.T</strong> source</summary>

```javascript
export function T() {
  return true
}
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#T)

### tail

```typescript

tail<T>(input: T[]): T[]
```

It returns all but the first element of `input`.

```javascript
const result = [
  R.tail([1, 2, 3]),  
  R.tail('foo') 
]
// => [[2, 3], 'oo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20R.tail(%5B1%2C%202%2C%203%5D)%2C%20%20%0A%20%20R.tail('foo')%20%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%203%5D%2C%20'oo'%5D">Try this <strong>R.tail</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
tail<T>(input: T[]): T[];
tail(input: string): string;
```

</details>

<details>

<summary><strong>R.tail</strong> source</summary>

```javascript
import {drop} from './drop'

export function tail(listOrString) {
  return drop(1, listOrString)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {tail} from './tail'

test('tail', () => {
  expect(tail([1, 2, 3])).toEqual([2, 3])
  expect(tail([1, 2])).toEqual([2])
  expect(tail([1])).toEqual([])
  expect(tail([])).toEqual([])

  expect(tail('abc')).toEqual('bc')
  expect(tail('ab')).toEqual('b')
  expect(tail('a')).toEqual('')
  expect(tail('')).toEqual('')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {tail} from 'rambda'

describe('R.tail', () => {
  it('with string', () => {
    const result = tail('foo')

    result // $ExpectType string
  })
  it('with list', () => {
    const result = tail([1, 2, 3])

    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tail)

### take

```typescript

take<T>(howMany: number, input: T[]): T[]
```

It returns the first `howMany` elements of `input`.

```javascript
const howMany = 2

const result = [
  R.take(howMany, [1, 2, 3]),
  R.take(howMany, 'foobar'),
]
// => [[1, 2], 'fo']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.take(howMany%2C%20%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.take(howMany%2C%20'foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%202%5D%2C%20'fo'%5D">Try this <strong>R.take</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
take<T>(howMany: number, input: T[]): T[];
take(howMany: number, input: string): string;
take<T>(howMany: number): {
  <T>(input: T[]): T[];
  (input: string): string;
};
```

</details>

<details>

<summary><strong>R.take</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice'

export function take(howMany, listOrString) {
  if (arguments.length === 1)
    return _listOrString => take(howMany, _listOrString)
  if (howMany < 0) return listOrString.slice()
  if (typeof listOrString === 'string') return listOrString.slice(0, howMany)

  return baseSlice(listOrString, 0, howMany)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {take} from './take'

test('happy', () => {
  const arr = ['foo', 'bar', 'baz']

  expect(take(1, arr)).toEqual(['foo'])

  expect(arr).toEqual(['foo', 'bar', 'baz'])

  expect(take(2)(['foo', 'bar', 'baz'])).toEqual(['foo', 'bar'])
  expect(take(3, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
  expect(take(4, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
  expect(take(3)('rambda')).toEqual('ram')
})

test('with negative index', () => {
  expect(take(-1, [1, 2, 3])).toEqual([1, 2, 3])
  expect(take(-Infinity, [1, 2, 3])).toEqual([1, 2, 3])
})

test('with zero index', () => {
  expect(take(0, [1, 2, 3])).toEqual([])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {take} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.take - array', () => {
  it('happy', () => {
    const result = take(howMany, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = take(howMany)(list)

    result // $ExpectType number[]
  })
})

describe('R.take - string', () => {
  it('happy', () => {
    const result = take(howMany, str)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = take(howMany)(str)

    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 91.96% slower and Lodash is 4.72% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [1, 2, 3, 4]
const num = 2

const take = [
  {
    label: 'Rambda',
    fn: () => {
      R.take(num, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.take(num, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.take(list, num)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#take)

### takeLast

```typescript

takeLast<T>(howMany: number, input: T[]): T[]
```

It returns the last `howMany` elements of `input`.

```javascript
const howMany = 2

const result = [
  R.takeLast(howMany, [1, 2, 3]),
  R.takeLast(howMany, 'foobar'),
]
// => [[2, 3], 'ar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20howMany%20%3D%202%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.takeLast(howMany%2C%20%5B1%2C%202%2C%203%5D)%2C%0A%20%20R.takeLast(howMany%2C%20'foobar')%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5B%5B2%2C%203%5D%2C%20'ar'%5D">Try this <strong>R.takeLast</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
takeLast<T>(howMany: number, input: T[]): T[];
takeLast(howMany: number, input: string): string;
takeLast<T>(howMany: number): {
  <T>(input: T[]): T[];
  (input: string): string;
};
```

</details>

<details>

<summary><strong>R.takeLast</strong> source</summary>

```javascript
import baseSlice from './_internals/baseSlice'

export function takeLast(howMany, listOrString) {
  if (arguments.length === 1)
    return _listOrString => takeLast(howMany, _listOrString)

  const len = listOrString.length
  if (howMany < 0) return listOrString.slice()
  let numValue = howMany > len ? len : howMany

  if (typeof listOrString === 'string')
    return listOrString.slice(len - numValue)

  numValue = len - numValue

  return baseSlice(listOrString, numValue, len)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {takeLast} from './takeLast'

test('with arrays', () => {
  expect(takeLast(1, ['foo', 'bar', 'baz'])).toEqual(['baz'])

  expect(takeLast(2)(['foo', 'bar', 'baz'])).toEqual(['bar', 'baz'])

  expect(takeLast(3, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])

  expect(takeLast(4, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])

  expect(takeLast(10, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar', 'baz'])
})

test('with strings', () => {
  expect(takeLast(3, 'rambda')).toEqual('bda')

  expect(takeLast(7, 'rambda')).toEqual('rambda')
})

test('with negative index', () => {
  expect(takeLast(-1, [1, 2, 3])).toEqual([1, 2, 3])
  expect(takeLast(-Infinity, [1, 2, 3])).toEqual([1, 2, 3])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {takeLast} from 'rambda'

const list = [1, 2, 3, 4]
const str = 'foobar'
const howMany = 2

describe('R.takeLast - array', () => {
  it('happy', () => {
    const result = takeLast(howMany, list)

    result // $ExpectType number[]
  })
  it('curried', () => {
    const result = takeLast(howMany)(list)

    result // $ExpectType number[]
  })
})

describe('R.takeLast - string', () => {
  it('happy', () => {
    const result = takeLast(howMany, str)

    result // $ExpectType string
  })
  it('curried', () => {
    const result = takeLast(howMany)(str)

    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is fastest. Ramda is 93.39% slower and Lodash is 19.22% slower</summary>

```text
const R = require('../../dist/rambda.js')

const list = [1, 2, 3, 4]
const num = 2

const takeLast = [
  {
    label: 'Rambda',
    fn: () => {
      R.takeLast(num, list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.takeLast(num, list)
    },
  },
  {
    label: 'Lodash',
    fn: () => {
      _.takeRight(list, num)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeLast)

### takeLastWhile

```typescript

takeLastWhile(predicate: (x: string) => boolean, input: string): string
```

```javascript
const result = R.takeLastWhile(
  x => x > 2,
  [1, 2, 3, 4]
)
// => [3, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.takeLastWhile(%0A%20%20x%20%3D%3E%20x%20%3E%202%2C%0A%20%20%5B1%2C%202%2C%203%2C%204%5D%0A)%0A%2F%2F%20%3D%3E%20%5B3%2C%204%5D">Try this <strong>R.takeLastWhile</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
takeLastWhile(predicate: (x: string) => boolean, input: string): string;
takeLastWhile(predicate: (x: string) => boolean): (input: string) => string;
takeLastWhile<T>(predicate: (x: T) => boolean, input: T[]): T[];
takeLastWhile<T>(predicate: (x: T) => boolean): <T>(input: T[]) => T[];
```

</details>

<details>

<summary><strong>R.takeLastWhile</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'

export function takeLastWhile(predicate, input) {
  if (arguments.length === 1) {
    return _input => takeLastWhile(predicate, _input)
  }
  if (input.length === 0) return input
  let found = false
  const toReturn = []
  let counter = input.length

  while (!found || counter === 0) {
    counter--
    if (predicate(input[counter]) === false) {
      found = true
    } else if (!found) {
      toReturn.push(input[counter])
    }
  }

  return _isArray(input) ? toReturn.reverse() : toReturn.reverse().join('')
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {takeLastWhile} from './takeLastWhile'
const assert = require('assert')

const list = [1, 2, 3, 4]

test('happy', () => {
  const predicate = x => x > 2
  const result = takeLastWhile(predicate, list)
  expect(result).toEqual([3, 4])
})

test('predicate is always true', () => {
  const predicate = x => x > 0
  const result = takeLastWhile(predicate)(list)
  expect(result).toEqual(list)
})

test('predicate is always false', () => {
  const predicate = x => x < 0
  const result = takeLastWhile(predicate, list)
  expect(result).toEqual([])
})

test('with string', () => {
  const result = takeLastWhile(x => x !== 'F', 'FOOBAR')
  expect(result).toEqual('OOBAR')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {takeLastWhile} from 'rambda'

const list = [1, 2, 3]
const str = 'FOO'

describe('R.takeLastWhile', () => {
  it('with array', () => {
    const result = takeLastWhile(x => x > 1, list)

    result // $ExpectType number[]
  })
  it('with array - curried', () => {
    const result = takeLastWhile(x => x > 1, list)

    result // $ExpectType number[]
  })
  it('with string', () => {
    const result = takeLastWhile(x => x !== 'F', str)

    result // $ExpectType string
  })
  it('with string - curried', () => {
    const result = takeLastWhile(x => x !== 'F')(str)

    result // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeLastWhile)

### takeWhile

```javascript
const list = [1, 2, 3, 4]
const predicate = x => x < 3

const result = R.takeWhile(predicate, list)
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20predicate%20%3D%20x%20%3D%3E%20x%20%3C%203%0A%0Aconst%20result%20%3D%20R.takeWhile(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.takeWhile</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#takeWhile)

### tap

```typescript

tap<T>(fn: (x: T) => void, input: T): T
```

It applies function `fn` to input `x` and returns `x`. 

One use case is debuging in the middle of `R.compose`.

```javascript
const list = [1, 2, 3]

R.compose(
  R.map(x => x * 2)
  R.tap(console.log),
  R.filter(x => x > 1)
)(list)
// => `2` and `3` will be logged
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%202%2C%203%5D%0A%0AR.compose(%0A%20%20R.map(x%20%3D%3E%20x%20*%202)%0A%20%20R.tap(console.log)%2C%0A%20%20R.filter(x%20%3D%3E%20x%20%3E%201)%0A)(list)%0A%2F%2F%20%3D%3E%20%602%60%20and%20%603%60%20will%20be%20logged">Try this <strong>R.tap</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
tap<T>(fn: (x: T) => void, input: T): T;
tap<T>(fn: (x: T) => void): (input: T) => T;
```

</details>

<details>

<summary><strong>R.tap</strong> source</summary>

```javascript
export function tap(fn, x) {
  if (arguments.length === 1) return _x => tap(fn, _x)

  fn(x)

  return x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {tap} from './tap'

test('tap', () => {
  let a = 1
  const sayX = x => (a = x)

  expect(tap(sayX, 100)).toEqual(100)
  expect(tap(sayX)(100)).toEqual(100)
  expect(a).toEqual(100)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {tap, pipe} from 'rambda'

describe('R.tap', () => {
  it('happy', () => {
    pipe(
      tap(x => {
        x // $ExpectType number[]
      }),
      (x: number[]) => x.length
    )([1, 2])
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tap)

### test

```typescript

test(regExpression: RegExp): (str: string) => boolean
```

It determines whether `str` matches `regExpression`.

```javascript
R.test(/^f/, 'foo')
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.test(%2F%5Ef%2F%2C%20'foo')%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.test</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
test(regExpression: RegExp): (str: string) => boolean;
test(regExpression: RegExp, str: string): boolean;
```

</details>

<details>

<summary><strong>R.test</strong> source</summary>

```javascript
export function test(pattern, str) {
  if (arguments.length === 1) return _str => test(pattern, _str)

  if (typeof pattern === 'string') {
    throw new TypeError(
      `‘test’ requires a value of type RegExp as its first argument; received "${pattern}"`
    )
  }

  return str.search(pattern) !== -1
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {test as testMethod} from './test'

test('happy', () => {
  expect(testMethod(/^x/, 'xyz')).toBeTrue()

  expect(testMethod(/^y/)('xyz')).toBeFalse()
})

test('throws if first argument is not regex', () => {
  expect(() => testMethod('foo', 'bar')).toThrowWithMessage(
    TypeError,
    '‘test’ requires a value of type RegExp as its first argument; received "foo"'
  )
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {test} from 'rambda'

const input = 'foo   '
const regex = /foo/

describe('R.test', () => {
  it('happy', () => {
    const result = test(regex, input)

    result // $ExpectType boolean
  })
  it('curried', () => {
    const result = test(regex)(input)

    result // $ExpectType boolean
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 82.34%</summary>

```text
const R = require('../../dist/rambda.js')

const test = [
  {
    label: 'Rambda',
    fn: () => {
      R.test(/\s/g, 'x y z')
      R.test(/\s/g)('x y z')
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.test(/\s/g, 'x y z')
      Ramda.test(/\s/g)('x y z')
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#test)

### times

```typescript

times<T>(fn: (i: number) => T, howMany: number): T[]
```

It returns the result of applying function `fn` over members of range array.

The range array includes numbers between `0` and `howMany`(exclusive).

```javascript
const fn = x => x * 2
const howMany = 5

R.times(fn, howMany)
// => [0, 2, 4, 6, 8]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x%20*%202%0Aconst%20howMany%20%3D%205%0A%0Aconst%20result%20%3D%20R.times(fn%2C%20howMany)%0A%2F%2F%20%3D%3E%20%5B0%2C%202%2C%204%2C%206%2C%208%5D">Try this <strong>R.times</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
times<T>(fn: (i: number) => T, howMany: number): T[];
times<T>(fn: (i: number) => T): (howMany: number) => T[];
```

</details>

<details>

<summary><strong>R.times</strong> source</summary>

```javascript
import {map} from './map'
import {range} from './range'

export function times(fn, howMany) {
  if (arguments.length === 1) return _howMany => times(fn, _howMany)
  if (!Number.isInteger(howMany) || howMany < 0) {
    throw new RangeError('n must be an integer')
  }

  return map(fn, range(0, howMany))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import assert from 'assert'

import {identity} from './identity'
import {times} from './times'

test('happy', () => {
  const result = times(identity, 5)

  expect(result).toEqual([0, 1, 2, 3, 4])
})

test('with bad input', () => {
  assert.throws(() => {
    times(3)('cheers!')
  }, RangeError)
  assert.throws(() => {
    times(identity, -1)
  }, RangeError)
})

test('curry', () => {
  const result = times(identity)(5)

  expect(result).toEqual([0, 1, 2, 3, 4])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {times, identity} from 'rambda'

describe('R.times', () => {
  it('happy', () => {
    const result = times(identity, 5)
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#times)

### toLower

```typescript

toLower<S extends string>(str: S): Lowercase<S>
```

```javascript
R.toLower('FOO')
// => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toLower('FOO')%0A%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.toLower</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toLower<S extends string>(str: S): Lowercase<S>;
toLower(str: string): string;
```

</details>

<details>

<summary><strong>R.toLower</strong> source</summary>

```javascript
export function toLower(str) {
  return str.toLowerCase()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {toLower} from './toLower'

test('toLower', () => {
  expect(toLower('FOO|BAR|BAZ')).toEqual('foo|bar|baz')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toLower)

### toPairs

```typescript

toPairs<O extends object, K extends Extract<keyof O, string | number>>(obj: O): Array<{ [key in K]: [`${key}`, O[key]] }[K]>
```

It transforms an object to a list.

```javascript
const list = {
  a : 1,
  b : 2,
  c : [ 3, 4 ],
}
const expected = [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', [ 3, 4 ] ] ]

const result = R.toPairs(list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%7B%0A%20%20a%20%3A%201%2C%0A%20%20b%20%3A%202%2C%0A%20%20c%20%3A%20%5B%203%2C%204%20%5D%2C%0A%7D%0Aconst%20expected%20%3D%20%5B%20%5B%20'a'%2C%201%20%5D%2C%20%5B%20'b'%2C%202%20%5D%2C%20%5B%20'c'%2C%20%5B%203%2C%204%20%5D%20%5D%20%5D%0A%0Aconst%20result%20%3D%20R.toPairs(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.toPairs</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toPairs<O extends object, K extends Extract<keyof O, string | number>>(obj: O): Array<{ [key in K]: [`${key}`, O[key]] }[K]>;
toPairs<S>(obj: Record<string | number, S>): Array<[string, S]>;
```

</details>

<details>

<summary><strong>R.toPairs</strong> source</summary>

```javascript
export function toPairs(obj) {
  return Object.entries(obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {toPairs} from './toPairs'

const obj = {
  a: 1,
  b: 2,
  c: [3, 4],
}
const expected = [
  ['a', 1],
  ['b', 2],
  ['c', [3, 4]],
]

test('happy', () => {
  expect(toPairs(obj)).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {toPairs} from 'rambda'

const obj = {
  a: 1,
  b: 2,
  c: [3, 4],
}

describe('R.toPairs', () => {
  it('happy', () => {
    const result = toPairs(obj)

    result // $ExpectType (["b", number] | ["a", number] | ["c", number[]])[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toPairs)

### toString

```typescript

toString(x: unknown): string
```

```javascript
R.toString([1, 2]) 
// => '1,2'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toString(%5B1%2C%202%5D)%20%0A%2F%2F%20%3D%3E%20'1%2C2'">Try this <strong>R.toString</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toString(x: unknown): string;
```

</details>

<details>

<summary><strong>R.toString</strong> source</summary>

```javascript
export function toString(x) {
  return x.toString()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {toString} from './toString'

test('happy', () => {
  expect(toString([1, 2, 3])).toEqual('1,2,3')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toString)

### toUpper

```typescript

toUpper<S extends string>(str: S): Uppercase<S>
```

```javascript
R.toUpper('foo')
// => 'FOO'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.toUpper('foo')%0A%2F%2F%20%3D%3E%20'FOO'">Try this <strong>R.toUpper</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
toUpper<S extends string>(str: S): Uppercase<S>;
toUpper(str: string): string;
```

</details>

<details>

<summary><strong>R.toUpper</strong> source</summary>

```javascript
export function toUpper(str) {
  return str.toUpperCase()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {toUpper} from './toUpper'

test('toUpper', () => {
  expect(toUpper('foo|bar|baz')).toEqual('FOO|BAR|BAZ')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#toUpper)

### transpose

```typescript

transpose<T>(list: (T[])[]): (T[])[]
```

```javascript
const list = [[10, 11], [20], [], [30, 31, 32]]
const expected = [[10, 20, 30], [11, 31], [32]]

const result = R.transpose(list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%5B10%2C%2011%5D%2C%20%5B20%5D%2C%20%5B%5D%2C%20%5B30%2C%2031%2C%2032%5D%5D%0Aconst%20expected%20%3D%20%5B%5B10%2C%2020%2C%2030%5D%2C%20%5B11%2C%2031%5D%2C%20%5B32%5D%5D%0A%0Aconst%20result%20%3D%20R.transpose(list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.transpose</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
transpose<T>(list: (T[])[]): (T[])[];
```

</details>

<details>

<summary><strong>R.transpose</strong> source</summary>

```javascript
import {_isArray} from './_internals/_isArray'

export function transpose(array) {
  return array.reduce((acc, el) => {
    el.forEach((nestedEl, i) =>
      _isArray(acc[i]) ? acc[i].push(nestedEl) : acc.push([nestedEl])
    )

    return acc
  }, [])
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {transpose} from './transpose'

test('happy', () => {
  const input = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ]

  expect(transpose(input)).toEqual([
    ['a', 'b', 'c'],
    [1, 2, 3],
  ])
})

test('when rows are shorter', () => {
  const actual = transpose([[10, 11], [20], [], [30, 31, 32]])
  const expected = [[10, 20, 30], [11, 31], [32]]
  expect(actual).toEqual(expected)
})

test('with empty array', () => {
  expect(transpose([])).toEqual([])
})

test('array with falsy values', () => {
  const actual = transpose([
    [true, false, undefined, null],
    [null, undefined, false, true],
  ])
  const expected = [
    [true, null],
    [false, undefined],
    [undefined, false],
    [null, true],
  ]
  expect(actual).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {transpose} from 'rambda'

const input = [
  ['a', 1],
  ['b', 2],
  ['c', 3],
]

describe('R.transpose', () => {
  it('happy', () => {
    const result = transpose(input)

    result // $ExpectType (string | number)[][]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#transpose)

### trim

```typescript

trim(str: string): string
```

```javascript
R.trim('  foo  ') 
// => 'foo'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.trim('%20%20foo%20%20')%20%0A%2F%2F%20%3D%3E%20'foo'">Try this <strong>R.trim</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
trim(str: string): string;
```

</details>

<details>

<summary><strong>R.trim</strong> source</summary>

```javascript
export function trim(str) {
  return str.trim()
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {trim} from './trim'

test('trim', () => {
  expect(trim(' foo ')).toEqual('foo')
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#trim)

### tryCatch

It returns function that runs `fn` in `try/catch` block. If there was an error, then `fallback` is used to return the result. Note that `fn` can be value or asynchronous/synchronous function(unlike `Ramda` where fallback can only be a synchronous function).

> :boom: Please check the tests of `R.tryCatch` to fully understand how this method works.

```javascript
const fn = x => x.foo

const result = [
  R.tryCatch(fn, false)(null),
  R.tryCatch(fn, false)({foo: 'bar'})
]
// => [false, 'bar']
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20x%20%3D%3E%20x.foo%0A%0Aconst%20result%20%3D%20%5B%0A%20%20R.tryCatch(fn%2C%20false)(null)%2C%0A%20%20R.tryCatch(fn%2C%20false)(%7Bfoo%3A%20'bar'%7D)%0A%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20'bar'%5D">Try this <strong>R.tryCatch</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#tryCatch)

### type

It accepts any input and it returns its type.

> :boom: `NaN`, `Promise` and `Async` are types specific for **Rambda**.

```javascript
R.type(() => {}) // => 'Function'
R.type(async () => {}) // => 'Async'
R.type([]) // => 'Array'
R.type({}) // => 'Object'
R.type('foo') // => 'String'
R.type(1) // => 'Number'
R.type(true) // => 'Boolean'
R.type(null) // => 'Null'
R.type(/[A-z]/) // => 'RegExp'
R.type('foo'*1) // => 'NaN'

const delay = ms => new Promise(resolve => {
  setTimeout(function () {
    resolve()
  }, ms)
})
R.type(delay) // => 'Promise'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?R.type(()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Function'%0AR.type(async%20()%20%3D%3E%20%7B%7D)%20%2F%2F%20%3D%3E%20'Async'%0AR.type(%5B%5D)%20%2F%2F%20%3D%3E%20'Array'%0AR.type(%7B%7D)%20%2F%2F%20%3D%3E%20'Object'%0AR.type('foo')%20%2F%2F%20%3D%3E%20'String'%0AR.type(1)%20%2F%2F%20%3D%3E%20'Number'%0AR.type(true)%20%2F%2F%20%3D%3E%20'Boolean'%0AR.type(null)%20%2F%2F%20%3D%3E%20'Null'%0AR.type(%2F%5BA-z%5D%2F)%20%2F%2F%20%3D%3E%20'RegExp'%0AR.type('foo'*1)%20%2F%2F%20%3D%3E%20'NaN'%0A%0Aconst%20delay%20%3D%20ms%20%3D%3E%20new%20Promise(resolve%20%3D%3E%20%7B%0A%20%20setTimeout(function%20()%20%7B%0A%20%20%20%20resolve()%0A%20%20%7D%2C%20ms)%0A%7D)%0Aconst%20result%20%3D%20R.type(delay)%20%2F%2F%20%3D%3E%20'Promise'">Try this <strong>R.type</strong> example in Rambda REPL</a>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#type)

### unapply

```typescript

unapply<T = any>(fn: (args: any[]) => T): (...args: any[]) => T
```

It calls a function `fn` with the list of values of the returned function. 

`R.unapply` is the opposite of `R.apply` method.

```javascript
R.unapply(JSON.stringify)(1, 2, 3)
//=> '[1,2,3]'
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.unapply(JSON.stringify)(1%2C%202%2C%203)%0A%2F%2F%3D%3E%20'%5B1%2C2%2C3%5D'">Try this <strong>R.unapply</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
unapply<T = any>(fn: (args: any[]) => T): (...args: any[]) => T;
```

</details>

<details>

<summary><strong>R.unapply</strong> source</summary>

```javascript
export function unapply(fn) {
  return function (...args) {
    return fn.call(this, args)
  }
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {apply} from './apply'
import {unapply} from './unapply'
import {identity} from './identity'
import {converge} from './converge'
import {prop} from './prop'
import {sum} from './sum'

test('happy', () => {
  const fn = unapply(identity)
  expect(fn(1, 2, 3)).toEqual([1, 2, 3])
  expect(fn()).toEqual([])
})

test('returns a function which is always passed one argument', function () {
  const fn = unapply(function () {
    return arguments.length
  })
  expect(fn('x')).toEqual(1)
  expect(fn('x', 'y')).toEqual(1)
  expect(fn('x', 'y', 'z')).toEqual(1)
})

test('forwards arguments to decorated function as an array', function () {
  const fn = unapply(function (xs) {
    return '[' + xs + ']'
  })
  expect(fn(2)).toEqual('[2]')
  expect(fn(2, 4)).toEqual('[2,4]')
  expect(fn(2, 4, 6)).toEqual('[2,4,6]')
})

test('returns a function with length 0', function () {
  const fn = unapply(identity)
  expect(fn.length).toEqual(0)
})

test('is the inverse of R.apply', function () {
  let a, b, c, d, e, f, g, n
  const rand = function () {
    return Math.floor(200 * Math.random()) - 100
  }

  f = Math.max
  g = unapply(apply(f))
  n = 1
  while (n <= 100) {
    a = rand()
    b = rand()
    c = rand()
    d = rand()
    e = rand()
    expect(f(a, b, c, d, e)).toEqual(g(a, b, c, d, e))
    n += 1
  }

  f = function (xs) {
    return '[' + xs + ']'
  }
  g = apply(unapply(f))
  n = 1
  while (n <= 100) {
    a = rand()
    b = rand()
    c = rand()
    d = rand()
    e = rand()
    expect(f([a, b, c, d, e])).toEqual(g([a, b, c, d, e]))
    n += 1
  }
})

test('it works with converge', () => {
  const fn = unapply(sum)
  const convergeFn = converge(fn, [prop('a'), prop('b'), prop('c')])
  const obj = {
    a: 1337,
    b: 42,
    c: 1,
  }
  const expected = 1337 + 42 + 1
  expect(convergeFn(obj)).toEqual(expected)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {join, unapply, sum} from 'rambda'

describe('R.unapply', () => {
  it('happy', () => {
    const fn = unapply(sum)

    fn(1, 2, 3) // $ExpectType number
  })

  it('joins a string', () => {
    const fn = unapply(join(''))

    fn('s', 't', 'r', 'i', 'n', 'g') // $ExpectType string
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unapply)

### union

```typescript

union<T>(x: T[], y: T[]): T[]
```

It takes two lists and return a new list containing a merger of both list with removed duplicates. 

`R.equals` is used to compare for duplication.

```javascript
const result = R.union([1,2,3], [3,4,5]);
// => [1, 2, 3, 4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20R.union(%5B1%2C2%2C3%5D%2C%20%5B3%2C4%2C5%5D)%3B%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%203%2C%204%2C%205%5D">Try this <strong>R.union</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
union<T>(x: T[], y: T[]): T[];
union<T>(x: T[]): (y: T[]) => T[];
```

</details>

<details>

<summary><strong>R.union</strong> source</summary>

```javascript
import {includes} from './includes'
import {cloneList} from './_internals/cloneList'

export function union(x, y) {
  if (arguments.length === 1) return _y => union(x, _y)

  const toReturn = cloneList(x)

  y.forEach(yInstance => {
    if (!includes(yInstance, x)) toReturn.push(yInstance)
  })

  return toReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {union} from './union'

test('happy', () => {
  expect(union([1, 2], [2, 3])).toEqual([1, 2, 3])
})

test('with list of objects', () => {
  const list1 = [{a: 1}, {a: 2}]
  const list2 = [{a: 2}, {a: 3}]
  const result = union(list1)(list2)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {union} from 'rambda'

describe('R.union', () => {
  it('happy', () => {
    const result = union([1, 2], [2, 3])

    result // $ExpectType number[]
  })
  it('with array of objects - case 1', () => {
    const list1 = [{a: 1}, {a: 2}]
    const list2 = [{a: 2}, {a: 3}]
    const result = union(list1, list2)
    result // $ExpectType { a: number; }[]
  })
  it('with array of objects - case 2', () => {
    const list1 = [{a: 1, b: 1}, {a: 2}]
    const list2 = [{a: 2}, {a: 3, b: 3}]
    const result = union(list1, list2)
    result[0].a // $ExpectType number
    result[0].b // $ExpectType number | undefined
  })
})

describe('R.union - curried', () => {
  it('happy', () => {
    const result = union([1, 2])([2, 3])

    result // $ExpectType number[]
  })
  it('with array of objects - case 1', () => {
    const list1 = [{a: 1}, {a: 2}]
    const list2 = [{a: 2}, {a: 3}]
    const result = union(list1)(list2)
    result // $ExpectType { a: number; }[]
  })
  it('with array of objects - case 2', () => {
    const list1 = [{a: 1, b: 1}, {a: 2}]
    const list2 = [{a: 2}, {a: 3, b: 3}]
    const result = union(list1)(list2)
    result[0].a // $ExpectType number
    result[0].b // $ExpectType number | undefined
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#union)

### uniq

```typescript

uniq<T>(list: T[]): T[]
```

It returns a new array containing only one copy of each element of `list`.

`R.equals` is used to determine equality.

```javascript
const list = [1, 1, {a: 1}, {a: 2}, {a:1}]

R.uniq(list)
// => [1, {a: 1}, {a: 2}]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B1%2C%201%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%2C%20%7Ba%3A1%7D%5D%0A%0Aconst%20result%20%3D%20R.uniq(list)%0A%2F%2F%20%3D%3E%20%5B1%2C%20%7Ba%3A%201%7D%2C%20%7Ba%3A%202%7D%5D">Try this <strong>R.uniq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
uniq<T>(list: T[]): T[];
```

</details>

<details>

<summary><strong>R.uniq</strong> source</summary>

```javascript
import {_Set} from './_internals/set'

export function uniq(list) {
  const set = new _Set()
  const willReturn = []
  list.forEach(item => {
    if (set.checkUniqueness(item)) {
      willReturn.push(item)
    }
  })

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {uniq} from './uniq'
import {uniq as uniqRamda} from 'ramda'

test('happy', () => {
  const list = [1, 2, 3, 3, 3, 1, 2, 0]
  expect(uniq(list)).toEqual([1, 2, 3, 0])
})

test('with object', () => {
  const list = [{a: 1}, {a: 2}, {a: 1}, {a: 2}]
  expect(uniq(list)).toEqual([{a: 1}, {a: 2}])
})

test('with nested array', () => {
  expect(uniq([[42], [42]])).toEqual([[42]])
})
test('with booleans', () => {
  expect(uniq([[false], [false], [true]])).toEqual([[false], [true]])
})

test('with falsy values', () => {
  expect(uniq([undefined, null])).toEqual([undefined, null])
})

test('can distinct between string and number', () => {
  expect(uniq([1, '1'])).toEqual([1, '1'])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {uniq} from 'rambda'

describe('R.uniq', () => {
  it('happy', () => {
    const result = uniq([1, 2, 3, 3, 3, 1, 2, 0])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 90.24%</summary>

```text
const R = require('../../dist/rambda.js')

const {
  uniqListOfStrings,
  uniqListOfBooleans,
  uniqListOfNumbers,
  uniqListOfLists,
  uniqListOfObjects,
} = require('./_utils.js')

const limit = 100

const modes = [
  uniqListOfStrings(limit),
  uniqListOfBooleans(limit),
  uniqListOfNumbers(limit),
  uniqListOfLists(limit),
  uniqListOfObjects(limit),
]

function applyBenchmark(fn, input) {
  fn(input)
}

const tests = [
  {
    label: 'Rambda',
    fn: R.uniq,
  },
  {
    label: 'Ramda',
    fn: Ramda.uniq,
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniq)

### uniqWith

```typescript

uniqWith<T, U>(predicate: (x: T, y: T) => boolean, list: T[]): T[]
```

It returns a new array containing only one copy of each element in `list` according to `predicate` function.

This predicate should return true, if two elements are equal.

```javascript
const list = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
  {id: 3, title:'foo'},
  {id: 4, title:'bar'},
]

const expected = [
  {id: 0, title:'foo'},
  {id: 1, title:'bar'},
  {id: 2, title:'baz'},
]

const predicate = (x,y) => x.title === y.title

const result = R.uniqWith(predicate, list)
// => `result` is equal to `expected`
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%20%20%7Bid%3A%203%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%204%2C%20title%3A'bar'%7D%2C%0A%5D%0A%0Aconst%20expected%20%3D%20%5B%0A%20%20%7Bid%3A%200%2C%20title%3A'foo'%7D%2C%0A%20%20%7Bid%3A%201%2C%20title%3A'bar'%7D%2C%0A%20%20%7Bid%3A%202%2C%20title%3A'baz'%7D%2C%0A%5D%0A%0Aconst%20predicate%20%3D%20(x%2Cy)%20%3D%3E%20x.title%20%3D%3D%3D%20y.title%0A%0Aconst%20result%20%3D%20R.uniqWith(predicate%2C%20list)%0A%2F%2F%20%3D%3E%20%60result%60%20is%20equal%20to%20%60expected%60">Try this <strong>R.uniqWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
uniqWith<T, U>(predicate: (x: T, y: T) => boolean, list: T[]): T[];
uniqWith<T, U>(predicate: (x: T, y: T) => boolean): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.uniqWith</strong> source</summary>

```javascript
function includesWith(predicate, target, list) {
  let willReturn = false
  let index = -1

  while (++index < list.length && !willReturn) {
    const value = list[index]

    if (predicate(target, value)) {
      willReturn = true
    }
  }

  return willReturn
}

export function uniqWith(predicate, list) {
  if (arguments.length === 1) return _list => uniqWith(predicate, _list)

  let index = -1
  const willReturn = []

  while (++index < list.length) {
    const value = list[index]

    if (!includesWith(predicate, value, willReturn)) {
      willReturn.push(value)
    }
  }

  return willReturn
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {uniqWith} from './uniqWith'
import {uniqWith as uniqWithRamda} from 'ramda'

const list = [{a: 1}, {a: 1}]

test('happy', () => {
  const fn = (x, y) => x.a === y.a

  const result = uniqWith(fn, list)
  expect(result).toEqual([{a: 1}])
})

test('with list of strings', () => {
  const fn = (x, y) => x.length === y.length
  const list = ['0', '11', '222', '33', '4', '55']
  const result = uniqWith(fn)(list)
  const resultRamda = uniqWithRamda(fn, list)
  expect(result).toEqual(['0', '11', '222'])
  expect(resultRamda).toEqual(['0', '11', '222'])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {uniqWith} from 'rambda'

describe('R.uniqWith', () => {
  it('happy', () => {
    const list = [{a: 1}, {a: 1}]

    const fn = (x: any, y: any) => x.a === y.a

    const result = uniqWith(fn, list)
    result // $ExpectType { a: number; }[]
  })
})
```

</details>

<details>

<summary>Rambda is slower than Ramda with 25.38%</summary>

```text
const R = require('../../dist/rambda.js')

const {
  uniqListOfStrings,
  uniqListOfBooleans,
  uniqListOfNumbers,
  uniqListOfLists,
  uniqListOfObjects,
} = require('./_utils.js')

const limit = 100

const modes = [
  [uniqListOfStrings(limit), (x, y) => x.length === y.length],
  [uniqListOfBooleans(limit), (x, y) => x === y],
  [uniqListOfNumbers(limit), (x, y) => x > y],
  [uniqListOfLists(limit), (x, y) => x.length === y.length],
  [
    uniqListOfObjects(limit),
    x => (x, y) => Object.keys(x).length === Object.keys(y).length,
  ],
]

function applyBenchmark(fn, input) {
  return fn(input[1], input[0])
}

const tests = [
  {
    label: 'Rambda',
    fn: R.uniqWith,
  },
  {
    label: 'Ramda',
    fn: Ramda.uniqWith,
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#uniqWith)

### unless

```typescript

unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U, x: T): T | U
```

The method returns function that will be called with argument `input`.

If `predicate(input)` returns `false`, then the end result will be the outcome of `whenFalse(input)`.

In the other case, the final output will be the `input` itself.

```javascript
const fn = R.unless(
  x => x > 2,
  x => x + 10
)

const result = [
  fn(1),
  fn(5)
]
// => [11, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20fn%20%3D%20R.unless(%0A%20%20x%20%3D%3E%20x%20%3E%202%2C%0A%20%20x%20%3D%3E%20x%20%2B%2010%0A)%0A%0Aconst%20result%20%3D%20%5B%0A%20%20fn(1)%2C%0A%20%20fn(5)%0A%5D%0A%2F%2F%20%3D%3E%20%5B11%2C%205%5D">Try this <strong>R.unless</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U, x: T): T | U;
unless<T, U>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => U): (x: T) => T | U;
unless<T>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => T, x: T): T;
unless<T>(predicate: (x: T) => boolean, whenFalseFn: (x: T) => T): (x: T) => T;
```

</details>

<details>

<summary><strong>R.unless</strong> source</summary>

```javascript
export function unless(predicate, whenFalse) {
  if (arguments.length === 1) {
    return _whenFalse => unless(predicate, _whenFalse)
  }

  return input => (predicate(input) ? input : whenFalse(input))
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {inc} from './inc'
import {isNil} from './isNil'
import {unless} from './unless'

test('happy', () => {
  const safeInc = unless(isNil, inc)
  expect(safeInc(null)).toBeNull()
  expect(safeInc(1)).toBe(2)
})

test('curried', () => {
  const safeIncCurried = unless(isNil)(inc)
  expect(safeIncCurried(null)).toBeNull()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {unless, inc} from 'rambda'

describe('R.unless', () => {
  it('happy', () => {
    const fn = unless(x => x > 5, inc)
    const result = fn(1)
    result // $ExpectType number
  })
  it('with one explicit type', () => {
    const result = unless(
      x => {
        x // $ExpectType number
        return x > 5
      },
      x => {
        x // $ExpectType number
        return x + 1
      },
      1
    )
    result // $ExpectType number
  })
  it('with two different explicit types', () => {
    const result = unless(
      x => {
        x // $ExpectType number
        return x > 5
      },
      x => {
        x // $ExpectType number
        return `${x}-foo`
      },
      1
    )
    result // $ExpectType string | number
  })
})

describe('R.unless - curried', () => {
  it('happy', () => {
    const fn = unless(x => x > 5, inc)
    const result = fn(1)
    result // $ExpectType number
  })
  it('with one explicit type', () => {
    const fn = unless<number>(
      x => {
        x // $ExpectType number
        return x > 5
      },
      x => {
        x // $ExpectType number
        return x + 1
      }
    )
    const result = fn(1)
    result // $ExpectType number
  })
  it('with two different explicit types', () => {
    const fn = unless<number, string>(
      x => {
        x // $ExpectType number
        return x > 5
      },
      x => {
        x // $ExpectType number
        return `${x}-foo`
      }
    )
    const result = fn(1)
    result // $ExpectType string | number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#unless)

### update

```typescript

update<T>(index: number, newValue: T, list: T[]): T[]
```

It returns a copy of `list` with updated element at `index` with `newValue`.

```javascript
const index = 2
const newValue = 88
const list = [1, 2, 3, 4, 5]

const result = R.update(index, newValue, list)
// => [1, 2, 88, 4, 5]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20index%20%3D%202%0Aconst%20newValue%20%3D%2088%0Aconst%20list%20%3D%20%5B1%2C%202%2C%203%2C%204%2C%205%5D%0A%0Aconst%20result%20%3D%20R.update(index%2C%20newValue%2C%20list)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%2C%2088%2C%204%2C%205%5D">Try this <strong>R.update</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
update<T>(index: number, newValue: T, list: T[]): T[];
update<T>(index: number, newValue: T): (list: T[]) => T[];
```

</details>

<details>

<summary><strong>R.update</strong> source</summary>

```javascript
import {curry} from './curry'
import {cloneList} from './_internals/cloneList'

function updateFn(index, newValue, list) {
  const clone = cloneList(list)
  if (index === -1) return clone.fill(newValue, index)

  return clone.fill(newValue, index, index + 1)
}

export const update = curry(updateFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {update} from './update'

const list = [1, 2, 3]

test('happy', () => {
  const newValue = 8
  const index = 1
  const result = update(index, newValue, list)
  const curriedResult = update(index, newValue)(list)
  const tripleCurriedResult = update(index)(newValue)(list)

  const expected = [1, 8, 3]
  expect(result).toEqual(expected)
  expect(curriedResult).toEqual(expected)
  expect(tripleCurriedResult).toEqual(expected)
})

test('list has no such index', () => {
  const newValue = 8
  const index = 10
  const result = update(index, newValue, list)

  expect(result).toEqual(list)
})

test('with negative index', () => {
  expect(update(-1, 10, [1])).toEqual([10])
  expect(update(-1, 10, [])).toEqual([])
  expect(update(-1, 10, list)).toEqual([1, 2, 10])
  expect(update(-2, 10, list)).toEqual([1, 10, 3])
  expect(update(-3, 10, list)).toEqual([10, 2, 3])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {update} from 'rambda'

describe('R.update', () => {
  it('happy', () => {
    const result = update(1, 0, [1, 2, 3])
    result // $ExpectType number[]
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 52.35%</summary>

```text
const R = require('../../dist/rambda.js')

const list = [0, 1, 2]
const index = 1
const replacer = 7

const update = [
  {
    label: 'Rambda',
    fn: () => {
      R.update(replacer, index, list)
      R.update(replacer, index)(list)
      R.update(replacer)(index)(list)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.update(replacer, index, list)
      Ramda.update(replacer, index)(list)
      Ramda.update(replacer)(index)(list)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#update)

### values

```typescript

values<T extends object, K extends keyof T>(obj: T): T[K][]
```

With correct input, this is nothing more than `Object.values(obj)`. If `obj` is not an object, then it returns an empty array.

```javascript
const obj = {a:1, b:2}

R.values(obj)
// => [1, 2]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20obj%20%3D%20%7Ba%3A1%2C%20b%3A2%7D%0A%0Aconst%20result%20%3D%20R.values(obj)%0A%2F%2F%20%3D%3E%20%5B1%2C%202%5D">Try this <strong>R.values</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
values<T extends object, K extends keyof T>(obj: T): T[K][];
```

</details>

<details>

<summary><strong>R.values</strong> source</summary>

```javascript
import {type} from './type'

export function values(obj) {
  if (type(obj) !== 'Object') return []

  return Object.values(obj)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {values} from './values'

test('happy', () => {
  expect(
    values({
      a: 1,
      b: 2,
      c: 3,
    })
  ).toEqual([1, 2, 3])
})

test('with bad input', () => {
  expect(values(null)).toEqual([])
  expect(values(undefined)).toEqual([])
  expect(values(55)).toEqual([])
  expect(values('foo')).toEqual([])
  expect(values(true)).toEqual([])
  expect(values(false)).toEqual([])
  expect(values(NaN)).toEqual([])
  expect(values(Infinity)).toEqual([])
  expect(values([])).toEqual([])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {values} from 'rambda'

describe('R.values', () => {
  it('happy', () => {
    const result = values({
      a: 1,
      b: 2,
      c: 3,
    })
    result // $ExpectType number[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#values)

### view

```typescript

view<T, U>(lens: Lens): (target: T) => U
```

It returns the value of `lens` focus over `target` object.

```javascript
const lens = R.lensProp('x')

R.view(lens, {x: 1, y: 2}) // => 1
R.view(lens, {x: 4, y: 2}) // => 4
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20lens%20%3D%20R.lensProp('x')%0A%0AR.view(lens%2C%20%7Bx%3A%201%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%201%0Aconst%20result%20%3D%20R.view(lens%2C%20%7Bx%3A%204%2C%20y%3A%202%7D)%20%2F%2F%20%3D%3E%204">Try this <strong>R.view</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
view<T, U>(lens: Lens): (target: T) => U;
view<T, U>(lens: Lens, target: T): U;
```

</details>

<details>

<summary><strong>R.view</strong> source</summary>

```javascript
const Const = x => ({
  x,
  map: fn => Const(x),
})

export function view(lens, target) {
  if (arguments.length === 1) return _target => view(lens, _target)

  return lens(Const)(target).x
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {assoc} from './assoc'
import {lens} from './lens'
import {prop} from './prop'
import {view} from './view'

const testObject = {foo: 'Led Zeppelin'}
const assocLens = lens(prop('foo'), assoc('foo'))

test('happy', () => {
  expect(view(assocLens, testObject)).toEqual('Led Zeppelin')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {lens, view, assoc} from 'rambda'

interface Input {
  foo: string
}

const testObject: Input = {
  foo: 'Led Zeppelin',
}

const fooLens = lens<Input, string, string>((x: Input) => {
  return x.foo
}, assoc('foo'))

describe('R.view', () => {
  it('happt', () => {
    const result = view<Input, string>(fooLens, testObject)
    result // $ExpectType string
  })
})
```

</details>

<details>

<summary>Rambda is faster than Ramda with 76.15%</summary>

```text
const R = require('../../dist/rambda.js')

const testObj = {a: 1}

const last = [
  {
    label: 'Rambda',
    fn: () => {
      R.view(R.lensProp('a'), testObj)
    },
  },
  {
    label: 'Ramda',
    fn: () => {
      Ramda.view(Ramda.lensProp('a'), testObj)
    },
  },
]
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#view)

### when

```typescript

when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U, input: T): T | U
```

<details>

<summary>All Typescript definitions</summary>

```typescript
when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U, input: T): T | U;
when<T, U>(predicate: (x: T) => boolean, whenTrueFn: (a: T) => U): (input: T) => T | U;
when<T, U>(predicate: (x: T) => boolean): ((whenTrueFn: (a: T) => U) => (input: T) => T | U);
```

</details>

<details>

<summary><strong>R.when</strong> source</summary>

```javascript
import {curry} from './curry'

function whenFn(predicate, whenTrueFn, input) {
  if (!predicate(input)) return input

  return whenTrueFn(input)
}

export const when = curry(whenFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {add} from './add'
import {when} from './when'

const predicate = x => typeof x === 'number'

test('happy', () => {
  const fn = when(predicate, add(11))
  expect(fn(11)).toBe(22)
  expect(fn('foo')).toBe('foo')
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {when} from 'rambda'

const predicate = (x: number) => x > 2
const whenTrueFn = (x: number) => String(x)

describe('R.when', () => {
  it('happy', () => {
    const result = when(predicate, whenTrueFn, 1)
    result // $ExpectType string | 1
  })

  it('curry 1', () => {
    const fn = when(predicate, whenTrueFn)
    const result = fn(1)
    result // $ExpectType string | number
  })

  it('curry 2 require explicit types', () => {
    const fn = when<number, string>(predicate)(whenTrueFn)
    const result = fn(1)
    result // $ExpectType string | number
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#when)

### where

```typescript

where<T, U>(conditions: T, input: U): boolean
```

It returns `true` if all each property in `conditions` returns `true` when applied to corresponding property in `input` object.

```javascript
const condition = R.where({
  a : x => typeof x === "string",
  b : x => x === 4
})
const input = {
  a : "foo",
  b : 4,
  c : 11,
}

const result = condition(input) 
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20R.where(%7B%0A%20%20a%20%3A%20x%20%3D%3E%20typeof%20x%20%3D%3D%3D%20%22string%22%2C%0A%20%20b%20%3A%20x%20%3D%3E%20x%20%3D%3D%3D%204%0A%7D)%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%3A%20%22foo%22%2C%0A%20%20b%20%3A%204%2C%0A%20%20c%20%3A%2011%2C%0A%7D%0A%0Aconst%20result%20%3D%20condition(input)%20%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.where</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
where<T, U>(conditions: T, input: U): boolean;
where<T>(conditions: T): <U>(input: U) => boolean;
where<ObjFunc2, U>(conditions: ObjFunc2, input: U): boolean;
where<ObjFunc2>(conditions: ObjFunc2): <U>(input: U) => boolean;
```

</details>

<details>

<summary><strong>R.where</strong> source</summary>

```javascript
export function where(conditions, input) {
  if (input === undefined) {
    return _input => where(conditions, _input)
  }
  let flag = true
  for (const prop in conditions) {
    const result = conditions[prop](input[prop])
    if (flag && result === false) {
      flag = false
    }
  }

  return flag
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {equals} from './equals'
import {where} from './where'

test('when true', () => {
  const predicate = where({
    a: equals('foo'),
    b: equals('bar'),
  })
  expect(
    predicate({
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    })
  ).toEqual(true)
})

test('when false', () => {
  const predicate = where({
    a: equals('foo'),
    b: equals('baz'),
  })
  expect(
    predicate({
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    })
  ).toEqual(false)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {where, equals} from 'rambda'

describe('R.where', () => {
  it('happy', () => {
    const input = {
      a: 'foo',
      b: 'bar',
      x: 11,
      y: 19,
    }
    const conditions = {
      a: equals('foo'),
      b: equals('bar'),
    }
    const result = where(conditions, input)
    const curriedResult = where(conditions)(input)
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#where)

### whereEq

```typescript

whereEq<T, U>(condition: T, input: U): boolean
```

It will return `true` if all of `input` object fully or partially include `rule` object.

`R.equals` is used to determine equality.

```javascript
const condition = { a : { b : 1 } }
const input = {
  a : { b : 1 },
  c : 2
}

const result = whereEq(condition, input)
// => true
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20condition%20%3D%20%7B%20a%20%3A%20%7B%20b%20%3A%201%20%7D%20%7D%0Aconst%20input%20%3D%20%7B%0A%20%20a%20%3A%20%7B%20b%20%3A%201%20%7D%2C%0A%20%20c%20%3A%202%0A%7D%0A%0Aconst%20result%20%3D%20whereEq(condition%2C%20input)%0A%2F%2F%20%3D%3E%20true">Try this <strong>R.whereEq</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
whereEq<T, U>(condition: T, input: U): boolean;
whereEq<T>(condition: T): <U>(input: U) => boolean;
```

</details>

<details>

<summary><strong>R.whereEq</strong> source</summary>

```javascript
import {equals} from './equals'
import {filter} from './filter'

export function whereEq(condition, input) {
  if (arguments.length === 1) {
    return _input => whereEq(condition, _input)
  }

  const result = filter(
    (conditionValue, conditionProp) =>
      equals(conditionValue, input[conditionProp]),
    condition
  )

  return Object.keys(result).length === Object.keys(condition).length
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {whereEq} from './whereEq'

test('when true', () => {
  const condition = {a: 1}
  const input = {
    a: 1,
    b: 2,
  }

  const result = whereEq(condition, input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('when false', () => {
  const condition = {a: 1}
  const input = {b: 2}

  const result = whereEq(condition, input)
  const expectedResult = false

  expect(result).toEqual(expectedResult)
})

test('with nested object', () => {
  const condition = {a: {b: 1}}
  const input = {
    a: {b: 1},
    c: 2,
  }

  const result = whereEq(condition)(input)
  const expectedResult = true

  expect(result).toEqual(expectedResult)
})

test('with wrong input', () => {
  const condition = {a: {b: 1}}

  expect(() => whereEq(condition, null)).toThrowWithMessage(
    TypeError,
    `Cannot read properties of null (reading 'a')`
  )
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {whereEq} from 'rambda'

describe('R.whereEq', () => {
  it('happy', () => {
    const result = whereEq({a: {b: 2}}, {b: 2})
    const curriedResult = whereEq({a: {b: 2}})({b: 2})
    result // $ExpectType boolean
    curriedResult // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#whereEq)

### without

```typescript

without<T>(matchAgainst: T[], source: T[]): T[]
```

It will return a new array, based on all members of `source` list that are not part of `matchAgainst` list.

`R.equals` is used to determine equality.

```javascript
const source = [1, 2, 3, 4]
const matchAgainst = [2, 3]

const result = R.without(matchAgainst, source)
// => [1, 4]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20source%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%0Aconst%20matchAgainst%20%3D%20%5B2%2C%203%5D%0A%0Aconst%20result%20%3D%20R.without(matchAgainst%2C%20source)%0A%2F%2F%20%3D%3E%20%5B1%2C%204%5D">Try this <strong>R.without</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
without<T>(matchAgainst: T[], source: T[]): T[];
without<T>(matchAgainst: T[]): (source: T[]) => T[];
```

</details>

<details>

<summary><strong>R.without</strong> source</summary>

```javascript
import {reduce} from './reduce'
import {_indexOf} from './equals'

export function without(matchAgainst, source) {
  if (source === undefined) {
    return _source => without(matchAgainst, _source)
  }

  return reduce(
    (prev, current) =>
      _indexOf(current, matchAgainst) > -1 ? prev : prev.concat(current),
    [],
    source
  )
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {without} from './without'
import {without as withoutRamda} from 'ramda'

test('should return a new list without values in the first argument', () => {
  const itemsToOmit = ['A', 'B', 'C']
  const collection = ['A', 'B', 'C', 'D', 'E', 'F']

  expect(without(itemsToOmit, collection)).toEqual(['D', 'E', 'F'])
  expect(without(itemsToOmit)(collection)).toEqual(['D', 'E', 'F'])
})

test('with list of objects', () => {
  const itemsToOmit = [{a: 1}, {c: 3}]
  const collection = [{a: 1}, {b: 2}, {c: 3}, {d: 4}]
  const expected = [{b: 2}, {d: 4}]

  expect(without(itemsToOmit, collection)).toEqual(expected)
  expect(withoutRamda(itemsToOmit, collection)).toEqual(expected)
})

test('ramda accepts string as target input while rambda throws', () => {
  expect(withoutRamda('0:1', ['0', '0:1'])).toEqual([])
  expect(() => without('0:1', ['0', '0:1'])).toThrow()
  expect(without(['0:1'], ['0', '0:1'])).toEqual(['0'])
})

test('ramda test', () => {
  expect(without([1, 2])([1, 2, 1, 3, 4])).toEqual([3, 4])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {without} from 'rambda'

const itemsToOmit = ['A', 'B', 'C']
const collection = ['A', 'B', 'C', 'D', 'E', 'F']

describe('R.without', () => {
  it('happy', () => {
    const result = without(itemsToOmit, collection)

    result // $ExpectType string[]
  })
  it('curried', () => {
    const result = without(itemsToOmit)(collection)

    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#without)

### xor

```typescript

xor(x: boolean, y: boolean): boolean
```

Logical XOR

```javascript
const result = [
  xor(true, true),
  xor(false, false),
  xor(false, true),
]
// => [false, false, true]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20result%20%3D%20%5B%0A%20%20xor(true%2C%20true)%2C%0A%20%20xor(false%2C%20false)%2C%0A%20%20xor(false%2C%20true)%2C%0A%5D%0A%2F%2F%20%3D%3E%20%5Bfalse%2C%20false%2C%20true%5D">Try this <strong>R.xor</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
xor(x: boolean, y: boolean): boolean;
xor(y: boolean): (y: boolean) => boolean;
```

</details>

<details>

<summary><strong>R.xor</strong> source</summary>

```javascript
export function xor(a, b) {
  if (arguments.length === 1) return _b => xor(a, _b)

  return (Boolean(a) && !b) || (Boolean(b) && !a)
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {xor} from './xor'

test('compares two values with exclusive or', () => {
  expect(xor(true, true)).toEqual(false)
  expect(xor(true, false)).toEqual(true)
  expect(xor(false, true)).toEqual(true)
  expect(xor(false, false)).toEqual(false)
})

test('when both values are truthy, it should return false', () => {
  expect(xor(true, 'foo')).toEqual(false)
  expect(xor(42, true)).toEqual(false)
  expect(xor('foo', 42)).toEqual(false)
  expect(xor({}, true)).toEqual(false)
  expect(xor(true, [])).toEqual(false)
  expect(xor([], {})).toEqual(false)
  expect(xor(new Date(), true)).toEqual(false)
  expect(xor(true, Infinity)).toEqual(false)
  expect(xor(Infinity, new Date())).toEqual(false)
})

test('when both values are falsy, it should return false', () => {
  expect(xor(null, false)).toEqual(false)
  expect(xor(false, undefined)).toEqual(false)
  expect(xor(undefined, null)).toEqual(false)
  expect(xor(0, false)).toEqual(false)
  expect(xor(false, NaN)).toEqual(false)
  expect(xor(NaN, 0)).toEqual(false)
  expect(xor('', false)).toEqual(false)
})

test('when one argument is truthy and the other is falsy, it should return true', () => {
  expect(xor('foo', null)).toEqual(true)
  expect(xor(null, 'foo')).toEqual(true)
  expect(xor(undefined, 42)).toEqual(true)
  expect(xor(42, undefined)).toEqual(true)
  expect(xor(Infinity, NaN)).toEqual(true)
  expect(xor(NaN, Infinity)).toEqual(true)
  expect(xor({}, '')).toEqual(true)
  expect(xor('', {})).toEqual(true)
  expect(xor(new Date(), 0)).toEqual(true)
  expect(xor(0, new Date())).toEqual(true)
  expect(xor([], null)).toEqual(true)
  expect(xor(undefined, [])).toEqual(true)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {xor} from 'rambda'

describe('R.xor', () => {
  it('happy', () => {
    xor(true, false) // $ExpectType boolean
  })
  it('curry', () => {
    xor(true)(false) // $ExpectType boolean
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#xor)

### zip

```typescript

zip<K, V>(x: K[], y: V[]): KeyValuePair<K, V>[]
```

It will return a new array containing tuples of equally positions items from both `x` and `y` lists. 

The returned list will be truncated to match the length of the shortest supplied list.

```javascript
const x = [1, 2]
const y = ['A', 'B']
R.zip(x, y)
// => [[1, 'A'], [2, 'B']]

// truncates to shortest list
R.zip([...x, 3], ['A', 'B'])
// => [[1, 'A'], [2, 'B']]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20x%20%3D%20%5B1%2C%202%5D%0Aconst%20y%20%3D%20%5B'A'%2C%20'B'%5D%0AR.zip(x%2C%20y)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0Aconst%20result%20%3D%20R.zip(%5B...x%2C%203%5D%2C%20%5B'A'%2C%20'B'%5D)%0A%2F%2F%20%3D%3E%20%5B%5B1%2C%20'A'%5D%2C%20%5B2%2C%20'B'%5D%5D">Try this <strong>R.zip</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
zip<K, V>(x: K[], y: V[]): KeyValuePair<K, V>[];
zip<K>(x: K[]): <V>(y: V[]) => KeyValuePair<K, V>[];
```

</details>

<details>

<summary><strong>R.zip</strong> source</summary>

```javascript
export function zip(left, right) {
  if (arguments.length === 1) return _right => zip(left, _right)

  const result = []
  const length = Math.min(left.length, right.length)

  for (let i = 0; i < length; i++) {
    result[i] = [left[i], right[i]]
  }

  return result
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {zip} from './zip'

const array1 = [1, 2, 3]
const array2 = ['A', 'B', 'C']

test('should return an array', () => {
  const actual = zip(array1)(array2)
  expect(actual).toBeInstanceOf(Array)
})

test('should return and array or tuples', () => {
  const expected = [
    [1, 'A'],
    [2, 'B'],
    [3, 'C'],
  ]
  const actual = zip(array1, array2)
  expect(actual).toEqual(expected)
})

test('should truncate result to length of shorted input list', () => {
  const expectedA = [
    [1, 'A'],
    [2, 'B'],
  ]
  const actualA = zip([1, 2], array2)
  expect(actualA).toEqual(expectedA)

  const expectedB = [
    [1, 'A'],
    [2, 'B'],
  ]
  const actualB = zip(array1, ['A', 'B'])
  expect(actualB).toEqual(expectedB)
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {zip} from 'rambda'

describe('R.zip', () => {
  it('happy', () => {
    const array1 = [1, 2, 3]
    const array2 = ['A', 'B', 'C']

    const result = zip(array1)(array2)
    result // $ExpectType KeyValuePair<number, string>[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zip)

### zipObj

```typescript

zipObj<T, K extends string>(keys: K[], values: T[]): { [P in K]: T }
```

It will return a new object with keys of `keys` array and values of `values` array.

```javascript
const keys = ['a', 'b', 'c']

R.zipObj(keys, [1, 2, 3])
// => {a: 1, b: 2, c: 3}

// truncates to shortest list
R.zipObj(keys, [1, 2])
// => {a: 1, b: 2}
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20keys%20%3D%20%5B'a'%2C%20'b'%2C%20'c'%5D%0A%0AR.zipObj(keys%2C%20%5B1%2C%202%2C%203%5D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%2C%20c%3A%203%7D%0A%0A%2F%2F%20truncates%20to%20shortest%20list%0Aconst%20result%20%3D%20R.zipObj(keys%2C%20%5B1%2C%202%5D)%0A%2F%2F%20%3D%3E%20%7Ba%3A%201%2C%20b%3A%202%7D">Try this <strong>R.zipObj</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
zipObj<T, K extends string>(keys: K[], values: T[]): { [P in K]: T };
zipObj<K extends string>(keys: K[]): <T>(values: T[]) => { [P in K]: T };
zipObj<T, K extends number>(keys: K[], values: T[]): { [P in K]: T };
zipObj<K extends number>(keys: K[]): <T>(values: T[]) => { [P in K]: T };
```

</details>

<details>

<summary><strong>R.zipObj</strong> source</summary>

```javascript
import {take} from './take'

export function zipObj(keys, values) {
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder)

  return take(values.length, keys).reduce((prev, xInstance, i) => {
    prev[xInstance] = values[i]

    return prev
  }, {})
}
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {equals} from './equals'
import {zipObj} from './zipObj'

test('zipObj', () => {
  expect(zipObj(['a', 'b', 'c'], [1, 2, 3])).toEqual({
    a: 1,
    b: 2,
    c: 3,
  })
})

test('0', () => {
  expect(zipObj(['a', 'b'])([1, 2, 3])).toEqual({
    a: 1,
    b: 2,
  })
})

test('1', () => {
  expect(zipObj(['a', 'b', 'c'])([1, 2])).toEqual({
    a: 1,
    b: 2,
  })
})

test('ignore extra keys', () => {
  const result = zipObj(['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3])
  const expected = {
    a: 1,
    b: 2,
    c: 3,
  }

  expect(equals(result, expected)).toBeTrue()
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {zipObj} from 'rambda'

describe('R.zipObj', () => {
  it('happy', () => {
    // this is wrong since 24.10.2020 `@types/ramda` changes
    const result = zipObj(['a', 'b', 'c', 'd'], [1, 2, 3])
    result // $ExpectType { b: number; a: number; c: number; d: number; }
  })
  it('imported from @types/ramda', () => {
    const result = zipObj(['a', 'b', 'c'], [1, 2, 3])
    const curriedResult = zipObj(['a', 'b', 'c'])([1, 2, 3])
    result // $ExpectType { b: number; a: number; c: number; }
    curriedResult // $ExpectType { b: number; a: number; c: number; }
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zipObj)

### zipWith

```typescript

zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[], list2: U[]): TResult[]
```

```javascript
const list1 = [ 10, 20, 30, 40 ]
const list2 = [ 100, 200 ]

const result = R.zipWith(
  R.add, list1, list2
)
// => [110, 220]
```

<a title="redirect to Rambda Repl site" href="https://rambda.now.sh?const%20list1%20%3D%20%5B%2010%2C%2020%2C%2030%2C%2040%20%5D%0Aconst%20list2%20%3D%20%5B%20100%2C%20200%20%5D%0A%0Aconst%20result%20%3D%20R.zipWith(%0A%20%20R.add%2C%20list1%2C%20list2%0A)%0A%2F%2F%20%3D%3E%20%5B110%2C%20220%5D">Try this <strong>R.zipWith</strong> example in Rambda REPL</a>

<details>

<summary>All Typescript definitions</summary>

```typescript
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[], list2: U[]): TResult[];
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult, list1: T[]): (list2: U[]) => TResult[];
zipWith<T, U, TResult>(fn: (x: T, y: U) => TResult): (list1: T[], list2: U[]) => TResult[];
```

</details>

<details>

<summary><strong>R.zipWith</strong> source</summary>

```javascript
import {curry} from './curry'
import {take} from './take'

function zipWithFn(fn, x, y) {
  return take(x.length > y.length ? y.length : x.length, x).map(
    (xInstance, i) => fn(xInstance, y[i])
  )
}

export const zipWith = curry(zipWithFn)
```

</details>

<details>

<summary><strong>Tests</strong></summary>

```javascript
import {add} from './add'
import {zipWith} from './zipWith'

const list1 = [1, 2, 3]
const list2 = [10, 20, 30, 40]
const list3 = [100, 200]

test('when second list is shorter', () => {
  const result = zipWith(add, list1, list3)
  expect(result).toEqual([101, 202])
})

test('when second list is longer', () => {
  const result = zipWith(add, list1, list2)
  expect(result).toEqual([11, 22, 33])
})
```

</details>

<details>

<summary><strong>Typescript</strong> test</summary>

```typescript
import {zipWith} from 'rambda'

const list1 = [1, 2]
const list2 = [10, 20, 30]

describe('R.zipWith', () => {
  it('happy', () => {
    const result = zipWith(
      (x, y) => {
        x // $ExpectType number
        y // $ExpectType number
        return `${x}-${y}`
      },
      list1,
      list2
    )

    result // $ExpectType string[]
  })
  it('curried', () => {
    const result = zipWith((x, y) => {
      x // $ExpectType unknown
      y // $ExpectType unknown
      return `${x}-${y}`
    })(list1, list2)

    result // $ExpectType string[]
  })
})
```

</details>

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#zipWith)

## ❯ CHANGELOG

WIP 7.1.0

- Replace `Async` with `Promise` as return type of `R.type`.

- Add new types as Typescript output for `R.type` - "Map", "WeakMap", "Generator", "GeneratorFunction", "BigInt", "ArrayBuffer"

7.0.3

Rambda.none has wrong logic - [Issue #625](https://github.com/selfrefactor/rambda/issues/625)

7.0.2

Rambda doesn't work with `pnpm` due to wrong export configuration - [Issue #619](https://github.com/selfrefactor/rambda/issues/619)

7.0.1

- Wrong ESM export configuration in `package.json` - [Issue #614](https://github.com/selfrefactor/rambda/issues/614)

7.0.0

- Braking change - sync `R.compose`/`R.pipe` with `@types/ramda`. That is significant change so as safeguard, it will lead a major bump. Important - this lead to raising required Typescript version to `4.2.2`. In other words, to use `Rambda` you'll need Typescript version `4.2.2` or newer.

Related commit in `@types/ramda` - https://github.com/DefinitelyTyped/DefinitelyTyped/commit/286eff4f76d41eb8f091e7437eabd8a60d97fc1f#diff-4f74803fa83a81e47cb17a7d8a4e46a7e451f4d9e5ce2f1bd7a70a72d91f4bc1

There are several other changes in `@types/ramda` as stated in [this comment](https://github.com/ramda/ramda/issues/2976#issuecomment-990408945). This leads to change of typings for the following methods in **Rambda**:

-- R.unless

-- R.toString

-- R.ifElse

-- R.always

-- R.complement

-- R.cond

-- R.is

-- R.sortBy

-- R.dissoc

-- R.toPairs

-- R.assoc

-- R.toLower

-- R.toUpper

- One more reason for the braking change is changing of export declarations in `package.json` based on [this blog post](https://devblogs.microsoft.com/typescript/announcing-typescript-4-5-beta/#packagejson-exports-imports-and-self-referencing) and [this merged Ramda's PR](https://github.com/ramda/ramda/pull/2999). This also led to renaming of `babel.config.js` to `babel.config.cjs`. 

- Add `R.apply`, `R.bind` and `R.unapply`

- `R.startsWith/R.endsWith` now support lists as inputs. This way, it matches current Ramda behavior. 

- Remove unused typing for `R.chain`.

- `R.map`/`R.filter` no longer accept bad inputs as iterable. This way, Rambda behaves more like Ramda, which also throws.

- Make `R.lastIndexOf` follow the logic of `R.indexOf`.

- Change `R.type` logic to Ramda logic. This way, `R.type` can return `Error` and `Set` as results.

- Add missing logic in `R.equals` to compare sets - [Issue #599](https://github.com/selfrefactor/rambda/issues/599)

- Improve list cloning - [Issue #595](https://github.com/selfrefactor/rambda/issues/595)

- Handle multiple inputs with `R.allPass` and `R.anyPass` - [Issue #604](https://github.com/selfrefactor/rambda/issues/604)

- Fix `R.length` wrong logic with inputs as `{length: 123}` - [Issue #606](https://github.com/selfrefactor/rambda/issues/606).

- Improve non-curry typings of `R.merge` by using types from [mobily/ts-belt](https://github.com/mobily/ts-belt).

- Improve performance of `R.uniqWith`.

- Wrong `R.update` if index is `-1` - [PR #593](https://github.com/selfrefactor/rambda/pull/593)

- Make `R.eqProps` safe for falsy inputs - based on [this opened Ramda PR](https://github.com/ramda/ramda/pull/2943).

- Incorrect benchmarks for `R.pipe/R.compose` - [Issue #608](https://github.com/selfrefactor/rambda/issues/608)

- Fix `R.last/R.head` typings - [Issue #609](https://github.com/selfrefactor/rambda/issues/609) 

6.9.0

- Fix slow `R.uniq` methods - [Issue #581](https://github.com/selfrefactor/rambda/issues/581)

Fixing `R.uniq` was done by improving `R.indexOf` which has performance implication to all methods importing `R.indexOf`:

- R.includes
- R.intersection
- R.difference
- R.excludes
- R.symmetricDifference
- R.union

- R.without no longer support the following case - `without('0:1', ['0', '0:1']) // => ['0']`. Now it throws as the first argument should be a list, not a string. Ramda, on the other hand, returns an empty list - https://github.com/ramda/ramda/issues/3086. 

6.8.3

- Fix Typescript build process with `rambda/immutable` - [Issue #572](https://github.com/selfrefactor/rambda/issues/572)

- Add `R.objOf` method

- Add `R.mapObjIndexed` method

- Publish shorter README.md version to NPM

6.8.0

- `R.has` use `Object.prototype.hasOwnProperty`- [Issue #572](https://github.com/selfrefactor/rambda/issues/572)

- Expose `immutable.ts` typings which are Rambda typings with `readonly` statements - [Issue #565](https://github.com/selfrefactor/rambda/issues/565)

- Fix `R.intersection` wrong order compared to Ramda.

- `R.path` wrong return of `null` instead of `undefined` when path value is `null` - [PR #577](https://github.com/selfrefactor/rambda/pull/577)

6.7.0

- Remove `ts-toolbelt` types from Typescript definitions. Most affected are the following methods, which lose one of its curried definitions:

1. R.maxBy
2. R.minBy
3. R.pathEq
4. R.viewOr
5. R.when
6. R.merge
7. R.mergeDeepRight
8. R.mergeLeft

6.6.0

- Change `R.piped` typings to mimic that of `R.pipe`. Main difference is that `R.pipe` is focused on unary functions.

- Fix wrong logic when `R.without` use `R.includes` while it should use array version of `R.includes`.

- Use uglify plugin for UMD bundle.

- Remove `dist` folder from `.gitignore` in order to fix `Deno` broken package. [Issue #570](https://github.com/selfrefactor/rambda/issues/570)

- Improve `R.fromPairs` typings - [Issue #567](https://github.com/selfrefactor/rambda/issues/567)

6.5.3

- Wrong logic where `R.without` use `R.includes` while it should use the array version of `R.includes`

This is Ramda bug, that Rambda also has before this release - https://github.com/ramda/ramda/issues/3086

6.5.2

- Wrong `R.defaultTo` typings - changes introduced in v6.5.0 are missing their TS equivalent.

- Update dependencies

6.5.1

Fix wrong versions in changelog

6.5.0

- `R.defaultTo` no longer accepts infinite inputs, thus it follows Ramda implementation.

- `R.equals` supports equality of functions.

- `R.pipe` doesn't use `R.compose`.

- Close [Issue #561](https://github.com/selfrefactor/rambda/issues/561) - export several internal TS interfaces and types

- Close [Issue #559](https://github.com/selfrefactor/rambda/issues/559) - improve `R.propOr` typings

- Add `CHANGELOG.md` file in release files list

6.4.0

- Close [Issue #560](https://github.com/selfrefactor/rambda/issues/560) - apply immutable lint to Typescript definitions

- Close [Issue #553](https://github.com/selfrefactor/rambda/issues/553) - fix problem with curried typings of `R.prop`

- Fix wrong `R.last` typing

- Upgrade all `rollup` related dependencies

- `R.type` supports `Symbol` just like *Ramda*.

- Remove file extension in `main` property in `package.json` in order to allow `experimental-modules`. See also this Ramda's PR - https://github.com/ramda/ramda/pull/2678/files

- Import `R.indexBy`/`R.when`/`R.zipObj`/`R.propEq`/`R.complement` changes from recent `@types/ramda` release.

- `R.tryCatch` stop supporting asynchronous functions; the previous behaviour is exported to *Rambdax* as `R.tryCatchAsync`

6.3.1

- Fix missing `Evolved` declaration in Typescript definition

6.3.0

- Add `R.takeLastWhile`

- Add `R.dropWhile`

- Add `R.eqProps`

- Add `R.dropLastWhile`

- Add `R.dropRepeats`

- Add `R.dropRepeatsWith`

- Add `R.evolve`

- Add typings for `R.takeWhile` when iterable is a string

6.2.0

- Add `R.props`

- Add `R.zipWith`

- Add `R.splitAt`

- Add `R.splitWhen`

- Close [Issue #547](https://github.com/selfrefactor/rambda/issues/547) - restore `readonly` declaration in Typescript definitions.

- `R.append`/`R.prepend` now work only with arrays just like Ramda. Previous behaviour was for them to work with both arrays and strings.

- Sync `R.pluck` typings with `@types/ramda` as there was a tiny difference.

6.1.0

- Fix `R.and` wrong definition, because the function doesn't convert the result to boolean. This introduce another difference with `@types/ramda`.

- Add `R.once`

- Add `R.or`

6.0.1

- Fix typing of `R.reject` as it wrongly declares that with object, it pass property to predicate.

6.0.0

- Breaking change - `R.map`/`R.filter`/`R.reject`/`R.forEach`/`R.partition` doesn't pass index as second argument to the predicate, when looping over arrays. The old behaviour of *map*, *filter* and *forEach* can be found in Rambdax methods *R.mapIndexed*, *R.filterIndexed* and *R.forEachIndexed*.

- Breaking change - `R.all`/`R.none`/`R.any`/`R.find`/`R.findLast`/`R.findIndex`/`R.findLastIndex` doesn't pass index as second argument to the predicate.

- Change `R.assocPath` typings so the user can explicitly sets type of the new object

- Typings of `R.assoc` match its `@types/ramda` counterpart.

- Simplify `R.forEach` typings

- Remove `ReadonlyArray<T>` pattern from Typescript definitions - not enough value for the noise  it adds.

5.13.1

- Fix wrong `R.takeWhile`

5.13.0

- Add `R.takeWhile` method

- Fix `R.lensPath` issue when using string as path input. The issue was introduced when fixing [Issue #524](https://github.com/selfrefactor/rambda/issues/524) in the previous release.

5.12.1

- Close [Issue #524](https://github.com/selfrefactor/rambda/issues/524) -
 wrong `R.assocPath` when path includes numbers

- `R.includes` throws on wrong input, i.e. `R.includes(1, null)`

5.12.0

- Add `R.move` method

- Add `R.union` method

- Close [Issue #519](https://github.com/selfrefactor/rambda/issues/519) -
`ts-toolbelt` needs other type of export with `--isolatedModules` flag

- Change `R.when` implementation and typings to match those of `Ramda`

- `R.over` and `R.set` use `R.curry` instead of manual currying

- `R.lensPath` typings support string as path, i.e. `'a.b'` instead of `['a', 'b']`

- `R.equals` now supports negative zero just like `Ramda.equals`

- `R.replace` uses `R.curry`

5.11.0

Forgot to export `R.of` because of wrong marker in `files/index.d.ts`

5.10.0

Close [Issue #514](https://github.com/selfrefactor/rambda/issues/514) -
wrong `R.length` with empty string

Close [Issue #511](https://github.com/selfrefactor/rambda/issues/511) - error in `ts-toolbelt` library

Close [Issue #510](https://github.com/selfrefactor/rambda/issues/510) - `R.clamp` should throw if min argument is greater than max argument

- [PR #508](https://github.com/selfrefactor/rambda/pull/508) - add `R.of`

- Definition of `R.curry` are not same as those of `@types/ramda`

- Definitions of `R.either` is same as that of `R.both`

- Definitions of `R.ifElse` no longer use `any` type

- Definition of `R.flatten` requires passing type for the output

- Fix definition of `R.propOr`, `R.dissoc`

- Fix curried definitions of `R.take`, `R.takeLast`, `R.drop` and `R.dropLast`

- 5.9.0

- `R.pickAll` definition allows passing string as path to search.

- `R.propEq` definition is now similar to that in `@types/ramda`.

- `R.none` matches `R.all` implementation and pass index as second argument to predicate input.

- `R.reduce` - drop support for object as iterable. Now it throws the same error as Ramda. Also instead of returning the initial value when iterable is `undefined`, now it throws.

Add index as additional argument to the Typescript definitions of the following methods:

- R.all
- R.find
- R.findLast
- R.findIndex
- R.findLastIndex

- 5.8.0

Add `R.mergeAll`
Add `R.mergeDeepRight`
Add `R.mergeLeft`
Add `R.partition`
Add `R.pathEq`
Add `R.tryCatch`
Add `R.unless`
Add `R.whereEq`
Add `R.where`

- Add `R.last` typing for empty array

- 5.7.0 Revert [PR #469](https://github.com/selfrefactor/rambda/pull/469) as `R.curry` was slow | Also now `R.flip` throws if arity is greater than or equal to 5

- 5.6.3 Merge several PRs of [@farwayer](https://github.com/farwayer)

- [PR #482](https://github.com/selfrefactor/rambda/pull/482) - improve `R.forEach` performance by not using `R.map`

- [PR #485](https://github.com/selfrefactor/rambda/pull/485) - improve `R.map` performance

- [PR #482](https://github.com/selfrefactor/rambda/pull/486) - improve `R.reduce` performance

- Fix missing high arity typings for `R.compose/pipe`

- `R.merge` definitions match those of `@types/ramda`

- Remove `dist` folder from Rambda repo

- 5.6.2

Close [Issue #476](https://github.com/selfrefactor/rambda/issues/476) - typesafe `R.propEq` definitions

Approve [PR #477](https://github.com/selfrefactor/rambda/pull/477) - fix `R.groupWith` when list length is 1

- 5.6.1

Update `ts-toolbelt` files as now there is update pipeline for it.

Approve [PR #474](https://github.com/selfrefactor/rambda/pull/474) - intruduce internal `isArray` helper

- 5.6.0

Approve [PR #469](https://github.com/selfrefactor/rambda/pull/469) - R.flip supports any arity | implement `R.curry` with `R.curryN` add `R.applySpec`

- 5.5.0

Close [Issue #464](https://github.com/selfrefactor/rambda/issues/464) - `R.flip` should handle functions with arity above 2

Close [Issue #468](https://github.com/selfrefactor/rambda/issues/468) - `fs-extra` should be dev dependency as it was wrongly added as production dependency in `5.2.0`

`R.flip` typings now match `@types/ramda` typings

Add `R.hasPath` method

Add `R.mathMod` typings

- 5.4.3

Fix `R.omit` typings

- 5.4.2

Fix `R.pick` typings

> Close [Issue #460](https://github.com/selfrefactor/rambda/issues/460) - `R.paths` should be curried

- 5.4.1

> Close [Issue #458](https://github.com/selfrefactor/rambda/issues/458) - wrong `R.propIs` typing

- 5.4.0

> Close [Issue #408](https://github.com/selfrefactor/rambda/issues/408) - add `R.chain`

- 5.3.0

> Close [Issue #430](https://github.com/selfrefactor/rambda/issues/430) - add `R.when`

Also restore `R.converge`, `R.findLast`, `R.findLastIndex` and `R.curryN` as I have forgotten to export them when releasing `5.2.0`.

- 5.2.1

Fix Typescript comment for every method

- 5.2.0

Release new documentation site

`Ramda` repo now holds all `Rambdax` methods and tests

- 5.1.1

Add `R.converge` and `R.curryN` from [PR #412](https://github.com/selfrefactor/rambda/pull/412)

Close [Issue #410](https://github.com/selfrefactor/rambda/issues/410) - wrong implementation of `R.groupWith`

Close [Issue #411](https://github.com/selfrefactor/rambda/issues/411) - change the order of declared `R.map` typings rules

- 5.0.0

Move `R.partialCurry` to Rambdax(reason for major bump).

Use new type of export in Typescript definitions.

Approve [PR #381](https://github.com/selfrefactor/rambda/pull/381) - add `R.applySpec`

- 4.6.0

Approve [PR #375](https://github.com/selfrefactor/rambda/pull/375) - add lenses(Thank you [@synthet1c](https://github.com/synthet1c))

Add `R.lens`

Add `R.lensIndex`

Add `R.lensPath`

Add `R.lensProp`

Add `R.over`

Add `R.set`

Add `R.view`

> Sync with Ramda 0.27

Add `R.paths`

Add `R.xor`

> Close [Issue #373](https://github.com/selfrefactor/rambda/issues/373)

Add `R.cond`

- 4.5.0 Add `R.clamp`

- 4.4.2 Improve `R.propOr` typings

- 4.4.1 Make `R.reject` has the same typing as `R.filter`

- 4.4.0 Several changes:

Close [Issue #317](https://github.com/selfrefactor/rambda/issues/317) - add `R.transpose`

Close [Issue #325](https://github.com/selfrefactor/rambda/issues/325) - `R.filter` should return equal values for bad inputs `null` and `undefined`

Approve suggestion for `R.indexBy` to accept string not only function as first argument.

Edit of `R.path` typings

- 4.2.0 Approve [PR #314](https://github.com/selfrefactor/rambda/pull/314) - add `R.and`

- 4.1.1 Add missing typings for `R.slice`

- 4.1.0 Add `R.findLast` and `R.findLastIndex`

- 4.0.2 Fix `R.isEmpty` wrong behaviour compared to the Ramda method

- 4.0.1 Approve [PR #289](https://github.com/selfrefactor/rambda/pull/289) - remove console.log in `R.values` method

- 4.0.0 Multiple breaking changes as Rambda methods are changed in order to increase the similarity between with Ramda

Add to `Differences`:

```text
R.type can return 'NaN'

R.compose doesn't pass `this` context

R.clone doesn't work with number, booleans and strings as input
```

All breaking changes:

-- R.add works only with numbers

-- Fix R.adjust which had wrong order of arguments

-- R.adjust works when index is out of bounds

-- R.complement support function with multiple arguments

-- R.compose/pipe throws when called with no argument

-- R.clone works with `Date` value as input

-- R.drop/dropLast/take/takeLast always return new copy of the list/string

-- R.take/takeLast return original list/string with negative index

-- R.equals handles `NaN` and `RegExp` types

-- R.type/R.equals supports `new Boolean/new Number/new Date/new String` expressions

-- R.has works with non-object

-- R.ifElse pass all arguments

-- R.length works with bad input

-- R.propEq work with bad input for object argument

-- R.range work with bad inputs

-- R.times work with bad inputs

-- R.reverse works with strings

-- R.splitEvery throws on non-positive integer index

-- R.test throws just like Ramda when first argument is not regex

-- R.values works with bad inputs

-- R.zipObj ignores extra keys

- 3.3.0

This is pre `4.0.0` release and it contains all of the above changes

Close [issue #287](https://github.com/selfrefactor/rambda/issues/287) - `ts-toolbelt` directory was changed but not reflected in `files` property in `package.json`

- 3.2.5

Close [issue #273](https://github.com/selfrefactor/rambda/issues/273) - ts-toolbelt needs other type of export when `isolatedModules` TypeScript property

Close [issue #245](https://github.com/selfrefactor/rambda/issues/245) - complete typings tests for methods that have more specific Typescript definitions

- 3.2.1 Fast fix for [issue #273](https://github.com/selfrefactor/rambda/issues/273) - messed up typings

- 3.2.0 There are several changes:

Close [issue #263](https://github.com/selfrefactor/rambda/issues/263) - broken curry typing solved by `ts-toolbelt` local dependency.

Add `R.partialCurry` typings.

Approve [PR #266](https://github.com/selfrefactor/rambda/pull/266) that adds `R.slice` method.

- 3.1.0 This might be breaking change for Typescript users, as very different definitions are introduced. With the previous state of the definitions, it was not possible to pass `dtslint` typings tests.

- `R.either` and `R.both` supports multiple arguments as they should.

- Several methods added by  [@squidfunk](https://github.com/squidfunk) - `R.assocPath`, `R.symmetricDifference`, `R.intersperse`, `R.intersection` and `R.difference`

- 3.0.1 Close [issue #234](https://github.com/selfrefactor/rambda/issues/234) - wrong curry typing

- 3.0.0 Deprecate `R.contains`, while `R.includes` is now following Ramda API(it uses `R.equals` for comparision)

- 2.14.5 `R.without` needs currying

- 2.14.4 Close [issue #227](https://github.com/selfrefactor/rambda/issues/227) - add index as third argument of `R.reduce` typings

- 2.14.2 Use `R.curry` with `R.reduce` as manual curry there didn't work as expected.

- 2.14.1 Fix wrong typescript with `R.head` - [PR #228](https://github.com/selfrefactor/rambda/pull/228) pushed by [@tonivj5](https://github.com/tonivj5)

- 2.14.0 Add `R.groupWith` by @selfrefactor | Add `R.propOr`, `R.mathMod`, `R.mean`, `R.median`, `R.negate`, `R.product` by [@ku8ar](https://github.com/ku8ar)

- 2.13.0 Add `R.identical` - [PR #217](https://github.com/selfrefactor/rambda/pull/217) pushed by [@ku8ar](https://github.com/ku8ar)

- 2.12.0 Add `R.propIs` - [PR #213](https://github.com/selfrefactor/rambda/pull/213) and add `R.sum` - [issue #207](https://github.com/selfrefactor/rambda/issues/207)

- 2.11.2 Close Rambdax [issue #32](https://github.com/selfrefactor/rambdax/issues/32) - wrong `R.type` when function is input

- 2.11.1 Approve [PR #182](https://github.com/selfrefactor/rambda/pull/182) - Changed typings to allow object as input to `R.forEach` and `R.map`

- 2.11.0 Approve [PR #179](https://github.com/selfrefactor/rambda/pull/179) - `R.adjust` handles negative index; `R.all` doesn't need `R.filter`

- 2.10.2 Close [issue #175](https://github.com/selfrefactor/rambda/issues/175) - missing typescript file

- 2.10.0 Approve huge and important [PR #171](https://github.com/selfrefactor/rambda/pull/171) submitted by [@helmuthdu](https://github.com/helmuthdu) - Add comments to each method, improve Typescript support

- 2.9.0 `R.toPairs` and `R.fromPairs`

- 2.8.0 Approve [PR #165](https://github.com/selfrefactor/rambda/pull/165) `R.clone`

- 2.7.1 expose `src` | Discussed at [issue #147](https://github.com/selfrefactor/rambda/issues/147)

- 2.7.0 Approve [PR #161](https://github.com/selfrefactor/rambda/pull/161) `R.isEmpty`

- 2.6.0 `R.map`, `R.filter` and `R.forEach` pass original object to iterator as third argument | Discussed at [issue #147](https://github.com/selfrefactor/rambda/issues/147)

- 2.5.0 Close [issue #149](https://github.com/selfrefactor/rambda/issues/149) Add `R.partial` | `R.type` handles `NaN`

- 2.4.0 Major bump of `Rollup`; Stop building for ES5

- 2.3.1 Close [issue #90](https://github.com/selfrefactor/rambda/issues/90) | Add string type of path in `R.pathOr`

- 2.3.0 Close [issue #89](https://github.com/selfrefactor/rambda/issues/89) | Fix missing `Number` TS definition in `R.type`

- 2.2.0 `R.defaultTo` accepts indefinite number of input arguments. So the following is valid expression: `const x = defaultTo('foo',null, null, 'bar')`

- 2.1.0 Restore `R.zip` using [WatermelonDB](https://github.com/Nozbe/WatermelonDB/) implementation.

- 2.0.0 Major version caused by removing of `R.zip` and `R.addIndex`. [Issue #85](https://github.com/selfrefactor/rambda/issues/85) rightfully finds that the implementation of `R.addIndex` is not correct. This led to removing this method and also of `R.zip` as it had depended on it. The second change is that `R.map`, `R.filter` are passing array index as second argument when looping over arrays. The third change is that `R.includes` will return `false` if input is neigher `string` nor `array`. The previous behaviour was to throw an error. The last change is to increase the number of methods that are passing index as second argument to the predicate function.

- 1.2.6 Use `src` folder instead of `modules`
- 1.2.5 Fix `omit` typing
- 1.2.4 Add missing Typescript definitions - [PR#82](https://github.com/selfrefactor/rambda/pull/82)
- 1.2.2 Change curry method used across most of library methods
- 1.2.1 Add `R.assoc` | fix passing `undefined` to `R.map` and `R.merge` [issue #77](https://github.com/selfrefactor/rambda/issues/77)
- 1.2.0 Add `R.min`, `R.minBy`, `R.max`, `R.maxBy`, `R.nth` and `R.keys`
- 1.1.5 Close [issue #74](https://github.com/selfrefactor/rambda/issues/74) `R.zipObj`
- 1.1.4 Close [issue #71](https://github.com/selfrefactor/rambda/issues/71) CRA fail to build `rambda`
- 1.1.3 Approve [PR #70](https://github.com/selfrefactor/rambda/pull/67) implement `R.groupBy` | Close [issue #69](https://github.com/selfrefactor/rambda/issues/69)
- 1.1.2 Approve [PR #67](https://github.com/selfrefactor/rambda/pull/67) use `babel-plugin-annotate-pure-calls`
- 1.1.1 Approve [PR #66](https://github.com/selfrefactor/rambda/pull/66) `R.zip`
- 1.1.0 `R.compose` accepts more than one input argument [issue #65](https://github.com/selfrefactor/rambda/issues/65)
- 1.0.13 Approve [PR #64](https://github.com/selfrefactor/rambda/pull/64) `R.indexOf`
- 1.0.12 Close [issue #61](https://github.com/selfrefactor/rambda/issues/61) make all functions modules
- 1.0.11 Close [issue #60](https://github.com/selfrefactor/rambda/issues/60) problem with babelrc
- 1.0.10 Close [issue #59](https://github.com/selfrefactor/rambda/issues/59) add R.dissoc
- 1.0.9 Close [issue #58](https://github.com/selfrefactor/rambda/issues/58) - Incorrect `R.equals`
- 1.0.8 `R.map` and `R.filter` pass object properties when mapping over objects
- 1.0.7 Add `R.uniqWith`
- 1.0.6 Close [issue #52](https://github.com/selfrefactor/rambda/issues/52) - ES5 compatible code
- 1.0.5 Close [issue #51](https://github.com/selfrefactor/rambda/issues/51)
- 1.0.4 Close [issue #50](https://github.com/selfrefactor/rambda/issues/50) - add `R.pipe` typings
- 1.0.3 `R.ifElse` accept also boolean as condition argument
- 1.0.2 Remove `typedDefaultTo` and `typedPathOr` | Add `R.pickAll` and `R.none`
- 1.0.0 Major change as build is now ES6 not ES5 compatible (Related to [issue #46](https://github.com/selfrefactor/rambda/issues/46))| Making `Rambda` fully tree-shakeable| Edit Typescript definition
- 0.9.8 Revert to ES5 compatible build - [issue #46](https://github.com/selfrefactor/rambda/issues/46)
- 0.9.7 Refactor for `Rollup` tree-shake | Remove `R.padEnd` and `R.padStart`
- 0.9.6 Close [issue #44](https://github.com/selfrefactor/rambda/issues/44) - `R.reverse` mutates the array
- 0.9.5 Close [issue #45](https://github.com/selfrefactor/rambda/issues/45) - invalid Typescript typings
- 0.9.4 Add `R.reject` and `R.without` ([PR#41](https://github.com/selfrefactor/rambda/pull/41) [PR#42](https://github.com/selfrefactor/rambda/pull/42)) | Remove 'browser' field in `package.json` due to Webpack bug [4674](https://github.com/webpack/webpack/issues/4674)
- 0.9.3 Add `R.forEach` and `R.times`
- 0.9.2 Add `Typescript` definitions
- 0.9.1 Close [issue #36](https://github.com/selfrefactor/rambda/issues/36) - move current behaviour of `defaultTo` to a new method `typedDefaultTo`; make `defaultTo` follow Ramda spec; add `pathOr`; add `typedPathOr`.
- 0.9.0 Add `R.pipe` [PR#35](https://github.com/selfrefactor/rambda/pull/35)
- 0.8.9 Add `R.isNil`
- 0.8.8 Migrate to ES modules [PR33](https://github.com/selfrefactor/rambda/pull/33) | Add R.flip to the API | R.map/filter works with objects
- 0.8.7 Change `Webpack` with `Rollup` - [PR29](https://github.com/selfrefactor/rambda/pull/29)
- 0.8.6 Add `R.tap` and `R.identity`
- 0.8.5 Add `R.all`, `R.allPass`, `R.both`, `R.either` and `R.complement`
- 0.8.4 Learning to run `yarn test` before `yarn publish` the hard way
- 0.8.3 Add `R.always`, `R.T` and `R.F`
- 0.8.2 Add `concat`, `padStart`, `padEnd`, `lastIndexOf`, `toString`, `reverse`, `endsWith` and `startsWith` methods
- 0.8.1 Add `R.ifElse`
- 0.8.0 Add `R.not`, `R.includes` | Take string as condition for `R.pick` and `R.omit`
- 0.7.6 Fix incorrect implementation of `R.values`
- 0.7.5 Fix incorrect implementation of `R.omit`
- 0.7.4 [issue #13](https://github.com/selfrefactor/rambda/issues/13) - Fix `R.curry`, which used to return incorrectly `function` when called with more arguments
- 0.7.3 Close [issue #9](https://github.com/selfrefactor/rambda/issues/9) - Compile to `es2015`; Approve [PR #10](https://github.com/selfrefactor/rambda/pull/10) - add `R.addIndex` to the API
- 0.7.2 Add `Promise` support for `R.type`
- 0.7.1 Close [issue #7](https://github.com/selfrefactor/rambda/issues/7) - add `R.reduce` to the API
- 0.7.0 Close [issue #5](https://github.com/selfrefactor/rambda/issues/5) - change name of `curry` to `partialCurry`; add new method `curry`, which works just like Ramda's `curry`
- 0.6.2 Add separate documentation site via `docsify`

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-changelog)

## ❯ Additional info

> Most influential contributors

- [@farwayer](https://github.com/farwayer) - improving performance in R.find, R.filter; give the idea how to make benchmarks more reliable;

- [@thejohnfreeman](https://github.com/thejohnfreeman) - add R.assoc, R.chain;

- [@helmuthdu](https://github.com/helmuthdu) - add R.clone; help improve code style;

- [@jpgorman](https://github.com/jpgorman) - add R.zip, R.reject, R.without, R.addIndex;

- [@ku8ar](https://github.com/ku8ar) - add R.slice, R.propOr, R.identical, R.propIs and several math related methods; introduce the idea to display missing Ramda methods;

- [@romgrk](https://github.com/romgrk) - add R.groupBy, R.indexBy, R.findLast, R.findLastIndex;

- [@squidfunk](https://github.com/squidfunk) - add R.assocPath, R.symmetricDifference, R.difference, R.intersperse;

- [@synthet1c](https://github.com/synthet1c) - add all lenses methods; add R.applySpec, R.converge;

- [@vlad-zhukov](https://github.com/vlad-zhukov) - help with configuring Rollup, Babel; change export file to use ES module exports;

> Rambda references

- [Interview with Dejan Totef at SurviveJS blog](https://survivejs.com/blog/rambda-interview/)

- [Awesome functional Javascript programming libraries](https://github.com/stoeffel/awesome-fp-js#libraries)

> Links to Rambda

- [https://mailchi.mp/webtoolsweekly/web-tools-280](Web Tools Weekly)

- [https://github.com/stoeffel/awesome-fp-js](awesome-fp-js)

- [https://github.com/docsifyjs/awesome-docsify](awesome-docsify)

> Deprecated from `Used by` section

- [SAP's Cloud SDK](https://github.com/SAP/cloud-sdk) - This repo doesn't uses `Rambda` since *October/2020* [commit that removes Rambda](https://github.com/SAP/cloud-sdk/commit/b29b4f915c4e4e9c2441e7b6b67cf83dac1fdac3)

> Releases

[Rambda's releases](https://github.com/selfrefactor/rambda/releases) before **6.4.0** were used mostly for testing purposes.

[![---------------](https://raw.githubusercontent.com/selfrefactor/rambda/master/files/separator.png)](#-additional-info)

## My other libraries

<table>
    <tbody>
        <tr valign="top">
            <td width="20%" align="center">
                <h4>Niketa theme</h4>
                <a href="https://marketplace.visualstudio.com/items?itemName=selfrefactor.Niketa-theme">Collection of 9 light VSCode themes</a>
            </td>
            <td width="20%" align="center">
                <h4>Niketa dark theme</h4>
                <a href="https://marketplace.visualstudio.com/items?itemName=selfrefactor.niketa-dark-theme">Collection of 9 dark VSCode themes</a>
            </td>
            <td width="20%" align="center">
                <h4>String-fn</h4>
                <a href="https://github.com/selfrefactor/services/tree/master/packages/string-fn">String utility library</a>
            </td>
            <td width="20%" align="center">
                <h4>Useful Javascript libraries</h4>
                <a href="https://github.com/selfrefactor/useful-javascript-libraries">Large collection of JavaScript,Typescript and Angular related repos links</a>
            </td>
            <td width="20%" align="center">
                <h4>Run-fn</h4>
                <a href="https://github.com/selfrefactor/services/tree/master/packages/run-fn">CLI commands for lint JS/TS files, commit git changes and upgrade of dependencies</a>
            </td>
        </tr>
    </tbody>
</table>