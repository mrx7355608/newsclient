import React from "react";
import Headline from "./Components/Headline";
import Logo from "./Components/Logo";
import Categories from "./Components/Categories";

function App() {
    return (
        <React.Fragment>
            <Headline />
            <div
                className="mx-auto"
                style={{
                    width: "80%",
                }}
            >
                <Logo />
                <Categories />
            </div>
        </React.Fragment>
    );
}

export default App;
