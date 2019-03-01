# Ferds Security

The Ferds Security contains methods that help you create a secure application, processing input data for security. Ferds Security has several functions to support your security such as :

* Cross Site Scripting prevention filter, which looks for commonly used techniques to trigger JavaScript or other types of code that attempt to hijack cookies or do other malicious things. If anything disallowed is encountered it is rendered safe by converting the data to character entities.
* Escapes special characters in a string for use in an SQL statement

## Features

Now, let’s describe the features:

- Cross Site Scripting prevention filter.
- SQL escape string

## Installation
```
$ npm install ferds-security
```

## Usages

### Sanitize

Okay, now we will try to prevent Cross Site Scripting with Sanitize function. Examples of simple use :

```javascript
var security = require( 'ferds-security' );
var text = '<script>alert("XXX");</script>';
var sanitize_text = security.sanitizer( text );

console.log( sanitize_text );
```