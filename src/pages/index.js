import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Link href={`/blogs`}>
        <a className="p-3 text-2xl font-bold bg-blue-100">مشاهده بلاگ ها</a>
      </Link>
    </div>
  )
}