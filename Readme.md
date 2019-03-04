# Ferds Security

The Ferds Security contains methods that help you create a secure application, processing input data for security. Ferds Security has several functions to support your security such as :

* Cross Site Scripting prevention filter, which looks for commonly used techniques to trigger JavaScript or other types of code that attempt to hijack cookies or do other malicious things. If anything disallowed is encountered it is rendered safe by converting the data to character entities.
* Escapes special characters in a string for use in an SQL statement

## Features

Now, let’s describe the features:

- Cross Site Scripting prevention filter.
- SQL escape string
- Password Strength Meter

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

If you using Ferds Security, the usage of escape string will be very simple like this :

```javascript
var text1 = "Hello \"World.\"";
var text2 = 'Hello "World."';
var text3 = "Hello World.";

var escape_text1 = security.escape_string( text1 );
var escape_text2 = security.escape_string( text2 );
var escape_text3 = security.escape_string( text3 );

console.log( escape_text1 );
console.log( escape_text2 );
console.log( escape_text3 );
```

The results will be like this :
```
Hello \"World.\"
Hello \"World.\"
Hello World.
```

### Password Strength Meter

```
"No system is totally secure...", Chris Hoofnagle
```

If we read the that's quote, yes, that's right quote. But, we can set a small prevention for attacker with great password. You can use password_strength_meter function to give you information about the strength of the password. The function will be simple like this :

```javascript
var strength_password1 = security.password_strength_meter( "ABCDZ" );
var strength_password2 = security.password_strength_meter( "ABCDZ!@#123_~KWJFKWJFKJWFK*@&$(@&" );

console.log( "The strength of the Password 1 is " + strength_password1 );
console.log( "The strength of the Password 2 is " + strength_password2 );
```

Results :

```
The strength of the Password 1 is 25
The strength of the Password 2 is 100
```

This is some criteria of strength of your password :

| Score | Description |
| ------------- |:-------------:|
| < 50 | Very Bad |

### Sanitize

To prevent the Cross Site Scripting, you can use three ways :

* Escaping
* Validating Input (You can use [Ferds Validator](https://www.npmjs.com/package/ferds-validator) to creating simple validation with various function methods.)
* Sanitizing

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

## Author

Ferdinand [<ferdshinodas@gmail.com>]