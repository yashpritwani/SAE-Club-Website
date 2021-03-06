import React from 'react';
import "./Hero.css";



function Hero() {

    

    return (
        <div className="Hero">
            <img src="./main3.jpeg" />
            <p spy={true}
            smooth={true}
            duration={800}
            data-aos-delay="800"
            data-aos={"fade-up"}><span>Sed ut perspiciatis</span> unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
            <div className="hero-right" >
                <h2 spy={true}
            smooth={true}
            duration={900}
                data-aos-delay="900"
            data-aos={"fade-up"}>THE <br /><span>BLUE JAY</span> <br/> RACING TEAM</h2>
            </div>
        </div>
    )
}

export default Hero
