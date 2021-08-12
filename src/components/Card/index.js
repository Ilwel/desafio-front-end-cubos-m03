import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import TextField from '../TextField';
import PasswordInput from '../PasswordInput';
import Button from '../Buttom';

export default function SimpleCard({ title, simpleInputs, passwordInputs, buttons, footerMessage }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {title}
        </Typography>
        <form className={classes.form} noValidate autoComplete="off">

          {simpleInputs.map(item => <TextField label={item} />)}
          {passwordInputs.map(item => <PasswordInput label={item} />)}
          <div className={classes.buttons}>
            {buttons.map(item => <Button type={item.type} color={item.color} content={item.content} />)}
          </div>

          <Typography className={classes.footer} color="textPrimary" gutterBottom>
            {footerMessage}
          </Typography>

        </form>

      </CardContent>
    </Card>
  );
}