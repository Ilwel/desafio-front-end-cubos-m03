import Button from '@material-ui/core/Button';

export default function CustomButtom({ type, color, content }) {

    return (
        <Button variant={type} color={color}>
            {content}
        </Button>
    )

}