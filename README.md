# lite-merge
<div>
    <a href="https://www.npmjs.com/package/lite-merge"><img src="https://img.shields.io/npm/v/lite-merge.svg" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/lite-merge"><img src="https://img.shields.io/npm/dt/lite-merge.svg" alt="NPM downloads" /></a>
    <a href="https://www.patreon.com/fataussie"><img src="https://img.shields.io/badge/donate-patreon-F96854" alt="Patreon" /></a>
</div>

A lightweight `(624B)` deep merging handler, useful if you need to combine an object or group of objects into one single object overwriting/creating keys and values.

---
## Getting Started
Install the **npm package**
```
npm install lite-merge
```
Require it into your code.
```js
var merge = require('lite-merge');
```
Merge objects
```js
let object = { facts: { strawberry_is_berry: false } },
    target = { facts: { banana_is_berry: true } };

merge(object, target); // target = { facts: { strawberry_is_berry: false, banana_is_berry: true } }
```

---
## Merge Function
The merge function is the default module export of the package, below I have detailed some use cases of the function.

| param       | type                                        | optional | description |
| :---------- | :------------------------------------------ | :------- | :---------- |
| merging  | Object                             | false    | The objects to merge together seperated by commas.
>***Note:*** *The last provided object is the object all previous objects are merged into.. if you'd like a fresh object without overwritting all others just provide a blank object as the last parameter.*

---
## Basic Merging
This will be the most common use of the function, this merges multiple objects together setting/overwriting values.

```js
let object = { stuff: { letters: ['d', 'e', 'f'], numbers: { 4: 'four', 5: 'five', 6: 'six' }, settings: { favourite: 'e' } } },
    target = { stuff: { letters: ['a', 'b', 'c'], numbers: { 1: 'one', 2: 'two', 3: 'three' } } };

merge(object, target);
```

If you were to console log the merge function you'd be presented with something like this.

```
{ 
    stuff: { 
        letters: [ 'a', 'b', 'c', 'd', 'e', 'f' ], 
        numbers: { 
            '1': 'one',
            '2': 'two',
            '3': 'three',
            '4': 'four',
            '5': 'five',
            '6': 'six'
        } 
    },
    settings: { 
        favourite: 'e' 
    }
}
```

This is the newly retured object created, 
* The letters array has been combined,
* The numbers objects have been combined,
* and the settings object has been added along with it's keys and values.

</br>

---

### Merging Multiple Objects
The merge function lets you merge multiple objects into another without needing to call it for each object individually. To do this just put the objects you desire to merge one after the other seperating them by commas.
```js
merge(object, target, ...etc)
```

---