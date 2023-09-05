import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
const SortBar = () => {
    return (
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
    );
};

export default SortBar;