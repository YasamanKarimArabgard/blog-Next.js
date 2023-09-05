import { BookmarkIcon, ChatBubbleBottomCenterIcon, HeartIcon } from "@heroicons/react/24/outline";

const BlogsList = ({ blogsData }) => {
    return (
        <>
            {
                blogsData.docs.map(blog => (
                    <div className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-xl p-2 h-fit">
                        {/* image content */}
                        <div className="flex justify-center items-center h-72 p-2">
                            <img src={blog.coverImage} className="h-auto w-full"></img>
                        </div>
                        {/* blog content */}
                        <div className="bg-gray-100 h-40 p-2 rounded-xl flex flex-col justify-between">
                            <h2 className="text-2xl">{blog.title}</h2>
                            <div className="h-1/2 flex flex-col justify-between">
                                <div className="flex justify-between items-center">
                                    <div className="w-1/3 flex justify-between items-center">
                                        <img src="#" className="w-7 h-7 rounded-full" />
                                        <span className="text-lg">ياسمن</span>
                                    </div>
                                    <span className="bg-blue-200 text-blue-600 px-2 rounded-xl text-xl">تست</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex justify-between items-center gap-x-2">
                                        <span className="px-2 py-1 bg-gray-200 rounded-md flex gap-x-2 items-center">
                                            <ChatBubbleBottomCenterIcon className="w-6 h-6 text-gray-500" />
                                            <span className="text-gray-500">{blog.commentsCount}</span>
                                        </span>
                                        <span className="px-2 py-1 bg-red-100 rounded-md flex gap-x-2 items-center">
                                            <HeartIcon className="w-6 h-6 text-red-500" />
                                            <span className="text-red-500">{blog.likesCount}</span>
                                        </span>
                                        <span className="px-2 py-1 bg-blue-100 rounded-md">
                                            <BookmarkIcon className="w-6 h-6 text-blue-400" />
                                        </span>
                                    </div>
                                    <span className="text-lg text-gray-500">{blog.readingTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
};

export default BlogsList;