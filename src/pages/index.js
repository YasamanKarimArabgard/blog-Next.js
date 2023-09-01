import Link from "next/link";
import { AdjustmentsHorizontalIcon, BookmarkIcon, ChatBubbleBottomCenterIcon, ChevronDownIcon, HeartIcon, LinkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

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
          <div className="md:col-span-9 grid grid-cols-6 gap-8">{
            [1, 2, 3, 4, 5, 6].map(index => (
              <div className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-xl p-2">
                {/* image content */}
                <div className="w-full h-auto">
                  <img src="#"></img>
                </div>
                {/* blog content */}
                <div className="bg-gray-100 h-40 p-2 rounded-xl flex flex-col justify-between">
                  <h2 className="text-2xl">title</h2>
                  <div className="h-1/2 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                      <div className="w-1/3 flex justify-between items-center">
                        <img src="#" className="w-7 h-7 rounded-full" />
                        <span className="text-lg">username</span>
                      </div>
                      <span className="bg-blue-200 text-blue-600 px-2 rounded-xl text-xl">course</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex justify-between items-center gap-x-2">
                        <span className="px-2 py-1 bg-gray-200 rounded-md">
                          <ChatBubbleBottomCenterIcon className="w-6 h-6 text-gray-500" />
                        </span>
                        <span className="px-2 py-1 bg-blue-100 rounded-md">
                          <BookmarkIcon className="w-6 h-6 text-blue-400" />
                        </span>
                        <span className="px-2 py-1 bg-red-100 rounded-md">
                          <HeartIcon className="w-6 h-6 text-red-500" />
                        </span>
                      </div>
                      <span className="text-lg text-gray-500">time</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }</div>
        </div>
      </div>
    </div>
  )
}
