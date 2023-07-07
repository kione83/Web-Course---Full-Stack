# Week 1 Day 2 Lecture

HTML document elements 
Nesting and clean code
CSS basics
Box Model
2 Practices


### DOCTYPE
The `<!DOCTYPE html>` declaration defines that this document is an HTML5 document

- DESCRIPTION: The document type declaration, tells the browser that this file is written in latest version of HTML – HTML5
- BEST PRACTICES: Must be the very first thing at the top of the HTML document

### HTML
The `<html>` element is the root element of an HTML page

- DESCRIPTION: ALL of our HTML code should go within these tags
- BEST PRACTICES: Entered directly after DOCTYPE
- NOTE: Note the opening and closing tag for `<html>`

### HEAD
The `<head>` element contains meta information about the HTML page. It's information that's used to describe the data that's contained in something like a web page, document, or file. Another way to think of metadata is as a short explanation or summary of what the data is.

- DESCRIPTION: 
  - For behind the scenes info
  - Metadata that is not displayed
  - Info used by browser, search engines
- BEST PRACTICES: 
    - Opens – after opening HTML tag
    - Closes – before opening body tag
    - Only one in each HTML file

### META CHARSET
- DESCRIPTION: 
    - Tells the browser which character set to use
    - We should always use UTF-8
- BEST PRACTICES: 
    - Required
    - Goes inside head tags


### TITLE
The `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab).

- DESCRIPTION: 
    - Tells the browser the name of site
    - Used for the tile listed in the tab inside of the browser
    - Used by the browser for bookmarks
    - Used by search engines
- BEST PRACTICES: 
    - Required
    - Goes inside of the head tags

-----> 

### BODY
The `<body>` element defines the document's body, and is a container for all the visible content, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.

- DESCRIPTION: 
  - Wraps ALL of the content for the site
  - Everything we want displayed in the browser window must be placed between body tags
- BEST PRACTICES: 
  - Required
  - Opens – after closing head tag
  - Closes – before closing HTML tag
  - Only one in each HTML file


### NESTING

```html
<body>
  <h1>Hello World!</h1>
  <h2>List of Employment</h2>
  <ul>
    <li>
      <a href="www.usmc.mil">United States Marine Corps</a>
    </li>
  </ul>
</body>

```
## Indentation

Yesterday we didn't focus on indentation, but this is a great time to cover it. If you notice in today's HTML examples, there is indented code. 

Children elements **should** be indented to allow for "code cleaniness". It assists fellow developers to easily follow along and for individuals to troubleshoot accordingly.


```html
<body>
    <div>
        <h1>Two Group</h1>
        <p>Some notes here</p>
    </div>
    <div>
        <h2>Second Group</h2>
        <span>Yes</span>
    </div>
</body>
```

## EXERCISE
 
we are going to be using the two practices from yesterday to learn a bit of CSS. Let's open practice-one.html (from yesterday) in our editor.

#### CSS syntax

    all CSS selectors use the following syntax

    selector{
        property: value;
    }

Look at an example, this will style all paragraphs on a page

p{
    font-family: sans-serif; /* changes the font style */
    color: blue;   /* changes the text color */
    font-size: 40pt;   /* changes the font size */
    background-color:gray;   /* changes the background color */
    padding:3px;  /* puts space around the content */
    margin:5px;   /* puts space between the element and its neighbors */
    width:80%;    /* changes how wide the element is */
}


#### We will discuss the following CSS selectors

        font
        font-family
        text color
        borders
        background
        height
        width
        margin
        padding

        classes and IDs
        Google fonts

{[insert box model link](https://www.w3schools.com/css/css_boxmodel.asp)}

### class and id 

using the element properties of class and id help the browser (and your JavaScript) identify 
element(s). When you have several similar elements that will get the same styling, each of them 
gets the class property. In contrast to this, when you have exactly one element of a type, you will use the id property. Here's an example:


<p class='article-paras'>...</p>
<p class='article-paras'>...</p>
<p class='article-paras' id='summary-para'>...</p>

Let's assume that you have a news article on a page, as above. All paragraphs from that article are related because they are the same article. Let's also assume that some number of readers only want to read a summary at the end, and we want to give that paragraph a slightly different style (to make it easier to find)

here's our code to do that: note** all paragraphs will get this styling, even the summary. The summary will be the only paragraph that gets the second set of styling. 

```css
.article-paras{
    font-size: 12pt;
    background-color: white;
    font: sans-serif;
}
#summary-para{
    background-color:gray;
    font-size: 14pt;
}
```
What we have done here is to give the last paragraph a different background color and enlarge the text slightly. This makes it easy for readers to pick out of a long line of scrolling. 

Lesson takeaway here is that class styles one or more elements (any number of elements), and id only styles exactly one element (id on a page is unique)

### Second Practice
 Using what you have learned to this point, create a <main> element with two section elements, each containing two article elements. Your articles should contain 3-4 paragraph elements filled with content (hint, in VSC you can type lorem*4 to generate lorem ipsum paragraph text. this will NOT work if you copy/paste the lorem above.)
 Flex the main and add borders to the sections. Each section should have a different colored background. Your paragraphs should all have the same font-family and text size. Change the color of the text.