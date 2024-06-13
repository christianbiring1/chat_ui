import { Button, createTheme, Badge, ThemeProvider, Avatar } from "@mui/material";
import { Notifications, ArrowDropDown } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    custom: {
      main: '#FFF',
      light: '#F2F2F2',
      dark: '#E5E5E5',
      contrastText: '#000',
    }
  }
});


const NavBar = () => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <ThemeProvider theme={theme}>
            <Button
            variant="contained"
            size="large"
            color="custom"
            sx={{
              borderRadius: '4rem', padding: ' 0.5rem 1rem',
              fontSize: '2rem', textTransform: 'unset', display: 'flex', alignItems: 'center',
              width: '150px'
            }}
            >
              Co:nnect
            </Button>
          </ThemeProvider>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3rem'}}>
          <Badge color='error' variant='dot'>
            <Notifications  style={{ fontSize: '3rem'}} />
          </Badge>
          <ThemeProvider theme={theme}>
            <Button
            variant="contained"
            size="large"
            color="custom"
            sx={{
              borderRadius: '4rem', padding: ' 0rem 1rem',
              fontSize: '1.3rem', textTransform: 'unset', display: 'flex', alignItems: 'center', gap: '2rem'
            }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
                <Avatar style={{ width: '35px', height: '35px'}}/>
                <p>Sam Altman</p>
              </div>
              <ArrowDropDown />
            </Button>
          </ThemeProvider>
        </div>
      </nav>
  );
}
 
export default NavBar;