# Week 2 Day 1 Lecture

## Review
- What are HTML tags and/or elements?
- What do they do?
- What is the purpose of CSS?
  
## Agenda for the day
- CSS selectors
- basic selectors
- advanced selectors
- keyframes and media queries
- id and class selectors

## Selectors

Selectors in CSS are what we call the code that specifically targets certain HTML elements to apply styling. As we discussed
last week, CSS selectors follow the format of: 

```css
selector{
  property:value;
}
```
a few actual examples:

```css
section{
  background-color:black;
  color:white;
  align-content:center;
  ...
}
p{
  font:sans-serif;
  font-size:large;
  border: solid 1px black;
}

```

These basic selectors are targeting elements by the same HTML name. Thus, section targets all <section> elements, and p targets all <p> elements. What what if we need to get more specific? Take a look at the code below. All of the <a> tags in 
this selection of code are nested inside of a paragraph. Likely your page has more than just these few links on it, but we want to only target these. 


```html
<p>
  <a id="current" class="navLink internal"></a>
  <a class="navLink internal"></a>
  <a class="external navLink"></a>
  <a class="navLink"></a>
  <a class="navLink" id="flash"></a>
</p>
```

if we use basic selectors like so: 

a{
  ...
}

then we are likely to target links that we don't want styled the same. We can get more specific. We do this using the > character. 

```css
p > a {

 /* note the selector that is used here. first the code says ALL paragraphs, but then it points only to the <a>
 within paragraphs. That is the power of the arrow  >  in CSS. Can we get more specific than this? You bet, let's talk about groupings 
 
 Unlike classes and ids, this type of selector targets elements based on the type of html element, not their properties*/ 

}
```

# Practice time! 
Head to the practice.html file and check out the instructions


### Keyframes

Keyframes in CSS allow for animation(s) within your code. These work like functions in programming languages 
and you can set different intervals for the different frames. 

The syntax for writing a keyframe is:
```css
@keyframe frameName {
  /* syntax for the frames*/
  0% {
    style:property;
  }
  50%{
    style:property;
  }
  ...
}
```

### Class

Classes are meant for multiple elements.

Since they can be re-used amongst other elements, elements can use multiple classes, as well.

The classes are space separate between the different class names.

`.class_name { style properties }`

In CSS, we select the class name proceeded with a period (.) ie. `.navLink`

```css
.navLink {
  margin: 2px;
}
```
You can combine this with some JavaScript to animate out your styling, and when it comes back in you can have it populated with new content. 

BEST PRACTICES

If I know that I'm going to style a group of elements using the same style, I can create that style in CSS first with the class name.

```css
.galleryCard {
  height: 100px;
  width: 100px;
  border: solid 1px black;
  border-radius: 20%;
  margin: 5px;
}
```

Then whenever I create my "gallery cards" in HTML, I can create it with the class name!

```html
<img class='galleryCard' src="#" alt="Sample card">
<img class='galleryCard' src="#" alt="Sample card 2">
<img class='galleryCard' src="#" alt="Sample card 3">
<img class='galleryCard' src="#" alt="Sample card 4">
```

This may take some time getting used to but no worries.


### ID

Ids are unique, meaning only 1 element per page can have a particular id. (you *can* use the same id on another page, but you shouldn't). 

Since ids are unique, there should be one for each element.

In the example above, we can see multple different classes for certain elements but there is only one id where applicable.

`#id_value { style properties }`

In CSS, we select the id preceeded with a pound/hashtag (#) ie. `#current`

```css
#current {
  font-size: 40px;
  color: hotpink;
}
```

## SPECIFICITY

If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

Think of specificity as a score/rank that determines which style declarations are ultimately applied to an element.

Every CSS selector has its place in the specificity hierarchy.

There are four categories which define the specificity level of a selector:

Inline styles - Example: `<h1 style="color: pink;">`  /* highest */
IDs - Example: `#navbar` /*next in line */
Classes - Example: `.test`  /*third place */ 
Elements - Example: `h1`   /* lowest priority */ 

Note: Inline style is always given the highest priority!

Note 2: There is one exception to this rule: if you use the !important rule, it will even override inline styles!

#### More Specificity Rules Examples

Equal specificity: the latest rule wins - If the same rule is written twice into the external style sheet, then the latest rule wins, hence is *cascades* from top to bottom:

```css
h1 {background-color: yellow;}
h1 {background-color: red;}
```


## Media queries
Some time between 2008 and 2015 (depending on who you ask) the bulk of internet traffic shifted from traditional desktop devices to mobile devices. As such, the need to develop with mobile browsers in mind has come to the front of the line when writing web code. 

The syntax for media queries isn't too much different than keyframes. You use the @media keyword for these instead of the @keyframes keyword. 

An example of a media query for mobile is as so: 
```css
    @media only screen and (max-width: 768px) {
  main {
    width: 100%;
    margin: 0;
  }
```
This rule states that if the device only has a screen, AND if it has a maximum width of 768 pixels, then apply the styles below.


# Practice 2

Create a simple web page with the elements below (you should be able to use your first practice code).

A <main> area with a blue background, a white text, and a border of 1px solid black.
A <h1> heading with the text "This is the main heading."
A <p> paragraph with the text "This is the main paragraph."
A <section> element with the class .special.
A <img> image with the src attribute set to image.jpg.
Use CSS to style the following elements:

The <main> area should have a width of 500px and a margin of 10px on all sides for desktop browsing.
The <main> area should have a width of 100% and no margin for mobile browsing.
The <h1> heading should have a font-size of 24px and a color of red for desktop browsing.
The <h1> heading should have a font-size of 16px and a color of black for mobile browsing.
The <p> paragraph should have a font-size of 16px and a color of black for desktop browsing.
The <p> paragraph should have a font-size of 12px and a color of gray for mobile browsing.
The <section> element with the class .special should have a background-color of green and a border of 1px solid yellow for desktop browsing.
The <section> element with the class .special should have a background-color of lightgreen and a border of 1px solid white for mobile browsing.
The <img> image should be centered in the <main> area for both desktop and mobile browsing.


