/**
 * *    The Document Object Model (DOM)
 * ?    It behaves as an API because it's an hierachical tree interface
 * ?    for changing the contents of a page.
 * ?    The DOM is a representation of an HTML document and
 * ?    this tree contains nodes. The first child of the document is
 * ?    the HTML root element. This encloses the HEAD and BODY elements.
 */

// Print the HTML page
console.log(document);

// Lists all the properties of the DOM
console.dir(document);

// Print the title of this document
console.log(document.title); // 39 The DOM in Javascript

// Print the URL of this document
console.log(document.URL); // http://127.0.0.1:5500/39%20The%20DOM/index.html

// We can change any property of the DOM
document.title = 'This is the new document title';
console.log(document.title); // This is the new document title

// Change the background color of the document
document.body.style.backgroundColor = 'MediumSeaGreen';

// Change the properties of an element
document.getElementById('myDivElement').innerHTML = `Hello there!`;
