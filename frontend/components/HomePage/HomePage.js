import Link from 'next/link'
import styles from "./HomePage.module.css";
import {fetcher} from "../../fetch/";
import { useRouter } from 'next/router';
import Image from 'next/image'

export default function HomePage() {
  return (
	<><div className={styles.main}>
		<div className={styles.Nav}>
		  <div className={styles.NavbarContainer}>
			  <div className={styles.NavLogo}>
				  <a href="/">Luther Marketplace</a>
			  </div>
			  <h1 className={styles.menufonts}>Explore</h1>
			  <h1 className={styles.menufonts}>Near Me</h1>
			  <h1 className={styles.menufonts}>What's New?</h1>
			  <h1 className={styles.signin}>Sign-in</h1>
			  <h1 className={styles.sellfonts}><button className={styles.sellbtn}><a href="http://10.28.164.119:8000/admin/products/product/add/" target="_blank">Get Started</a></button></h1>
			  <h1 className={styles.burgerfont}><button className={styles.burger}><a href="http://10.28.164.119:8000/admin/products/product/add/" target="_blank">Menu</a></button></h1>
		  </div>
	  </div>
	  <div className={styles.midsection}>
	  <div className={styles.lutherbell}></div>
	  <div className={styles.commute}>127<br></br><h1 className={styles.commtxt}>Commuters</h1></div>
	  <div className={styles.sales}>Sales<br></br><h1 className={styles.salestxt}>512,030</h1><h2 className={styles.gains}>+41.3%</h2></div>
	  			<h1 className={styles.luthercomm}>
				  LUTHER COMMUNITY
			 	</h1>
				 <h1 className={styles.lutherstate}>
				  Services that our<br></br> community needs<br></br> most
			 	</h1>
				 <h1 className={styles.getstarted}><button className={styles.starter}><a href="http://10.28.164.119:8000/admin/products/product/add/" target="_blank">Get Started</a></button></h1>
	  </div>
	  <div className={styles.format}>
	  <div className={styles.backlayerimage}>
	  <div class={styles.imglayer2}>
	  </div>
	  <Link href="/login">
				<a className={styles.linklayer1}> RideShare </a>
	  </Link>
	  </div>
	  <div className={styles.backlayerimage2}>
	  <div class={styles.imglayer}>
	  </div>
	  <Link className={styles.linklayer} href="/shop">
				<a className={styles.linklayer2}> Shop </a>
	  </Link>
	  </div>
	  </div>
</div></>
  )
}
