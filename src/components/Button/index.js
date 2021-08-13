import Button from '@material-ui/core/Button';

export default function CustomButtom({ variant, color, type ,content, onClick }) {

    return (
        <Button variant={variant} color={color} type={type} onClick={onClick}>
            {content}
        </Button>
    )

}