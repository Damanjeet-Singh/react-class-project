// export function LoginStatus() {
//     let content;
//     const isLoggedIn = false;
//     if (isLoggedIn) {
//         content = <p>Is Logged-in</p>;
//     } else {
//         content = <h1>Is Logged-out</h1>;
//     }

//     return content;
// }

export function LoginStatus() {
    const isLoggedIn = true;

    return <>
    { isLoggedIn ?  <p>Is Logged-in</p> : <h1>Is Logged-out</h1>}
    </>
}