import React from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Cards";

class App extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Cards/>
            </div>
        );
    }
}

export default App;