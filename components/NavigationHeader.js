import React from 'react';
import Link from "next/link";
import styles from "../config/styles";

class NavigationHeader extends React.Component {

    render() {
        return <div className="navigation">
            <Link href="/" as={`/`}>
                <a className="navlink">home</a>
            </Link>

            <style jsx>{`
                .navigation .navlink {
                    font-size: 16px;
                    color: ${ styles.colors.secondary };
                    text-decoration: none;
                }
           `}</style>
        </div>;
    }
}

export default NavigationHeader;