// export function UserName(props) {
//     // const userName = 'John';
//     console.log('props', props);

//     return <>
//     <h3>{props.userName}</h3>
//     <p className={props.className}>{props.className}</p>
//     </>;
// }

export function UserName({userName, className, bgColor}) {

    return <>
    {/* <h3 style="background-color: orange;">{userName + ' Verified'}</h3> */}
    <h3 style={{
        color: 'red',
        // 'background-color': 'green',
        backgroundColor: bgColor
    }}>{userName + ' Verified'}</h3>
    <p className={className}>{className}</p>
    </>;
}