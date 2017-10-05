//4th step create App.js
import React from "react";

function Header () {
    return (
        <h1>Wecome To The Business Homepage</h1>
    )
}

function Body () {
    return (
    <div>
         <h2>Here is list of item in store</h2>
     </div>
    )
}

function List () {
    return (
        <div>
            <h3>List of Cars</h3>
            <ul>
                <li>Honda: Reasonable price $12,000</li>
                <img src="https://images.honda.ca/models/H/Models/2017/civic_sedan/hondaca_modelNav.png?width=480&quality=100"></img>
                <li>Nissan: Cheapest price: $8,000</li>
                <img
                src="http://st.motortrend.com/uploads/sites/5/2015/10/2016-Nissan-370Z-rear-three-quarter-in-motion-02.jpg"></img>
                <li>Toyota: Fancy price: $15,000</li>
                <img
                src="http://www.toyota-global.com/showroom/toyota_design/images/mainVisual_innovation_toyota_design.jpg"></img>
            </ul>
        </div>
    )
}

function Footer () {
    return (
    <div>
         <h4>More detail you can take a look on my main page: <a href="toyota.com">HomePage</a> </h4>
     </div>
    )
}
//5th regular html
function App() {
    return (
        <div>
            <Header/>
            <Body/>
            <List/>
            <Footer/>
        </div>
    )
}

export default App;
