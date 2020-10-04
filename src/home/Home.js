import React from '../../node_modules/react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
            alt="" />

            <div className="home__row">
                <Product
                    id = "1234"
                    title = "Lean Startup"
                    price={11.96}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
                />

                <Product
                    id = "1235"
                    title = "Teddy Bear"
                    price={30.12}
                    rating={5}
                    image="https://www.galeriabukowski.pl/environment/cache/images/0_0_productGfx_d7fa5ae16e95bfb9087b58666fb72c28.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id = "12346"
                    title = "Fridge"
                    price={3023.21}
                    rating={4}
                    image="https://www.lg.com/au/images/fridges/md07504149/gallery/d2.jpg"
                />

                <Product
                    id = "1237"
                    title = "Cat bed"
                    price={25.32}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61Q5cTAl0uL._AC_SX450_.jpg"
                />

                <Product
                    id = "1238"
                    title = "Vase"
                    price={40.23}
                    rating={4}
                    image="https://www.westelm.co.uk/site/WE/Product%20Images/pure-white-ceramic-vase-collection-a760-alt-2-z.jpg?resizeid=61&resizeh=450&resizew=450"
                />
            </div>

            <div className="home__row">
                <Product
                    id = "1239"
                    title = "eAirtec 81 cm (32 inches) HD Ready LED TV 32DJ (Black) (2020 Model)"
                    price={8999.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81t2A6uhm4L._SX466_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
