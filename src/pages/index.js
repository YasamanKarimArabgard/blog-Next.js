import Link from "next/link";
import { AdjustmentsHorizontalIcon, BookmarkIcon, ChatBubbleBottomCenterIcon, ChevronDownIcon, HeartIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import BlogsList from "@/components/blogs/BlogsList";
import axios from "axios";

export default function Home({ blogsData }) {

  const [isOpen, setIsOpen] = useState(false);
  console.log(blogsData);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-2xl">
        <div className="grid md:grid-cols-12 md:row-span-2 gap-8 bg-gray-50 min-h-screen md:grid-rows-[60px_minmax(300px,1fr)]">
          <div className="bg-blue-200 hidden md:block md:col-span-3 md:row-span-2">
            <div className="bg-white rounded-xl overflow-hidden">
              {/* acc header */}
              <div className="flex justify-between items-center p-4 bg-purple-200 cursor-pointer" onClick={() => setIsOpen((prevState) => !prevState)}>
                <span>دسته بندي مقالات</span>
                <ChevronDownIcon className={`w-6 h-6 text-purple-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
              </div>
              {/* acc content */}
              <div className={`py-2 ${isOpen ? 'block' : 'hidden'}`}>
                <Link href='#'>
                  <a className="block px-4 hover:bg-purple-50">ري اكت</a>
                </Link>
                <Link href='#'>
                  <a className="block px-4 hover:bg-purple-50">همه مقالات</a>
                </Link><Link href='#'>
                  <a className="block px-4 hover:bg-purple-50">علمي</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block md:col-span-9">
            <div className="bg-white rounded-xl px-4 flex items-center">
              <div className="flex gap-x-2 items-center">
                <AdjustmentsHorizontalIcon className="w-6 h-6" />
                <span className="text-gray-700">مرتب سازي :</span>
                <ul className="flex items-center gap-x-4">
                  <li className="py-4 cursor-pointer text-gray-700">جديد ترين</li>
                  <li className="py-4 cursor-pointer text-gray-700">پرفروش ترين</li>
                  <li className="py-4 cursor-pointer text-gray-700">محبوب ترين</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            <BlogsList blogsData={blogsData} />
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {

  const { data: result } = await axios.get("http://localhost:5000/api/posts");
  const { data } = result;
  return {
    props: {
      blogsData: data
    }
  }
}