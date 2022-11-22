import React from 'react';

const Blog = () => {
    return (
        <div className=' p-5 w-3/4 '>
            <div className=''>
                <p className='font-bold'>1.What are the difference between SQL and NoSQL?</p>
                <p className='text-lg'><span className='font-bold'>Ans:</span>SQL databases have fixed or static or predefined schema,are not suited for hierarchical data storage,are best suited for complex queries,Vertically Scalable,Follows ACID property.On the other hand,NoSQL have dynamic schema,are best suited for hierarchical data storage,are not so good for complex queries,Horizontally scalable,Follows CAP(consistency, availability, partition tolerance).</p>
    
            </div>
            <div className='pt-5'>
                <p className='font-bold'>2.What is JWT, and how does it work?</p>
                <p className='text-lg'><span className='font-bold'>Ans:</span>JWTs are digitally signed using either a secret (HMAC) or a public/private key pair (RSA or ECDSA) which safeguards them from being modified by the client or an attacker. Stored only on the client: You generate JWTs on the server and send them to the client. The client then submits the JWT with every request.</p>
            </div>
            <div className='pt-5'>
                <p className='font-bold'>3.What is the difference between javascript and NodeJS?</p>
                <p className='text-lg'><span className='font-bold'>Ans:</span>Javascript is a programming language that is used for writing scripts on the website,can only be run in the browsers,is basically used on the client-side,is capable enough to add HTML and play with the DOM,can run in any browser engine as like JS core in safari and Spidermonkey in Firefox,is used in frontend development.On the other hand,NodeJS is a Javascript runtime environment,can run Javascript outside the browser with the help of NodeJS,is mostly used on the server-side,does not have capability to add HTML tags,V8 is the Javascript engine inside of node.js that parses and runs Javascript,Nodejs is used in server-side development.</p>
            </div>

            <div className='pt-5'>
                <p className='font-bold'>4.How does NodeJS handle multiple requests at the same time?</p>
                <p className='text-lg'><span className='font-bold'>Ans:</span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;