import Button from '@material-ui/core/Button';

export default function CustomButtom({ variant, color, type ,content }) {

    return (
        <Button variant={variant} color={color} type={type}>
            {content}
        </Button>
    )

}