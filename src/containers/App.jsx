import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import CarouselItem from '../components/CarouselItem';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const URLAPI = 'http://localhost:3000/initalState/';
const App = () => {
    
    const videos = useInitialState(URLAPI);

    return (
        <div className="App">
            <Header />
            <Search />
            {
                Array.isArray(videos.myList) && videos.myList.length >= 1 &&
                <Categories title="Mi lista">
                    <Carousel>
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                        <CarouselItem />
                    </Carousel>
                </Categories>
            }

            {
                Array.isArray(videos.trends) && videos.trends.length >= 1 &&
                <Categories title="Tendencias">
                    <Carousel>
                        {videos.trends.map(item =>
                            <CarouselItem key={item.id} {...item}/>
                        )}
                    </Carousel>
                </Categories>
            }

            {
                Array.isArray(videos.originals) && videos.originals.length >= 1 &&
                <Categories title="Originales">
                    <Carousel>
                        {videos.originals.map(item =>
                            <CarouselItem key={item.id} {...item}/>
                        )}
                    </Carousel>
                </Categories>
            }
            
            <Footer />
        </div>
    );
}

export default App;