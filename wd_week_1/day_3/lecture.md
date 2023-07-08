# Week 1 Day 3 Lecture

Quick review of Day 1-2
Header and Footer introduction
Building a navigation bar
Styling the nav bar


## Headers and Footers

The <header> and <footer> tags are important elements to incorporate into your page. They generally hold 
the navigation bar at the top and the legal/contact information at the bottom. These elements by default 


## Navigation bars

Navigation bars are on all websites to some extent, but oftentimes developers create them using nonstandard 
HTML. This lesson will show you how to build a proper nav bar with semantic elements. MOST navigation bars are
situated across the top of the web page but having a side nav is not unusual. This lesson will cover horizontal 
navigation, but a flexbox can make it vertical very easily. 

```html
<header>
    <nav>
      <a href=#>linkName</a>
      <a href=#>linkName</a>
      <a href=#>linkName</a>
      <a href=#>linkName</a>
    </nav>
</header>
```

Above is a simple navigation bar. Note the elements that are used: <header> <nav> and <a>. Many sites will 
improperly create the navigation bar like so: *note* do NOT use this format.

```html
<div>
  <ul>
    <li>linkName</li>
    <li>linkName</li>
    <li>linkName</li>
    <li>linkName</li>
  </ul>
</div>
```

While the end result is the same (after styling the <li> to remove the bullet marks), this second example is not semantically 
correct. 

## linking the pages

The <a> tags in the nav bar have to link somewhere, right? But in this case it isn't linking to some place on the 
internet, it is linking to another file that you haven't published yet. How go we link to these files? Let's take a look.

```html
<nav>
  <a href='/filename.html'>linkName</a>
  <a href='../filename-b.html'>linkName</a>
  <a href='../../filename-c.html'>linkName</a>
</nav>
```

We have to link our files based on the structure of our working folder(s). We have to use what is called
*Relative pathway* This means we are telling the browser to navigate based on a relative structure as opposed 
to an Absolute structure. The difference here is that we want to navigate based on where we are currently located 
within our files rather than from the root of the directory.  

to explain the above: 

```html
<img src="picture.jpg">	The "picture.jpg" file is located in the same folder as the current page
<img src="images/picture.jpg">	The "picture.jpg" file is located in the images folder in the current folder
<img src="/images/picture.jpg">	The "picture.jpg" file is located in the images folder at the root of the current web
<img src="../picture.jpg">	The "picture.jpg" file is located in the folder one level up from the current folder
```
we can combine these statements of / and .. to navigate the file tree either up or down

https://www.geeksforgeeks.org/absolute-relative-pathnames-unix/

## practice time! 

Take a look at the code in practice.html
Here is your task: 
- Fix the unsemantic code in the body
- create a basic semantic navigation bar
- make the links in the bar have red text and a dark background
- pad the links to give them some separation 


## Footers

Footers hold important information for your users. Specifically, footers almost always hold 'contact' information. 
Because of this generality, we are introducing a new attribute value: mailto

When inserting contact information into an <a> tag, you can use the mailto to automatically open the user's default email
app with the email address prefilled. 

<p><a href="mailto:email@example.com">email@example.com</a></p>

