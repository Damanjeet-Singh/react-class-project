import classes from './MyButton.module.css';

export const MyButton = () => {
    console.log('classes', classes);
    return <button className={classes.bg_green} type="button">My Button</button>
};

// export default MyButton;
// export { MyButton };