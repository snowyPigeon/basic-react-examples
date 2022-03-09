# react-transition-group
React Transition Group is a library usable with React, which 
> exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier 

Please see [React Transition Group](https://reactcommunity.org/react-transition-group/) for more information such as how to get started using the library.

Note that to work, CSSTransition requires CSS transition properties defined with the appropriate class names in a CSS file.

## This app's examples
### Animation1
In Animation1 component, a modal is presented on load, and uses a CSSTransition as it closes, gradually fading the modal and removing it from the ReactDOM. The modal contains a button, which when clicked invokes Animation2.

### Animation2
In Animation2 component, an alert is presented, and uses a CSSTransition as it closes, gradually fading the modal and removing it from the ReactDOM. The alert contains a button, which when clicked sets a message and invokes a paragraph.

### Example
This is the example used on the CSSTransition page available at [React Transition Group](https://reactcommunity.org/react-transition-group/css-transition)

### Loading
In the Loading component, an aqua coloured shape is loaded to display in the upper center of the screen. This fades out and the next component, Animation1 presents.

### react-bootstrap Spinner
This element is from the react-bootstrap library. The element is <Spinner></Spinner> and I have chosen the border animation and the info variant for the colour. 

### Custom Spinner
This example follows the tutorial at [Code Boxx](https://code-boxx.com/full-screen-css-loading-spinner/). The distinctions for this approach are that you darken the full screen background and use an animated gif for the spinner itself. I chose to invoke this to display temporarily with a Button component. I also adapted the code so that it works within a React application.

## Learning points
I found that combining multiple CSSTransition components in the same file created errors, but putting the modal transition (Animation1) and the alert transition (Animation2) in separate component files provided a workable solution.

CSSTransition by default does not provide an animation when the transition loads, so I used the Transition prop appear. 

To create a time delayed event, you can pass state controlling functions to setTimeout() and pass the true or false state values as a parameter following your number of milliseconds. For example:

``setTimeout(setShow, 2000, false);`` 

This makes working with the useState hook very easy. For the full code using the above snippet, please see CustomSpinner.js.