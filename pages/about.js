import React from 'react';
import BaseLayout from "../components/BaseLayout";
import styles from "../config/styles";
import NavigationHeader from "../components/NavigationHeader";
import {NextSeo} from "next-seo";

class About extends React.Component {
    render () {
        return <BaseLayout>
            <NextSeo
                title="About — Dragomir Țurcanu"
                description="Dragomir Țurcanu, Software Engineer"
            />
            <div className='activeBodyWrapper'>
                <NavigationHeader></NavigationHeader>
                <h1 className="pageHeader">About Me</h1>
                <div className="photo"><img src="/images/photo.jpg" alt="My Photo"/></div>
                <p className="content">
                    Hi there! As you might have noticed on the homepage, I do enjoy playing with various types and flavors of software, for fun and for a living. I have a keen interest in performance optimizations and intense computation ( image, video, and 3d manipulation ). Although throughout my career my main area of concern were web technologies, I'm enthusiastic about native platforms, hardware, and IoT.
                    <br/><br/><br/>
                    From the age of 16 when I began working in tech, I have had the chance to meet a lot of deeply passionate and skillful professionals that have helped me enrich and expand my knowledge regarding the aforementioned topics. Today, I enjoy exploring new things about my craft and helping others in their beginnings.
                    <br/><br/>Currently, enrolled in the "Informational Management" degree at the Computer Science department of the Technical University of Moldova.
                    <br/><br/><br/>
                    My hobbies are running and cooking. I'm deeply convinced that my <a href="https://www.strava.com/activities/2858417572/overview" target="_blank">23:27 5k</a> is unbeatable. Prove me wrong :P
                    <br/><br/><br/>
                    You can usually find me in <a href="https://www.google.com/maps/place/Chisinau/data=!4m2!3m1!1s0x40c97c3628b769a1:0x37d1d6305749dd3c?sa=X&ved=2ahUKEwjQr4KP4LLnAhWHbFAKHVKuCRQQ8gEwG3oECBEQBA" target="_blank">Chisinau, Moldova</a>.
                </p>
            </div>

            <style jsx>{`
                .activeBodyWrapper {
                    display: flex;
                    justify-content: center;
                    flex-direction: column;
                    align-items: center;
                    
                    max-width: 540px;
                    
                    margin: auto;
                }
                
                .photo {
                    max-width: 260px;
                    max-height: 260px;
                    
                    width: 260px;
                    height: 260px;
                }
                
                .photo img {
                    width: 100%;
                    object-fit: contain;
                }
                
                .pageHeader {
                    font-size: 36px;
                    color: ${styles.colors.black};
                    font-weight: ${styles.fontSettings.fontWeight};
                    margin: 40px auto;
                }
                
                p.content {
                    margin-top: 75px;
                    font-size: 18px;
                    color: ${styles.colors.secondary};
                    font-weight: ${styles.fontSettings.fontWeight};
                    
                    text-align: left;
                }
            `}</style>
        </BaseLayout>
    }
}

export default About;