---
title: Shell Perl Transpiler
image: https://tymotex.github.io/timz.dev/public/project-images/shell-perl-transpiler-thumbnail.png
summary: A regex-based transpiler for mapping POSIX shell scripts to equivalent Perl 5 scripts.
---

A regex-based transpiler for mapping POSIX shell scripts to equivalent Perl 5 scripts. This supports the translation of most control structures and some commonly used builtin shell commands to Perl. It aims to preserve the comments and indentation of the original input file.

### Example:

#### Input:

![](https://github.com/Tymotex/ShellPerlTranspiler/raw/master/images/SeriesSh.png)

#### Output:

![](https://github.com/Tymotex/ShellPerlTranspiler/raw/master/images/SeriesPl.png)
