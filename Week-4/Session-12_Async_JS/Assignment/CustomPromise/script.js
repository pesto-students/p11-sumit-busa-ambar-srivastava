// Your task is to implement a custom Promise implementation using ES6. The Promise object represents a value that may not be available yet but will be resolved at some point in the future.

// You will need to use polyfills to ensure that your implementation works in all modern browsers. Your implementation should include the following methods:

//     then(onFulfilled, onRejected) - Adds a callback to be executed when the Promise is resolved.
//     catch(onRejected) - Adds a callback to be executed when the Promise is rejected.
//     resolve(value) - Resolves the Promise with a given value.
//     reject(reason) - Rejects the Promise with a given reason.

class CustomPromise {
  constructor(executor) {
    // Your code here
    console.log("Constructor is called");
    this.state = "pending";
    this.value = undefined;
    this.handlers = [];

    const resolve = (value) => {
      console.log("Resolving with value:", value);
      if (this.state === "pending") {
        this.state = "fulfilled";
        this.value = value;
        this.handlers.forEach((handler) => this.executeHandler(handler));
      }
    };

    const reject = (reason) => {
      console.log("Rejecting with reason:", reason);
      if (this.state === "pending") {
        this.state = "rejected";
        this.value = reason;
        this.handlers.forEach((handler) => this.executeHandler(handler));
      }
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    // Your code here
    console.log("then is called");
    return new CustomPromise((resolve, reject) => {
      const handler = {
        onFulfilled: typeof onFulfilled === "function" ? onFulfilled : null,
        onRejected: typeof onRejected === "function" ? onRejected : null,
        resolve,
        reject,
      };

      if (this.state === "pending") {
        this.handlers.push(handler);
      } else {
        this.executeHandler(handler);
      }
    });
  }

  catch(onRejected) {
    // Your code here
    console.log("catch is called");
    return this.then(null, onRejected);
  }

  executeHandler(handler) {
    setTimeout(() => {
      try {
        if (this.state === "fulfilled") {
          if (handler.onFulfilled) {
            const result = handler.onFulfilled(this.value);
            console.log("Executing onFulfilled with result: ", result);
            handler.resolve(result);
          } else {
            console.log("Resolving with value: ", this.value);
            handler.resolve(this.value);
          }
        } else if (this.state === "rejected") {
          if (handler.onRejected) {
            const result = handler.onRejected(this.value);
            console.log("Executing onRejected with result: ", result);
            handler.resolve(result);
          } else {
            handler.reject(this.value);
          }
        }
      } catch (error) {
        handler.reject(error);
      }
    }, 0);
  }

  static resolve(value) {
    // Your code here
    console.log("static resolve is called");
    return new CustomPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    // Your code here
    console.log("static rejected is called");
    return new CustomPromise((_, reject) => reject(reason));
  }
}

// You will need to fill in the constructor and the methods with the appropriate code to make this implementation work.
// Requirements

//     Your implementation should work in all modern browsers, including IE11 and above.
//     Your implementation should include error handling for any unexpected behavior.
//     Your implementation should not use any external libraries or frameworks.
//     Your implementation should use ES6 features, including classes and arrow functions.
//     Your implementation should be well-documented with clear explanations of how it works.

// Testing

// To test your implementation, you can create a new instance of your CustomPromise class and use it to resolve or reject a value, and then use the then and catch methods to handle the results.

// Here's an example of how to use your implementation:

const myPromise = new CustomPromise((resolve, reject) => {
  // Resolve the Promise after 1 second
  setTimeout(() => {
    console.log("Executor called after 1 sec");
    resolve("Success!");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result, "Output Success"); // Output: Success!
  })
  .catch((error) => {
    console.error(error, "Output Failed"); // Output Failed!
  });

//   You can also test your implementation by creating a Promise that rejects, and using the catch method to handle the error:
// const myPromise = new CustomPromise((resolve, reject) => {
//   // Reject the Promise immediately
//   reject("Error!");
// });

// myPromise.catch((error) => {
//   console.error(error); // Output: Error!!
// });
