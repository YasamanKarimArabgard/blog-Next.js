import BlogsList from "@/components/posts/BlogsList";
import axios from "axios";
import Categorydesk from "@/components/posts/Categorydesk";
import CategoryMobile from "@/components/posts/CategoryMobile";
// import SortBar from "@/components/posts/SortBar";

export default function Home({ blogsData, postcategories }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto lg:max-w-screen-2xl">
        <div className="grid md:grid-cols-12 md:row-span-2 gap-8 bg-gray-50 min-h-screen md:grid-rows-[60px_minmax(300px,1fr)]">
          {/* category desk */}
          <Categorydesk postcategories={postcategories} />
          {/* category moblie */}
          <CategoryMobile postcategories={postcategories} />
          {/* sort desk */}
          <div className="hidden md:block md:col-span-9">
            {/* <SortBar /> */}
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

  const { params } = context;

  console.log(params);

  const { data: result } = await axios.get(`http://localhost:5000/api/posts`);
  const { data: postcategories } = await axios.get("http://localhost:5000/api/post-category");

  const { data } = result;
  return {
    props: {
      blogsData: data,
      postcategories: postcategories.data,
    }
  }
}