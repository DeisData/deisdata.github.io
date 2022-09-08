---
layout: shell
---

# Searching and finding

## Questions of the day:
How can we find files?
How can we find things in files?

## Commands of the Day
- `grep` is a contraction of global/regular expression/print.  It finds and prints lines in files that match a pattern.
  - **regular expressions** are patterns that can include wildcards
  - Usage: `grep pattern filename`
  - `grep -w` limits to word boundaries
  - `grep -n` prints the line numbers that match
  - `grep -i` makes search case-insensitive
  - `grep -v` inverts the search to output that does not contain the pattern
  - `grep -E` notes that the pattern is an extended regular expression that can contain wildcards

- `find`  command finds files!
  - `-type` d or f for directories or files
  - `-name` matches a name, but look out for order of execution!  Filenames with wildcards need quotes.  For example, `find . -name "*.txt"`
- `$()` to combine commands. Code inside this runs first! 
  - For example, `wc -l $(find . -name "*.txt")`
  

### Resources
This lesson is adapted from [The Unix Shell on Software Carpentry](http://swcarpentry.github.io/shell-novice/).


<span class="lesson">
    [&nbsp;<a href="/shell">shell</a>&nbsp;]
    [&nbsp;<a href="/shell/setup/">setup</a>&nbsp;]
    [&nbsp;<a href="/shell/navigating">1</a>&nbsp;]
    [&nbsp;<a href="/shell/alter-dir">2</a>&nbsp;]
    [&nbsp;<a href="/shell/pipes-filters">3</a>&nbsp;]
    [&nbsp;<a href="/shell/loops">4</a>&nbsp;]
    [&nbsp;<a href="/shell/shell-scripts">5</a>&nbsp;]
    [&nbsp;<a href="/shell/search-find">6</a>&nbsp;]
</span>


