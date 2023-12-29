import NewsTopic from "../News/NewsTopic";

export default function MoreNewsSection() {
    return (
        <section className="flex gap-4 items-start w-full my-8">
            <div className="w-3/4">
                <NewsTopic text={"مزید خبریں پڑھیں"} />
            </div>
            <div></div>
        </section>
    );
}
