import Link from "next/link";
import { AdjustmentsHorizontalIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-2xl">
        <div className="grid md:grid-cols-12 md:row-span-2 gap-4 bg-gray-100 min-h-screen md:grid-rows-[60px_minmax(300px,1fr)]">
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
          <div className="bg-blue-200 md:col-span-9">blog</div>
        </div>
      </div>
    </div>
  )
}
