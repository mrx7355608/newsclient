export default function Article() {
    return (
        <div className="flex gap-3">
            <div className="w-20 h-16 bg-gray-600">
                <img src="" className="h-full w-full fit-cover" />
            </div>
            <div>
                <p className="text-xs hover:text-blue-500">
                    خبردار! فضل الرحمن کو سیریس سکیورٹی تھریٹس ہیں،وزیر داخلہ
                </p>
                <span className="text-xs text-yellow-600">
                    {" "}
                    دسمبر 21, 2020{" "}
                </span>
            </div>
        </div>
    );
}
