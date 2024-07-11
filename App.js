import React, { useState } from 'react';
import { Container, Button, Modal, Box, TextField, Typography } from '@mui/material';

const App = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    yourName: '',
    yourEmail: '',
    friendName: '',
    friendEmail: ''
  });
  const [errors, setErrors] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setForm({ yourName: '', yourEmail: '', friendName: '', friendEmail: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!form.yourName) tempErrors.yourName = 'Your Name is required';
    if (!form.yourEmail) tempErrors.yourEmail = 'Your Email is required';
    if (form.yourEmail && !/\S+@\S+\.\S+/.test(form.yourEmail)) tempErrors.yourEmail = 'Email is not valid';
    if (!form.friendName) tempErrors.friendName = 'Friend\'s Name is required';
    if (!form.friendEmail) tempErrors.friendEmail = 'Friend\'s Email is required';
    if (form.friendEmail && !/\S+@\S+\.\S+/.test(form.friendEmail)) tempErrors.friendEmail = 'Email is not valid';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully:', form);
      handleClose();
    }
  };

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#e0f7fa' }}>
      <header sx={{ textAlign: 'center', margin: '40px 0', padding: '40px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', '&:hover': { boxShadow: '0px 8px 16px rgba(0,0,0,0.2)' } }}>
        <Typography variant="h3" sx={{ marginBottom: '20px', fontWeight: 'bold', color: '#00796b' }}>Let's Learn & Earn</Typography>
        <Typography variant="h6" sx={{ marginBottom: '30px', color: '#666' }}>Refer a friend and earn rewards</Typography>
        <Button variant="contained" color="primary" onClick={handleOpen} sx={{ transition: 'all 0.3s ease', '&:hover': { backgroundColor: '#004d40' } }}>Refer Now</Button>
      </header>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="referral-modal-title"
        aria-describedby="referral-modal-description"
      >
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', border: 'none', borderRadius: '8px', boxShadow: 24, p: 4 }}>
          <Typography id="referral-modal-title" variant="h6" component="h2">Refer a Friend</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Your Name"
              name="yourName"
              value={form.yourName}
              onChange={handleChange}
              error={!!errors.yourName}
              helperText={errors.yourName}
              fullWidth
              margin="normal"
              required
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              label="Your Email"
              name="yourEmail"
              type="email"
              value={form.yourEmail}
              onChange={handleChange}
              error={!!errors.yourEmail}
              helperText={errors.yourEmail}
              fullWidth
              margin="normal"
              required
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              label="Friend's Name"
              name="friendName"
              value={form.friendName}
              onChange={handleChange}
              error={!!errors.friendName}
              helperText={errors.friendName}
              fullWidth
              margin="normal"
              required
              sx={{ marginBottom: '20px' }}
            />
            <TextField
              label="Friend's Email"
              name="friendEmail"
              type="email"
              value={form.friendEmail}
              onChange={handleChange}
              error={!!errors.friendEmail}
              helperText={errors.friendEmail}
              fullWidth
              margin="normal"
              required
              sx={{ marginBottom: '20px' }}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: '20px', transition: 'all 0.3s ease', '&:hover': { backgroundColor: '#004d40' } }}>Submit</Button>
          </form>
        </Box>
      </Modal>
      <footer sx={{ marginTop: '40px', padding: '20px', backgroundColor: '#ffffff', textAlign: 'center', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', '&:hover': { boxShadow: '0px 8px 16px rgba(0,0,0,0.2)' } }}>
        <Typography variant="body2" sx={{ color: '#666' }}>&copy; 2024 Refer & Earn. All rights reserved.</Typography>
      </footer>
    </Container>
  );
};

export default App;
