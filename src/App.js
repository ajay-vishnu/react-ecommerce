import React from 'react';
import './App.css';
import ProductData from './ProductData';
import logo from './images/header-logo.png';
import time from './images/time.png';
import heartrate from './images/heartrate.png';
import SelectColor from './SelectColor';
import FeaturesCard from './Features';

class App extends React.Component {

    state = {
        currentCard: 0,
        currentFeature: 0
    }

    onItemColorClick = (pos) =>    {
        this.setState({currentCard: pos});
    }

    onFeatureClick = (pos) => {
        console.log('Clicked on ' + pos)
        this.setState({currentFeature: pos})
    }

    render ()   {

        const selectColours = ProductData.colorOptions.map((item, pos) => {
            return (<SelectColor imageUrl={item.imageUrl} activeItem = {pos == this.state.currentCard} onItemColorClick = {() => {this.onItemColorClick(pos)}} key = {pos}/>)
        })

        const features = ProductData.featureList.map((item, pos) => {
            return (<FeaturesCard feature={item} activeFeature={pos == this.state.currentFeature} onFeatureClick={() => {this.onFeatureClick(pos)}} key={pos}/>)
        })
        
        return (
            <div className="App">
                <div className="header">
                    <img src={logo} alt="amazon-logo" className="ecommerce-logo" />
                </div>
                <div className="product-details">
                    <div className="product-view">
                        <img className="product-img" src={ProductData.colorOptions[this.state.currentCard].imageUrl} alt="watch" />
                        <img className={"product-img-feature" + (this.state.currentFeature === 0 ? '' : ' invisible')} src={time} alt="time-feature" />
                        <img className={"product-img-feature heartrate" + (this.state.currentFeature === 0 ? ' invisible' : '')} src={heartrate} alt="heartrate-feature" />
                    </div>
                    <div className="product-description">
                        <h2>{ProductData.title}</h2>
                        <p>{ProductData.description}</p>
                        <h3>Select Colour</h3>
                        {selectColours}
                        <div className="product-features">
                            <h2>Features</h2>
                            {features}
                        </div>
                        <h3 className='submit'>Buy Now</h3>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default App;
