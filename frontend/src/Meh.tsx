import React from 'react';
import styles from './Meh.module.css';

function TopBanner() {
  return (
    <div className="row">
      <div>
        <br></br>
      </div>
      <div className="col align-self-center">
        <h1 className={styles.h1}>Welcome to Joel's Movie Site</h1>
      </div>{' '}
      <div>
        <br></br>
      </div>
      <div>
        <img src="./JoelHiltonHeadshot (1).jpg" alt="ownersFace"></img>
        <br></br>
        <p>
          Here you can see all the Movies Joel has collect, as well as check out
          his podcasts!
        </p>
      </div>
    </div>
  );
}

export default TopBanner;
