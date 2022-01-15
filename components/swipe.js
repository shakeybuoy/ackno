import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Home.module.css'
import 'swiper/css';
import Popup from './popup'
const planetContents = {
    items: [{
        id: 1,
        name: 'Planet 1',
        sales: '52.8K ETH',
        volumes: ' 97.1K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate mauris ut odio maximus elementum. Nullam vitae gravida leo. Pellentesque pretium tempus lorem id convallis. Nullam eu velit non urna semper fermentum'
    }, {
        id: 2,
        name: 'Planet 2',
        sales: '12K ETH'
        , volumes: ' 7.7K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate mauris ut odio maximus elementum. Nullam vitae gravida leo. Pellentesque pretium tempus lorem id convallis. Nullam eu velit non urna semper fermentum'

    },
    {
        id: 3,
        name: 'Planet 3',
        sales: '47K ETH'
        , volumes: ' 10.1K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate mauris ut odio maximus elementum. Nullam vitae gravida leo. Pellentesque pretium tempus lorem id convallis. Nullam eu velit non urna semper fermentum'

    }, {
        id: 4,
        name: 'Decentraland',
        sales: '34K ETH'
        , volumes: ' 23.1K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate mauris ut odio maximus elementum. Nullam vitae gravida leo. Pellentesque pretium tempus lorem id convallis. Nullam eu velit non urna semper fermentum'

    }, {
        id: 5,
        name: 'The Sandbox',
        sales: '43K ETH'
        , volumes: ' 12.8K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate mauris ut odio maximus elementum. Nullam vitae gravida leo. Pellentesque pretium tempus lorem id convallis. Nullam eu velit non urna semper fermentum'

    }, {
        id: 6,
        name: 'Gods Unchained',
        sales: '37K ETH'
        , volumes: ' 42.5K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate mauris ut odio maximus elementum. Nullam vitae gravida leo. Pellentesque pretium tempus lorem id convallis. Nullam eu velit non urna semper fermentum'

    }, {
        id: 7,
        name: 'Splinterlands',
        sales: '20K ETH'
        , volumes: ' 2.5K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate mauris ut odio maximus elementum. Nullam vitae gravida leo. Pellentesque pretium tempus lorem id convallis. Nullam eu velit non urna semper fermentum'
    }, {
        id: 8,
        name: 'Planet 4',
        sales: '6K ETH'
        , volumes: ' 99K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate mauris ut odio maximus elementum. Nullam vitae gravida leo. Pellentesque pretium tempus lorem id convallis. Nullam eu velit non urna semper fermentum'
    }, {
        id: 9,
        name: 'Axie Infinity',
        sales: '52K ETH'
        , volumes: ' 33K',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate mauris ut odio maximus elementum. Nullam vitae gravida leo. Pellentesque pretium tempus lorem id convallis. Nullam eu velit non urna semper fermentum'
    },

    ]
};
export default () => {

    let planetList = [];
    var planets = [];
    var name = 'axie-infinity-';
    var planetSrc = './images/';
    var ext = '.gif'
    for (var i = 2; i <= 10; i++) {
        var planet = planetSrc + name + i + ext;

        planetList.push(planet);
    }

    planetList.forEach((item, index) => {
        var pl = planetContents.items[index]
        planets.push(
            <SwiperSlide key={index} >
                <img src={item} alt={pl.name} />
                <Popup title={pl.name} volumes={pl.volumes} sales={pl.sales} description={pl.description} />
            </SwiperSlide>
        )
    })

    return (
        <div>

            <Swiper
                grabCursor='true'
                centeredSlides='true'
                loop='true'
                slidesPerView={5} >
                <div >
                    {planets}
                </div>
            </Swiper>



        </div>

    );
};