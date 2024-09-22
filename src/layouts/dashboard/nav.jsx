import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import { account } from 'src/_mock/account';

import Logo from 'src/components/logo';
import Scrollbar from 'src/components/scrollbar';

import { NAV } from './config-layout';
import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderAccount = (
      <Box
        sx={{
        my: 3,
        mx: 1.75,
        px: 1,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[100]),
        color: 'white' // Change text color to white
        }}
       >
        <Avatar src={account.photoURL} alt="photoURL" />

        <Box sx={{ ml: 1 }}>
          <Typography variant="subtitle2" color="white">{account.displayName}</Typography>

          <Typography variant="subtitle2" sx={{ color: 'white' }}>
            {account.email}
          </Typography>
        </Box>
      </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{
       px: 2 
       }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderUpgrade = (
    <Box sx={{ my: -2,
      mx: 0,
      marginBottom:3,
      marginTop:-6.5,
      py: 2,
      px: 2.5,
      alignItems: 'center',}}>
      <Stack alignItems="normal" spacing={2} sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
        <Button
          href='/login'
          target="_blank"
          variant="contained"
          color="inherit"
        >
          Logout
        </Button>
      </Stack>
    </Box>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        bgcolor: 'red', // Change the background color to red

        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Logo sx={{ mt: 1.5 ,mb: 2, ml: 3 }} />

      

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />
      {renderAccount}
      {renderUpgrade}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();
  const active = item.path === pathname;

  return (
    <>
      <ListItemButton
        component={item.subMenus ? 'div' : RouterLink}
        href={item.path}
        sx={{
          minHeight: 44,
          borderRadius: 0.20,
          typography: 'body2',
          color: 'white', // Preserved color setting
          textTransform: 'capitalize',
          fontWeight: 'fontWeightMedium',
          bgcolor: active
            ? (theme) => alpha(theme.palette.primary.red, 0.08)
            : 'transparent',
          '&:hover': {
            bgcolor: active
              ? (theme) => alpha(theme.palette.primary.red, 0.16)
              : 'transparent',
          },
        }}
      >
        <Box component="span" color="white" sx={{ width: 24, height: 24, mr: 2 }}>
          {item.icon}
        </Box>
        <Box component="span">{item.title}</Box>
      </ListItemButton>
      {item.subMenus && (
        <Stack component="div" spacing={0.5} sx={{ pl: 2 }}>       
          {item.subMenus.map((subItem) => (
            <ListItemButton
              key={subItem.title}
              component={RouterLink}
              href={subItem.path}
              sx={{
                minHeight: 44,
                borderRadius: 0.75,
                typography: 'body2',
                color: 'white', // Preserved color setting
                textTransform: 'capitalize',
                fontWeight: 'fontWeightMedium',
                bgcolor: subItem.path === pathname
                  ? (theme) => alpha(theme.palette.primary.red, 0.08)
                  : 'transparent',
                '&:hover': {
                  bgcolor: subItem.path === pathname
                    ? (theme) => alpha(theme.palette.primary.red, 0.16)
                    : 'transparent',
                },
              }}
            >
              <Box component="span" color="white" sx={{ width: 20, height: 20, mr: 2 }}>
                {subItem.icon}
              </Box>
                <Box component="span" style={{ fontSize: '0.8rem' }}>{subItem.title}</Box>
            </ListItemButton>
          ))}
        </Stack>
      )}
    </>
  );
}

NavItem.propTypes = {
  item: PropTypes.shape({
    subMenus: PropTypes.arrayOf(PropTypes.object), // Add PropTypes validation for subMenus
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }).isRequired,
};