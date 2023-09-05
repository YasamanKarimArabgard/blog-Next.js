import Link from "next/link";

const CategoryMobile = ({postcategories}) => {
    return (
        <div className={"flex md:hidden gap-x-4 overflow-auto pb-5 px-4 md:px-0"}>
            <Link href={`/blogs`}>
                <a className="block border border-gray-500 rounded-3xl text-gray-500 bg-white px-3 py-1 whitespace-nowrap text-sm">همه مقالات</a>
            </Link>
            {
                postcategories.map((category) => (
                    <Link href={`/blogs/${category.englishTitle}`} key={category.id}>
                        <a className="block border border-gray-500 rounded-3xl text-gray-500 bg-white px-3 py-1 whitespace-nowrap text-sm">{category.title}</a>
                    </Link>
                ))
            }
        </div>
    );
};

export default CategoryMobile;