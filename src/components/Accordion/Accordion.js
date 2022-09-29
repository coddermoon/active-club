import React from 'react';

const Accordion = () => {

    const question= [
        {
            question:"How React Works",
            Ans:"React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes. A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state for example, a TabList component may store a variable corresponding to the currently open tab. React is a declarative, efficient, and flexible JavaScript library for building user interfaces. ReactJS is an open-source, component-based front end library responsible only for the view layer of the application. It is maintained by Facebook."
        },
        {
            question:"Defferent between state and Props",
            Ans:"The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from inside the component."
        },
        {
            question:"Defferent between state and Props",
            
            Ans:"If we pass dependencies to useEffect hook, then useEffect will executed every time when the variables which we passed to dependency array . We should useEffect, when your component depends on the outside world data, and we can not guarantee that data will come or not (maybe the server is down there). So, Instead of throwing errors and stop other components from being rendered, move them into useEffect hook. If we pass an empty array to useEffect then our component will be rendered for first time when a component is rendered. To re-call useEffect hook we have to refresh our page. With useEffect, you can handle lifecycle events directly inside function components. Namely, three of them: componentDidMount, componentDidUpdate, and componentWillUnmount"
        }
    ]

    return (

        <div className='flex justify-around gap-4'>
            {
                question.map(ques=><button className='bg-violet-800 py-5 px-12 text-white font-xl  '>{ques.question}</button>)
            }

        </div>
    );
};

export default Accordion;