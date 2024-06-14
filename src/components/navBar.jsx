import { Button, createTheme, Badge, ThemeProvider, Avatar } from "@mui/material";
import { NotificationsOutlined, ArrowDropDown } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    custom: {
      main: '#FFF',
      light: '#fff',
      dark: '#fff',
      contrastText: '#000',
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
});


const NavBar = () => {
  return (
    <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '1rem 2rem'}}>
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
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="custom"
              sx={{
                borderRadius: '50%',
                width: '60px',
                height: '60px'
              }}
            >
              <Badge color='error' badgeContent={5}>
                <NotificationsOutlined  style={{ fontSize: '2.5rem'}} />
              </Badge>
            </Button>
          </ThemeProvider>
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