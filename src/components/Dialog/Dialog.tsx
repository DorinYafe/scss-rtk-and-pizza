import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface Props {
  open: boolean;
}

const MuiDialog = ({ open }: Props) => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='responsive-dialog-title'>
        <DialogTitle id='responsive-dialog-title'>
          {'Thanks for using our service :)'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Order has been sent to the restaurant
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus style={{ color: '#be5f7b' }}>
            Cheers
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MuiDialog;
