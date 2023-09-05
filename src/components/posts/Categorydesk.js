import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";

const Categorydesk = ({ postcategories }) => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="hidden md:block md:col-span-3 md:row-span-2">
                <div className="bg-white rounded-xl overflow-hidden">
                    {/* acc header */}
                    <div className="flex justify-between items-center p-4 bg-purple-200 cursor-pointer" onClick={() => setIsOpen((prevState) => !prevState)}>
                        <span className="text-xl">دسته بندي مقالات</span>
                        <ChevronDownIcon className={`w-6 h-6 text-purple-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </div>
                    {/* acc content */}
                    <div className={`py-2 ${isOpen ? 'block' : 'hidden'}`}>
                        <Link href={`/blogs`}>
                            <a className="block px-4 hover:bg-purple-50 text-xl py-1">همه مقالات</a>
                        </Link>
                        {
                            postcategories.map((category) => (
                                <Link href={`/blogs/${category.englishTitle}`} key={category.id}>
                                    <a className="block px-4 hover:bg-purple-50 text-2xl py-1">{category.title}</a>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categorydesk;