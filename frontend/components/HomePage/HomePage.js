import Link from 'next/link'

export default function HomePage() {
  return (
    <div>

        <h1>
	  Welcome to Luther Marketplace.
        </h1>
	  <ul>
	  <li>
	  <Link href="/login">
	  Login
	  </Link>
	  </li>
	  <li>
	  <Link href="/shop">
	  Shop 
	  </Link>
	  </li>
	  </ul>

    </div>
  )
}
