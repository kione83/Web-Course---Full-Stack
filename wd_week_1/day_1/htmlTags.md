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
```

