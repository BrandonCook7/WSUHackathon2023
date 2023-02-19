INSERT INTO programming_language (language_name, language_description)
VALUES
    ('Python', 'Python is a high-level, interpreted programming language that emphasizes code readability and simplicity. It was first released in 1991 and has since become one of the most popular programming languages in the world, widely used in areas such as web development, data analysis, artificial intelligence, and scientific computing. \nCompared to other programming languages, Python is known for its clear and concise syntax, making it easy to read and write. It supports a wide range of programming paradigms, including object-oriented, functional, and procedural programming, and has a vast library of modules and tools that make it easy to accomplish a variety of tasks. \nPython is an interpreted language, which means that it doesn''t need to be compiled before running. This makes it very convenient for quick prototyping and development, but can also mean that it''s slower than compiled languages like C++ for certain types of tasks. \nOverall, Python is a versatile and powerful language that is a great choice for beginners and experienced developers alike, due to its ease of use, flexibility, and vast community support.'),
    ('JavaScript', 'JavaScript is a high-level, interpreted programming language that is often used for web development, although it can also be used for server-side programming, mobile application development, game development, and more. It was first released in 1995 and has since become one of the most widely used programming languages in the world. \nJavaScript is known for its dynamic and flexible nature, and it is often used to create interactive web pages and user interfaces. It supports a wide range of programming paradigms, including object-oriented, functional, and imperative programming, and has a vast library of frameworks, tools, and plugins that make it easy to build a wide range of applications. \nOne of the key features of JavaScript is its ability to execute code on the client-side, allowing for dynamic and responsive user interfaces without the need for constant communication with the server. It also supports asynchronous programming, which allows for non-blocking I/O operations and can improve the overall performance of an application. \nHowever, JavaScript can also be more challenging to work with than some other programming languages due to its loosely-typed nature and some of its quirks and inconsistencies. Nonetheless, with its versatility, huge community, and wide range of applications, JavaScript remains a popular choice for many developers.'),
    ('C#', 'C# (pronounced ''C sharp'') is a modern, multi-paradigm programming language developed by Microsoft as part of the .NET framework. It was first released in 2000 and has since become one of the most popular programming languages in the world, particularly for Windows desktop and server applications, game development, and web development using the ASP.NET framework. \nC# is an object-oriented language that provides features such as classes, interfaces, and inheritance to allow developers to organize and encapsulate code. It also supports functional programming constructs, such as lambda expressions and LINQ, that can help simplify complex data processing tasks. \nOne of the key benefits of C# is its type safety and memory management features. C# provides strong typing and automatic memory management through the use of a garbage collector, which helps prevent common programming errors such as null reference exceptions and memory leaks. \nC# also provides a rich set of libraries and tools that make it easy to build a wide range of applications, including desktop applications, web applications, and games. The .NET framework provides a comprehensive set of class libraries and runtime components, while the Visual Studio IDE provides a powerful development environment with advanced features such as debugging, profiling, and unit testing. \nOverall, C# is a versatile and powerful programming language that is particularly well-suited to building Windows desktop and server applications, games, and web applications using the ASP.NET framework. Its robust type system, memory management features, and rich set of libraries and tools make it a popular choice for developers who value productivity, performance, and maintainability.'),
    ('TypeScript', 'TypeScript is a strongly-typed superset of JavaScript that was developed and is maintained by Microsoft. It was first released in 2012 and has since gained popularity among developers who are looking for a way to write more robust and maintainable code. \nTypeScript is designed to address some of the challenges and limitations of JavaScript, particularly around its dynamic and loosely-typed nature. With TypeScript, developers can define and enforce types for variables, parameters, and functions, providing a level of safety and predictability that can help catch errors earlier in the development process. Additionally, TypeScript provides features such as interfaces, classes, and enums that are not available in standard JavaScript. \nOne of the main benefits of TypeScript is its ability to provide better tooling and editor support. Because TypeScript code is statically typed, IDEs and text editors can provide better autocomplete, error checking, and refactoring features, which can help improve productivity and reduce the likelihood of bugs. \nAnother advantage of TypeScript is its compatibility with JavaScript. Because TypeScript is a superset of JavaScript, any valid JavaScript code is also valid TypeScript code, which makes it easy to gradually adopt TypeScript into existing projects. Additionally, TypeScript can be transpiled into JavaScript, allowing it to be used in any environment where JavaScript is supported. \nOverall, TypeScript is a powerful and flexible language that can help improve the quality and maintainability of JavaScript code, while still providing the flexibility and compatibility that make JavaScript so popular.');

INSERT INTO categories (category_order, parent_library_id, category_name)
VALUES 
    (1, 4, 'Variable Instantiation'),
    (2, 4, 'Loop Declarations'),
    (3, 4, 'Array manipulations'),
    (4, 4, 'Classes and Types'),
    (5, 4, 'Object manipluations'),
    (6, 4, 'Higher Order Methods');

INSERT INTO questions (parent_category_order, parent_library_id, question_data)
VALUES 
    (6, 4, '{type: "FIB", question_prompt: "const roots = numbers.map((num) ____ Math.sqrt(num));;", answers: ["->","=>",">","return"], correct_answer:1}'),
    (6, 4, '{type: "FIB", question_prompt: "const filtered: _____ = data.filter((value: number) => value > 5);", answers: ["List","number","List<number>","number[]"], correct_answer:2}'),
    (6, 4, '{type: "CS",  code_snippet: "pretend there is a code snippet here", question_prompt: "", answers: ["","","",""], correct_answer:0}'),
    (6, 4, '{type: "CS",  code_snippet: "pretend there is a code snippet here", language: "TypeScript", question_prompt: "", answers: ["","","",""], correct_answer:0}'),
    (6, 4, '{type: "MC",  question_prompt: "", answers: ["","","",""], correct_answer:'),