import React from 'react';
import styles from "../config/styles";

class BaseLayout extends React.Component {

    render() {
        return <div className="parentWrapper">
            <div className="bodyWrapper">
                {this.props.children}
            </div>
            <style jsx>{`
            .parentWrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                min-height: calc(100vh);
                
                padding: 25px;
            }
            
            .bodyWrapper {
                max-width: 768px;
                width: 100%;
            }
        `}</style>

            <style jsx global>{`
                
                body {
                    margin: 0;
                    font-family: ${styles.fontSettings.fontFamilySerif};
                }
                
        `}</style>
        </div>
    }
}

export default BaseLayout;