import Link from "next/link";

export default function notFount() {
  return (
  <main className="text-center">
    <h2 className="text-3xl">There was a Problem</h2>
    <p>We could not found the Page</p>
    <p>Go back to <Link href={'/'}>DashBoard</Link></p>
  </main>
  )
}