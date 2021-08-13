import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import TextField from '../TextField';
import PasswordInput from '../PasswordInput';
import Button from '../Button';
import Alert from '../Alert';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import makeUrl from '../../environment'
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

export default function SimpleCard({ title, simpleInputs, passwordInputs, buttons, footerMessage, typeCard }) {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, register, formState: { errors }, setError } = useForm();
  const [open, setOpen] = useState(false);
  const [apiError, setApiError] = useState('');
  const { setToken } = useContext(AuthContext);

  async function registerUser(data) {
    const { senha, repitaSenha } = data;

    setLoading(true);

    if (typeCard === "register") {

      if (senha !== repitaSenha) {
        setError('senha', { type: 'validate' }, { shouldFocus: true })
        setError('repitaSenha', { type: 'validate' }, { shouldFocus: false })
        return;
      }

      setApiError('');

      const res = await fetch(makeUrl('usuarios'), {
        method: "POST",
        body: JSON.stringify({
          nome: data.seuNome,
          email: data.email,
          senha: data.senha,
          nome_loja: data.nomeLoja
        }),
        headers: {
          'Content-type': 'application/json',
        }
      })

      setLoading(false);

      const resData = await res.json();
      console.log(resData);
      if (res.ok) {
        history.push('/login')
        return;
      }

      setApiError(resData);

    } else if (typeCard === "login") {

      setApiError('');

      const res = await fetch(makeUrl('login'), {
        method: "POST",
        body: JSON.stringify({
          email: data.email,
          senha: data.senha,
        }),
        headers: {
          'Content-type': 'application/json',
        }
      })

      setLoading(false);

      const resData = await res.json();
      console.log(resData);
      if (res.ok) {
        setToken(resData.token);
        history.push('/produtos')
        return;
      }

      setApiError(resData);

    }


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

  const apiErrorClose = () => {

    setOpen(false);
    setApiError('');

  }

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
              register={() => register(item.id, { required: true, })}
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

          {apiError &&

            <Snackbar open={open} autoHideDuration={4000} onClose={apiErrorClose}>
              <Alert onClose={apiErrorClose} severity="error">
                {apiError}
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


          <Backdrop className={classes.backdrop} open={loading}>
            <CircularProgress color="inherit" />
          </Backdrop>


          <Typography className={classes.footer} color="textPrimary" gutterBottom>
            {footerMessage}
          </Typography>

        </form>

      </CardContent>
    </Card>
  );
}