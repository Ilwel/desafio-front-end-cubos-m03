import MuiAlert from '@material-ui/lab/Alert';

export default function Alert(props) {
    return <MuiAlert elevation={5} variant="filled" {...props} />;
}