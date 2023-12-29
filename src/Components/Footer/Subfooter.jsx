export default function Subfooter() {
    return (
        <div className="flex items-center pt-4 justify-between">
            <span className="text-white">
                کاپی رائٹس © 2023 Urdu Fast News - Urdu News Blogger Template
            </span>
            <div className="text-gray-200 text-xs">
                <ul className="space-x-4">
                    <ExternalLink text={"ہم سے رابطہ کریں"} />
                    <ExternalLink text={"ہمارے بارے میں"} />
                    <ExternalLink text={"ہم سے رابطہ"} />
                    <ExternalLink text={"کاپی رائٹس"} />
                    <ExternalLink text={"قوائدوضوابط"} />
                    <ExternalLink text={"ڈسکلیمر"} />
                </ul>
            </div>
        </div>
    );
}

function ExternalLink({ text }) {
    return (
        <li className="inline-block ml-4 hover:text-blue-500">
            <a href="#" target="_blank">
                {text}
            </a>
        </li>
    );
}
