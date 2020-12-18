import React from 'react';
import BaseLayout from "../components/BaseLayout";
import NavigationHeader from "../components/NavigationHeader";
import styles from "../config/styles";
import {NextSeo} from "next-seo";

class Archive extends React.Component {
    render () {
        return <BaseLayout>
            <NextSeo
                title="Blog — Dragomir Țurcanu"
                description="Blog posts archive"
            />
            <div className="activeBodyWrapper">
                <NavigationHeader></NavigationHeader>
                <h1 className="pageHeader">Archive</h1>
                <p>Still in the making :P</p>
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
            `}</style>
        </BaseLayout>
    }
}

export default Archive;