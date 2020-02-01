import React from 'react';
import BaseLayout from "../components/BaseLayout";
import styles from "../config/styles";
import NavigationHeader from "../components/NavigationHeader";

class About extends React.Component {
    render () {
        return <BaseLayout>
            <div className='activeBodyWrapper'>
                <NavigationHeader></NavigationHeader>
                <h1 className="pageHeader">About Me</h1>
                <div className="photo"><img src="/images/photo.jpg" alt="My Photo"/></div>
                <p className="content">
                    Et imperdiet mi vulputate. Praesent et dui est. Nunc varius iaculis enim, vel venenatis mi. Fusce quis metus nulla. Cras auctor imperdiet porttitor. Nulla vel consequat ligula. Quisque mattis blandit turpis, nec porttitor est suscipit laoreet. Praesent at neque posuere, rhoncus urna nec, rhoncus elit. Duis eget ex nec odio dictum ullamcorper at quis magna. Curabitur nec sapien id leo posuere egestas eget sit amet quam. Praesent vestibulum est lorem, quis fringilla velit auctor elementum. Phasellus id diam nibh. Phasellus sollicitudin molestie est ac dignissim.

                    <br/>
                    <br/>
                    Praesent nisl purus, euismod eu accumsan non, ullamcorper eu nibh. Sed accumsan ullamcorper diam, ac vestibulum quam pretium et. Donec non neque accumsan, volutpat neque non, venenatis enim. Vivamus imperdiet nunc id auctor faucibus. Phasellus convallis, dui nec tempus tristique, ipsum elit molestie dolor, dignissim molestie sapien lorem eget nisi. Donec quis blandit mauris, vitae pharetra urna. Donec semper orci lectus, consectetur bibendum est pulvinar vel. Duis viverra non dolor id volutpat. In laoreet est non augue egestas consequat. Nulla facilisi. Sed tincidunt rutrum libero, eget pretium felis tristique a. Nullam nec vestibulum urna. Vestibulum in sapien sagittis, sagittis ex ut, lobortis diam. Integer vel quam laoreet, finibus urna eu, efficitur augue.

                    Etiam elit neque, eleifend eu justo non, bibendum scelerisque lacus. Fusce elementum quam nec dui sodales egestas. Proin hendrerit neque nisl, id sagittis massa porta ut. Curabitur maximus hendrerit dui, eu malesuada ipsum dapibus nec. Vivamus non tellus ante. Integer finibus, justo et semper viverra, tortor libero accumsan dolor, sit amet efficitur risus eros quis dui. Phasellus imperdiet orci ut ante tincidunt, eget ullamcorper metus ultricies. Aliquam pulvinar lectus eros, mattis rhoncus quam molestie id. Maecenas posuere diam arcu, ut dignissim erat aliquet sed. Curabitur at blandit risus. Morbi ut libero ultricies nunc condimentum sodales. Mauris molestie mattis libero, id posuere justo elementum nec.
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
                    
                    text-align: center;
                }
            `}</style>
        </BaseLayout>
    }
}

export default About;