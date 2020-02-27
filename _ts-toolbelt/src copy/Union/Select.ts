import {Union} from './Union'

/**
Extract the part of **`U`** that matches **`M`**
@param U to extract from
@param M to select with
@returns [[Union]]
@example
```ts
```
*/
export type Select<U extends Union, M extends any> =
    U extends M
    ? U
    : never
