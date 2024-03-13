---
title: regular expressions
tags:
 - basics
 - parsing
short: RegEx, examples expressions and some concepts explained.
icon: <i class="fa-solid fa-2x fa-terminal"></i>
toc: true
---

> Explanation[^1] and collection of regexes[^2]

- Passwords, apikeys secrets and other token like strings (taken from [trufflehog example](https://github.com/trufflesecurity/trufflehog/blob/main/examples/generic.yml))

```bash
# grep -P
(?i)(?:key|api|token|secret|client|passwd|password|auth|access)(?:[0-9a-z\\-_\\t .]{0,20})(?:[\\s|']|[\\s|\"]){0,3}(?:=|>|:{1,3}=|\\|\\|:|<=|=>|:|\\?=)(?:'|\"|\\s|=|\\x60){0,5}([0-9a-z\\-_.=]{10,150})(?:['|\"|\\n|\\r|\\s|\\x60|;]|$)
```

<br>

- Mails, the horror if you want to do it accordingly to <s>RFC822</s> <s>RFC2822</s> RFC5322:

```bash
# grep -P
[[:alnum:]_.-]+@[[:alnum:]_.-]+?\.[[:alpha:].]{2,6}
[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,64}
```

## Positive / Negative Lookahead

> Powerfull feature that is not covered with basic `grep` but needs `PCRE` enabled (*Perl Combatible Regular Expressions*) - so just use `grep -P`!

- [ ] tbd

## Positive / Negative Lookbehind

- [ ] tbd

## Sources

[^1]:[https://www.regular-expressions.info/lookaround.html](https://www.regular-expressions.info/lookaround.html)
[^2]:[https://github.com/dxa4481/truffleHogRegexes/blob/master/truffleHogRegexes/regexes.json](https://github.com/dxa4481/truffleHogRegexes/blob/master/truffleHogRegexes/regexes.json)