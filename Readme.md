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

### Escape String

Escaping a string means to reduce ambiguity in quotes (and other characters) used in that string. For instance, when you're defining a string, you typically surround it in either double quotes or single quotes:

```
"Hello World."
```

Now I have ambiguity - the interpreter doesn't know where my string ends. If I want to keep my double quotes, I have a couple options. I could use single quotes around my string:

```
'Hello "World."'
```

Or I can escape my quotes:

```
"Hello \"World.\""
```

Any quote that is preceded by a slash is escaped, and understood to be part of the value of the string.

```javascript
var security = require( 'ferds-security' );
var text = '<script>alert("XXX");</script>';
var sanitize_text = security.sanitizer( text );

console.log( sanitize_text );
```

The results will be like this :
```
&lt;script&gt;alert(&quot;XXX&quot;);&lt;&#x2F;script&gt;
```

### Sanitize

Okay, now we will try to prevent Cross Site Scripting with Sanitize function. Examples of simple use :

```javascript
var security = require( 'ferds-security' );
var text = '<script>alert("XXX");</script>';
var sanitize_text = security.sanitizer( text );

console.log( sanitize_text );
```

The results will be like this :
```
&lt;script&gt;alert(&quot;XXX&quot;);&lt;&#x2F;script&gt;
```