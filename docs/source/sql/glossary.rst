SQL Glossary
============

*Source:* `Software Carpentries <http://swcarpentry.github.io/sql-novice-survey/reference.html>`__

**aggregation function**:  A function that combines values 
to produce a single new value (e.g. sum)

**Atomic**:  Describes a value not divisible into parts 
that one might want to work with separately. For example, 
if one wanted to work with first and last names separately,
the values “Ada” and “Lovelace” would be atomic, but the 
value “Ada Lovelace” would not.

**cascading delete**:  An SQL constraint requiring that 
if a given record is deleted, all records referencing it 
(via foreign key) in other tables must also be deleted.

**case insensitive**:  Treating text as if upper and lower 
case characters were the same.

**Fields**:  A set of data values of a particular type, 
one for each record in a table.

**Filter**:  To select only the records that meet certain 
conditions.

**foreign key**:  One or more values in a database table 
that identify records in another table.

**prepared statement**:  A template for an SQL query in 
which some values can be filled in.

**primary key**:  One or more fields in a database table 
whose values are guaranteed to be unique for each record, 
i.e., whose values uniquely identify the entry.

**Query**:  A textual description of a database operation. 
Queries are expressed in a special-purpose language called 
SQL, and despite the name “query”, they may modify or delete 
data as well as interrogate it.

**Record**:  A set of related values making up a 
single entry in a database table, typically shown 
as a row. See also: fields.

**referential integrity**:  The internal consistency 
of values in a database. If an entry in one table 
contains a foreign key, but the corresponding records 
don\’t exist, referential integrity has been violated.

**relational database**:  A collection of data 
organized into tables.

**sentinel value**:  A value in a collection that 
has a special meaning, such as 999 to mean 
“age unknown”.

**SQL**:  A special-purpose language for describing 
operations on relational databases.

**Wildcard**:  A character used in pattern matching. 
In SQL\’s `like` operator, the wildcard “%” matches 
zero or more characters, so that ``%able%`` matches 
“fixable” and “tablets”.