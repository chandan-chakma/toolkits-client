import React from 'react';

const Blog = () => {
    return (
        <div className='w-9/12 mx-auto'>
            <h3>this is a blog</h3>
            <div tabindex="0" class="collapse collapse-plus  border border-base-300 bg-base-100 rounded-box text-left mb-12">
                <div class="collapse-title text-xl  font-medium">
                    How will you improve the performance of a React Application?
                </div>
                <div class="collapse-content">
                    <p>Now days react is most popular to building websites.React application can be large which affect on application performance.React library does not improve application on its own.If you plan to attract lot of user for your website you need to avoid unnecessary hassels. You need to program your application correctly.  </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus  border border-base-300 bg-base-100 rounded-box text-left mb-12">
                <div class="collapse-title text-xl  font-medium">
                    what are different ways to manage a state in a react application?
                </div>
                <div class="collapse-content">
                    <p>Every react components has a built in state. State is a object which store property values to component.There are several ways to manage react state include .Hooks .Context-api etc.  </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus  border border-base-300 bg-base-100 rounded-box text-left mb-12">
                <div class="collapse-title text-xl  font-medium">
                    How does prototypical inheritance work?
                </div>
                <div class="collapse-content">
                    <p>Prototypical inheritance is use to add methods and properties in object.It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the Prototype of an object  </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus  border border-base-300 bg-base-100 rounded-box text-left mb-12">
                <div class="collapse-title text-xl  font-medium">
                    Why you do not set the state directly in React. For example, if you have const [products,setProduct]=useState([])?.why you do not set products=[...] instead,you use the setProduct?
                </div>
                <div class="collapse-content">
                    <p>If you update state directly after calling setState it will just replace of your update.it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. You will lose control of the state across all components.  </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus  border border-base-300 bg-base-100 rounded-box text-left mb-12">
                <div class="collapse-title text-xl  font-medium">
                    You have an array of products.Each product has a name,price,description etc. how will you implement a search to find product by name ?
                </div>
                <div class="collapse-content">
                    <p>product.filter(p =arrow  p.name.toLowerCase())  </p>
                </div>
            </div>

            <div tabindex="0" class="collapse collapse-plus  border border-base-300 bg-base-100 rounded-box text-left mb-12">
                <div class="collapse-title text-xl  font-medium">
                    What is unit test? why should write unit tests?
                </div>
                <div class="collapse-content">
                    <p>JavaScript Unit Testing is a method where JavaScript test code is written for a web page or web application module. It is then combined with HTML as an inline event handler and executed in the browser to test if all functionalities are working as desired  </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;