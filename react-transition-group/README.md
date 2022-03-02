# react-transition-group
React Transition Group is a library usable with React, which 
> exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier 

Please see [React Transition Group](https://reactcommunity.org/react-transition-group/) for more information such as how to get started using the library.

## This app's examples
### Animation1
In Animation1 component, a modal is presented on load, and uses a CSSTransition as it closes, gradually fading the modal and removing it from the ReactDOM. The modal contains a button, which when clicked invokes Animation2.

### Animation2
In Animation2 component, an alert is presented, and uses a CSSTransition as it closes, gradually fading the modal and removing it from the ReactDOM. The alert contains a button, which when clicked sets a message and invokes a paragraph.

### Example
This is the example used on the CSSTransition page available at [React Transition Group](https://reactcommunity.org/react-transition-group/css-transition)

## Learning points
I found that combining multiple CSSTransition components in the same file created errors, but putting the modal transition (Animation1) and the alert transition (Animation2) in separate component files provided a workable solution.

CSSTransition by default does not provide an animation when the transition loads, so I used the Transition prop appear. This appears to work for my first animation but not for the follow on.

To work, CSSTransition requires CSS transition properties defined with the appropriate class names in a CSS file.