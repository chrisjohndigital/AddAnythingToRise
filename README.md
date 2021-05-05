AddAnythingToRise
======================================

JavaScript package for enhancing published Articulate Rise projects.

## About

AddAnythingToRise is a useful JavaScript package for when you need to use content types not included in the Articulate Rise feature set.  For example, adding a form to a page. 

## How does it work?

AddAnythingToRise listens for changes in Rise page content (Mutation Observer), then scans the page to look for a particular Rise content type (e.g. A quote), subsequently appending the content type with new content you wish to add.  The package can be customised to search for and append, or replace, any Rise content type.  An example is provided where a form is added to pages where the quote content type is used.  The form could be used to present a search bar in support of a database search.

## How to deploy

AddAnythingToRise is a single JavaScript file with no dependencies, simply add it to the head of your published articulate project with a defer attribute:

<script type="text/javascript" src="addanythingtorise.js" defer></script>

## Platform

[MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver)