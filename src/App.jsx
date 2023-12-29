import React from "react";
import Headline from "./Components/Headlines/Headline";
import Logo from "./Components/Logo";
import Categories from "./Components/Categories";
import Footer from "./Components/Footer/Footer";
import MoreNewsSection from "./Components/News/MoreNewsSection";

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
                    <MoreNewsSection />
                </section>
            </div>
            <Footer />
        </React.Fragment>
    );
}

export default App;
