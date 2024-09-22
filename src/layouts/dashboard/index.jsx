import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import TeamChatIcon from 'src/components/team_chat/TeamChatIcon';

import Nav from './nav';
import Main from './main';
import Header from './header';

export default function DashboardLayout({ children }) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />
          <Box sx={{ position: 'fixed', top: '100px', right: '-1px', zIndex: 999 }}> {/* Adjust top and right values for positioning */}
            <TeamChatIcon />
          </Box>
          <Box
        sx={{
          minHeight: 1,
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />

        <Main>{children}</Main>
      </Box>
    </>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.node,
};
