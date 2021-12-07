# Understanding Questions:

1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.

- The user presses the 1 button.
- dispatch calls the action function
- The action function then calls the reducer function
- The state gets modified
- App rerenders
  ...

- TotalDisplay shows the total plus 1.
