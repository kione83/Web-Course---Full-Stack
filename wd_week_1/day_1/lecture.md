# Week 1 Day 1 Lecture

## daily agenda
    Today we will discuss a small bit about HTML and we will move quickly to using some of the most common 
    HTML elements. 

### learning points 

    basic html tag description
    using basic html tags
    creating an html business card

### learning objectives
    students should be able to describe a generic html tag and its properties
    students should be able to use a few basic html elements on a blank document
    students should be able to understand how basic html object groupings are created

## What is HTML?

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content
- HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

When creating a web page, you add tags (known as markup) to the content of the page.


### The makeup (syntax) of a HTML tag

Here is an example of a basic HTML tag:

```HTML
<h1>Hello World</h1>
```

#### fingers on keyboards, the only way to get better

all HTML elements use this structure. you have an opening arrow bracket, the name of the element, and the closing arrow bracket. nearly all HTML elements also have a closing tag that is identical to the opening tag with 1 exception: the / in the tag. 

One thing I want you to note before we get rolling is that all programming/coding languages have ways to make comments in the code- notes that you can write to yourself or others that lets them know what's going on in the code. Keep that in mind as you open the next file. Now, let's start learning some semantic HTML, open the file named index.html in your browser. 

This example page shows a few elements being used properly, that is, *semantically*. Although there are easier ways to create a number of elements and insert text/images into them, it isn't proper HTML. 

Now let's do some practice, watch my screen as I show you how to create your basic business card. Move to practice.html 

elements can have attributes that gives the browser more information about it, like toppings on a pizza or options on a car
breaking down an element: 

the image element has 2 required attributes- source(src) and alternate text(alt). the source is the link to the image location on the web, the alternate text describes the image for visually impaired users. See below. 

<img src="" alt="" > <!-- creates an image element, note that it self-closes -->

Another example: 

<input type="text" >  <!-- creates an input element, note that it self-closes -->

### common html elements

These are some of the most common HTML tags, you will see them on nearly every page across the internet. All of these tags have a closing tag pair unless noted otherwise. 

Heading tags: These tags are used to denote the different levels of headings in a web page. The most important heading is the <h1> tag, and the least important is the <h6> tag

Paragraph tags: These tags are used to denote paragraphs of text. <p> </p>

List tags: These tags are used to denote lists of items. There are three types of list tags, we are only teaching two: <ul> (unordered lists), <ol> (ordered lists).  These are <ol></ol> {ordered list} <ul></ul> {unordered list} and <li></li> {list item}

Image tags: These tags are used to embed images in a web page. These are self closing and require two attributes, the source and alternate text. See the example: <img src="internet_link_here" alt="description of the image for the visually impaired">

Link tags: These tags are used to create hyperlinks. These are also called anchor tags, hence: <a></a> This tag also has requirements, namely the hyper-reference or href, and some text on the inside. See the example:
<a href="google.com"> Google</a>

Form tags: These tags are used to create forms. Forms are a bit more complicated, and they act as a container for their child elements, that is, elements that are *nested* inside of other elements (like the list elements). See the example: 

<!-- note the 3 ticks below here, they let you define the language in-line on a markup sheet like this one. the syntax is three ticks plus the name of the language (no spaces) -->

```html

<code>
    <form>

        <input type="text"> <!--Note that this tag is SELF-closing, like the image tag -->

        <!-- here are all the input types
        
                <input type="button">
                <input type="checkbox">
                <input type="color">
                <input type="date">
                <input type="datetime-local">
                <input type="email">
                <input type="file">
                <input type="hidden">
                <input type="image">
                <input type="month">
                <input type="number">
                <input type="password">
                <input type="radio">
                <input type="range">
                <input type="reset">
                <input type="search">
                <input type="submit">
                <input type="tel">
                <input type="text"> (default value)
                <input type="time">
                <input type="url">
                <input type="week">
        -->

    </form>
</code>    
```

