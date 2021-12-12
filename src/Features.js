import classes from './Features.module.css';

const FeaturesCard = (props) => {

    console.log(props)
    
    return (
        <span className={classes.Features + (props.activeFeature ? ' ' + classes.currentFeature : '')} onClick={props.onFeatureClick}>
            {props.feature}
        </span>
    )
}

export default FeaturesCard;