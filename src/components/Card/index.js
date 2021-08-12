import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import TextField from '../TextField';
import PasswordInput from '../PasswordInput';
import Button from '../Button';
import { useForm } from 'react-hook-form';

export default function SimpleCard({ title, simpleInputs, passwordInputs, buttons, footerMessage }) {
  const classes = useStyles();
  const { handleSubmit, register, formState:{ errors }, setError } = useForm();

  function registerUser(data) {
    const { senha, repitaSenha } = data;
    if(senha !== repitaSenha ){
      setError('senha', { type:'validate'}, { shouldFocus: true})
      setError('repitaSenha', { type:'validate'}, { shouldFocus: false})
      return;
    }
    console.log(data);

  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {title}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(registerUser)}>

          {simpleInputs.map(item => 
          <TextField
            {...item}
            register={() => register(item.id, { required: true })}
            key={item.id}
            error={!!errors[item.id]}
          />
          )}
          
          {passwordInputs.map(item => 
          <PasswordInput
            {...item}
            register={() => register(item.id, { required: true })}
            key={item.id}
            error={!!errors[item.id]}
          />
          )}

          <div className={classes.buttons}>
            {buttons.map(item => 
            <Button
              {...item}
              key={item.id}
            />
            )}
          </div>

          <Typography className={classes.footer} color="textPrimary" gutterBottom>
            {footerMessage}
          </Typography>

        </form>

      </CardContent>
    </Card>
  );
}