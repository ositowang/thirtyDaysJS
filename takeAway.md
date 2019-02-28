# 30 Days JS Challenge Take-Aways

Take Aways for this challenge set

## Day 1

1. new html element `<kbd></kbd>` for represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device.
2. new event learned 'transitionend', fired when a CSS transition has completed.
3. audio.currentTime set to zero restart the audio playing.

## Day 2

1. transform-origin will change the base point where the element rotate on;
2. transition-timing-function help us customize the animation by setting how intermediate values are calculated for CSS properties being affected by a transition effect.

## Day 3

1. The dataset property on the HTMLElement interface provides read/write access to all the custom data attributes (data-\*) set on the element.
2. The :root CSS pseudo-class matches the root element of a tree representing the document.
3. The var() CSS function can be used to insert the value of a custom property (sometimes called a "CSS variable") instead of any part of a value of another property.

## Day4

1. Pretty easy array refreshment, no take away.

## Day5

1. flex:1 is kind of shorthand for flex: 1 1 0.Let all the flexible items be the same length, regardless of its content.

## Day6

1. `change` event only triggered after the dom element lose focus(coding in react makes me feel `onChange` is triggered every time the input value changes).
2. In dangerous situation , people can do anything? Nope, I think they can not do Regular expression.Below is an example.

```javascript
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
```
