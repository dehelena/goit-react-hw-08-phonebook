import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <>
      <Box
        component="section"
        sx={{ textAlign: 'center', paddingTop: '100px' }}
      >
        <h1>
          This is your phonebook
          <span>
            <AutoStoriesIcon fontSize="large" sx={{ marginTop: '16px' }} />
          </span>
          <br />
          You can add and delete your contacts.
        </h1>
        <b>To use all the functionality please sign up or login.</b>
      </Box>
    </>
  );
}
