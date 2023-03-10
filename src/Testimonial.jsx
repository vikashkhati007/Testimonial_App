import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Button from './components/Button';
import { MdOutlineLocalPostOffice } from 'react-icons/md';
import { BiUserCircle } from 'react-icons/bi';
import { BsFileEarmarkPost } from 'react-icons/bs';
import Container from './components/container';

export default function Testimonial() {
    const [text, setText] = useState('');
    const [testimonial, settestimonial] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${text}`)
            .then(response => response.json())
            .then(json => settestimonial(json))
            .catch(error => console.error(error));
    }, [text]);

    return (
        <div>
            <Title text={'Testimonials'} />
            <Button class={'users'} icon={<BiUserCircle />} text={'Users'} func={(e) => {
                setText('users');
            }}></Button>
            <Button class={'comments'} icon={<MdOutlineLocalPostOffice />} text={'Comments'} func={(e) => {
                setText('comments');
            }}></Button>
            <Button class={'posts'} icon={<BsFileEarmarkPost />} text={'Posts'} func={(e) => {
                setText('posts');
            }}></Button>
            <div>
                <h2 className='margin'>
                    {!text? 'Click from Above? ': null}
                    
                </h2>
            </div>
            <div>
                {testimonial && testimonial.map((item) => {
                    return (<div>
                        {text === 'users'? 
                        <div>
                    <Container text={'Username: ' + item.name} /> 
                   
                    <Container text={'Email: ' + item.email}/>
                    </div>
                        : null}
                         {text === 'comments'? 
                    <Container text={'Comments: ' + item.body}/>
                        : null}
                      {text === 'posts'? 
                    <Container text={'Post Name: '+ item.title}/>
                        : null}
                    </div>);
                })}
            </div>
        </div>
    )
}
