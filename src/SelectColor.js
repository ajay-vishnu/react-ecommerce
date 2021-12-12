import classes from './SelectColor.module.css';

const SelectColor = (props) =>   {

    return (
        <div className={classes.SelectColor}>
            <img onClick={props.onItemColorClick} className={classes.cardImage + (props.activeItem ? ' ' + classes.currentCard : '')} src={props.imageUrl} alt="" />
        </div>
    )
    
}

export default SelectColor;