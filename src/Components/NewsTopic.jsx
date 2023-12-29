export default function NewsTopic({ text }) {
    return (
        <div className="flex w-full items-start flex-col gap-0">
            <p className="font-semibold text-white bg-black text-sm px-5 py-3 w-max pb-4">
                {text}
            </p>
            <hr className="w-full h-[3px] bg-black inline-block m-0 border-none" />
        </div>
    );
}
