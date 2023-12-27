import { FaSearch } from "react-icons/fa";

export default function Categories() {
    return (
        <div className="w-full shadow-lg bg-white">
            <div className="flex flex-wrap ">
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3">
                    <p className="text-lg pb-2">تاریخی مضمونات</p>
                </div>
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3">
                    <p className="text-lg pb-2">سائنس اور ٹیکنالوجی</p>
                </div>
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3">
                    <p className="text-lg pb-2">صحت</p>
                </div>
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3">
                    <p className="text-lg pb-2">سیاحت اور سفر</p>
                </div>
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3">
                    <p className="text-lg pb-2">ادبیات</p>
                </div>
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3">
                    <p className="text-lg pb-2">تعلیم</p>
                </div>
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3">
                    <p className="text-lg pb-2">فن و ثقافت</p>
                </div>
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3">
                    <p className="text-lg pb-2">کھیل</p>
                </div>
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3">
                    <p className="text-lg pb-2">معاشرتی مسائل</p>
                </div>
                <div className="border-gray-300 border-r-[1px] w-max h-12 flex items-center px-5 py-3 cursor-pointer hover:bg-gray-100">
                    <p className="text-lg pb-2">خبریں اور مواقع</p>
                </div>
            </div>
            <div className="w-full relative flex items-center justify-end">
                <input
                    type="text"
                    placeholder="Search"
                    className="text-sm font-urdu px-1 pl-6 border-gray-200 border-2 pb-2"
                />
                <FaSearch className="absolute top-7.5 left-3" size={13} />
            </div>
        </div>
    );
}
