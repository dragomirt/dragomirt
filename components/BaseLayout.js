import React from 'react';
import Fonts from "./Fonts";

class BaseLayout extends React.Component {

    componentDidMount() {
        Fonts();
    }

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
                
                height: calc(100vh);
                width: calc(100vw);
            }
            
            .bodyWrapper {
                max-width: 768px;
                width: 100%;
            }
        `}</style>

            <style jsx global>{`
                
                body {
                    margin: 0;
                }
                
                .garamond {
                    font-family: "Cormorant Garamond", roboto;
                }
        `}</style>
        </div>
    }
}

export default BaseLayout;