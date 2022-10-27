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
	  <a> Login </a>
	  </Link>
	  </li>
	  <li>
	  <Link href="/shop">
	  <a> Shop </a>
	  </Link>
	  </li>
	  </ul>

    </div>
  )
}
