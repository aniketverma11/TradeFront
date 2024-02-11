import {
    AccountsSiderIcon,
    CalendarSiderIcon,
    ConfigurationSiderIcon,
    DashboardSiderIcon, HelpSiderIcon,
    JournalSiderIcon, LogOutSiderIcon,
    ReportsSiderIcon
} from "/Utils/svgs";

export const SiderItems = [
    {
        label: 'Dashboard',
        id: 'dashboard',
        icon: <DashboardSiderIcon />
    },
    {
        label: 'Journal',
        id: 'journal',
        icon: <JournalSiderIcon />
    },
    {
        label: 'Reports',
        id: 'reports',
        icon: <ReportsSiderIcon />
    },
    {
        label: 'Calendar',
        id: 'calendar',
        icon: <CalendarSiderIcon />
    },
    {
        label: 'Configuration',
        id: 'configuration',
        icon: <ConfigurationSiderIcon />
    },
]

export const SiderFooterItems = [
    {
        label: 'Account',
        id: 'account',
        icon: <AccountsSiderIcon />
    },
    {
        label: 'Help',
        id: 'help',
        icon: <HelpSiderIcon />
    },
    {
        label: 'Log Out',
        id: 'log-out',
        icon: <LogOutSiderIcon />
    },
]