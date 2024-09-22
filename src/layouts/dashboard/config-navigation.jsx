import React from 'react'; // Import React if JSX is used
import { Nav, Sidenav, Dropdown } from 'rsuite'; // Reordered imports alphabetically
import { createRoot } from 'react-dom';

import SvgColor from 'src/components/svg-color'; // Added missing import

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const App = () => (
  <div style={{ width: 240 }}>
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Body>
        <Nav activeKey="1">
          {navConfig.map((item, index) => (
            <React.Fragment key={index}>
              {item.subMenus ? (
                <Dropdown
                  eventKey={String(index)}
                  title={item.title}
                  icon={item.icon}
                >
                  {item.subMenus.map((subItem, subIndex) => (
                    <Dropdown.Item
                      key={`${index}-${subIndex}`}
                      eventKey={`${index}-${subIndex}`}
                      icon={subItem.icon}
                    >
                      {subItem.title}
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              ) : (
                <Nav.Item
                  eventKey={String(index)}
                  icon={item.icon}
                >
                  {item.title}
                </Nav.Item>
              )}
            </React.Fragment>
          ))}
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  </div>
);


createRoot(document.getElementById('root')).render(<App />); // Use createRoot instead of ReactDOM.render

const navConfig = [
  {
    title: 'Gestion des utilisateurs',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Daily Follow up OPN',
    path: '/daily-follow-up-opn',
    icon: icon('ic_follow_up'),
    subMenus: [ // Submenu items
      {
        title: 'Flagger MSISDN',
        path: '/daily-follow-up-opn/flagger-msisdn',
        icon: icon('ic_flagger_msisdn'),
      },
      {
        title: 'Track Flagged/Unblocked MSISDN',
        path: '/daily-follow-up-opn/suivi-msisdn',
        icon: icon('ic_suivi_msisdn'),
      },
      {
        title: 'Masquage',
        path: '/daily-follow-up-opn/masquage',
        icon: icon('ic_Masquage'),
      },
    ],
  },
  {
    title: 'Info MSISDN',
    path: '/info_msisdn',
    icon: icon('ic_info'),
  },
  {
    title: 'Info Trafic',
    path: '/info-trafic',
    icon: icon('ic_info_trafic'),
  },
  {
    title: 'Auto Blocking',
    path: '/auto-blocking',
    icon: icon('ic_auto_blocking'),
  },
  {
    title: 'Info Fraudeur',
    path: '/info-fraudeur',
    icon: icon('ic_info_fraudeur'),
  },
  {
    title: 'Quantification',
    path: '/Quantification',
    icon: icon('ic_Quantification'),
  },

];
export default navConfig;
