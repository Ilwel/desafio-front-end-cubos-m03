import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import useStyles from './styles';
import TextField from '../TextField';
import PasswordInput from '../PasswordInput';
import Button from '../Button';
import Alert from '../Alert';
import { useForm } from 'react-hook-form';

export default function SimpleCard({ title, simpleInputs, passwordInputs, buttons, footerMessage }) {
  const classes = useStyles();
  const { handleSubmit, register, formState: { errors }, setError } = useForm();
  const [open, setOpen] = useState(false);

  function registerUser(data) {
    const { senha, repitaSenha } = data;

    if (senha !== repitaSenha) {
      setError('senha', { type: 'validate' }, { shouldFocus: true })
      setError('repitaSenha', { type: 'validate' }, { shouldFocus: false })
      return;
    }
    console.log(data);

  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  let fillAllFields = false
  const allIds = simpleInputs.map(item => item.id).concat(passwordInputs.map(item => item.id))
  for (const id of allIds) {
    if (errors[id]?.type === 'required') fillAllFields = true;
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
              register={() => register(item.id, { required: true,})}
              key={item.id}
              error={!!errors[item.id]}
              type={item.id === "email" ? item.id : ""}
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
          
          {fillAllFields &&
            (
              <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                  Preencha os campos
                </Alert>
              </Snackbar>
            )
          }

          {errors?.senha?.type === "validate" &&
            
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="error">
                As senhas devem ser iguais
              </Alert>
            </Snackbar>

          }


          <div className={classes.buttons}>
            {buttons.map(item =>
              <Button
                {...item}
                key={item.id}
                onClick={handleClick}
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