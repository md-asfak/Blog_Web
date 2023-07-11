import React from 'react'
import heroImg from "./images/hero.png"
import bigcardImg from "./images/long-card.png"
import card_1 from "./images/card1.png"
import card_2 from "./images/card2.png"
import card_3 from "./images/card3.png"
import card_h from "./images/long-big-card.png"
import blog_1 from "./images/banner.png"


export default function Blog() {
    return (
        <>
            <header>
                <nav>
                    <h1>GreatZone</h1>
                    <ul>

                        <li>Home</li>
                        <li>Post</li>
                        <li><i class="fa-brands fa-instagram"></i></li>
                        <li> <i class="fa-brands fa-twitter"></i></li>
                        <li><i class="fa-brands fa-linkedin"></i></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section id="hero">
                    <div className="hero_content">
                        <h1>Make Zone Better !</h1>
                        <h4>Why Zone Better Inportant ? </h4>
                    </div>
                    <div className="hero_img">
                        <img src={heroImg} alt="" />
                    </div>
                </section>

                <div className="h_card">
                    <div className="card_content">
                        <h2> Long established</h2>
                        <p>p Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ab ut minus ad commodi minima voluptates soluta iste laudantium, praesentium earum explicabo quia labore quasi nemo exercitationem? Illum, numquam minima.</p>
                        <div className="status">
                            <p>8 Feb 2023 </p>
                          <a href="#post">  <button className='btn_read'>Read More</button> </a>
                        </div>
                    </div>
                    <img src={bigcardImg} alt="#" />
                    
                </div>

                <div className="card_container">
                    <div className="card_wrapper">
        
                        <div className="v_card">
                            <div className="card_content">
                                <h2> Long established</h2>
                                <p>p Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ab ut minus ad commodi minima voluptates soluta iste laudantium, praesentium earum explicabo quia labore quasi nemo exercitationem? Illum, numquam minima.</p>
                                <div className="status">
                                    <p>8 Feb 2023 </p>
                                    <button className='btn_read'>Read More</button>
                                </div>
                            </div>
                            <img src={card_1} alt="#" />
                        </div>


                        <div className="v_card">
                            <div className="card_content">
                                <h2> Long established</h2>
                                <p>p Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ab ut minus ad commodi minima voluptates soluta iste laudantium, praesentium earum explicabo quia labore quasi nemo exercitationem? Illum, numquam minima.</p>
                                <div className="status">
                                    <p>8 Feb 2023 </p>
                                    <button className='btn_read'>Read More</button>
                                </div>
                            </div>
                            <img src={card_2} alt="#" />
                        </div>


                        <div className="v_card">
                            <div className="card_content">
                                <h2> Long established</h2>
                                <p>p Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ab ut minus ad commodi minima voluptates soluta iste laudantium, praesentium earum explicabo quia labore quasi nemo exercitationem? Illum, numquam minima.</p>
                                <div className="status">
                                    <p>8 Feb 2023 </p>
                                    <button className='btn_read'>Read More</button>
                                </div>
                            </div>
                            <img src={card_3} alt="#" />
                        </div>

                    </div>
                </div>


                <div className="h_card">
                    <div className="card_content">
                        <h2> Long established</h2>
                        <p>p Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ab ut minus ad commodi minima voluptates soluta iste laudantium, praesentium earum explicabo quia labore quasi nemo exercitationem? Illum, numquam minima.</p>
                        <div className="status">
                            <p>8 Feb 2023 </p>
                            <button className='btn_read'>Read More</button>
                        </div>
                    </div>
                    <img src={card_h} alt="#" />
                </div>

                <div className="btn_sec">
                    <button className='btn_1'>See more <i class="fa-light fa-arrow-down-to-arc"></i> </button>
                </div>

            </main>
            <hr />
            <footer>
                <p>GreatZone  2023 copyright all right reserved</p>

                <ul>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li> <i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                </ul>
            </footer>







        </>
    )
}
