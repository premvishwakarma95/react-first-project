import React, { useEffect } from 'react';
import vg from "../assests/2.webp";
import { AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram } from "react-icons/ai"

export default function Home() {
    useEffect(() => {
        document.title = "Home";
    }, [])
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>Techystar</h1>
                    <p>Solutions to all your problems</p>
                </main>
            </div>

            <div className='home2'>
                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems ou face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className='home3' id="about">
                <div>
                    <h1>Who we are?</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui quis officia obcaecati, soluta iusto nostrum at explicabo nisi neque aliquid quidem aut tenetur et. Numquam magni ut dicta. Facilis atque eligendi quaerat exercitationem explicabo, voluptates, officia quia rerum numquam illum facere iusto provident dolorem molestias vero, dolor cumque dolores! Tenetur, consequuntur ex consectetur magnam debitis dicta nemo aliquid corporis atque!</p>
                </div>
            </div>

            <div className='home4' id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>
                        <div style={{ animationDelay: "0.3s", }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{ animationDelay: "0.5s", }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>

                        <div style={{ animationDelay: "0.7s", }}>
                            <AiFillYoutube />
                            <p>YouTube</p>
                        </div>

                        <div style={{ animationDelay: "0.3s", }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}
