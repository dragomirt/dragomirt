import BaseLayout from "../components/BaseLayout";
import styles from "../config/styles";
import Link from "next/link";
import RecentPosts from "../components/RecentPosts";

/**
 * @return {string}
 */

const Homepage = () => (
    <>
        <BaseLayout>
            <div className="headerBlock">
                <h1 className="nameHeader">Dragomir Țurcanu</h1>
                <span className="nameTag"><a href="https://twitter.com/dragomirturcanu" target="_blank">@dragomirturcanu</a></span>
            </div>

            <div className="contentBody">
                <p className="shortDescription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>

                <div className="baseContent">
                    <div className="navigation">
                        <Link href="/archive" as={`/archive`}>
                            <a className="navlink">Archive</a>
                        </Link>

                        <Link href="/about" as={`/about`}>
                            <a className="navlink">About Me</a>
                        </Link>

                        <Link href="/contact" as={`/contact`}>
                            <a className="navlink">Contact</a>
                        </Link>
                    </div>

                    {/*<RecentPosts></RecentPosts>*/}
                </div>

            </div>
        </BaseLayout>

        <style jsx>{`
            .nameHeader {
                margin-top: 0;
                font-family: ${styles.fontSettings.fontFamilySerif};
                font-weight: ${styles.fontSettings.fontWeight};
                color: ${styles.colors.black};
            }
            
            .nameTag {
                margin-top: -22px;
            }
            
            .nameTag a {
                color: ${styles.colors.secondary};
                font-size: 22px;
                text-decoration: none;
            }
            
            .headerBlock {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            
            .contentBody {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            
            .contentBody .shortDescription {
                color: ${styles.colors.secondary};
                font-size: 22px;
                text-align: center;
                line-height: 30px;
                margin-top: 75px;
                margin-bottom: 25px;
            }
            
            .contentBody .baseContent {
                max-width: 540px;
                width: 100%;
                
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                
                border-top: 1px solid ${styles.colors.lightGray};
                padding-top: 30px;
            }
            
            .contentBody .baseContent .navigation {
                width: 100%;
                padding: 0 50px;
                
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                box-sizing: border-box;
            }
            
            .contentBody .baseContent .navigation .navlink {
                font-size: 24px;
                color: ${ styles.colors.secondary };
                text-decoration: none;
            }
        `}</style>
    </>
);

export default Homepage