import React from "react";
import Headline from "./Components/Headline";
import Logo from "./Components/Logo";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer/Footer";
import Newslist from "./Components/News/Newslist";

function App() {
    return (
        <React.Fragment>
            <div className="min-h-screen">
                <Headline />
                <section
                    className="mx-auto"
                    style={{
                        width: "80%",
                    }}
                >
                    <Logo />
                    <Categories />
                    <Newslist />
                </section>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
