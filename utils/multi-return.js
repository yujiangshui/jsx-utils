/**
 * Multi Return (with judgment)
 *
 * Example:
 *  {mr(
 *      true && this.state.showViewText,
 *      <View />,
 *      <Text />
 *  )}
 *
 * @return {[type]}           [description]
 */
var mr = function() {
  var components = [];
  if (arguments[0]) {
    for (var i = 1; i < arguments.length; i++) {
      components.push(arguments[i]);
    }
  }
  return components;
}

module.exports = mr;