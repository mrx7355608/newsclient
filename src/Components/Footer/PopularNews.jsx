export default function PopularNews() {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-full h-48 bg-gray-600">
                <img src="" className="h-full w-full fit-cover" />
            </div>
            <div className="space-y-2">
                <p className="text-sm hover:text-blue-500">
                    خبردار! فضل الرحمن کو سیریس سکیورٹی تھریٹس ہیں،وزیر داخلہ
                </p>
                <p className="text-xs text-yellow-600">دسمبر 21, 2020</p>
                <p className="text-xs/7 text-gray-500">
                    فیصل آباد (مانیٹرنگ ڈیسک ) جڑانوالہ پولیس تھانہ سٹی کی حدود
                    م کی آخری سیٹج ہارنے پر مبینہ...
                </p>
            </div>
        </div>
    );
}
