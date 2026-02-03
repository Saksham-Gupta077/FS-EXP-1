import { Button, TextField, Card, CardContent } from '@mui/material';
function MaterialUI() {
  return (
    <Card style={{ width: 300, margin: '20px auto' }}>
      <CardContent>
        <h1>Material UI Form</h1>
        <TextField label="Name" fullWidth margin="normal" />
        <Button variant="contained" fullWidth>Submit</Button>
      </CardContent>
    </Card>
  );
}
export default MaterialUI;