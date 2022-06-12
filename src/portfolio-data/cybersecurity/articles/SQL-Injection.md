# SQL Injection

SQL injection is a class of attacks that involves sending malicious SQL code to be evaluated by the web server, allowing the attacker to leak sensitive data or wreak havoc by deleting data from the database. Often, SQL injection vulnerabilities arise in web applications where the frontend asks the user for some input, and that input eventually gets passed to a server that uses the input to construct a SQL statement to run. 

For example, let’s consider a Node.js API that has an HTTP GET endpoint like this which takes in an ID parameter from the user and uses it build a SQL query that then gets passed to PostgreSQL to execute:  

```jsx
app.get("/users", () => {
	const data = request.body;
	const sqlQuery = 'SELECT * FROM Users WHERE id = ' + data.id;
	return executeQuery(sqlQuery);
})
```

Let’s suppose the web frontend for this application has an input that allows you to call this GET endpoint with an ID:

![list users by ID](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/86720a75-43a0-4472-8489-026978bcfe11/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T005133Z&X-Amz-Expires=86400&X-Amz-Signature=daebde1b127d1f83722b580ea8e12c0f9f25460f993e31ac7dd990f621cf722e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

When you interact with the form non-maliciously and pass in a regular value like `3` , the SQL query that gets constructed in the backend server would look like: `SELECT * FROM Users WHERE id = 3` .

SQL injection is basically about sending through an input value that would make the backend server unknowingly construct a SQL query does does something bad, such as leaking secret data or dropping tables. For example, in the same form, we could send `3 OR 1 = 1` :

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/58cb7110-062e-491d-ac35-53e5e2a5273c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T005146Z&X-Amz-Expires=86400&X-Amz-Signature=b51d614fdbf9452de60d437ebe0642889f508e35997d1c077fb5eb381bbd1724&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

This results in the query `SELECT * FROM Users WHERE id = 3 OR 1 = 1` being constructed. The trick is that adding the `OR 1 = 1` forces the `WHERE` clause’s condition to evaluate to true, meaning that all rows of the Users table passes the condition and will get returned in the response. Getting the `WHERE` clause to evaluate to true is a common trick in SQL injections.

A common trick for injecting a completely new SQL query to be executed is to close off the previous part of the query that’s built by the backend server and start an entirely new statement. For example, we could send the input: `1; DROP TABLE Users; --` .

![Untitled](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/205d40ef-1677-4969-91c3-6a621713d0b1/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T005200Z&X-Amz-Expires=86400&X-Amz-Signature=d5b6eeb4ce10436ce083ea9792fd1675c060fcf4633b7776dec07e3bcd0ad494&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

The query, `SELECT * FROM Users WHERE id = 1; DROP TABLE Users; --` , would be constructed which would delete an entire table! Note that the final `--` characters in the query are added to comment out any other SQL statements that gets added after where the ID gets concatenated. In our simple contrived example however, we could do without it.

Another common trick is to use the `UNION` operator to chain further `SELECT` statements and join the *result set* of each `SELECT` statement. We can use this to pull out data from other tables and return it with the original payload. For example, we could send something like `3 OR 1 = 1 UNION SELECT * FROM Profile; --` .

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a9a4a153-ebc6-49be-8d5b-f476fc997eb2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220410T005208Z&X-Amz-Expires=86400&X-Amz-Signature=4c48f4aa13022e34035482970c7ab2cc9393390714fef2e01e3e3f9c4ed3a623&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

This would construct the query `SELECT * FROM Users WHERE id = 3 OR 1 = 1 UNION SELECT * FROM Profile; --` which would cause the profiles of all users to be returned along with the results of the first query. 

You don’t necessarily have to perform SQL injections just through `<input>` elements in an HTML document. Often in CTFs, you would use CLIs like curl or enterprise web pentesting tools like Burpsuite to craft an HTTP request.

**Defending against SQL injections:**

SQL injection vulnerabilities are extremely easy to introduce into web apps and are still widespread now. They are however, very easily prevented or defended against as well. Remember, SQL injection attacks are only possible when you get the backend server to construct a SQL query based on user input.

The main ways to defend against SQL injection vulnerabilities include:

* Using *parameterised queries*, also called ‘*prepared SQL statements*’, instead of naively using string concatenation with user input to build the SQL query. Many libraries for interfacing with a relational database exist and will encourage you to use their prepared statements, such as [node-postgres](https://node-postgres.com/features/queries).
    
    Using the `' OR 1 = 1` would no longer work when using parameterised queries since the database would treat this as a literal string. Plus, it’s way more readable and maintainable from a developer’s point of view and should be preferred over string concatenated queries for that reason as well.
    

* Using *stored procedures*. It’s basically the same as parameterised queries where instead of using string concatenation to build the SQL query, you just interpolate in values into a SQL query that’s already prepared. The main difference with parameterised queries is that stored procedures are kept in the database rather than in the backend application code.
* Sanitising the user input by removing SQL code and escaping control characters. Generally, we don’t consider this as safe as using parameterised queries since it’s hard to have complete confidence that the input will be safe after being escaped and filtered.