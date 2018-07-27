# Full Stack Developer task

- Your task is to implement a basic currency converter which converts values between Euro, US Dollar and Japanese Yen.

- The converter consists of two parts:
	1. a REST API endpoint implemented in Java
	2. an HTML user interface that uses JavaScript to interact with the Java API

- The Java API endpoint should accept three inputs - the source currency, the target currency, and the amount - and should respond with the result of the conversion. The Java API should use the [Fixer API](http://fixer.io) to fetch the latest exchange rates.  
To allow easy testing, build the Java API as a standalone application (with an embedded HTTP server). Use one of the well-established frameworks to do so - we recommend [Spring Boot](https://projects.spring.io/spring-boot/) or [Dropwizard](http://www.dropwizard.io/). 
Don't forget to handle erroneous input data. 

- In the JavaScript you should make Ajax calls with [`axios`](https://github.com/axios/axios) (which is included at the bottom of the `index.html` file). Do not use any other libraries or frameworks like jQuery, Angular, React, etc.
- As the solution must only work on the latest Chrome version, you can make use of ES6 features and new CSS technologies without thinking about transpiling or vendor-prefixing things. Of course you do not have to use fancy new stuff.   

- As the HTML markup is not very elaborate, improve it as much as possible and apply best practices.
- Also the stylesheet can make use of some improvements. Improve and enhance it as much as possible. Do not use any post- or pre-processors for your styles, and do not use any styling libraries like Bootstrap or Foundation.
- Improve the UI and make it also work for mobile devices.
