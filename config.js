// routes

// API
// ----------------------------------------------------------------------
export const BACKEND_API_URL = 'https://rickandmortyapi.com/api/';
// export const BACKEND_API_URL ="http://127.0.0.1:8000/api/v1/";

// ROOT PATH AFTER LOGIN SUCCESSFUL

// LAYOUT
// ----------------------------------------------------------------------

export const HEADER = {
  MOBILE_HEIGHT: 64,
  MAIN_DESKTOP_HEIGHT: 88,
  DASHBOARD_DESKTOP_HEIGHT: 92,
  DASHBOARD_DESKTOP_OFFSET_HEIGHT: 92 - 32,
};

export const NAVBAR = {
  BASE_WIDTH: 260,
  DASHBOARD_WIDTH: 280,
  DASHBOARD_COLLAPSE_WIDTH: 88,
  //
  DASHBOARD_ITEM_ROOT_HEIGHT: 48,
  DASHBOARD_ITEM_SUB_HEIGHT: 40,
  DASHBOARD_ITEM_HORIZONTAL_HEIGHT: 32,
};

export const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};

// Defaults
export const Defaults = {
  defaultSchoolLogo:
    'https://firebasestorage.googleapis.com/v0/b/abac-admin-panel-testing.appspot.com/o/project%2FSLogo2.png?alt=media&token=e81deed0-0aab-40a6-9a6a-ef351c57f983',
  defaultSchoolCover:
    'https://firebasestorage.googleapis.com/v0/b/abac-admin-panel-testing.appspot.com/o/project%2FS2.jpg?alt=media&token=27482185-32b9-4304-8ed8-21f417a7e477',
};

// SETTINGS
// Please remove `localStorage` when you set settings.
// ----------------------------------------------------------------------

export const defaultSettings = {
  themeMode: 'light',
  themeDirection: 'ltr',
  themeColorPresets: 'default',
  themeLayout: 'horizontal',
  themeStretch: false,
};
