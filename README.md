# Character limit indicators
*A simple, no overengineered bs, line width indicator for VSCode.*

This extention does nothing more than indicate visually when you are close to hitting your line limit.<br />
Fully customizable, fully extendable, fully open source and free.<br />

# Features | TODO: Add pictures and gifs

**Limit indicators**<br />
Fully customizable indicators that sits statically in your files.<br />

**Character countdown**<br />
A customizable countdown set to activate when nearing the character limit.<br />

**Want more?**<br />
Fork and create!<br />
The project is 100% open source - you can even publish your edited version!

# Planned features
- [ ] Lines or blocks that indicate when you are close to a line limit
  - [ ] Indicator color settings
  - [ ] Indicator width settings
- [ ] In-line counter that tells you how many characters you have left until your next limit
  - [ ] Offset setting for when to activate inline counter

# Settings


### Esthetics
`cli.limits.indicator.hard.style` : `"line"` or `"block"`<br/>
`cli.limits.indicator.soft.style` : `"line"` or `"block"`<br/>
Decides if the indicator should be displayed as block or line cursor style.<br/>
Line:	|<br/>
Block:	█<br/>
	

`cli.limits.indicator.hard.color` : `rgba` or `hex`<br/>
`cli.limits.indicator.soft.color` : `rgba` or `hex`<br/>
The color of the limit indicator.<br/>
rgba: rgba(209, 38, 81, 1)<br/>
hex: #d12651<br/>

### Position
`cli.limits.indicator.hard.limit` : `1 - 999`<br/>
`cli.limits.indicator.soft.limit` : `1 - 999` or `0`<br/>
The placement from origin of your limit indicator.<br/>
<= 0 Means it's not active and only works for the soft limit indicator<br />
<br/>
*English: How far to the right the limit indicator will be placed.<br/>
If the soft limit is less than or equal to 0, it will not be active.*

### Countdown
`cli.limits.countdown.color` : `rgba` or `hex`<br/>
The background color of the in-line limits countdown.<br />
rgba: rgb(255, 234, 142)<br/>
hex: #ffea8e<br/>

`cli.limits.countdown.offset` : `0 | 1 - 999`<br/>
The offset from the next limit until activation of the in-line character countdown.<br/>
Will always be active after crossing the soft limit!<br />
<= 0 Means it's not active.<br/>
<br/>
*English: Show a countdown next to your file cursor when you're close to hitting the line.<br/>
The value is how close to the line you have to be before the counter activates. If 0 it is off.*
<br/>
*Hot tip: If you want only the counter with no visual limits, just set the limits transparency to 0*

# Known Issues

None.. As of now.<br />
However, if you find any, please [SUBMIT A REPORT](https://github.com/VonRiddarn/character-limit-indicators/issues)