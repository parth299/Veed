import React, { useEffect } from 'react';
import styles from './carousel.module.css'; // Import the CSS module

const companyLogos = [
  'https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/netflix_53cebd27b1/netflix_53cebd27b1.png',
  'https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/ubs_6bebab925b/ubs_6bebab925b.png',
  'https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/bbc_222468ab60/bbc_222468ab60.png',
  'https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/google_09644c00ae/google_09644c00ae.png',
  'https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/target_652c903f65/target_652c903f65.png',
  'https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/amazon_6eb4586569/amazon_6eb4586569.png',
  'https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/p_and_g_1_2f9d9b5986/p_and_g_1_2f9d9b5986.png',
  'https://cdn-site-assets.veed.io/cdn-cgi/image/width=640,quality=75,format=auto/meta_5d91e3dc70/meta_5d91e3dc70.png',
  // Add more logos as needed
];

function Demo() {
  useEffect(() => {
    // Clone the logos for continuous scrolling
    let copy = document.querySelector('.logosslide')?.cloneNode(true);
    if(!copy){
      console.log("No copy")
      copy = document.createTextNode("String")
    }
    document.querySelector('.logos')?.appendChild(copy);
  }, []);

  return (
    <div className={styles.logos}>
      <div className={styles.logosslide}>
        <img src={companyLogos[0]} />
        <img src={companyLogos[1]} />
        <img src={companyLogos[2]} />
        <img src={companyLogos[3]} />
        <img src={companyLogos[4]} />
        <img src={companyLogos[5]} />
        <img src={companyLogos[6]} />
        <img src={companyLogos[7]} />
        <img src={companyLogos[0]} />
        <img src={companyLogos[1]} />
        <img src={companyLogos[2]} />
        <img src={companyLogos[3]} />
        <img src={companyLogos[4]} />
        <img src={companyLogos[5]} />
        <img src={companyLogos[6]} />
        <img src={companyLogos[7]} />
        <img src={companyLogos[0]} />
        <img src={companyLogos[1]} />
        <img src={companyLogos[2]} />
        <img src={companyLogos[3]} />
        <img src={companyLogos[4]} />
        <img src={companyLogos[5]} />
        <img src={companyLogos[6]} />
        <img src={companyLogos[7]} />
      </div>
    </div>
  );
}

export default Demo;
