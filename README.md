# middleware

Middleware is a function which is called before the route handler. Middleware functions have access to the request and response objects, and the next() middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named next.

Middleware functions can perform the following tasks:

- execute any code.
- make changes to the request and the response objects.
- end the request-response cycle.
- call the next middleware function in the stack.
- if the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. Otherwise, the request will be left hanging.

> [implementation-directory](./middlewares/)

# Exception filters

While the base (built-in) exception filter can automatically handle many cases for you, you may want full control over the exceptions layer. For example, you may want to add logging or use a different JSON schema based on some dynamic factors. Exception filters are designed for exactly this purpose. They let you control the exact flow of control and the content of the response sent back to the client.

> [implementation-directory](./exception-filters/)

# Pipes

A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.
Pipes have two typical use cases:

1. transformation: transform input data to the desired form (e.g., from string to integer)
2. validation: evaluate input data and if valid, simply pass it through unchanged; otherwise, throw an exception when the data is incorrect

> [implementation-directory](./pipes/)

# Interceptors

An interceptor is a class annotated with the @Injectable() decorator, which implements the NestInterceptor interface.

Interceptors have a set of useful capabilities which are inspired by the Aspect Oriented Programming (AOP) technique. They make it possible to:

1. bind extra logic before / after method execution
2. transform the result returned from a function
3. transform the exception thrown from a function
4. extend the basic function behavior
5. completely override a function depending on specific conditions (e.g., for caching purposes)

> [implementation-directory](./interceptors/)
