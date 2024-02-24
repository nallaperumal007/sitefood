import React from 'react';
import { useTypewriter } from 'react-simple-typewriter';

function Home() {
    const [typeEffect] = useTypewriter({
        words: [
            'Find delicious meals made just for you.',
            'Enjoy fresh, tasty dishes every day.',
            'Discover new flavors that will delight your taste buds.',
            'Explore our menu full of yummy options.',
            'Experience the joy of good food with us.',
            'Treat yourself to a satisfying meal today.',
        ],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    });

    return (
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex flex-column justify-content-center align-items-center text-light shadow'>
                <div className='container'>
                    <h4 className='mb-5 text-warning fw-bold'>Welcome To Food Website</h4>
                    <h4 className='mb-5 text-success fw-bold'>{typeEffect}</h4>
                    >
                    <div className='row justify-content-center'>
                        <div className='col-md-4 mb-3'>
                            <a href='https://food-two-tan.vercel.app/' className='btn btn-danger btn-lg btn-block'>WebApp</a>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <a href='https://food-admin-sigma.vercel.app/login' className='btn btn-light btn-lg btn-block'>Admin</a>
                        </div>
                        <div className='col-md-4 mb-3'>
                            <a href='https://qrcode-seven-theta.vercel.app' className='btn btn-light btn-lg btn-block'>QrCode</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Home;
