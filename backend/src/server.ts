import app from './app';

const PORT = '3001';

const server = app.listen(parseInt(PORT), () => {
  console.log('Server Started')
});