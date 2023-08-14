import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import ex from "../images/logo.png"

  
  const IndexPage = () => (
    <Layout>
      <div className={styles.main}>
        <div className={styles.hero}>
          <StaticImage
            src="../images/your-image.png"
            loading="eager"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Hero Image"
            style={{ marginBottom: `var(--space-3)` }}
          />
  
        <div className={styles.flex}> 
                <div className={styles.hero}>
                  <p>
                    <b className={`${styles.intro1} ${styles.link}`}>
                      Intro
                    </b>
                    <br /><br /><br />
        
                    <h4 className={`${styles.lorem}`}>
                      <span role="img" aria-label="Icon">🌟</span> Lorem Ipsum
                    </h4>
        
                    <p className={`${styles.loremlow}`}>
                      <span role="img" aria-label="Icon">📝</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <br /><br />
        
                    <div>
                      <Link className={`${styles.link} ${styles.button}`} to="/page-2">
                        <span role="img" aria-label="Icon">🔨</span> Work
                      </Link>{" "}
        
                      <Link className={`${styles.link} ${styles.button}`} to="/using-typescript">
                        <span role="img" aria-label="Icon">👤</span> About
                      </Link>{" "}
        
                      <Link className={`${styles.link} ${styles.button}`} to="/using-ssr">
                        <span role="img" aria-label="Icon">✉️</span> Contact
                      </Link>
                    </div>
                  </p>
                </div>
                <div>
                  <img src={ex}/>
                </div>
        </div>
        </div>
      </div>
    </Layout>
  );
  

export const Head = () => <Seo title="My Gasby Web" />

export default IndexPage
