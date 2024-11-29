function Button({primary, disabled, title, href, onClick}) {
    let Component = 'button';
    const props = {}

    if (href) {
        Component = 'a';
        props.href = href;
    }

    if (onClick) {
        props.onClick = onClick;
    }

    return (
        <Component {...props}>{title}</Component>
    )
}

export default Button;