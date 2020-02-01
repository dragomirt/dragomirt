import React from 'react';
import BaseLayout from "../components/BaseLayout";
import NavigationHeader from "../components/NavigationHeader";
import styles from "../config/styles";

class Contact extends React.Component {
    render () {
        return <BaseLayout>
            <div className="activeBodyWrapper">
                <NavigationHeader></NavigationHeader>
                <h1 className="pageHeader">Contact</h1>
                <div className="content">
                    <table>
                        <tr>
                            <td>email</td>
                            <td>dtu@dragomir.com</td>
                        </tr>

                        <tr>
                            <td>github</td>
                            <td><a href="https://github.com/dragomirt" target="_blank">https://github.com/dragomirt</a></td>
                        </tr>

                        <tr>
                            <td>twitter</td>
                            <td><a href="https://twitter.com/dragomirturcanu" target="_blank">@dragomirturcanu</a></td>
                        </tr>

                        <tr>
                            <td>linkedin</td>
                            <td><a href="https://www.linkedin.com/in/dragomirt/" target="_blank">https://www.linkedin.com/in/dragomirt/</a></td>
                        </tr>
                    </table>
                </div>
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
                
                .pageHeader {
                    font-size: 36px;
                    color: ${styles.colors.black};
                    font-weight: ${styles.fontSettings.fontWeight};
                    margin: 40px auto;
                }
                
                div.content table tr td:first-child {
                    font-weight: 600;
                    padding-right: 15px;
                }
            `}</style>
        </BaseLayout>
    }
}

export default Contact;