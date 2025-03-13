import classes from './MyButton.module.css';

export const MyButton = () => {
    function handleClick() {
        console.log("My Button Clicked!");
    }

    console.log('classes', classes);
    // return <button className={classes.bg_green} type="button" onClick={handleClick}>My Button</button>
    // return <button className={classes.bg_green} type="button" onClick={function() {console.log('Hi')}}>My Button</button>
    return <button className={classes.bg_green} type="button" onClick={() => { console.log('Inline function') }}>My Button</button>
};

// export default MyButton;
// export { MyButton };