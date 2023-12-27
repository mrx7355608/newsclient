import React from "react";
import Headline from "./Components/Headline";
import Logo from "./Components/Logo";
import Categories from "./Components/Categories";
import NewsTopic from "./Components/NewsTopic";

function App() {
    return (
        <React.Fragment>
            <Headline />
            <section
                className="mx-auto"
                style={{
                    width: "80%",
                }}
            >
                <Logo />
                <Categories />
                <section className="flex gap-4 items-start w-full my-8">
                    <div className="w-3/4">
                        <NewsTopic />
                    </div>
                    <div></div>
                </section>
            </section>
        </React.Fragment>
    );
}

export default App;
