
const Button = ({ type = "button", children, click = () => { } }) => (
    <button type={type} onClick={click}>{children}</button>
);

export default Button