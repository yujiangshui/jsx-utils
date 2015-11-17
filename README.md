# jsx-utils
Some utils make your react jsx code better.

# util list

## merge style

This is a useful tool for write inline styles.

Example:

```
var {ms} = require('jsx-utils');
...
<Button
  style={ms(
    styles.button,
    this.state.disabled && styles.disabled,
    this.state.hover && !this.state.disabled && styles.hover
  )}
/>
```

## multi return

This is a useful tool for return many component.

Example:

```
var {mr} = require('jsx-utils');
...
<View>
  {mr(
    true && this.state.showViewText,
    <View />,
    <Text />
  )}
</View>
```

## classnames

Look at: https://github.com/JedWatson/classnames

Example:

```
var {classnames} = require('jsx-utils');
// to do something
```

## License

MIT