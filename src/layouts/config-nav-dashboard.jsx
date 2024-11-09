import { paths } from 'src/routes/paths';

import { CONFIG } from 'src/config-global';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`${CONFIG.assetsDir}/assets/icons/navbar/${name}.svg`} />;

const ICONS = {
  job: icon('ic-job'),
  blog: icon('ic-blog'),
  chat: icon('ic-chat'),
  mail: icon('ic-mail'),
  user: icon('ic-user'),
  file: icon('ic-file'),
  lock: icon('ic-lock'),
  tour: icon('ic-tour'),
  order: icon('ic-order'),
  label: icon('ic-label'),
  blank: icon('ic-blank'),
  kanban: icon('ic-kanban'),
  folder: icon('ic-folder'),
  course: icon('ic-course'),
  banking: icon('ic-banking'),
  booking: icon('ic-booking'),
  invoice: icon('ic-invoice'),
  product: icon('ic-product'),
  calendar: icon('ic-calendar'),
  disabled: icon('ic-disabled'),
  external: icon('ic-external'),
  menuItem: icon('ic-menu-item'),
  ecommerce: icon('ic-ecommerce'),
  analytics: icon('ic-analytics'),
  dashboard: icon('ic-dashboard'),
  parameter: icon('ic-parameter'),
};

// ----------------------------------------------------------------------

export const navData = [
  /**
   * Overview
   */
  {
    subheader: "Vue d'ensemble",
    items: [
      { title: 'Tableau de board', path: paths.dashboard.root, icon: ICONS.dashboard },
      /* { title: 'Ecommerce', path: paths.dashboard.general.ecommerce, icon: ICONS.ecommerce }, */
      {
        title: 'Statistiques',
        path: paths.dashboard.general.analytics,
        icon: ICONS.analytics,
        children: [
          {
            title: 'Déclaration',
            path: paths.dashboard.general.analytics.root,
            icon: ICONS.analytics,
          },
          {
            title: 'Factures',
            path: paths.dashboard.general.analytics.factures,
            icon: ICONS.banking,
          },
          {
            title: 'Paiement',
            path: paths.dashboard.general.analytics.paiement,
            icon: ICONS.invoice,
          },
        ],
      },

      /* { title: 'Declarations', path: paths.dashboard.general.file, icon: ICONS.file }, */
      {
        title: 'Declarations',
        path: paths.dashboard.invoice.root,
        icon: ICONS.invoice,
        children: [
          { title: 'Listes des déclarations', path: paths.dashboard.invoice.root },
          { title: 'Nouvelle Déclaration', path: paths.dashboard.invoice.new },
          { title: 'Details', path: paths.dashboard.invoice.demo.details },
          { title: 'Modifier', path: paths.dashboard.invoice.demo.edit },
        ],
      },
      {
        title: 'Facturations',
        path: paths.dashboard.general.banking,
        icon: ICONS.banking,
        children: [
          { title: 'Factures', path: paths.dashboard.general.banking, icon: ICONS.banking },
          { title: 'Booking', path: paths.dashboard.general.booking, icon: ICONS.booking },
        ],
      },
      {
        title: 'Paiements',
        path: paths.dashboard.general.paiement.root,
        icon: ICONS.banking,
        children: [
          {
            title: 'Listes des Paiements',
            path: paths.dashboard.general.paiement.listes,
            icon: ICONS.banking,
          },
          { title: 'Booking', path: paths.dashboard.general.booking, icon: ICONS.booking },
        ],
      },
      { title: 'Penalité', path: paths.dashboard.general.course, icon: ICONS.course },
    ],
  },
  /**
   * Management
   */
  {
    subheader: 'Administration',
    items: [
      {
        title: 'Utilisateurs',
        path: paths.dashboard.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Listes des utilisateurs', path: paths.dashboard.user.list },
          { title: 'ajouter', path: paths.dashboard.user.new },
          { title: 'Modifier', path: paths.dashboard.user.demo.edit },
          { title: 'Profil', path: paths.dashboard.user.account },
        ],
      },

      {
        title: 'Job',
        path: paths.dashboard.job.root,
        icon: ICONS.job,
        children: [
          { title: 'Listes', path: paths.dashboard.job.root },
          { title: 'Details', path: paths.dashboard.job.demo.details },
          { title: 'Ajouter', path: paths.dashboard.job.new },
          { title: 'Modifier', path: paths.dashboard.job.demo.edit },
        ],
      },
      {
        // default roles : All roles can see this entry.
        // roles: ['user'] Only users can see this item.
        // roles: ['admin'] Only admin can see this item.
        // roles: ['admin', 'manager'] Only admin/manager can see this item.
        // Reference from 'src/guards/RoleBasedGuard'.
        title: 'Permission',
        path: paths.dashboard.permission,
        icon: ICONS.lock,
        roles: ['admin', 'manager'],
        caption: 'Only admin can see this item',
      },
      {
        title: 'Entreprise',
        path: paths.dashboard.tour.root,
        icon: ICONS.tour,
        children: [
          { title: 'Listes', path: paths.dashboard.tour.root },
          { title: 'Details', path: paths.dashboard.tour.demo.details },
          { title: 'Nouvelle', path: paths.dashboard.tour.new },
          { title: 'Edit', path: paths.dashboard.tour.demo.edit },
        ],
      },
      /* { title: 'File manager', path: paths.dashboard.fileManager, icon: ICONS.folder },
      {
         { 
        title: 'Mail',
        path: paths.dashboard.mail,
        icon: ICONS.mail,
        info: (
          <Label color="error" variant="inverted">
            +32
          </Label>
        ),
      }, 
      {
          title: 'Chat', path: paths.dashboard.chat, icon: ICONS.chat 
      }, */
    ],
  },
  /**
   * Item State
   */
  {
    subheader: 'Misc',
    items: [
      { title: 'Calendrier', path: paths.dashboard.calendar, icon: ICONS.calendar },
      { title: 'Processus guidée', path: paths.dashboard.kanban, icon: ICONS.kanban },
    ],
  },
];
