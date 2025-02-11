// import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

export default function ModalWindowEditContact({
  open,
  name,
  number,
  onSave,
  onClose,
}) {
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  useEffect(() => {
    setNewName(name);
    setNewNumber(number);
  }, [name, number]);

  const handleSubmit = event => {
    event.preventDefault();
    onSave(newName, newNumber);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          value={newName}
          onChange={e => setNewName(e.target.value)}
        />
        <TextField
          required
          margin="dense"
          id="number"
          label="Phone Number"
          type="tel"
          fullWidth
          variant="standard"
          value={newNumber}
          onChange={e => setNewNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="error">
          Cancel
        </Button>
        <Button onClick={handleSubmit} type="submit">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
