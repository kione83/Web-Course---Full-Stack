CSS is how we make the internet look nice. This controls everything from colors and fonts to text-size, borders, and so much more. We are only going to teach external CSS because that is what you will see most. You should know that you can also do inline and internal CSS, using the same syntax, but we are not teaching it here. 

You may have noticed that some of our HTML elements will say class="some-name" or id="some-other-name". These are precedence markers that CSS can use to style individual elements or groups of elements that all require the same style. When we use those classes and IDs in CSS, we target them with either a period (.) or a pound (#). Let's look at some examples. 

The syntax is as follows: 

element-being-targeted{
    style-1: style;
    style-2: style;
    ...
}

/* this will target all paragraphs */

p{
    border: 1px solid blue
}

in this case, ALL paragraph elements on the page will have a 1 pixel border that is solid and blue. Easy-squeezy. 

article > p {
    ...
}

this case would only style paragraphs that are nested INSIDE of an article element

nav{

color:blue;
background:red;
margin: 5px;

}

In this case, the nav elements would all have blue text, red backgrounds, and be separated from everything around it by 5 pixels.

