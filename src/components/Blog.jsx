import React from 'react';
import Banner from './Banner';

const Blog = () => {
    return (
        <>
            <Banner>Blog</Banner>

            <section className='mx-2 md:mx-10 lg:mx-20 my-16 md:my-32 space-y-8'>

                <div>
                    <h3 className="text-lg text-ui-dark font-semibold">When should you use context API?</h3>
                    <p className='text-ui-light-gray'>
                        You should use context API when you need to share information to components.
                        It is a way to passing information through many different components without using prop drilling which can be messy somtimes.It also provides a way to pass information from child to parent component.
                    </p>
                </div> 

                <div>
                    <h3 className="text-lg text-ui-dark font-semibold">What is a custom hook?</h3>
                    <p className='text-ui-light-gray'>
                        Custom hooks in React are functions that can be reused across different components.They can be used to simplify common tasks like fetching data from APIs or managing state,which can then be used in multiple places without the need for repetitive code.
                    </p>
                </div>
                
                <div>
                    <h3 className="text-lg text-ui-dark font-semibold">What is useRef?</h3>
                    <p className='text-ui-light-gray'>
                        In React, useRef is a hook that allows you to create a variable-like object that persists across renders of a component. This object can hold onto values that you don't want to trigger a re-render when they change. It can be used to keep track of the previous state of a component.
                    </p>    
                </div>

                <div>
                    <h3 className="text-lg text-ui-dark font-semibold">What is useMemo?</h3>
                    <p className='text-ui-light-gray'>
                        In React, useMemo is a hook that allows you to memoize a function's result, which means that it can store the output of a function so that it doesn't have to recompute the value every time it's called. This is useful when you when you want to avoid unnecessary re-renders in your component.
                    </p>
                </div>

            </section>
        </>
    );
};

export default Blog;