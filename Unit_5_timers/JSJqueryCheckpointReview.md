> What will be logged to the console with the following code? var myObject = { myNumber: 30, myFunction: function() { this.myNumber += 30; console.log(myObject.myNumber); } } myObject.myFunction();

> A: 60

Couple of things on this -- first off this code is really hard to read.

But if you look closely and follow the curlies, you can see that `myObject` has a property `myNumber: 30`, and a method `myFunction` (yes that's annoying that its name says its a function. It is, but it's "best" name is method). 

`myFunction` does `this.myNumber += 30`, which adds 30 to the value of the property `myNumber` (remember that `this` is useful because its a reference to the actual object itself, letting you reach out and grab the other object data. The appreciation of this, again, only comes with time).

* Also remember that the `+` operator changes what it does based on if it's around numbers or strings: 

"hello!" + "hello!" = "hello!hello!"

3 + 9 = 12

3 + "hello!" = "3hello!"

> What will be logged to the console with the following code? var myFunction = function (someCar) { var myCar = someCar; } myFunction("Honda"); console.log(myCar);

> A: ReferenceError: myCar is not defined

This one is tricky -- if you look closely, you can see that that function doesn't really do anything. It makes a variable, but then doesn't do anything with it. 

This was a question about scope, because to get it you would have to notice how `var myCar` is inside that function. 
Since it's in the function itself, nothing outside the function block can see it -- hence why it would be `undefined` where the `console.log` _actually_ was

>  Effectively, the ____ is the version of HTML / CSS interpreted by the browser.

> A: DOM

This is what I was talking about today. The DOM is how both javascript and the browser interact with the page. Remember, DOM = Document Object Model.

Whereas debuggers and the `console` are the ways that _you_ (the developer) interact with the browser. Note the distinction.

> Without using jQuery, a CSS style of an element can be manipulated using the ____ method.

> A: setAttribute

This one is worded vaguely, but is technically valid. Just fyi if interested: you would do something like

`document.getElementById('my-element').setAttribute('style', 'color: red; background: green;')` or

`document.getElementById('my-element').setAttribute('class', 'my-class')` (setting the `class` attribute is _technically_ "manipulating the css style")

Definitely don't feel bad for not getting this one. We did not cover the `style` attribute explicitely.

> To attach an element to the beginning of another element, we can use the ____ jQuery method.

> A: .prepend

**Attaching elements to the _beginning_ of another element** is the key difference here. 

`.append` inserts things at the bottom of the element, 

`.prepend` inserts things at the _top_ of the element -- otherwise known as "the beginning" of the element

> Writing ____ is equivalent to writing $() when using the jQuery library.

> A: jQuery

Only would know this if you found out on your own time. 

As for the "why": the developers added another function that's the same as the `$` function, but has a more descriptive name (it says `jQuery`, instead of ...`$`). This was seemingly because

1. `jQuery` is again, descriptive, and that's good.

2. having a longer (and thus more unique name) helps with preventing "conflicts" with other variables / functions in the global scope. Developers like to use `$` for tons of things (as you've seen), and some developers had already had a variable/function named `$` in their code by the time jQuery came around.

> The ___ jQuery method can be used to iterate over an array without using a for loop.

> A: .each

We did not cover this method in class. This is another situation where you would know if you had looked it up.

