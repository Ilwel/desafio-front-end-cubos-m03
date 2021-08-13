import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "60%",
        width: 392,
        borderRadius: 16
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        marginTop: 80
    },
    form: {
        marginTop: 50,
        display: 'flex',
        flexDirection: 'column',
        gap: 50,
        alignItems: 'center'
    },
    buttons: {
        display: 'flex',
        gap: 20
    },
    footer: {
        fontSize: 14
    },
    alert: {
        margin: 0
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default useStyles;