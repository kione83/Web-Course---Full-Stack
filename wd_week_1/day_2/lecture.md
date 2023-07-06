# Week 1 Day 2 Lecture

## Review

- HTML elements and the “makeup” (the syntax) of an element.
- Opening and closing tags (with some exceptions).
- Attributes provide additional information to elements.
    - Important for links (anchors) and images.
- At the end of yesterday's exercise, you should have had a basic bio page.

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
The `<head>` element contains meta information about the HTML page.  "Metadata" is data about data. In other words, it's information that's used to describe the data that's contained in something like a web page, document, or file. Another way to think of metadata is as a short explanation or summary of what the data is.

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

The `<h1>` element defines a large heading

The `<p>` element defines a paragraph

## PAGE STRUCTURE

We often use the same terms that we would use to describe the relationship between family members to describe the relationship between HTML elements.

### NESTING

- There are certain tags that get placed inside other tags
- `<li>` tags get placed between opening and closing `<ul>` tags
- We say that the `<ul>` wraps the `<li>` elements
- We can also say that the `<li>` elements are nested inside the `<ul>` element

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


