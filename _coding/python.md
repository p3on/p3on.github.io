---
title: python
tags:
 - code
 - guidelines
 - basics
---

## code style

- [peb8](https://peps.python.org/pep-0008/)
- [peb20](https://peps.python.org/pep-0020/) - or `python -c 'import this'`

> It's about ***consistency***, *BUT* readability stands above all!

## Basics

- use *4* spaces and avoid using tabs
- variable names in `snake_case`
- line length: code 79, text/docstring 72
- encoding `UTF-8`

```bash
# imports: one per line, with absolute path on from multiple allowed
import os
import sys

from subprocess import Popen, PIPE

# function intendation as below 
def my_example_function(var_one, var_two
                        var_three):
    print(var_one)
    
# 2 blank lines above the class
class MyClass:
    """Docstring"""
    a_variable = 123
    
    def sample(self): # one blank line above the method in the class
        return self
        
# on whitespaces
do_stuff(foo[1], {bar: 3})
foo_bar = (0,)
i = i + 1337
i += 1
calc = i*i + f*f

# try catch should be reduced to an absoule minimum!
try:
    value = dict[key]
except KeyError:
    return key_not_found(key)
else:
    return handle_value(value)
    
# Object comparison
if isinstance(val, int):
```