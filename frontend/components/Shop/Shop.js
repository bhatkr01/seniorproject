import { useState } from "react";
import styles from "./Shop.module.css";
import {fetcher,fetcher1} from "../../fetch/";
import { useRouter } from 'next/router'
import useSWR from "swr";
import Image from "next/image";
export default function Login() {
	const router=useRouter()

	const { data, error } = useSWR("products/", fetcher1);
	console.log(data)
	if (!data) return "I am loading"
	if (error) return "there is error"
	// const [fields, setFields] = useState({
	// 	email: "",
	// 	password: "",
	// fetch("http://127.0.0.1:8000/api/products", {
	// 	method: 'GET',
	// })
	// 	.then((res) => res.json())
 // .then((data) => console.log(data))
	// 	.catch((error) => {
	// 		console.error("Error:", error);
	// 	});
// });
	return (
		<><><div className={styles.Nav}>
			<div className={styles.NavbarContainer}>
				<div className={styles.NavLogo}>
					<a href = "/">Luther Marketplace</a>
				</div>
				<h1 className={styles.menufonts}>Explore</h1>
				<h1 className={styles.menufonts}>Near Me</h1>
				<h1 className={styles.menufonts}>What's New?</h1>
				<h1 className={styles.signin}>Sign-in</h1>
				<h1 className={styles.menufonts}><button className={styles.sellbtn}><a href = "http://10.28.164.119:8000/admin/products/product/add/" target="_blank">Sell my items</a></button></h1>
			</div>
		</div>
		</><div className={styles.headerimagecontainer}>
				<div className={styles.btns}>
					<button className={styles.btn}>Discover</button>
					<button className={styles.btn}>Furniture</button>
					<button className={styles.btn}>Electronics</button>
					<button className={styles.btn}>Books</button>
					<button className={styles.btn}>Appliances</button>
					<button className={styles.btn}>Kitchen</button>
					<button className={styles.btn}>Decor</button>
					<button className={styles.btn}>Clothing</button>
				</div>
				<div className={styles.textheader}>
					<h1 className={styles.parentheadtext}>Find out what the <br></br>community is selling</h1>
					<h3 className={styles.subheadtext}>Millions of people trust Luther Marketplace everyday<br></br>Explore and get the goods you need for cheap</h3>
				</div>
				<div className={styles.searchbtns}>
					<form method="get" action="">
						<input className={styles.btn} type="text" placeholder="Search" required></input>
					</form>
				</div>
			</div>
			<div className={styles.dropdown}>
				<button className={styles.dropbtn}>Filters</button>
				<div className={styles.dropdowncontent}>
					<a href="#">Condition: New</a>
					<a href="#">Condition: Used-Good</a>
					<a href="#">Condition: Average</a>
					<a href="#">Price Ascending</a>
					<a href="#">Price Descending</a>
					<a href="#">Category:Clothes</a>
					<a href="#">Category:Furniture</a>
					<a href="#">Category:Electronics</a>
				</div>
			</div>
			<div className={styles.dropdown2}>
				<button className={styles.dropbtn2}>Popular</button>
				<div className={styles.dropdowncontent2}>
					<a href="#">High to Low</a>
					<a href="#">Low to High</a>
				</div>
			</div>
			<div>
				<div className={styles.imagegrid}>
					{data.map((product) => (
						<div key={product.id}>
							<Image
								src={`${product.product_picture}`}
								width={500}
								height={500} className={styles.imageformat}/>
							<div className={styles.productlayer}>
								<p className = {styles.productdescription}>{product.product_description}</p>
								<p className = {styles.condbtn}><h1 className = {styles.condbtntxt}>{product.product_condition}</h1></p>
							    <p className = {styles.pricebtn}>${product.product_price}</p>
							</div>
							
						</div>
					))}
				</div>
			</div></>
			
	)
}
