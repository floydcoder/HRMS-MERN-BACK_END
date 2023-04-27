# HRMS - Human Resources Management System

This is a comprehensive Node.js back-end built on Express, which allows for the creation of robust and scalable REST APIs. The back-end is designed following the MVC pattern and communicate with a MongoDB database, providing seamless integration for CRUD operations. With this architecture, the system is able to easily manage and manipulate data, providing a reliable and scalable solution for API needs.

## Key Features

* #### User authentication and authorization with JSON Web Tokens (JWTs)

The system provides a secure user authentication and authorization process using JSON Web Tokens (JWTs). The user is first authenticated using a username and password, and upon successful authentication, a JWT is generated and sent to the client. The client can then use this JWT to make authorized requests to the server.

* #### Middleware logic for handling client requests, logging, and serving static pages

The system uses middleware functions to handle client requests, perform logging, and serve static pages. These middleware functions can be added or removed as needed to extend the functionality of the system. For example, middleware functions can be used to parse and validate request data, add custom headers to responses, cache responses for improved performance, or compress response data to reduce bandwidth usage.

* #### Custom application routes to fulfill business logic requirements

The system defines custom application routes to fulfill specific business logic requirements. These routes define how data is accessed, processed, and returned to the client. By defining custom routes, the system can provide a tailored experience to the end user, ensuring that business requirements are met in an efficient and effective manner.

* #### Composition of application cookies to the client

The system composes application cookies to the client, providing additional data or state information about the user or application. These cookies can be used to persist user preferences or session data, or to improve performance by caching frequently accessed data. The cookies can also be used to provide additional security measures, such as CSRF protection.

* #### Use of JWT middleware interceptors for secure and efficient request handling

The system uses JWT middleware interceptors to ensure secure and efficient request handling. The interceptor intercepts requests made by the client and checks for the presence of a valid JWT. If the JWT is invalid or expired, the interceptor can either deny the request or redirect the client to a login page to obtain a new JWT. If the JWT is valid, the interceptor adds the decoded JWT payload to the request object, which can be used by subsequent middleware or route handlers to access user-specific data. By using JWT middleware interceptors, the system can ensure that only authorized users have access to protected resources, improving overall security and efficiency.
