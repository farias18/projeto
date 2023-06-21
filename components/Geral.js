import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from './Footer'
import Header from './Header';

const Geral = (props) => {

    return (
        <>
            <Header />
            <div className='py-3 text-white text-center mb-3'>
                <Container>
                    <h1>{props.titulo}</h1>
                </Container>
            </div>

            <Container className='mb-5 pb-4'>
                {props.children}
            </Container>
            <Footer />
        </>
    )
}

export default Geral