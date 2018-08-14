# node-type-check
A low-light package that can help you to test type and comparation on Node.JS/ CommonJS apps.

## Usage

install from npm using 

```
npm i node-type-check
```

Import using require()

```
const TypeCheck = require('node-type-check')
```

And check your Objects vs Types using a simples method

```
TypeChecker(<Object>, <Expected type>);
```

The result will be true or false

## Package coverage

    ✓ passes values of Number type 
    ✓ passes values of String type 
    ✓ passes values of Boolean type 
    ✓ fitlers value if not Number 
    ✓ fitlers value if not String 
    ✓ fitlers value if not Boolean 
    X handle objects 
    ✓ differntiates null from object 
    X handles arrays 
    X handles nested object 
    X handles arbitrarily deep object 
    X handles object spec inside of array 

## Support and bug

Please, open a issue on [GitHub](https://github.com/matheusmonte/node-type-check/issues)

## Use Samples

[Here](https://github.com/matheusmonte/sample-node-type-check)

## License

MIT

