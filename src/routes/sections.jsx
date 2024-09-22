import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';


export const IndexPage = lazy(() => import('src/pages/app'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const InfoMsisdnPage = lazy(() => import('src/pages/info_msisdn'));
export const InfoTraficPage = lazy(() => import('src/pages/info_trafic'));
export const AutoBlockingPage = lazy(() => import('src/pages/auto-blocking'));
export const InfoFraudeurPage = lazy(() => import('src/pages/info_fraudeur'));
export const QuantificationPage = lazy(() => import('src/pages/quantification'));
export const DailyfollowopnPage = lazy(() => import('src/pages/daily_follow_opn'));
export const FlaggerMsisdnPage = lazy(() => import('src/pages/flagger_msisdn'));
export const SuiviMsisdnPage = lazy(() => import('src/pages/suivi_msisdn'));
export const MasquagePage = lazy(() => import('src/pages/masquage'));
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        { path: 'info_msisdn', element: <InfoMsisdnPage /> },
        { path: 'info-trafic', element: <InfoTraficPage /> },
        { path: 'auto-blocking', element: <AutoBlockingPage /> },
        { path: 'info-fraudeur', element: <InfoFraudeurPage /> },
        { path: 'Quantification', element: <QuantificationPage /> },
        { path: 'daily-follow-up-opn', element: <DailyfollowopnPage /> },
        { path: 'daily-follow-up-opn/flagger-msisdn', element: <FlaggerMsisdnPage /> },
        { path: 'daily-follow-up-opn/suivi-msisdn', element: <SuiviMsisdnPage /> },
        { path: 'daily-follow-up-opn/masquage', element: <MasquagePage /> },
      ],
     },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'info_msisdn',
      element: <InfoMsisdnPage />,
    },
    {
      path: 'info-trafic',
      element: <InfoTraficPage />,
    },
    {
      path: 'auto-blocking',
      element: <AutoBlockingPage />,
    },
    {
      path: 'info-fraudeur',
      element: <InfoFraudeurPage />,
    },
    {
    path: 'daily-follow-up-opn',
    element: <DailyfollowopnPage />,
  },
  {
    path: 'daily-follow-up-opn/flagger-msisdn',
    element: <FlaggerMsisdnPage />,
  },
  {
    path: 'daily-follow-up-opn/suivi-msisdn',
    element: <SuiviMsisdnPage />,
  },
  {
    path: 'daily-follow-up-opn/masquage',
    element: <MasquagePage />,
  },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
