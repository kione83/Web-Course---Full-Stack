# Week 2 Day 2 Lecture

## Today's Objectives
Further explanation of flex
- justify
- align
- flex wrap
- flex direction
- flex flow
    
   
    



### justify-content

This defines the alignment along the **main axis**. It helps distribute extra free space leftover when either all of the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line and would otherwise render outside of the parent element they are contained by.

The CSS `justify-content` property defines how the browser distributes space between and around content items along the **main-axis** of a flex container, and the inline axis of a grid container.

    /* Positional alignment */
    justify-content: center;     /* Pack items around the center */
    justify-content: start;      /* Pack items from the start */
    justify-content: end;        /* Pack items from the end */
    justify-content: flex-start; /* Pack flex items from the start */
    justify-content: flex-end;   /* Pack flex items from the end */
    justify-content: left;       /* Pack items from the left */
    justify-content: right;      /* Pack items from the right */

- center: items are centered along the line.
- start: items are packed toward the start of the writing-mode direction.
- end: items are packed toward the end of the writing-mode direction.
- flex-start (default): items are packed toward the start of the flex-direction.
- flex-end: items are packed toward the end of the flex-direction.
- left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
- right: items are packed toward right edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.
  
- space-between: items are evenly distributed in the line; first item is on the start line, last item on the end line.
- space-around: items are evenly distributed in the line with equal space around them. Note that visually the spaces aren’t equal, since all the items have equal space on both sides. The first item will have one unit of space against the container edge, but two units of space between the next item because that next item has its own spacing that applies.
- space-evenly: items are distributed so that the spacing between any two items (and the space to the edges) is equal.

## PRACTICE
https://flexboxfroggy.com/ LEVEL 1 - 4


### align-items

This defines the default behavior for how flex items are laid out along the **cross axis** on the current line. Think of it as the `justify-content` version for the cross-axis (perpendicular to the main-axis).

The CSS `align-items` property sets the `align-self` value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

    /* Basic keywords */
    align-items: normal;
    align-items: stretch;

    /* Positional alignment */
    /* align-items does not take left and right values */
    align-items: center; /* Pack items around the center */
    align-items: start; /* Pack items from the start */
    align-items: end; /* Pack items from the end */
    align-items: flex-start; /* Pack flex items from the start */
    align-items: flex-end; /* Pack flex items from the end */


- stretch (default): stretch to fill the container (still respect min-width/max-width).
- flex-start / start: items are placed at the start of the cross axis. The difference between these is subtle, and is about respecting the flex-direction rules or the writing-mode rules.
- flex-end / end: items are placed at the end of the cross axis. The difference again is subtle and is about respecting flex-direction rules vs. writing-mode rules.
- center: items are centered in the cross-axis

### flex-wrap

The `flex-wrap` CSS property sets whether flex items are forced onto one line or wrap onto multiple lines. If wrapping is allowed, it sets the direction that the lines are stacked.

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

    flex-wrap: nowrap; /* Default value */
    flex-wrap: wrap;
    flex-wrap: wrap-reverse;

- nowrap (default): all flex items will be on one line.
- wrap: flex items will wrap onto multiple lines, from top to bottom.
- wrap-reverse: flex items will wrap onto multiple lines from bottom to top.

## Properties for the Children

So far just by applying `display: flex` on the parent, we have a lot of control of the child elements.

We can still use flex-specific properties on specific child flex elements for additional style.

NOTE: the parent element **must** be set to `display: flex`.


### flex-grow

The 'flex-grow' property defines the ability for a flex item to grow if necessary. It accepts a unitless value that serves as a proportion. It dictates what amount of the available space inside the flex container the item should take up.

If all items have `flex-grow` set to 1, the remaining space in the container will be distributed equally to all children. If one of the children has a value of 2, that child would take up twice as much of the space either one of the others (or it will try, at least).
```css
#centerPiece {
  flex-grow: 2; /* default 0 */
}
```

If a parent div has 3 children div, it would evenly split the width to 33.33% among the 3 children div. With `flex-grow`, we can change the distribution.

### flex-shrink

The `flex-shrink` property defines the ability for a flex item to shrink if necessary.

```css
.item {
  flex-shrink: 3; /* default 1 */
}
```

## EXERCISE

https://flexboxfroggy.com/
