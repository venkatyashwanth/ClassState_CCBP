const Welcome = (props) => {
    const {name,greeting} = props;
    return <h1>Hello {name}, Function: {greeting}</h1>
}

Welcome.defaultProps = {
    name: "yashwanth",
    greeting: "This is default"
}
    
export default Welcome 