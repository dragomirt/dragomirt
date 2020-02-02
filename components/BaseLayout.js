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
                
                min-height: 100%;
            }
            
            .bodyWrapper {
                max-width: 768px;
                width: 100%;
            }
        `}</style>

        <style jsx global>{`
                
              html,
              body,
              #__next {
                height: 100%;
                width: 100%;
              }
            
            body {
                margin: 0 !important;
                box-sizing: border-box;
                padding: 25px;
                font-family: ${styles.fontSettings.fontFamilySerif};
            }
                
        `}</style>
        </div>
    }
}

export default BaseLayout;