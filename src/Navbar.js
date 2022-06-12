import React from 'react';

const activeSide = "bg-gray-800 h-screen w-60 transform transition-all fixed duration-700 text-white flex justify-center p-2"
const hiddenSide = "bg-gray-800 h-screen w-60 transform transition-all fixed duration-700 text-white flex justify-center p-2 -translate-x-60"
const activeButton = "absolute w-10 h-10 bg-yellow-400 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center"
const normalButton = "absolute w-10 h-10 bg-yellow-400 top-0 cursor-pointer transition-all transform duration-700 flex items-center justify-center translate-x-60"

//-------------main part --------
class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {active: false};
		}
    render() {
        return (<div>
            <div className="w-screen h-screen flex transform relative transition-all duration-1000">
                <div
//-----use a class to style base on state : active(true) or hidden(false)
                    className={this.state.active ? activeSide:hiddenSide}>
                    Sidebar
                </div>
                <div className="bg-gray-900 w-full h-screen flex  justify-center text-white">
                    <Info stateSide={this.state.active} />
                </div>
            </div>
            <div className={this.state.active ? normalButton : activeButton}
//----onClick the state is changed -------
                onClick={() =>this.setState({ active: !this.state.active })}
            >	&#9776;</div>

        </div>);
    }
}
//-------------complementary part --------
const characterTag = "text-gray-400"
const tag = "text-pink-600"
const text = "text-green-200"
const addedText = "-translate-x-60"
const addedClass = "text-green-400"

class Info extends React.Component {

    render() {
        return (
            <div className="w-full max-w-4xl h-10 rounded-lg p-2">
                <div className="p-4">
                    <span>active:</span>
                    <span className="text-yellow-600 p-2">  {this.props.stateSide.toString()}</span>
                </div>
                <div>

                    <div className="bg-gray-800 p-4 flex flex-row">
                        <div className="p-2">
                            <div className="py-2">
                                Sidebar class
                        </div>
                            <span className={tag}>
                                className
                            </span>
                            <span className={characterTag}>
                                =
                            </span>
                            {!(this.props.stateSide) &&
                                <span className={text}>
                                    {'"' + activeSide}
                                    <span className={addedClass}>
                                        {" " + addedText + '"'}
                                    </span>
                                </span>}
                            {(this.props.stateSide) &&
                                <span className={text}>
                                    {'"' + activeSide + '"'}
                                </span>}
                        </div>
                        <div  className="p-2">
                            <div className="py-2">
                                Button class
                        </div>
                            <span className={tag}>
                                className
                            </span>
                            <span className={characterTag}>
                                =
                            </span>
                            {!(this.props.stateSide) &&
                                <span className={text}>
                                    {'"' + activeButton}
                                    <span className={addedClass}>
                                        {" " + addedText.substr(1) + '"'}
                                    </span>
                                </span>}
                            {(this.props.stateSide) &&
                                <span className={text}>
                                    {'"' + activeButton + '"'}
                                </span>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

//React.render(<Navbar />, document.getElementById('app'));
export default Navbar;

