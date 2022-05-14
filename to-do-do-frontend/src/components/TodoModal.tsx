import React from 'react';
import { Box, Button, Modal, Stack, TextField } from '@mui/material';

const TodoModal = ({ isOpen, setIsOpen }: any) => {
  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Box className={'modalBox'}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            label={'New amazing todo'}
            variant={'standard'}
          />
          <Stack
            direction={'row'}
            spacing={1}
            style={{ justifyContent: 'end' }}>
            <Button variant={'outlined'} onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant={'contained'} onClick={() => setIsOpen(false)}>
              Save
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};

export default TodoModal;
