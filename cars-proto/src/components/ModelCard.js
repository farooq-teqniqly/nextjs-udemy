import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import ConfirmDeleteDialog from './ConfirmDeleteDialog';
import { useState } from 'react';

function ModelCard(props) {
  const [showConfirmDeleteDialog, setShowConfirmDeleteDialog] = useState(false);

  const showConfirmDeleteDialogHandler = () => {
    setShowConfirmDeleteDialog(true);
  };

  const hideConfirnDeleteDialogHandler = () => {
    setShowConfirmDeleteDialog(false);
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h2">{props.modelName}</Typography>
      </CardContent>
      <Button
        variant="outlined"
        startIcon={<DeleteIcon />}
        onClick={showConfirmDeleteDialogHandler}
      >
        Delete
      </Button>
      <ConfirmDeleteDialog
        open={showConfirmDeleteDialog}
        text="Are you sure you want to delete this model?"
      ></ConfirmDeleteDialog>
    </Card>
  );
}

export default ModelCard;
