// -----------------------------------------------------------------------
// 1. BILINGUAL DICTIONARY (EN & KHMER)
// -----------------------------------------------------------------------
const I18N = {
  en: {
    roleBarLabel: 'ACTIVE ROLE:',
    themeLight: 'Light',
    themeDark: 'Dark',
    rolePatient: 'Patient',
    roleClinicAdmin: 'Clinic Admin',
    roleSystemAdmin: 'System Admin (IT)',
    roleReceptionist: 'Receptionist',
    roleDentist: 'Dentist',
    clinicTagline: 'Phnom Penh Premier Dental Clinic',
    navServices: 'Services & Pricing',
    navDoctors: 'Our Dentists',
    navBook: 'Book Appointment',
    navMyAppts: 'My Appointments',
    staffPortalBtn: 'Staff Dashboard Login',
    bookNowBtn: 'Book Now',
    heroBadge: 'Open Daily 8:00 AM – 8:00 PM • Same-Day Emergency Care',
    heroTitle: 'Modern, Pain-Free Dental Care for Your Entire Family',
    heroSubtitle: 'Book appointments online in seconds, view transparent pricing in USD, and manage your dental visits effortlessly with our bilingual patient & clinic platform.',
    heroCtaBook: 'Schedule Your Visit',
    heroCtaStaff: 'Switch to Staff / Admin Portal',
    statYears: 'Years Experience',
    statSatisfaction: 'Patient Satisfaction',
    statRating: 'Verified Clinic Rating',
    quickAccessTitle: 'Multi-Role System Access',
    quickAccessSub: 'Test any clinic role with 1 click',
    descClinicAdmin: 'All 10 modules, revenue, staff & reports',
    descSystemAdmin: 'DB, backups, server logs & monitoring',
    descReceptionist: 'Front desk, check-in, patients & billing',
    descDentist: '32-tooth 2D dental chart & treatment plans',
    servicesEyebrow: 'Transparent Healthcare',
    servicesTitle: 'Dental Services & Pricing',
    servicesSub: 'All procedures include sterile single-use kits and digital consultation.',
    doctorsEyebrow: 'Specialists',
    doctorsTitle: 'Meet Our Dental Team',
    bookFormTitle: 'Book an Appointment',
    bookFormSub: 'Instant request confirmation with SMS/Portal tracking',
    lblFullName: 'Full Name *',
    lblPhone: 'Phone Number *',
    lblService: 'Select Service *',
    lblDentist: 'Preferred Dentist *',
    lblDate: 'Preferred Date *',
    lblTime: 'Time Slot *',
    lblNotes: 'Symptoms / Notes (Optional)',
    submitBookingBtn: 'Confirm Appointment Request',
    myApptsTitle: 'My Appointments Portal',
    myApptsSub: 'Logged in as: Sokha Chan (PT-1001)',
    backToPublicBtn: 'View Public Patient Website',
    logoutBtn: 'Logout',
    sysOnline: 'System Online • DB Synced',
    switchRoleBtn: 'Switch Role',
    modalRoleTitle: 'Select User Role & Workspace',
    modalRoleSub: 'Switch between Public Patient Portal and Internal Staff Dashboards',
    kesorName: 'KeSor AI (កេសរ)',
    kesorSub: 'Role-Aware Dental & System Assistant',
    kesorBtn: 'Ask KeSor (កេសរ)',
    // Sidebar Modules
    mod_dashboard: 'Dashboard',
    mod_staff: 'User & Staff Management',
    mod_patients: 'Patient Management',
    mod_dentists: 'Dentist Management',
    mod_appointments: 'Appointment Management',
    mod_records: 'Dental Records',
    mod_treatments: 'Treatment & Services',
    mod_billing: 'Billing & Payments',
    mod_reports: 'Reports',
    mod_settings: 'Settings',
    // System Admin Modules
    mod_sys_overview: 'System Overview',
    mod_sys_db: 'Database Management',
    mod_sys_backup: 'Backup & Recovery',
    mod_sys_logs: 'System Logs',
    mod_sys_monitor: 'System Monitoring',
    mod_sys_settings: 'Technical Settings',
  },
  km: {
    roleBarLabel: 'តួនាទីបច្ចុប្បន្ន៖',
    themeLight: 'ភ្លឺ',
    themeDark: 'ងងឹត',
    rolePatient: 'អ្នកជំងឺ',
    roleClinicAdmin: 'អ្នកគ្រប់គ្រងគ្លីនិក',
    roleSystemAdmin: 'អ្នកគ្រប់គ្រងប្រព័ន្ធ (IT)',
    roleReceptionist: 'អ្នកទទួលភ្ញៀវ',
    roleDentist: 'ទន្តបណ្ឌិត',
    clinicTagline: 'គ្លីនិកធ្មេញឈានមុខគេនៅភ្នំពេញ',
    navServices: 'សេវាកម្ម និងតម្លៃ',
    navDoctors: 'ទន្តបណ្ឌិតរបស់យើង',
    navBook: 'កក់ការណាត់ជួប',
    navMyAppts: 'ការណាត់ជួបរបស់ខ្ញុំ',
    staffPortalBtn: 'ចូលផ្ទាំងគ្រប់គ្រងបុគ្គលិក',
    bookNowBtn: 'កក់ឥឡូវនេះ',
    heroBadge: 'បើកជារៀងរាល់ថ្ងៃ 8:00 ព្រឹក – 8:00 យប់ • សង្គ្រោះបន្ទាន់',
    heroTitle: 'ការថែទាំធ្មេញទំនើប គ្មានការឈឺចាប់ សម្រាប់គ្រួសារទាំងមូល',
    heroSubtitle: 'កក់ការណាត់ជួបតាមអនឡាញក្នុងរយៈពេលប៉ុន្មានវិនាទី មើលតម្លៃច្បាស់លាស់ និងគ្រប់គ្រងការព្យាបាលធ្មេញរបស់អ្នកយ៉ាងងាយស្រួល។',
    heroCtaBook: 'កក់ការណាត់ជួបរបស់អ្នក',
    heroCtaStaff: 'ប្តូរទៅផ្ទាំងគ្រប់គ្រងបុគ្គលិក / Admin',
    statYears: 'ឆ្នាំនៃបទពិសោធន៍',
    statSatisfaction: 'ការពេញចិត្តរបស់អ្នកជំងឺ',
    statRating: 'ការវាយតម្លៃគ្លីនិក',
    quickAccessTitle: 'ការចូលប្រើប្រាស់តាមតួនាទីទាំង ៥',
    quickAccessSub: 'សាកល្បងតួនាទីណាមួយដោយចុច ១ ដង',
    descClinicAdmin: 'មុខងារទាំង ១០ ចំណូល បុគ្គលិក និងរបាយការណ៍',
    descSystemAdmin: 'មូលដ្ឋានទិន្នន័យ ការបម្រុងទុក និងកំណត់ហេតុ',
    descReceptionist: 'ផ្នែកទទួលភ្ញៀវ អ្នកជំងឺ ការណាត់ជួប និងវិក្កយបត្រ',
    descDentist: 'តារាងធ្មេញ ៣២ និងផែនការព្យាបាល',
    servicesEyebrow: 'តម្លៃតម្លាភាព',
    servicesTitle: 'សេវាកម្មព្យាបាលធ្មេញ និងតម្លៃ',
    servicesSub: 'រាល់ការព្យាបាលប្រើប្រាស់ឧបករណ៍សម្លាប់មេរោគស្តង់ដារខ្ពស់។',
    doctorsEyebrow: 'វេជ្ជបណ្ឌិតឯកទេស',
    doctorsTitle: 'ជួបជាមួយក្រុមទន្តបណ្ឌិតរបស់យើង',
    bookFormTitle: 'កក់ការណាត់ជួបព្យាបាល',
    bookFormSub: 'បញ្ជាក់ការកក់ភ្លាមៗតាមប្រព័ន្ធ',
    lblFullName: 'ឈ្មោះពេញ *',
    lblPhone: 'លេខទូរស័ព្ទ *',
    lblService: 'ជ្រើសរើសសេវាកម្ម *',
    lblDentist: 'ជ្រើសរើសទន្តបណ្ឌិត *',
    lblDate: 'កាលបរិច្ឆេទ *',
    lblTime: 'ម៉ោងណាត់ជួប *',
    lblNotes: 'រោគសញ្ញា / កំណត់ចំណាំ',
    submitBookingBtn: 'បញ្ជាក់ការកក់ការណាត់ជួប',
    myApptsTitle: 'ការណាត់ជួបរបស់ខ្ញុំ',
    myApptsSub: 'គណនី៖ សុខា ចាន់ (PT-1001)',
    backToPublicBtn: 'ត្រឡប់ទៅគេហទំព័រអ្នកជំងឺ',
    logoutBtn: 'ចាកចេញ',
    sysOnline: 'ប្រព័ន្ធដំណើរការល្អ • ទិន្នន័យភ្ជាប់រួចរាល់',
    switchRoleBtn: 'ប្តូរតួនាទី',
    modalRoleTitle: 'ជ្រើសរើសតួនាទីអ្នកប្រើប្រាស់',
    modalRoleSub: 'ប្តូររវាងគេហទំព័រអ្នកជំងឺ និងផ្ទាំងគ្រប់គ្រងបុគ្គលិក',
    kesorName: 'ជំនួយការឆ្លាតវៃ កេសរ (KeSor)',
    kesorSub: 'ជំនួយការតាមតួនាទីសម្រាប់គ្លីនិក និងប្រព័ន្ធ',
    kesorBtn: 'សួរ កេសរ (KeSor)',
    // Sidebar Modules
    mod_dashboard: 'ផ្ទាំងគ្រប់គ្រងទូទៅ',
    mod_staff: 'គ្រប់គ្រងបុគ្គលិក និងអ្នកប្រើប្រាស់',
    mod_patients: 'គ្រប់គ្រងអ្នកជំងឺ',
    mod_dentists: 'គ្រប់គ្រងទន្តបណ្ឌិត',
    mod_appointments: 'គ្រប់គ្រងការណាត់ជួប',
    mod_records: 'កំណត់ត្រាព្យាបាលធ្មេញ',
    mod_treatments: 'ផែនការព្យាបាល និងសេវាកម្ម',
    mod_billing: 'វិក្កយបត្រ និងការទូទាត់',
    mod_reports: 'របាយការណ៍ហិរញ្ញវត្ថុ',
    mod_settings: 'ការកំណត់គ្លីនិក',
    // System Admin Modules
    mod_sys_overview: 'ទិដ្ឋភាពទូទៅនៃប្រព័ន្ធ',
    mod_sys_db: 'គ្រប់គ្រងមូលដ្ឋានទិន្នន័យ',
    mod_sys_backup: 'ការបម្រុងទុក និងស្តារទិន្នន័យ',
    mod_sys_logs: 'កំណត់ហេតុប្រព័ន្ធ (Logs)',
    mod_sys_monitor: 'ការត្រួតពិនិត្យម៉ាស៊ីនមេ',
    mod_sys_settings: 'ការកំណត់បច្ចេកទេស',
  }
};

// -----------------------------------------------------------------------
// 2. APPLICATION STATE (RICH MOCK DATA FOR ALL 5 ROLES)
// -----------------------------------------------------------------------
const todayStr = new Date().toISOString().split('T')[0];

const state = {
  lang: 'en',
  theme: 'light', // 'light' | 'dark'
  role: 'patient', // 'patient' | 'clinic_admin' | 'system_admin' | 'receptionist' | 'dentist'
  activeModule: 'dashboard',
  apptViewMode: 'list', // 'list' | 'calendar'
  apptFilterStatus: 'ALL',
  apptFilterDentist: 'ALL',
  selectedPatientForChart: 'PT-1001',
  selectedTooth: 16,
  reportIncludeExpenses: true,
  logFilterLevel: 'ALL',

  staff: [
    { id: 'STF-01', name: 'Sophea Lim', role: 'clinic_admin', roleLabel: 'Clinic Admin', email: 'sophea.admin@dentalcare.kh', phone: '012 888 101', status: 'Active' },
    { id: 'STF-02', name: 'Dara Vannak', role: 'system_admin', roleLabel: 'System Admin (IT)', email: 'it.support@dentalcare.kh', phone: '012 888 102', status: 'Active' },
    { id: 'STF-03', name: 'Dr. Bopha Chea', role: 'dentist', roleLabel: 'Dentist', specialty: 'Orthodontics & Implants', email: 'dr.bopha@dentalcare.kh', phone: '012 888 103', status: 'Active', days: 'Mon - Sat', hours: '08:00 - 17:00', dayOff: 'Sunday', available: true },
    { id: 'STF-04', name: 'Dr. Piseth Keo', role: 'dentist', roleLabel: 'Dentist', specialty: 'Endodontics & Oral Surgery', email: 'dr.piseth@dentalcare.kh', phone: '012 888 104', status: 'Active', days: 'Tue - Sun', hours: '09:00 - 18:00', dayOff: 'Monday', available: true },
    { id: 'STF-05', name: 'Dr. Sreyneang Meas', role: 'dentist', roleLabel: 'Dentist', specialty: 'Cosmetic & Pediatric Dentistry', email: 'dr.sreyneang@dentalcare.kh', phone: '012 888 105', status: 'Active', days: 'Mon - Fri', hours: '10:00 - 19:00', dayOff: 'Sat - Sun', available: false },
    { id: 'STF-06', name: 'Malis Seng', role: 'receptionist', roleLabel: 'Receptionist', email: 'frontdesk@dentalcare.kh', phone: '012 888 106', status: 'Active' }
  ],

  patients: [
    {
      id: 'PT-1001', name: 'Sokha Chan', gender: 'Female', age: 29, phone: '012 345 678', address: 'BKK1, Phnom Penh',
      allergies: 'Penicillin (Mild rash)', medicalHistory: 'No chronic conditions. Regular 6-month checkups.',
      clinicalNotes: 'Upper right first molar (#16) shows early occlusal caries; scheduled composite restoration. Gingiva healthy.',
      teeth: { 16: 'decayed', 26: 'filled', 36: 'filled', 18: 'missing', 28: 'missing' }
    },
    {
      id: 'PT-1002', name: 'Rithy Pich', gender: 'Male', age: 36, phone: '017 987 654', address: 'Toul Kork, Phnom Penh',
      allergies: 'None known', medicalHistory: 'Mild hypertension (controlled).',
      clinicalNotes: 'Completed scaling & root planing. Recommended night guard due to mild bruxism.',
      teeth: { 11: 'filled', 21: 'filled', 46: 'decayed', 47: 'decayed' }
    },
    {
      id: 'PT-1003', name: 'Chanthou Heng', gender: 'Female', age: 42, phone: '093 456 123', address: 'Sen Sok, Phnom Penh',
      allergies: 'Latex sensitivity', medicalHistory: 'Type 2 Diabetes (controlled with diet).',
      clinicalNotes: 'Root canal therapy completed on #36. Crown placement scheduled next week.',
      teeth: { 36: 'filled', 37: 'missing', 14: 'decayed' }
    }
  ],

  services: [
    { id: 'SRV-01', name: 'Ultrasonic Scaling & Polishing', nameKm: 'សម្អាតធ្មេញ និងប៉ូលា', category: 'Preventive', duration: '45 min', price: 35, active: true, desc: 'Deep plaque & tartar removal with airflow polishing.' },
    { id: 'SRV-02', name: 'Composite Tooth Filling', nameKm: 'ប៉ះធ្មេញពណ៌ធម្មជាតិ', category: 'Restorative', duration: '60 min', price: 55, active: true, desc: 'Tooth-colored aesthetic resin restoration.' },
    { id: 'SRV-03', name: 'Laser Teeth Whitening', nameKm: 'ខាត់ធ្មេញឱ្យសដោយឡាស៊ែរ', category: 'Cosmetic', duration: '75 min', price: 180, active: true, desc: 'In-office LED whitening up to 6 shades brighter.' },
    { id: 'SRV-04', name: 'Root Canal Therapy', nameKm: 'ព្យាបាលរន្ធឫសធ្មេញ', category: 'Endodontics', duration: '90 min', price: 220, active: true, desc: 'Pain-free microscopic root canal disinfection & sealing.' },
    { id: 'SRV-05', name: 'Ceramic Braces Consultation', nameKm: 'ពិគ្រោះពត់ធ្មេញ', category: 'Orthodontics', duration: '45 min', price: 40, active: true, desc: '3D digital scan & customized orthodontic alignment plan.' },
    { id: 'SRV-06', name: 'Titanium Dental Implant', nameKm: 'ដាំបង្គោលធ្មេញទីតាញ៉ូម', category: 'Surgery', duration: '120 min', price: 850, active: true, desc: 'Swiss-grade titanium implant with zirconia crown.' }
  ],

  appointments: [
    { id: 'APT-2041', patientId: 'PT-1001', patientName: 'Sokha Chan', phone: '012 345 678', dentistId: 'STF-03', dentistName: 'Dr. Bopha Chea', service: 'Composite Tooth Filling', date: todayStr, time: '09:00', status: 'Confirmed', notes: 'Tooth #16 sensitivity' },
    { id: 'APT-2042', patientId: 'PT-1002', patientName: 'Rithy Pich', phone: '017 987 654', dentistId: 'STF-04', dentistName: 'Dr. Piseth Keo', service: 'Ultrasonic Scaling & Polishing', date: todayStr, time: '10:30', status: 'Checked-In', notes: '6-month routine cleaning' },
    { id: 'APT-2043', patientId: 'PT-1003', patientName: 'Chanthou Heng', phone: '093 456 123', dentistId: 'STF-03', dentistName: 'Dr. Bopha Chea', service: 'Root Canal Therapy', date: todayStr, time: '14:00', status: 'Pending', notes: 'Follow-up crown prep' },
    { id: 'APT-2044', patientId: 'PT-1001', patientName: 'Sokha Chan', phone: '012 345 678', dentistId: 'STF-05', dentistName: 'Dr. Sreyneang Meas', service: 'Laser Teeth Whitening', date: '2026-11-20', time: '15:30', status: 'Pending', notes: 'Requested afternoon slot' }
  ],

  treatments: [
    { id: 'TRT-501', patientId: 'PT-1001', patientName: 'Sokha Chan', tooth: '#16', procedure: 'Composite Tooth Filling', dentist: 'Dr. Bopha Chea', cost: 55, status: 'In Progress', date: todayStr },
    { id: 'TRT-502', patientId: 'PT-1002', patientName: 'Rithy Pich', tooth: 'Full Mouth', procedure: 'Ultrasonic Scaling & Polishing', dentist: 'Dr. Piseth Keo', cost: 35, status: 'Completed', date: todayStr },
    { id: 'TRT-503', patientId: 'PT-1003', patientName: 'Chanthou Heng', tooth: '#36', procedure: 'Root Canal Therapy', dentist: 'Dr. Bopha Chea', cost: 220, status: 'Planned', date: '2026-11-21' }
  ],

  invoices: [
    {
      id: 'INV-9001', patientId: 'PT-1001', patientName: 'Sokha Chan', date: todayStr,
      items: [
        { desc: 'Composite Tooth Filling (#16)', qty: 1, price: 55 },
        { desc: 'Digital Periapical X-Ray', qty: 1, price: 15 }
      ],
      total: 70, paid: 40, method: 'QR Payment (Bakong/KHQR)', status: 'Partial'
    },
    {
      id: 'INV-9002', patientId: 'PT-1002', patientName: 'Rithy Pich', date: todayStr,
      items: [
        { desc: 'Ultrasonic Scaling & Polishing', qty: 1, price: 35 }
      ],
      total: 35, paid: 35, method: 'Cash', status: 'Paid'
    },
    {
      id: 'INV-9003', patientId: 'PT-1003', patientName: 'Chanthou Heng', date: todayStr,
      items: [
        { desc: 'Root Canal Therapy (#36)', qty: 1, price: 220 },
        { desc: 'Sterile Surgical Kit', qty: 1, price: 20 }
      ],
      total: 240, paid: 0, method: 'Pending', status: 'Unpaid'
    }
  ],

  backups: [
    { id: 'BKP-20261117-0200', timestamp: '2026-11-17 02:00:14', size: '48.6 MB', type: 'Automated Nightly', status: 'Completed' },
    { id: 'BKP-20261116-0200', timestamp: '2026-11-16 02:00:09', size: '48.1 MB', type: 'Automated Nightly', status: 'Completed' },
    { id: 'BKP-20261115-1430', timestamp: '2026-11-15 14:30:42', size: '47.9 MB', type: 'Manual Pre-Patch', status: 'Completed' }
  ],

  sysLogs: [
    { time: '02:31:05', level: 'INFO', service: 'AuthService', message: 'JWT session refreshed for role=clinic_admin (Sophea Lim)' },
    { time: '02:28:40', level: 'INFO', service: 'KHQR-Webhook', message: 'Bakong QR payment verified for INV-9001 ($40.00 USD)' },
    { time: '02:15:12', level: 'WARN', service: 'SMS-Gateway', message: 'Carrier latency 420ms on Cambodia Smart/Cellcard route; retry succeeded' },
    { time: '02:00:14', level: 'INFO', service: 'BackupWorker', message: 'PostgreSQL snapshot BKP-20261117-0200 uploaded to encrypted vault' },
    { time: '01:44:09', level: 'ERROR', service: 'SyncWorker', message: 'Temporary timeout syncing dental imaging cache; auto-recovered in 1.2s' }
  ]
};

// Role Permissions & Sidebar Module Mapping
const ROLE_CONFIG = {
  clinic_admin: {
    label: 'Clinic Admin',
    portalType: 'BUSINESS MANAGEMENT',
    userName: 'Sophea Lim',
    avatar: 'CA',
    defaultModule: 'dashboard',
    modules: [
      { id: 'dashboard', icon: 'ph-squares-four', key: 'mod_dashboard' },
      { id: 'staff', icon: 'ph-users-three', key: 'mod_staff' },
      { id: 'patients', icon: 'ph-user-list', key: 'mod_patients' },
      { id: 'dentists', icon: 'ph-stethoscope', key: 'mod_dentists' },
      { id: 'appointments', icon: 'ph-calendar-check', key: 'mod_appointments' },
      { id: 'records', icon: 'ph-tooth', key: 'mod_records' },
      { id: 'treatments', icon: 'ph-first-aid-kit', key: 'mod_treatments' },
      { id: 'billing', icon: 'ph-receipt', key: 'mod_billing' },
      { id: 'reports', icon: 'ph-chart-line-up', key: 'mod_reports' },
      { id: 'settings', icon: 'ph-gear', key: 'mod_settings' }
    ]
  },
  system_admin: {
    label: 'System Admin (IT)',
    portalType: 'SYSTEM ADMINISTRATION',
    userName: 'Dara Vannak',
    avatar: 'IT',
    defaultModule: 'sys_overview',
    modules: [
      { id: 'sys_overview', icon: 'ph-cpu', key: 'mod_sys_overview' },
      { id: 'sys_db', icon: 'ph-database', key: 'mod_sys_db' },
      { id: 'sys_backup', icon: 'ph-cloud-arrow-up', key: 'mod_sys_backup' },
      { id: 'sys_logs', icon: 'ph-terminal', key: 'mod_sys_logs' },
      { id: 'sys_monitor', icon: 'ph-activity', key: 'mod_sys_monitor' },
      { id: 'sys_settings', icon: 'ph-sliders', key: 'mod_sys_settings' }
    ]
  },
  receptionist: {
    label: 'Receptionist',
    portalType: 'FRONT DESK PORTAL',
    userName: 'Malis Seng',
    avatar: 'RC',
    defaultModule: 'dashboard',
    modules: [
      { id: 'dashboard', icon: 'ph-squares-four', key: 'mod_dashboard' },
      { id: 'patients', icon: 'ph-user-list', key: 'mod_patients' },
      { id: 'appointments', icon: 'ph-calendar-check', key: 'mod_appointments' },
      { id: 'billing', icon: 'ph-receipt', key: 'mod_billing' }
    ]
  },
  dentist: {
    label: 'Dentist',
    portalType: 'CLINICAL WORKSPACE',
    userName: 'Dr. Bopha Chea',
    avatar: 'DR',
    defaultModule: 'dashboard',
    modules: [
      { id: 'dashboard', icon: 'ph-squares-four', key: 'mod_dashboard' },
      { id: 'appointments', icon: 'ph-calendar-check', key: 'mod_appointments' },
      { id: 'records', icon: 'ph-tooth', key: 'mod_records' },
      { id: 'treatments', icon: 'ph-first-aid-kit', key: 'mod_treatments' }
    ]
  }
};

let activeCharts = [];
function destroyCharts() {
  activeCharts.forEach(c => { try { c.destroy(); } catch (e) {} });
  activeCharts = [];
}

// -----------------------------------------------------------------------
// 3. TOAST & MODAL HELPERS
// -----------------------------------------------------------------------
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const el = document.createElement('div');
  const colors = type === 'error'
    ? 'bg-rose-600 text-white'
    : type === 'info'
      ? 'bg-slate-800 text-white'
      : 'bg-teal-700 text-white';
  el.className = `${colors} px-4 py-3 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-2.5 pointer-events-auto transition-all`;
  el.innerHTML = `<i class="ph-fill ${type === 'error' ? 'ph-warning-circle' : 'ph-check-circle'} text-base"></i><span>${message}</span>`;
  container.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; setTimeout(() => el.remove(), 300); }, 3200);
}

function openRoleModal() {
  const m = document.getElementById('role-modal');
  m.classList.remove('hidden');
  m.classList.add('flex');
}
function closeRoleModal() {
  const m = document.getElementById('role-modal');
  m.classList.add('hidden');
  m.classList.remove('flex');
}

function openUniversalModal(htmlContent) {
  const m = document.getElementById('universal-modal');
  document.getElementById('universal-modal-box').innerHTML = htmlContent;
  m.classList.remove('hidden');
  m.classList.add('flex');
}
function closeUniversalModal() {
  const m = document.getElementById('universal-modal');
  m.classList.add('hidden');
  m.classList.remove('flex');
}

function toggleMobileSidebar() {
  const sb = document.getElementById('staff-sidebar');
  const bd = document.getElementById('sidebar-backdrop');
  sb.classList.toggle('-translate-x-full');
  bd.classList.toggle('hidden');
}

// -----------------------------------------------------------------------
// 4. ROLE SWITCHING & LANGUAGE TOGGLE
// -----------------------------------------------------------------------
function switchRole(newRole) {
  state.role = newRole;

  // Update top global switcher pills
  document.querySelectorAll('.role-btn').forEach(btn => {
    if (btn.dataset.role === newRole) {
      btn.className = 'role-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 bg-teal-600 text-white shadow';
    } else {
      btn.className = 'role-btn px-2.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700';
    }
  });

  const badge = document.getElementById('current-role-badge');
  const patientView = document.getElementById('patient-portal-view');
  const staffView = document.getElementById('staff-dashboard-view');

  if (newRole === 'patient') {
    badge.textContent = state.lang === 'km' ? 'អ្នកជំងឺ (គេហទំព័រសាធារណៈ)' : 'Patient (Public Portal)';
    patientView.classList.remove('hidden');
    staffView.classList.add('hidden');
    renderPublicPortal();
  } else {
    const cfg = ROLE_CONFIG[newRole];
    badge.textContent = `${cfg.label} (${cfg.userName})`;
    patientView.classList.add('hidden');
    staffView.classList.remove('hidden');

    document.getElementById('sidebar-portal-type').textContent = cfg.portalType;
    document.getElementById('sidebar-user-name').textContent = cfg.userName;
    document.getElementById('sidebar-user-role').textContent = cfg.label;
    document.getElementById('sidebar-avatar').textContent = cfg.avatar;

    state.activeModule = cfg.defaultModule;
    renderSidebarNav();
    renderActiveModule();
  }

  updateKesorForRole();
  showToast(`Switched workspace to ${newRole === 'patient' ? 'Patient Portal' : ROLE_CONFIG[newRole].label}`);
}

function toggleLanguage() {
  state.lang = state.lang === 'en' ? 'km' : 'en';
  document.documentElement.lang = state.lang;
  applyTranslations();
  updateThemeToggleUI();
  if (state.role === 'patient') {
    renderPublicPortal();
  } else {
    renderSidebarNav();
    renderActiveModule();
  }
  updateKesorForRole();
}

function initTheme() {
  const saved = localStorage.getItem('dentalcare_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  state.theme = saved || (prefersDark ? 'dark' : 'light');
  applyTheme();
}

function toggleTheme() {
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('dentalcare_theme', state.theme);
  applyTheme();
  if (state.role !== 'patient' && (state.activeModule === 'dashboard' || state.activeModule === 'reports')) {
    renderActiveModule();
  }
  const msg = state.lang === 'km'
    ? (state.theme === 'dark' ? 'បានប្តូរទៅផ្ទៃងងឹត (Dark Mode)' : 'បានប្តូរទៅផ្ទៃភ្លឺ (Light Mode)')
    : (state.theme === 'dark' ? 'Switched to Dark Mode' : 'Switched to Light Mode');
  showToast(msg, 'info');
}

function applyTheme() {
  document.documentElement.classList.toggle('dark', state.theme === 'dark');
  updateThemeToggleUI();
}

function updateThemeToggleUI() {
  const iconEl = document.getElementById('theme-toggle-icon');
  const labelEl = document.getElementById('theme-toggle-label');
  const dict = I18N[state.lang];
  if (!iconEl || !labelEl) return;
  if (state.theme === 'dark') {
    iconEl.className = 'ph-fill ph-sun text-amber-300';
    labelEl.textContent = dict.themeLight;
  } else {
    iconEl.className = 'ph-fill ph-moon-stars text-teal-300';
    labelEl.textContent = dict.themeDark;
  }
}

function getChartThemeOptions() {
  const isDark = state.theme === 'dark';
  const tickColor = isDark ? '#94A3B8' : '#64748B';
  const gridColor = isDark ? 'rgba(148, 163, 184, 0.14)' : 'rgba(203, 213, 225, 0.55)';
  const legendColor = isDark ? '#E2E8F0' : '#334155';
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: legendColor, font: { family: "'Inter', 'Kantumruy Pro', sans-serif", size: 11 } }
      }
    },
    scales: {
      x: { ticks: { color: tickColor }, grid: { color: gridColor } },
      y: { ticks: { color: tickColor }, grid: { color: gridColor } }
    }
  };
}

function applyTranslations() {
  const dict = I18N[state.lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
}

// -----------------------------------------------------------------------
// 5. PUBLIC PATIENT PORTAL RENDERING & BOOKING
// -----------------------------------------------------------------------
function renderPublicPortal() {
  // Services
  const srvGrid = document.getElementById('public-services-grid');
  srvGrid.innerHTML = state.services.filter(s => s.active).map(s => `
    <div class="bg-white rounded-2xl border border-slate-200 p-5 hover:border-teal-500 hover:shadow-md transition flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-1 rounded-lg bg-mintSoft text-teal-800 text-xs font-bold">${s.category}</span>
          <span class="text-xs text-slate-500 flex items-center gap-1"><i class="ph-bold ph-clock"></i> ${s.duration}</span>
        </div>
        <h3 class="font-bold text-slate-900 text-base">${state.lang === 'km' && s.nameKm ? s.nameKm : s.name}</h3>
        <p class="text-xs text-slate-500 mt-1.5 leading-relaxed">${s.desc}</p>
      </div>
      <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <span class="text-xs text-slate-400 block">${state.lang === 'km' ? 'តម្លៃចាប់ពី' : 'Starting at'}</span>
          <span class="text-xl font-extrabold text-teal-700">$${s.price}</span>
        </div>
        <button onclick="prefillBookingService('${s.name}')" class="px-3.5 py-2 rounded-xl bg-teal-50 hover:bg-teal-700 text-teal-800 hover:text-white text-xs font-bold transition">
          ${state.lang === 'km' ? 'កក់សេវាកម្មនេះ' : 'Select Service'}
        </button>
      </div>
    </div>
  `).join('');

  // Dentists
  const docGrid = document.getElementById('public-doctors-grid');
  const dentists = state.staff.filter(s => s.role === 'dentist');
  docGrid.innerHTML = dentists.map(d => `
    <div class="bg-slateBg rounded-2xl border border-slate-200 p-5 flex items-start gap-4">
      <div class="w-14 h-14 rounded-2xl bg-teal-700 text-white font-extrabold text-lg flex items-center justify-center shrink-0">
        ${d.name.replace('Dr. ', '').slice(0, 2).toUpperCase()}
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-between gap-2">
          <h3 class="font-bold text-slate-900 text-base">${d.name}</h3>
          <span class="px-2 py-0.5 rounded-full text-[11px] font-bold ${d.available ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}">
            ${d.available ? (state.lang === 'km' ? 'ទំនេរ' : 'Available') : (state.lang === 'km' ? 'ជាប់រវល់' : 'In Surgery')}
          </span>
        </div>
        <p class="text-xs font-semibold text-teal-700 mt-0.5">${d.specialty}</p>
        <p class="text-xs text-slate-500 mt-2"><i class="ph-bold ph-calendar"></i> ${d.days} • ${d.hours}</p>
      </div>
    </div>
  `).join('');

  // Populate Booking Dropdowns
  const pubServiceSel = document.getElementById('pub-service');
  pubServiceSel.innerHTML = state.services.filter(s => s.active).map(s => `<option value="${s.name}">${s.name} ($${s.price})</option>`).join('');

  const pubDentistSel = document.getElementById('pub-dentist');
  pubDentistSel.innerHTML = dentists.map(d => `<option value="${d.id}">${d.name} — ${d.specialty}</option>`).join('');

  const pubDate = document.getElementById('pub-date');
  if (!pubDate.value) pubDate.value = todayStr;

  // Patient's Own Appointments
  const myAppts = state.appointments.filter(a => a.patientId === 'PT-1001' || a.patientName.toLowerCase().includes('sokha'));
  document.getElementById('patient-appt-count').textContent = `${myAppts.length} ${state.lang === 'km' ? 'ការណាត់ជួប' : 'Visits'}`;
  document.getElementById('patient-appointments-list').innerHTML = myAppts.map(a => {
    const badgeColor = a.status === 'Confirmed' || a.status === 'Checked-In'
      ? 'bg-emerald-100 text-emerald-800'
      : a.status === 'Pending'
        ? 'bg-amber-100 text-amber-800'
        : 'bg-rose-100 text-rose-800';
    return `
      <div class="p-4 rounded-xl border border-slate-200 bg-slateBg/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <div class="flex items-center gap-2">
            <span class="text-xs font-bold text-slate-400">${a.id}</span>
            <span class="px-2.5 py-0.5 rounded-full text-[11px] font-bold ${badgeColor}">${a.status}</span>
          </div>
          <h4 class="font-bold text-slate-900 text-sm mt-1">${a.service}</h4>
          <p class="text-xs text-slate-600 mt-0.5">${a.dentistName} • <strong>${a.date}</strong> at <strong>${a.time}</strong></p>
        </div>
        ${a.status !== 'Cancelled' ? `
          <button onclick="cancelPatientAppt('${a.id}')" class="px-3 py-1.5 rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50 text-xs font-semibold self-start sm:self-center">
            ${state.lang === 'km' ? 'បោះបង់' : 'Cancel'}
          </button>
        ` : ''}
      </div>
    `;
  }).join('');
}

function prefillBookingService(srvName) {
  document.getElementById('pub-service').value = srvName;
  document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
}

function handlePublicBooking(e) {
  e.preventDefault();
  const name = document.getElementById('pub-name').value.trim();
  const phone = document.getElementById('pub-phone').value.trim();
  const service = document.getElementById('pub-service').value;
  const dentistId = document.getElementById('pub-dentist').value;
  const dentistObj = state.staff.find(d => d.id === dentistId);
  const date = document.getElementById('pub-date').value;
  const time = document.getElementById('pub-time').value;
  const notes = document.getElementById('pub-notes').value;

  // Conflict check
  const conflict = state.appointments.some(a => a.dentistId === dentistId && a.date === date && a.time === time && a.status !== 'Cancelled');
  if (conflict) {
    showToast(`${dentistObj.name} already has a booking at ${time} on ${date}. Please choose another slot.`, 'error');
    return;
  }

  const newAppt = {
    id: 'APT-' + Math.floor(2045 + Math.random() * 900),
    patientId: 'PT-1001',
    patientName: name,
    phone,
    dentistId,
    dentistName: dentistObj ? dentistObj.name : 'Dr. Bopha Chea',
    service,
    date,
    time,
    status: 'Pending',
    notes
  };
  state.appointments.unshift(newAppt);
  renderPublicPortal();
  showToast(state.lang === 'km' ? 'ការកក់ការណាត់ជួបត្រូវបានផ្ញើដោយជោគជ័យ!' : 'Appointment request submitted! Track status in My Appointments.');
}

function cancelPatientAppt(id) {
  const appt = state.appointments.find(a => a.id === id);
  if (appt) {
    appt.status = 'Cancelled';
    renderPublicPortal();
    showToast('Appointment cancelled.', 'info');
  }
}

// -----------------------------------------------------------------------
// 6. STAFF SIDEBAR & MODULE ROUTER
// -----------------------------------------------------------------------
function renderSidebarNav() {
  const cfg = ROLE_CONFIG[state.role];
  const nav = document.getElementById('sidebar-nav-items');
  const dict = I18N[state.lang];

  nav.innerHTML = cfg.modules.map(m => {
    const isActive = state.activeModule === m.id;
    return `
      <button onclick="selectModule('${m.id}')" class="w-full px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-3 transition ${
        isActive
          ? 'bg-teal-700 text-white shadow-sm'
          : 'text-slate-600 hover:bg-mintSoft/70 hover:text-teal-900'
      }">
        <i class="ph-bold ${m.icon} text-base"></i>
        <span class="truncate">${dict[m.key] || m.id}</span>
      </button>
    `;
  }).join('');
}

function selectModule(modId) {
  state.activeModule = modId;
  renderSidebarNav();
  renderActiveModule();
  // Close mobile sidebar if open
  const sb = document.getElementById('staff-sidebar');
  if (!sb.classList.contains('-translate-x-full') && window.innerWidth < 1024) {
    toggleMobileSidebar();
  }
}

function renderActiveModule() {
  destroyCharts();
  const container = document.getElementById('dashboard-module-container');
  const titleEl = document.getElementById('module-header-title');
  const subEl = document.getElementById('module-header-sub');
  const dict = I18N[state.lang];

  const modKey = 'mod_' + state.activeModule;
  titleEl.textContent = dict[modKey] || 'Dashboard';

  switch (state.activeModule) {
    case 'dashboard':
      subEl.textContent = 'Real-time clinic KPIs, appointment queue & financial snapshot';
      renderClinicDashboard(container);
      break;
    case 'staff':
      subEl.textContent = 'FR-01 / FR-04: Manage clinic & IT user accounts and role permissions';
      renderStaffModule(container);
      break;
    case 'patients':
      subEl.textContent = 'FR-03: Patient registry, auto-generated PT-IDs & medical profiles';
      renderPatientsModule(container);
      break;
    case 'dentists':
      subEl.textContent = 'FR-04: Dentist schedules, specialties, days off & live chair availability';
      renderDentistsModule(container);
      break;
    case 'appointments':
      subEl.textContent = 'FR-05 / FR-06: List & Calendar views, approvals, check-ins & conflict-free walk-ins';
      renderAppointmentsModule(container);
      break;
    case 'records':
      subEl.textContent = 'FR-07 / FR-08: Interactive 32-tooth 2D adult dental chart & clinical exam notes';
      renderDentalRecordsModule(container);
      break;
    case 'treatments':
      subEl.textContent = 'FR-09 / FR-10: Patient treatment plans & public dental service catalog';
      renderTreatmentsModule(container);
      break;
    case 'billing':
      subEl.textContent = 'FR-11 / FR-12: Itemized invoices, Cash/Bank/Bakong KHQR payments & printable receipts';
      renderBillingModule(container);
      break;
    case 'reports':
      subEl.textContent = 'FR-13: Financial analytics, dentist revenue breakdown & net profit summary';
      renderReportsModule(container);
      break;
    case 'settings':
      subEl.textContent = 'Clinic profile, working hours, currency & Bakong KHQR merchant configuration';
      renderClinicSettingsModule(container);
      break;

    // SYSTEM ADMIN (IT SUPPORT) MODULES
    case 'sys_overview':
      subEl.textContent = 'Infrastructure health, database connectivity, server status & latest backup';
      renderSysOverviewModule(container);
      break;
    case 'sys_db':
      subEl.textContent = 'Database schema metrics, index optimization & read-only diagnostic console';
      renderSysDbModule(container);
      break;
    case 'sys_backup':
      subEl.textContent = 'Automated & manual encrypted PostgreSQL snapshots and point-in-time recovery';
      renderSysBackupModule(container);
      break;
    case 'sys_logs':
      subEl.textContent = 'Real-time application, authentication & KHQR payment gateway logs';
      renderSysLogsModule(container);
      break;
    case 'sys_monitor':
      subEl.textContent = 'Live CPU, memory, disk I/O & API endpoint latency telemetry';
      renderSysMonitorModule(container);
      break;
    case 'sys_settings':
      subEl.textContent = 'Environment flags, SSL/TLS, rate limiting & automated backup cron rules';
      renderSysSettingsModule(container);
      break;
  }
}

// -----------------------------------------------------------------------
// 7. CLINIC MODULES IMPLEMENTATION
// -----------------------------------------------------------------------
function renderClinicDashboard(container) {
  const todayAppts = state.appointments.filter(a => a.date === todayStr);
  const totalRevenue = state.invoices.reduce((sum, i) => sum + i.total, 0);
  const totalCollected = state.invoices.reduce((sum, i) => sum + i.paid, 0);
  const pendingCount = state.appointments.filter(a => a.status === 'Pending').length;

  container.innerHTML = `
    <!-- KPI Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-500">Today's Appointments</span>
          <span class="w-9 h-9 rounded-xl bg-mintSoft text-teal-700 flex items-center justify-center"><i class="ph-bold ph-calendar-check text-lg"></i></span>
        </div>
        <div class="text-2xl font-extrabold text-slate-900 mt-2">${todayAppts.length}</div>
        <p class="text-xs text-emerald-600 font-semibold mt-1">${pendingCount} awaiting approval</p>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-500">Registered Patients</span>
          <span class="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><i class="ph-bold ph-users text-lg"></i></span>
        </div>
        <div class="text-2xl font-extrabold text-slate-900 mt-2">${state.patients.length}</div>
        <p class="text-xs text-slate-500 mt-1">Active medical records</p>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-500">Billed Revenue</span>
          <span class="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center"><i class="ph-bold ph-currency-dollar text-lg"></i></span>
        </div>
        <div class="text-2xl font-extrabold text-slate-900 mt-2">$${totalRevenue.toFixed(2)}</div>
        <p class="text-xs text-emerald-600 font-semibold mt-1">$${totalCollected.toFixed(2)} collected</p>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="text-xs font-semibold text-slate-500">Active Dentists</span>
          <span class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center"><i class="ph-bold ph-tooth text-lg"></i></span>
        </div>
        <div class="text-2xl font-extrabold text-slate-900 mt-2">${state.staff.filter(s => s.role === 'dentist').length}</div>
        <p class="text-xs text-teal-700 font-semibold mt-1">2 chairs currently open</p>
      </div>
    </div>

    <!-- Charts Row -->
    <div class="grid lg:grid-cols-12 gap-6">
      <div class="lg:col-span-8 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-bold text-slate-900 text-sm">Weekly Revenue vs. Collections (USD)</h3>
          <span class="text-xs text-slate-400">Updated live</span>
        </div>
        <div class="h-64"><canvas id="dash-rev-chart"></canvas></div>
      </div>
      <div class="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <h3 class="font-bold text-slate-900 text-sm mb-4">Payment Channels</h3>
        <div class="h-64"><canvas id="dash-pay-chart"></canvas></div>
      </div>
    </div>

    <!-- Today's Queue -->
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="p-5 border-b border-slate-100 flex items-center justify-between">
        <h3 class="font-bold text-slate-900 text-sm">Today's Patient Queue (${todayStr})</h3>
        <button onclick="selectModule('appointments')" class="text-xs font-bold text-teal-700 hover:underline">Manage All Appointments →</button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-50 text-slate-500 uppercase">
            <tr>
              <th class="px-5 py-3">Time</th>
              <th class="px-5 py-3">Patient</th>
              <th class="px-5 py-3">Dentist</th>
              <th class="px-5 py-3">Service</th>
              <th class="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${todayAppts.map(a => `
              <tr class="hover:bg-slate-50">
                <td class="px-5 py-3 font-bold text-slate-900">${a.time}</td>
                <td class="px-5 py-3 font-semibold">${a.patientName} <span class="text-slate-400">(${a.patientId})</span></td>
                <td class="px-5 py-3 text-slate-600">${a.dentistName}</td>
                <td class="px-5 py-3 text-slate-600">${a.service}</td>
                <td class="px-5 py-3">
                  <span class="px-2.5 py-1 rounded-full font-bold ${
                    a.status === 'Checked-In' ? 'bg-teal-100 text-teal-800' :
                    a.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                    'bg-amber-100 text-amber-700'
                  }">${a.status}</span>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Render Charts
  const chartOpts = getChartThemeOptions();
  const ctx1 = document.getElementById('dash-rev-chart');
  if (ctx1) {
    activeCharts.push(new Chart(ctx1, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'],
        datasets: [
          { label: 'Billed ($)', data: [420, 580, 390, 640, 710, 820, totalRevenue], backgroundColor: '#0F766E', borderRadius: 6 },
          { label: 'Collected ($)', data: [400, 540, 390, 600, 680, 790, totalCollected], backgroundColor: '#2DD4BF', borderRadius: 6 }
        ]
      },
      options: chartOpts
    }));
  }
  const ctx2 = document.getElementById('dash-pay-chart');
  if (ctx2) {
    activeCharts.push(new Chart(ctx2, {
      type: 'doughnut',
      data: {
        labels: ['Bakong / KHQR', 'Cash (USD)', 'Bank Transfer'],
        datasets: [{ data: [52, 33, 15], backgroundColor: ['#0F766E', '#14B8A6', '#F59E0B'], borderWidth: 0 }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: chartOpts.plugins
      }
    }));
  }
}

// FR-01 & FR-04: USER & STAFF MANAGEMENT
function renderStaffModule(container) {
  container.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-base font-bold text-slate-900">Staff & System Accounts (${state.staff.length})</h2>
        <p class="text-xs text-slate-500">Create accounts, assign RBAC roles, and activate or deactivate staff access.</p>
      </div>
      <button onclick="openAddStaffModal()" class="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-bold flex items-center gap-2 shadow-sm">
        <i class="ph-bold ph-user-plus"></i> Add Staff Account
      </button>
    </div>

    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-50 text-slate-500 uppercase">
            <tr>
              <th class="px-5 py-3">ID</th>
              <th class="px-5 py-3">Staff Name</th>
              <th class="px-5 py-3">Assigned Role</th>
              <th class="px-5 py-3">Contact</th>
              <th class="px-5 py-3">Status</th>
              <th class="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${state.staff.map(s => `
              <tr class="hover:bg-slate-50">
                <td class="px-5 py-3 font-bold text-slate-500">${s.id}</td>
                <td class="px-5 py-3 font-bold text-slate-900">${s.name}</td>
                <td class="px-5 py-3">
                  <span class="px-2.5 py-1 rounded-lg bg-mintSoft text-teal-800 font-bold">${s.roleLabel}</span>
                </td>
                <td class="px-5 py-3 text-slate-600">${s.email}<br/><span class="text-slate-400">${s.phone}</span></td>
                <td class="px-5 py-3">
                  <span class="px-2.5 py-1 rounded-full font-bold ${s.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}">${s.status}</span>
                </td>
                <td class="px-5 py-3 text-right space-x-1">
                  <button onclick="toggleStaffStatus('${s.id}')" class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 font-semibold">
                    ${s.status === 'Active' ? 'Deactivate' : 'Activate'}
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openAddStaffModal() {
  openUniversalModal(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
      <h3 class="font-extrabold text-slate-900 text-base">Create New Staff Account</h3>
      <button onclick="closeUniversalModal()" class="text-slate-400 hover:text-slate-700"><i class="ph-bold ph-x text-lg"></i></button>
    </div>
    <form onsubmit="saveNewStaff(event)" class="space-y-3 text-xs">
      <div>
        <label class="block font-bold text-slate-700 mb-1">Full Name *</label>
        <input type="text" id="new-stf-name" required placeholder="e.g., Dr. Visal Nhem" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
      </div>
      <div>
        <label class="block font-bold text-slate-700 mb-1">System Role *</label>
        <select id="new-stf-role" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
          <option value="dentist">Dentist</option>
          <option value="receptionist">Receptionist</option>
          <option value="clinic_admin">Clinic Admin</option>
          <option value="system_admin">System Admin (IT)</option>
        </select>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block font-bold text-slate-700 mb-1">Email *</label>
          <input type="email" id="new-stf-email" required placeholder="staff@dentalcare.kh" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
        </div>
        <div>
          <label class="block font-bold text-slate-700 mb-1">Phone *</label>
          <input type="text" id="new-stf-phone" required placeholder="012 999 000" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
        </div>
      </div>
      <div class="pt-2 flex justify-end gap-2">
        <button type="button" onclick="closeUniversalModal()" class="px-4 py-2 rounded-xl border border-slate-200 font-semibold">Cancel</button>
        <button type="submit" class="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold">Create Account</button>
      </div>
    </form>
  `);
}

function saveNewStaff(e) {
  e.preventDefault();
  const roleVal = document.getElementById('new-stf-role').value;
  const roleMap = { dentist: 'Dentist', receptionist: 'Receptionist', clinic_admin: 'Clinic Admin', system_admin: 'System Admin (IT)' };
  state.staff.push({
    id: 'STF-0' + (state.staff.length + 1),
    name: document.getElementById('new-stf-name').value,
    role: roleVal,
    roleLabel: roleMap[roleVal],
    specialty: roleVal === 'dentist' ? 'General & Preventive Dentistry' : undefined,
    email: document.getElementById('new-stf-email').value,
    phone: document.getElementById('new-stf-phone').value,
    status: 'Active',
    days: 'Mon - Fri',
    hours: '08:00 - 17:00',
    dayOff: 'Sat - Sun',
    available: true
  });
  closeUniversalModal();
  renderActiveModule();
  showToast('New staff account created successfully!');
}

function toggleStaffStatus(id) {
  const s = state.staff.find(x => x.id === id);
  if (s) {
    s.status = s.status === 'Active' ? 'Inactive' : 'Active';
    renderActiveModule();
    showToast(`${s.name} marked as ${s.status}`);
  }
}

// FR-03: PATIENT MANAGEMENT
function renderPatientsModule(container) {
  container.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div class="relative flex-1 max-w-md">
        <i class="ph-bold ph-magnifying-glass absolute left-3.5 top-3 text-slate-400"></i>
        <input type="text" id="patient-search-input" oninput="filterPatientRows()" placeholder="Search by Patient ID (PT-1001), name, or phone..." class="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:ring-2 focus:ring-teal-500 outline-none" />
      </div>
      <button onclick="openNewPatientModal()" class="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-bold flex items-center gap-2 shadow-sm">
        <i class="ph-bold ph-user-plus"></i> Register New Patient
      </button>
    </div>

    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-50 text-slate-500 uppercase">
            <tr>
              <th class="px-5 py-3">Patient ID</th>
              <th class="px-5 py-3">Full Name</th>
              <th class="px-5 py-3">Gender / Age</th>
              <th class="px-5 py-3">Phone & Address</th>
              <th class="px-5 py-3">Allergies</th>
              <th class="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody id="patients-table-body" class="divide-y divide-slate-100">
            ${renderPatientTableRows(state.patients)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderPatientTableRows(list) {
  return list.map(p => `
    <tr class="hover:bg-slate-50">
      <td class="px-5 py-3 font-extrabold text-teal-700">${p.id}</td>
      <td class="px-5 py-3 font-bold text-slate-900">${p.name}</td>
      <td class="px-5 py-3 text-slate-600">${p.gender} • ${p.age} yrs</td>
      <td class="px-5 py-3 text-slate-600">${p.phone}<br/><span class="text-slate-400">${p.address}</span></td>
      <td class="px-5 py-3"><span class="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-semibold">${p.allergies}</span></td>
      <td class="px-5 py-3 text-right space-x-1">
        <button onclick="viewPatientHistoryModal('${p.id}')" class="px-3 py-1.5 rounded-lg bg-mintSoft text-teal-800 hover:bg-teal-100 font-bold">Profile & History</button>
      </td>
    </tr>
  `).join('');
}

function filterPatientRows() {
  const q = document.getElementById('patient-search-input').value.toLowerCase();
  const filtered = state.patients.filter(p => p.id.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || p.phone.includes(q));
  document.getElementById('patients-table-body').innerHTML = renderPatientTableRows(filtered);
}

function openNewPatientModal() {
  const nextId = 'PT-' + (1001 + state.patients.length);
  openUniversalModal(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
      <div>
        <h3 class="font-extrabold text-slate-900 text-base">Register New Patient</h3>
        <p class="text-xs text-teal-700 font-bold">Auto-Generated ID: ${nextId}</p>
      </div>
      <button onclick="closeUniversalModal()" class="text-slate-400 hover:text-slate-700"><i class="ph-bold ph-x text-lg"></i></button>
    </div>
    <form onsubmit="saveNewPatient(event, '${nextId}')" class="space-y-3 text-xs">
      <div>
        <label class="block font-bold text-slate-700 mb-1">Full Name *</label>
        <input type="text" id="pt-reg-name" required placeholder="e.g., Vannak Chea" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div>
          <label class="block font-bold text-slate-700 mb-1">Gender</label>
          <select id="pt-reg-gender" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
            <option>Female</option><option>Male</option>
          </select>
        </div>
        <div>
          <label class="block font-bold text-slate-700 mb-1">Age *</label>
          <input type="number" id="pt-reg-age" required value="30" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
        </div>
        <div>
          <label class="block font-bold text-slate-700 mb-1">Phone *</label>
          <input type="text" id="pt-reg-phone" required placeholder="012 555 444" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
        </div>
      </div>
      <div>
        <label class="block font-bold text-slate-700 mb-1">Address</label>
        <input type="text" id="pt-reg-addr" placeholder="Phnom Penh" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
      </div>
      <div>
        <label class="block font-bold text-slate-700 mb-1">Known Allergies & Medical History</label>
        <textarea id="pt-reg-allergies" rows="2" placeholder="None known" class="w-full px-3 py-2 rounded-xl border border-slate-300"></textarea>
      </div>
      <div class="pt-2 flex justify-end gap-2">
        <button type="button" onclick="closeUniversalModal()" class="px-4 py-2 rounded-xl border border-slate-200 font-semibold">Cancel</button>
        <button type="submit" class="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold">Save Patient Record</button>
      </div>
    </form>
  `);
}

function saveNewPatient(e, nextId) {
  e.preventDefault();
  state.patients.push({
    id: nextId,
    name: document.getElementById('pt-reg-name').value,
    gender: document.getElementById('pt-reg-gender').value,
    age: parseInt(document.getElementById('pt-reg-age').value, 10),
    phone: document.getElementById('pt-reg-phone').value,
    address: document.getElementById('pt-reg-addr').value || 'Phnom Penh',
    allergies: document.getElementById('pt-reg-allergies').value || 'None known',
    medicalHistory: 'Newly registered patient.',
    clinicalNotes: 'Initial examination pending.',
    teeth: {}
  });
  closeUniversalModal();
  renderActiveModule();
  showToast(`Registered patient ${nextId} successfully!`);
}

function viewPatientHistoryModal(ptId) {
  const p = state.patients.find(x => x.id === ptId);
  const appts = state.appointments.filter(a => a.patientId === ptId);
  openUniversalModal(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
      <div>
        <span class="text-xs font-extrabold text-teal-700">${p.id}</span>
        <h3 class="font-extrabold text-slate-900 text-lg">${p.name}</h3>
      </div>
      <button onclick="closeUniversalModal()" class="text-slate-400 hover:text-slate-700"><i class="ph-bold ph-x text-lg"></i></button>
    </div>
    <div class="space-y-4 text-xs">
      <div class="grid grid-cols-2 gap-3 bg-slate-50 p-3 rounded-xl">
        <div><span class="text-slate-400 block">Gender / Age</span><strong>${p.gender}, ${p.age} yrs</strong></div>
        <div><span class="text-slate-400 block">Phone</span><strong>${p.phone}</strong></div>
        <div class="col-span-2"><span class="text-slate-400 block">Allergies</span><strong class="text-amber-700">${p.allergies}</strong></div>
        <div class="col-span-2"><span class="text-slate-400 block">Medical History</span><p class="text-slate-700 mt-0.5">${p.medicalHistory}</p></div>
      </div>
      <div>
        <h4 class="font-bold text-slate-900 mb-2">Appointment History (${appts.length})</h4>
        <div class="space-y-2">
          ${appts.map(a => `
            <div class="p-2.5 rounded-xl border border-slate-200 flex justify-between items-center">
              <div><strong>${a.service}</strong><span class="block text-slate-500">${a.date} at ${a.time} • ${a.dentistName}</span></div>
              <span class="px-2 py-0.5 rounded-full bg-mintSoft text-teal-800 font-bold">${a.status}</span>
            </div>
          `).join('') || '<p class="text-slate-400">No visits recorded.</p>'}
        </div>
      </div>
    </div>
  `);
}

// FR-04: DENTIST MANAGEMENT
function renderDentistsModule(container) {
  const dentists = state.staff.filter(s => s.role === 'dentist');
  container.innerHTML = `
    <div class="grid md:grid-cols-3 gap-5">
      ${dentists.map(d => `
        <div class="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-400">${d.id}</span>
              <button onclick="toggleDentistAvail('${d.id}')" class="px-2.5 py-1 rounded-full text-[11px] font-bold ${d.available ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-800'}">
                ${d.available ? '● Available Now' : '● Busy / Off-Chair'}
              </button>
            </div>
            <h3 class="text-base font-extrabold text-slate-900 mt-2">${d.name}</h3>
            <p class="text-xs font-semibold text-teal-700">${d.specialty}</p>
            <div class="mt-4 space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl">
              <div class="flex justify-between"><span>Working Days:</span><strong>${d.days}</strong></div>
              <div class="flex justify-between"><span>Shift Hours:</span><strong>${d.hours}</strong></div>
              <div class="flex justify-between"><span>Day Off:</span><strong class="text-rose-600">${d.dayOff}</strong></div>
            </div>
          </div>
          <button onclick="toggleDentistAvail('${d.id}')" class="w-full py-2 rounded-xl border border-slate-300 hover:bg-slate-50 text-xs font-bold text-slate-700">
            Toggle Chair Availability
          </button>
        </div>
      `).join('')}
    </div>
  `;
}

function toggleDentistAvail(id) {
  const d = state.staff.find(x => x.id === id);
  if (d) {
    d.available = !d.available;
    renderActiveModule();
    showToast(`${d.name} status updated.`);
  }
}

// FR-05 & FR-06: APPOINTMENT MANAGEMENT (LIST + DAILY CALENDAR + WALK-IN)
function renderAppointmentsModule(container) {
  const dentists = state.staff.filter(s => s.role === 'dentist');
  const filtered = state.appointments.filter(a => {
    const matchStatus = state.apptFilterStatus === 'ALL' || a.status === state.apptFilterStatus;
    const matchDoc = state.apptFilterDentist === 'ALL' || a.dentistId === state.apptFilterDentist;
    return matchStatus && matchDoc;
  });

  container.innerHTML = `
    <!-- Toolbar -->
    <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
      <div class="flex flex-wrap items-center gap-2">
        <!-- View Switcher -->
        <div class="inline-flex rounded-xl bg-slate-100 p-1">
          <button onclick="setApptView('list')" class="px-3 py-1.5 rounded-lg text-xs font-bold ${state.apptViewMode === 'list' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-600'}">
            <i class="ph-bold ph-list-bullets"></i> List View
          </button>
          <button onclick="setApptView('calendar')" class="px-3 py-1.5 rounded-lg text-xs font-bold ${state.apptViewMode === 'calendar' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-600'}">
            <i class="ph-bold ph-calendar"></i> Daily Dentist Calendar
          </button>
        </div>

        <select onchange="state.apptFilterStatus=this.value; renderActiveModule();" class="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white">
          <option value="ALL" ${state.apptFilterStatus === 'ALL' ? 'selected' : ''}>All Statuses</option>
          <option value="Pending" ${state.apptFilterStatus === 'Pending' ? 'selected' : ''}>Pending</option>
          <option value="Confirmed" ${state.apptFilterStatus === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
          <option value="Checked-In" ${state.apptFilterStatus === 'Checked-In' ? 'selected' : ''}>Checked-In</option>
          <option value="Cancelled" ${state.apptFilterStatus === 'Cancelled' ? 'selected' : ''}>Cancelled</option>
        </select>

        <select onchange="state.apptFilterDentist=this.value; renderActiveModule();" class="px-3 py-2 rounded-xl border border-slate-200 text-xs font-semibold bg-white">
          <option value="ALL">All Dentists</option>
          ${dentists.map(d => `<option value="${d.id}" ${state.apptFilterDentist === d.id ? 'selected' : ''}>${d.name}</option>`).join('')}
        </select>
      </div>

      <button onclick="openWalkInModal()" class="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-bold flex items-center gap-2 shadow-sm">
        <i class="ph-bold ph-plus-circle"></i> New Walk-In Booking
      </button>
    </div>

    ${state.apptViewMode === 'list' ? `
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left text-xs">
            <thead class="bg-slate-50 text-slate-500 uppercase">
              <tr>
                <th class="px-5 py-3">ID & Date</th>
                <th class="px-5 py-3">Patient</th>
                <th class="px-5 py-3">Dentist & Service</th>
                <th class="px-5 py-3">Status</th>
                <th class="px-5 py-3 text-right">Workflow Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              ${filtered.map(a => `
                <tr class="hover:bg-slate-50">
                  <td class="px-5 py-3">
                    <span class="font-extrabold text-slate-900">${a.id}</span>
                    <span class="block text-slate-500">${a.date} • <strong>${a.time}</strong></span>
                  </td>
                  <td class="px-5 py-3">
                    <span class="font-bold text-slate-900">${a.patientName}</span>
                    <span class="block text-slate-400">${a.phone}</span>
                  </td>
                  <td class="px-5 py-3">
                    <span class="font-semibold text-teal-800">${a.dentistName}</span>
                    <span class="block text-slate-600">${a.service}</span>
                  </td>
                  <td class="px-5 py-3">
                    <span class="px-2.5 py-1 rounded-full font-bold ${
                      a.status === 'Checked-In' ? 'bg-teal-100 text-teal-800' :
                      a.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                      a.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                      'bg-rose-100 text-rose-700'
                    }">${a.status}</span>
                  </td>
                  <td class="px-5 py-3 text-right space-x-1">
                    ${a.status === 'Pending' ? `
                      <button onclick="updateApptStatus('${a.id}', 'Confirmed')" class="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold">Approve</button>
                      <button onclick="proposeAltTimeModal('${a.id}')" class="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-800 font-bold">Propose Time</button>
                      <button onclick="updateApptStatus('${a.id}', 'Cancelled')" class="px-2.5 py-1 rounded-lg bg-rose-100 text-rose-700 font-bold">Reject</button>
                    ` : ''}
                    ${a.status === 'Confirmed' ? `
                      <button onclick="updateApptStatus('${a.id}', 'Checked-In')" class="px-3 py-1 rounded-lg bg-teal-700 text-white font-bold">Check-In Patient</button>
                    ` : ''}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    ` : `
      <!-- Daily Dentist Calendar View -->
      <div class="grid md:grid-cols-3 gap-4">
        ${dentists.map(d => {
          const docAppts = filtered.filter(a => a.dentistId === d.id);
          return `
            <div class="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
              <div class="border-b border-slate-100 pb-2.5">
                <h4 class="font-bold text-slate-900 text-sm">${d.name}</h4>
                <p class="text-[11px] text-teal-700">${d.specialty}</p>
              </div>
              <div class="space-y-2">
                ${['09:00', '10:30', '14:00', '15:30', '17:00'].map(slot => {
                  const match = docAppts.find(x => x.time === slot);
                  return match ? `
                    <div class="p-3 rounded-xl bg-mintSoft border border-teal-200 text-xs">
                      <div class="flex justify-between font-bold text-teal-900">
                        <span>${slot}</span>
                        <span>${match.status}</span>
                      </div>
                      <p class="font-bold text-slate-900 mt-1">${match.patientName}</p>
                      <p class="text-slate-600">${match.service}</p>
                    </div>
                  ` : `
                    <div class="p-2.5 rounded-xl border border-dashed border-slate-200 text-xs text-slate-400 flex justify-between">
                      <span>${slot}</span>
                      <span>Open Slot</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `}
  `;
}

function setApptView(mode) {
  state.apptViewMode = mode;
  renderActiveModule();
}

function updateApptStatus(id, status) {
  const a = state.appointments.find(x => x.id === id);
  if (a) {
    a.status = status;
    renderActiveModule();
    showToast(`Appointment ${id} updated to ${status}.`);
  }
}

function proposeAltTimeModal(id) {
  openUniversalModal(`
    <h3 class="font-extrabold text-slate-900 text-base mb-3">Propose Alternative Time (${id})</h3>
    <form onsubmit="applyAltTime(event, '${id}')" class="space-y-3 text-xs">
      <div>
        <label class="block font-bold mb-1">New Date</label>
        <input type="date" id="alt-date" value="${todayStr}" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
      </div>
      <div>
        <label class="block font-bold mb-1">New Time Slot</label>
        <select id="alt-time" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
          <option value="10:30">10:30 AM</option>
          <option value="14:00">02:00 PM</option>
          <option value="15:30">03:30 PM</option>
          <option value="17:00">05:00 PM</option>
        </select>
      </div>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeUniversalModal()" class="px-4 py-2 rounded-xl border">Cancel</button>
        <button type="submit" class="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold">Send & Confirm</button>
      </div>
    </form>
  `);
}

function applyAltTime(e, id) {
  e.preventDefault();
  const a = state.appointments.find(x => x.id === id);
  if (a) {
    a.date = document.getElementById('alt-date').value;
    a.time = document.getElementById('alt-time').value;
    a.status = 'Confirmed';
  }
  closeUniversalModal();
  renderActiveModule();
  showToast('Alternative time confirmed and patient notified!');
}

function openWalkInModal() {
  const dentists = state.staff.filter(s => s.role === 'dentist');
  openUniversalModal(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
      <h3 class="font-extrabold text-slate-900 text-base">Walk-In / Phone Booking</h3>
      <button onclick="closeUniversalModal()" class="text-slate-400 hover:text-slate-700"><i class="ph-bold ph-x text-lg"></i></button>
    </div>
    <form onsubmit="saveWalkInBooking(event)" class="space-y-3 text-xs">
      <div>
        <label class="block font-bold mb-1">Patient *</label>
        <select id="wi-patient" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
          ${state.patients.map(p => `<option value="${p.id}">${p.id} — ${p.name} (${p.phone})</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block font-bold mb-1">Dentist *</label>
        <select id="wi-dentist" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
          ${dentists.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block font-bold mb-1">Service *</label>
        <select id="wi-service" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
          ${state.services.map(s => `<option value="${s.name}">${s.name}</option>`).join('')}
        </select>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block font-bold mb-1">Date</label>
          <input type="date" id="wi-date" value="${todayStr}" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
        </div>
        <div>
          <label class="block font-bold mb-1">Time</label>
          <select id="wi-time" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
            <option value="09:00">09:00</option>
            <option value="10:30">10:30</option>
            <option value="14:00">14:00</option>
            <option value="15:30">15:30</option>
            <option value="17:00">17:00</option>
          </select>
        </div>
      </div>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeUniversalModal()" class="px-4 py-2 rounded-xl border">Cancel</button>
        <button type="submit" class="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold">Book & Confirm</button>
      </div>
    </form>
  `);
}

function saveWalkInBooking(e) {
  e.preventDefault();
  const ptId = document.getElementById('wi-patient').value;
  const pt = state.patients.find(p => p.id === ptId);
  const docId = document.getElementById('wi-dentist').value;
  const doc = state.staff.find(d => d.id === docId);
  const date = document.getElementById('wi-date').value;
  const time = document.getElementById('wi-time').value;

  // Conflict prevention
  if (state.appointments.some(a => a.dentistId === docId && a.date === date && a.time === time && a.status !== 'Cancelled')) {
    showToast(`Conflict: ${doc.name} is already booked at ${time}!`, 'error');
    return;
  }

  state.appointments.unshift({
    id: 'APT-' + Math.floor(2100 + Math.random() * 800),
    patientId: pt.id,
    patientName: pt.name,
    phone: pt.phone,
    dentistId: doc.id,
    dentistName: doc.name,
    service: document.getElementById('wi-service').value,
    date,
    time,
    status: 'Confirmed',
    notes: 'Walk-in booking'
  });
  closeUniversalModal();
  renderActiveModule();
  showToast('Walk-in appointment booked & confirmed!');
}

// FR-07 & FR-08: DENTAL RECORDS & INTERACTIVE 32-TOOTH 2D DENTAL CHART
function renderDentalRecordsModule(container) {
  const pt = state.patients.find(p => p.id === state.selectedPatientForChart) || state.patients[0];
  const upperTeeth = [18,17,16,15,14,13,12,11, 21,22,23,24,25,26,27,28];
  const lowerTeeth = [48,47,46,45,44,43,42,41, 31,32,33,34,35,36,37,38];

  const getToothStyle = (num) => {
    const cond = pt.teeth[num] || 'healthy';
    if (cond === 'decayed') return 'bg-rose-500 text-white border-rose-600';
    if (cond === 'filled') return 'bg-sky-500 text-white border-sky-600';
    if (cond === 'missing') return 'bg-slate-300 text-slate-600 border-slate-400 line-through opacity-70';
    return 'bg-white text-slate-800 border-slate-300 hover:border-teal-600';
  };

  const renderToothBtn = (num) => `
    <button onclick="selectToothForEdit(${num})" class="flex flex-col items-center p-1.5 rounded-xl border-2 transition ${getToothStyle(num)} ${state.selectedTooth === num ? 'ring-2 ring-amber-400 scale-105' : ''}">
      <i class="ph-fill ph-tooth text-lg"></i>
      <span class="text-[10px] font-extrabold mt-0.5">#${num}</span>
    </button>
  `;

  const currentCond = pt.teeth[state.selectedTooth] || 'healthy';

  container.innerHTML = `
    <!-- Patient Selector Header -->
    <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <label class="text-xs font-bold text-slate-600">Select Patient Chart:</label>
        <select onchange="state.selectedPatientForChart=this.value; renderActiveModule();" class="px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold bg-white">
          ${state.patients.map(p => `<option value="${p.id}" ${p.id === pt.id ? 'selected' : ''}>${p.id} — ${p.name} (${p.age}y)</option>`).join('')}
        </select>
      </div>
      <div class="flex flex-wrap items-center gap-3 text-xs font-semibold">
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-white border border-slate-400"></span> Healthy</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-rose-500"></span> Decayed</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-sky-500"></span> Filled</span>
        <span class="flex items-center gap-1.5"><span class="w-3 h-3 rounded bg-slate-300"></span> Missing</span>
      </div>
    </div>

    <div class="grid lg:grid-cols-12 gap-6">
      <!-- Interactive 32-Tooth 2D Chart -->
      <div class="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div class="flex items-center justify-between">
          <h3 class="font-extrabold text-slate-900 text-sm">Interactive 32-Tooth Adult Odontogram (FDI Notation)</h3>
          <span class="text-xs text-slate-500">Click any tooth to update status</span>
        </div>

        <!-- Upper Arch -->
        <div>
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 text-center">Upper Arch (Maxillary) — Right / Left</div>
          <div class="grid grid-cols-8 sm:grid-cols-16 gap-1.5">
            ${upperTeeth.map(renderToothBtn).join('')}
          </div>
        </div>

        <div class="border-t border-dashed border-slate-200"></div>

        <!-- Lower Arch -->
        <div>
          <div class="grid grid-cols-8 sm:grid-cols-16 gap-1.5">
            ${lowerTeeth.map(renderToothBtn).join('')}
          </div>
          <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 mt-2 text-center">Lower Arch (Mandibular) — Right / Left</div>
        </div>

        <!-- Selected Tooth Condition Editor -->
        <div class="p-4 rounded-xl bg-mintSoft/70 border border-teal-200 flex flex-wrap items-center justify-between gap-3">
          <div>
            <span class="text-xs font-bold text-teal-900">Selected Tooth #${state.selectedTooth}</span>
            <p class="text-[11px] text-teal-700 capitalize">Current Condition: <strong>${currentCond}</strong></p>
          </div>
          <div class="flex flex-wrap gap-1.5">
            <button onclick="setToothCondition('healthy')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-300 hover:bg-slate-50">Healthy</button>
            <button onclick="setToothCondition('decayed')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-rose-600 text-white hover:bg-rose-500">Decayed</button>
            <button onclick="setToothCondition('filled')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-sky-600 text-white hover:bg-sky-500">Filled</button>
            <button onclick="setToothCondition('missing')" class="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-600 text-white hover:bg-slate-500">Missing</button>
          </div>
        </div>
      </div>

      <!-- Clinical Notes & Medical Alerts -->
      <div class="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 class="font-extrabold text-slate-900 text-sm">Clinical Examination & Alerts</h3>
        <div class="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs">
          <span class="font-bold text-amber-900 block"><i class="ph-fill ph-warning"></i> Allergies & Medical Alerts</span>
          <p class="text-amber-800 mt-1">${pt.allergies} • ${pt.medicalHistory}</p>
        </div>
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Dentist Clinical Notes</label>
          <textarea id="clinical-notes-box" rows="6" class="w-full p-3 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-teal-500 outline-none">${pt.clinicalNotes}</textarea>
        </div>
        <button onclick="saveClinicalNotes()" class="w-full py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-bold shadow-sm">
          Save Clinical Record
        </button>
      </div>
    </div>
  `;
}

function selectToothForEdit(num) {
  state.selectedTooth = num;
  renderActiveModule();
}

function setToothCondition(cond) {
  const pt = state.patients.find(p => p.id === state.selectedPatientForChart) || state.patients[0];
  if (cond === 'healthy') {
    delete pt.teeth[state.selectedTooth];
  } else {
    pt.teeth[state.selectedTooth] = cond;
  }
  renderActiveModule();
  showToast(`Tooth #${state.selectedTooth} updated to ${cond}.`);
}

function saveClinicalNotes() {
  const pt = state.patients.find(p => p.id === state.selectedPatientForChart) || state.patients[0];
  pt.clinicalNotes = document.getElementById('clinical-notes-box').value;
  showToast('Clinical examination notes saved to patient chart.');
}

// FR-09 & FR-10: TREATMENT PLANS & SERVICE CATALOG
function renderTreatmentsModule(container) {
  container.innerHTML = `
    <!-- Active Treatment Plans -->
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="p-5 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-slate-900 text-sm">Patient Treatment Plans (FR-09)</h3>
          <p class="text-xs text-slate-500">Track Planned, In Progress, Completed, and Cancelled procedures</p>
        </div>
        <button onclick="openNewTreatmentModal()" class="px-3.5 py-2 rounded-xl bg-teal-700 text-white text-xs font-bold">+ Add Treatment Plan</button>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-50 text-slate-500 uppercase">
            <tr>
              <th class="px-5 py-3">Plan ID</th>
              <th class="px-5 py-3">Patient</th>
              <th class="px-5 py-3">Tooth & Procedure</th>
              <th class="px-5 py-3">Dentist</th>
              <th class="px-5 py-3">Est. Cost</th>
              <th class="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${state.treatments.map(t => `
              <tr>
                <td class="px-5 py-3 font-bold text-slate-500">${t.id}</td>
                <td class="px-5 py-3 font-bold text-slate-900">${t.patientName}</td>
                <td class="px-5 py-3"><span class="px-2 py-0.5 rounded bg-slate-100 font-bold mr-1">${t.tooth}</span> ${t.procedure}</td>
                <td class="px-5 py-3 text-slate-600">${t.dentist}</td>
                <td class="px-5 py-3 font-bold text-teal-700">$${t.cost}</td>
                <td class="px-5 py-3">
                  <select onchange="updateTreatmentStatus('${t.id}', this.value)" class="px-2.5 py-1 rounded-lg border border-slate-200 font-bold bg-white">
                    ${['Planned', 'In Progress', 'Completed', 'Cancelled'].map(st => `<option value="${st}" ${t.status === st ? 'selected' : ''}>${st}</option>`).join('')}
                  </select>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Dental Services & Pricing Management (FR-10) -->
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="p-5 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h3 class="font-extrabold text-slate-900 text-sm">Clinic Service & Pricing Catalog (FR-10)</h3>
          <p class="text-xs text-slate-500">Updates reflect immediately on the Public Patient Website</p>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-50 text-slate-500 uppercase">
            <tr>
              <th class="px-5 py-3">Service Name</th>
              <th class="px-5 py-3">Category</th>
              <th class="px-5 py-3">Duration</th>
              <th class="px-5 py-3">Price (USD)</th>
              <th class="px-5 py-3 text-right">Public Visibility</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${state.services.map(s => `
              <tr>
                <td class="px-5 py-3 font-bold text-slate-900">${s.name}</td>
                <td class="px-5 py-3 text-slate-600">${s.category}</td>
                <td class="px-5 py-3 text-slate-600">${s.duration}</td>
                <td class="px-5 py-3 font-extrabold text-teal-700">$${s.price}</td>
                <td class="px-5 py-3 text-right">
                  <button onclick="toggleServiceActive('${s.id}')" class="px-3 py-1 rounded-full font-bold ${s.active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-600'}">
                    ${s.active ? 'Published' : 'Hidden'}
                  </button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function updateTreatmentStatus(id, newStatus) {
  const t = state.treatments.find(x => x.id === id);
  if (t) {
    t.status = newStatus;
    showToast(`Treatment ${id} marked as ${newStatus}.`);
  }
}

function toggleServiceActive(id) {
  const s = state.services.find(x => x.id === id);
  if (s) {
    s.active = !s.active;
    renderActiveModule();
    showToast(`${s.name} visibility updated.`);
  }
}

function openNewTreatmentModal() {
  openUniversalModal(`
    <h3 class="font-extrabold text-slate-900 text-base mb-3">Create Treatment Plan</h3>
    <form onsubmit="saveNewTreatment(event)" class="space-y-3 text-xs">
      <div>
        <label class="block font-bold mb-1">Patient</label>
        <select id="trt-pt" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
          ${state.patients.map(p => `<option value="${p.id}">${p.name} (${p.id})</option>`).join('')}
        </select>
      </div>
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block font-bold mb-1">Tooth #</label>
          <input type="text" id="trt-tooth" value="#16" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
        </div>
        <div>
          <label class="block font-bold mb-1">Procedure</label>
          <select id="trt-proc" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
            ${state.services.map(s => `<option value="${s.name}" data-price="${s.price}">${s.name} ($${s.price})</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeUniversalModal()" class="px-4 py-2 rounded-xl border">Cancel</button>
        <button type="submit" class="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold">Add Plan</button>
      </div>
    </form>
  `);
}

function saveNewTreatment(e) {
  e.preventDefault();
  const ptId = document.getElementById('trt-pt').value;
  const pt = state.patients.find(p => p.id === ptId);
  const sel = document.getElementById('trt-proc');
  const cost = parseFloat(sel.options[sel.selectedIndex].dataset.price || 50);
  state.treatments.unshift({
    id: 'TRT-' + Math.floor(505 + Math.random() * 400),
    patientId: pt.id,
    patientName: pt.name,
    tooth: document.getElementById('trt-tooth').value,
    procedure: sel.value,
    dentist: 'Dr. Bopha Chea',
    cost,
    status: 'Planned',
    date: todayStr
  });
  closeUniversalModal();
  renderActiveModule();
  showToast('Treatment plan added!');
}

// FR-11 & FR-12: BILLING, PAYMENTS (BAKONG KHQR / CASH / BANK) & RECEIPTS
function renderBillingModule(container) {
  container.innerHTML = `
    <div class="flex flex-wrap items-center justify-between gap-3">
      <div>
        <h2 class="text-base font-bold text-slate-900">Invoices & Payment Processing</h2>
        <p class="text-xs text-slate-500">Supports partial/full payments via Cash, Bank Transfer, and Bakong / KHQR.</p>
      </div>
      <button onclick="openCreateInvoiceModal()" class="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white text-xs font-bold flex items-center gap-2 shadow-sm">
        <i class="ph-bold ph-plus"></i> Create New Invoice
      </button>
    </div>

    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead class="bg-slate-50 text-slate-500 uppercase">
            <tr>
              <th class="px-5 py-3">Invoice #</th>
              <th class="px-5 py-3">Patient</th>
              <th class="px-5 py-3">Total</th>
              <th class="px-5 py-3">Paid</th>
              <th class="px-5 py-3">Balance Due</th>
              <th class="px-5 py-3">Status</th>
              <th class="px-5 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            ${state.invoices.map(inv => {
              const balance = Math.max(0, inv.total - inv.paid);
              return `
                <tr class="hover:bg-slate-50">
                  <td class="px-5 py-3 font-extrabold text-slate-900">${inv.id}<span class="block text-slate-400 font-normal">${inv.date}</span></td>
                  <td class="px-5 py-3 font-bold text-slate-800">${inv.patientName} <span class="text-slate-400">(${inv.patientId})</span></td>
                  <td class="px-5 py-3 font-bold">$${inv.total.toFixed(2)}</td>
                  <td class="px-5 py-3 text-emerald-700 font-bold">$${inv.paid.toFixed(2)}</td>
                  <td class="px-5 py-3 font-extrabold ${balance > 0 ? 'text-rose-600' : 'text-slate-400'}">$${balance.toFixed(2)}</td>
                  <td class="px-5 py-3">
                    <span class="px-2.5 py-1 rounded-full font-bold ${
                      inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-700' :
                      inv.status === 'Partial' ? 'bg-amber-100 text-amber-800' :
                      'bg-rose-100 text-rose-700'
                    }">${inv.status}</span>
                  </td>
                  <td class="px-5 py-3 text-right space-x-1">
                    ${balance > 0 ? `
                      <button onclick="openRecordPaymentModal('${inv.id}')" class="px-3 py-1.5 rounded-lg bg-teal-700 text-white font-bold">Record Payment</button>
                    ` : ''}
                    <button onclick="openReceiptModal('${inv.id}')" class="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 font-bold">
                      <i class="ph-bold ph-printer"></i> Receipt
                    </button>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function openRecordPaymentModal(invId) {
  const inv = state.invoices.find(i => i.id === invId);
  const balance = Math.max(0, inv.total - inv.paid);
  openUniversalModal(`
    <div class="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
      <div>
        <h3 class="font-extrabold text-slate-900 text-base">Record Payment — ${inv.id}</h3>
        <p class="text-xs text-slate-500">Remaining Balance: <strong class="text-rose-600">$${balance.toFixed(2)}</strong></p>
      </div>
      <button onclick="closeUniversalModal()" class="text-slate-400 hover:text-slate-700"><i class="ph-bold ph-x text-lg"></i></button>
    </div>
    <form onsubmit="processPayment(event, '${inv.id}')" class="space-y-4 text-xs">
      <div>
        <label class="block font-bold mb-1">Payment Amount (USD) *</label>
        <input type="number" step="0.01" max="${balance}" min="1" id="pay-amount" value="${balance.toFixed(2)}" required class="w-full px-3 py-2.5 rounded-xl border border-slate-300 font-bold text-sm" />
      </div>
      <div>
        <label class="block font-bold mb-1">Payment Method *</label>
        <select id="pay-method" onchange="toggleKhqrBox(this.value)" class="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-semibold">
          <option value="QR Payment (Bakong/KHQR)">QR Payment (Bakong / KHQR)</option>
          <option value="Cash">Cash (USD / KHR)</option>
          <option value="Bank Transfer">Bank Transfer (ABA / ACLEDA)</option>
        </select>
      </div>
      <div id="khqr-preview-box" class="p-4 rounded-xl bg-rose-50 border border-rose-200 text-center space-y-2">
        <span class="inline-block px-2.5 py-0.5 rounded bg-rose-600 text-white font-extrabold text-[10px]">KHQR • BAKONG</span>
        <div class="w-28 h-28 mx-auto bg-white p-2 rounded-xl border border-slate-200 flex items-center justify-center">
          <i class="ph-bold ph-qr-code text-6xl text-slate-900"></i>
        </div>
        <p class="text-[11px] text-slate-600">Scan with ABA, ACLEDA, Wing, or Bakong App</p>
      </div>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeUniversalModal()" class="px-4 py-2 rounded-xl border">Cancel</button>
        <button type="submit" class="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold">Confirm Payment</button>
      </div>
    </form>
  `);
}

function toggleKhqrBox(val) {
  const box = document.getElementById('khqr-preview-box');
  if (box) box.style.display = val.includes('QR') ? 'block' : 'none';
}

function processPayment(e, invId) {
  e.preventDefault();
  const inv = state.invoices.find(i => i.id === invId);
  const amt = parseFloat(document.getElementById('pay-amount').value);
  const method = document.getElementById('pay-method').value;
  inv.paid = Math.min(inv.total, inv.paid + amt);
  inv.method = method;
  inv.status = inv.paid >= inv.total ? 'Paid' : 'Partial';
  closeUniversalModal();
  renderActiveModule();
  showToast(`Recorded $${amt.toFixed(2)} via ${method}.`);
}

function openCreateInvoiceModal() {
  openUniversalModal(`
    <h3 class="font-extrabold text-slate-900 text-base mb-3">Generate New Patient Invoice</h3>
    <form onsubmit="saveNewInvoice(event)" class="space-y-3 text-xs">
      <div>
        <label class="block font-bold mb-1">Patient</label>
        <select id="inv-pt" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
          ${state.patients.map(p => `<option value="${p.id}">${p.name} (${p.id})</option>`).join('')}
        </select>
      </div>
      <div>
        <label class="block font-bold mb-1">Service / Procedure</label>
        <select id="inv-srv" class="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white">
          ${state.services.map(s => `<option value="${s.name}" data-price="${s.price}">${s.name} ($${s.price})</option>`).join('')}
        </select>
      </div>
      <div class="flex justify-end gap-2 pt-2">
        <button type="button" onclick="closeUniversalModal()" class="px-4 py-2 rounded-xl border">Cancel</button>
        <button type="submit" class="px-4 py-2 rounded-xl bg-teal-700 text-white font-bold">Issue Invoice</button>
      </div>
    </form>
  `);
}

function saveNewInvoice(e) {
  e.preventDefault();
  const ptId = document.getElementById('inv-pt').value;
  const pt = state.patients.find(p => p.id === ptId);
  const sel = document.getElementById('inv-srv');
  const price = parseFloat(sel.options[sel.selectedIndex].dataset.price || 50);
  state.invoices.unshift({
    id: 'INV-' + Math.floor(9004 + Math.random() * 900),
    patientId: pt.id,
    patientName: pt.name,
    date: todayStr,
    items: [{ desc: sel.value, qty: 1, price }],
    total: price,
    paid: 0,
    method: 'Pending',
    status: 'Unpaid'
  });
  closeUniversalModal();
  renderActiveModule();
  showToast('New invoice generated!');
}

function openReceiptModal(invId) {
  const inv = state.invoices.find(i => i.id === invId);
  const balance = Math.max(0, inv.total - inv.paid);
  openUniversalModal(`
    <div id="printable-receipt" class="space-y-4 text-xs">
      <div class="flex items-center justify-between border-b border-slate-200 pb-3">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-teal-700 text-white flex items-center justify-center"><i class="ph-fill ph-tooth"></i></div>
          <div>
            <h4 class="font-extrabold text-sm text-slate-900">DENTALCARE CLINIC</h4>
            <p class="text-[10px] text-slate-500">OFFICIAL TAX & MEDICAL RECEIPT</p>
          </div>
        </div>
        <div class="text-right">
          <span class="font-extrabold text-slate-900">${inv.id}</span>
          <span class="block text-slate-500">${inv.date}</span>
        </div>
      </div>
      <div class="bg-slate-50 p-3 rounded-xl flex justify-between">
        <div><span class="text-slate-400 block">Patient</span><strong>${inv.patientName} (${inv.patientId})</strong></div>
        <div class="text-right"><span class="text-slate-400 block">Payment Method</span><strong>${inv.method}</strong></div>
      </div>
      <table class="w-full text-left">
        <thead class="border-b border-slate-200 text-slate-500">
          <tr><th class="py-2">Description</th><th class="py-2 text-right">Amount</th></tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          ${inv.items.map(it => `<tr><td class="py-2">${it.desc} (x${it.qty})</td><td class="py-2 text-right font-bold">$${it.price.toFixed(2)}</td></tr>`).join('')}
        </tbody>
      </table>
      <div class="border-t border-slate-200 pt-3 space-y-1 text-right">
        <div>Total Billed: <strong>$${inv.total.toFixed(2)}</strong></div>
        <div class="text-emerald-700">Amount Paid: <strong>$${inv.paid.toFixed(2)}</strong></div>
        <div class="text-sm font-extrabold">Remaining Balance: $${balance.toFixed(2)}</div>
      </div>
    </div>
    <div class="mt-5 pt-3 border-t border-slate-100 flex justify-end gap-2">
      <button onclick="closeUniversalModal()" class="px-4 py-2 rounded-xl border text-xs font-semibold">Close</button>
      <button onclick="window.print()" class="px-4 py-2 rounded-xl bg-teal-700 text-white text-xs font-bold flex items-center gap-1.5">
        <i class="ph-bold ph-printer"></i> Print Official Receipt
      </button>
    </div>
  `);
}

// FR-13: REPORTS & FINANCIAL ANALYTICS
function renderReportsModule(container) {
  const gross = 14850;
  const expenses = 5420;
  const net = gross - expenses;

  container.innerHTML = `
    <div class="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3">
      <div>
        <h3 class="font-extrabold text-slate-900 text-sm">Monthly Financial & Clinical Performance Report</h3>
        <p class="text-xs text-slate-500">Period: November 2026 • Currency: USD ($)</p>
      </div>
      <label class="inline-flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer bg-slate-100 px-3 py-2 rounded-xl">
        <input type="checkbox" ${state.reportIncludeExpenses ? 'checked' : ''} onchange="state.reportIncludeExpenses=this.checked; renderActiveModule();" class="rounded text-teal-700" />
        Include Operating Expenses & Net Profit
      </label>
    </div>

    <div class="grid sm:grid-cols-3 gap-4">
      <div class="bg-white p-5 rounded-2xl border border-slate-200">
        <span class="text-xs text-slate-500 font-semibold">Gross Clinic Revenue</span>
        <div class="text-2xl font-extrabold text-teal-700 mt-1">$${gross.toLocaleString()}</div>
      </div>
      ${state.reportIncludeExpenses ? `
        <div class="bg-white p-5 rounded-2xl border border-slate-200">
          <span class="text-xs text-slate-500 font-semibold">Operating & Lab Expenses</span>
          <div class="text-2xl font-extrabold text-rose-600 mt-1">$${expenses.toLocaleString()}</div>
        </div>
        <div class="bg-white p-5 rounded-2xl border border-slate-200">
          <span class="text-xs text-slate-500 font-semibold">Net Clinic Profit</span>
          <div class="text-2xl font-extrabold text-emerald-700 mt-1">$${net.toLocaleString()}</div>
        </div>
      ` : ''}
    </div>

    <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
      <h4 class="font-bold text-slate-900 text-sm mb-4">Revenue by Dentist Specialist</h4>
      <div class="h-64"><canvas id="rep-doc-chart"></canvas></div>
    </div>
  `;

  const ctx = document.getElementById('rep-doc-chart');
  if (ctx) {
    activeCharts.push(new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Dr. Bopha Chea', 'Dr. Piseth Keo', 'Dr. Sreyneang Meas'],
        datasets: [{ label: 'Revenue Generated ($)', data: [6420, 4890, 3540], backgroundColor: ['#0F766E', '#0D9488', '#2DD4BF'], borderRadius: 8 }]
      },
      options: getChartThemeOptions()
    }));
  }
}

// CLINIC SETTINGS MODULE
function renderClinicSettingsModule(container) {
  container.innerHTML = `
    <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-2xl space-y-4 text-xs">
      <h3 class="font-extrabold text-slate-900 text-base">Clinic Profile & Payment Gateway Configuration</h3>
      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <label class="block font-bold mb-1">Clinic Name</label>
          <input type="text" value="DentalCare Phnom Penh" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
        </div>
        <div>
          <label class="block font-bold mb-1">Primary Phone</label>
          <input type="text" value="+855 23 888 999" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
        </div>
        <div>
          <label class="block font-bold mb-1">Bakong / KHQR Merchant ID</label>
          <input type="text" value="dentalcare_pp@aclb" class="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono" />
        </div>
        <div>
          <label class="block font-bold mb-1">Exchange Rate (USD to KHR)</label>
          <input type="number" value="4100" class="w-full px-3 py-2 rounded-xl border border-slate-300" />
        </div>
      </div>
      <button onclick="showToast('Clinic settings saved!')" class="px-5 py-2.5 rounded-xl bg-teal-700 text-white font-bold">Save Configuration</button>
    </div>
  `;
}

// -----------------------------------------------------------------------
// 8. SYSTEM ADMIN / IT SUPPORT CONSOLE MODULES
// -----------------------------------------------------------------------
function renderSysOverviewModule(container) {
  const latestBackup = state.backups[0];
  container.innerHTML = `
    <!-- 4 Core Infrastructure Status Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-500">Application Status</span>
          <span class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
        </div>
        <div class="text-xl font-extrabold text-emerald-700 mt-2">Application Running</div>
        <p class="text-xs text-slate-500 mt-1">v3.4.2 • Uptime 99.98%</p>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-500">Database Cluster</span>
          <i class="ph-fill ph-database text-teal-700 text-xl"></i>
        </div>
        <div class="text-xl font-extrabold text-teal-700 mt-2">Database Connected</div>
        <p class="text-xs text-slate-500 mt-1">PostgreSQL 16 • 14ms latency</p>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-500">Cloud Node</span>
          <i class="ph-fill ph-hard-drives text-indigo-600 text-xl"></i>
        </div>
        <div class="text-xl font-extrabold text-indigo-700 mt-2">Server Online</div>
        <p class="text-xs text-slate-500 mt-1">ap-southeast-1 • TLS 1.3 Active</p>
      </div>

      <div class="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold text-slate-500">Disaster Recovery</span>
          <i class="ph-fill ph-cloud-check text-emerald-600 text-xl"></i>
        </div>
        <div class="text-xl font-extrabold text-slate-900 mt-2">Latest Backup Completed</div>
        <p class="text-xs text-slate-500 mt-1">${latestBackup.timestamp} (${latestBackup.size})</p>
      </div>
    </div>

    <!-- Quick IT Diagnostic Actions -->
    <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <h3 class="font-extrabold text-slate-900 text-sm">System Administration Quick Actions</h3>
      <div class="grid sm:grid-cols-3 gap-3 text-xs">
        <button onclick="triggerManualBackup()" class="p-4 rounded-xl border border-slate-200 hover:border-teal-600 hover:bg-mintSoft/50 text-left transition">
          <i class="ph-bold ph-cloud-arrow-up text-teal-700 text-xl"></i>
          <div class="font-bold text-slate-900 mt-1">Trigger Immediate Backup</div>
          <p class="text-slate-500 mt-0.5">Create encrypted DB & dental chart snapshot</p>
        </button>
        <button onclick="selectModule('sys_logs')" class="p-4 rounded-xl border border-slate-200 hover:border-indigo-600 hover:bg-indigo-50/40 text-left transition">
          <i class="ph-bold ph-terminal text-indigo-600 text-xl"></i>
          <div class="font-bold text-slate-900 mt-1">Inspect System Logs</div>
          <p class="text-slate-500 mt-0.5">Filter INFO, WARN & ERROR events</p>
        </button>
        <button onclick="selectModule('sys_monitor')" class="p-4 rounded-xl border border-slate-200 hover:border-amber-600 hover:bg-amber-50/40 text-left transition">
          <i class="ph-bold ph-activity text-amber-600 text-xl"></i>
          <div class="font-bold text-slate-900 mt-1">Server Telemetry</div>
          <p class="text-slate-500 mt-0.5">Check CPU, RAM & KHQR webhook latency</p>
        </button>
      </div>
    </div>
  `;
}

function renderSysDbModule(container) {
  const tables = [
    { name: 'patients', rows: state.patients.length + 1420, size: '12.4 MB', indexHealth: '99.8%' },
    { name: 'appointments', rows: state.appointments.length + 4890, size: '18.1 MB', indexHealth: '99.5%' },
    { name: 'dental_charts_32', rows: 1423, size: '9.6 MB', indexHealth: '100%' },
    { name: 'invoices_khqr', rows: state.invoices.length + 3910, size: '8.5 MB', indexHealth: '99.9%' }
  ];
  container.innerHTML = `
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <div class="p-5 border-b border-slate-100 flex items-center justify-between">
        <h3 class="font-extrabold text-slate-900 text-sm">PostgreSQL Schema & Table Metrics</h3>
        <button onclick="showToast('VACUUM ANALYZE completed on all tables!')" class="px-3.5 py-2 rounded-xl bg-teal-700 text-white text-xs font-bold">Optimize & Vacuum Indexes</button>
      </div>
      <table class="w-full text-left text-xs">
        <thead class="bg-slate-50 text-slate-500 uppercase">
          <tr><th class="px-5 py-3">Table Name</th><th class="px-5 py-3">Total Records</th><th class="px-5 py-3">Storage</th><th class="px-5 py-3">Index Health</th></tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          ${tables.map(t => `
            <tr>
              <td class="px-5 py-3 font-mono font-bold text-indigo-700">${t.name}</td>
              <td class="px-5 py-3 font-bold">${t.rows.toLocaleString()}</td>
              <td class="px-5 py-3 text-slate-600">${t.size}</td>
              <td class="px-5 py-3 text-emerald-700 font-bold">${t.indexHealth}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div class="bg-slate-900 text-slate-200 p-5 rounded-2xl space-y-3 text-xs">
      <div class="flex items-center justify-between">
        <span class="font-mono font-bold text-teal-400">Read-Only Diagnostic SQL Console</span>
        <button onclick="runDiagnosticSql()" class="px-3 py-1.5 rounded-lg bg-teal-600 text-white font-bold">Execute Query</button>
      </div>
      <textarea id="sql-query-box" rows="2" class="w-full p-3 rounded-xl bg-slate-800 border border-slate-700 font-mono text-xs text-emerald-300">SELECT role, COUNT(*) AS active_users FROM staff_accounts WHERE status = 'Active' GROUP BY role;</textarea>
      <pre id="sql-output-box" class="p-3 rounded-xl bg-black/50 text-slate-300 font-mono overflow-x-auto">Ready. Click "Execute Query" to run read-only diagnostics.</pre>
    </div>
  `;
}

function runDiagnosticSql() {
  document.getElementById('sql-output-box').textContent =
    `Query OK (11ms)\n` +
    `role          | active_users\n` +
    `--------------+-------------\n` +
    `dentist       | 3\n` +
    `clinic_admin  | 1\n` +
    `system_admin  | 1\n` +
    `receptionist  | 1`;
  showToast('Diagnostic query executed.');
}

function renderSysBackupModule(container) {
  container.innerHTML = `
    <div class="flex items-center justify-between">
      <h3 class="font-extrabold text-slate-900 text-sm">Encrypted Database Snapshots</h3>
      <button onclick="triggerManualBackup()" class="px-4 py-2.5 rounded-xl bg-teal-700 text-white text-xs font-bold flex items-center gap-2">
        <i class="ph-bold ph-cloud-arrow-up"></i> Create Manual Snapshot Now
      </button>
    </div>
    <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
      <table class="w-full text-left text-xs">
        <thead class="bg-slate-50 text-slate-500 uppercase">
          <tr><th class="px-5 py-3">Snapshot ID</th><th class="px-5 py-3">Timestamp</th><th class="px-5 py-3">Size</th><th class="px-5 py-3">Type</th><th class="px-5 py-3 text-right">Action</th></tr>
        </thead>
        <tbody class="divide-y divide-slate-100">
          ${state.backups.map(b => `
            <tr>
              <td class="px-5 py-3 font-mono font-bold text-slate-900">${b.id}</td>
              <td class="px-5 py-3">${b.timestamp}</td>
              <td class="px-5 py-3 font-semibold">${b.size}</td>
              <td class="px-5 py-3"><span class="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold">${b.type}</span></td>
              <td class="px-5 py-3 text-right">
                <button onclick="showToast('Verified checksum & restore dry-run passed for ${b.id}')" class="px-3 py-1 rounded-lg border border-slate-200 hover:bg-slate-100 font-bold">Verify / Restore</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function triggerManualBackup() {
  const now = new Date().toISOString().replace('T', ' ').slice(0, 19);
  state.backups.unshift({
    id: 'BKP-' + Math.floor(202611170300 + Math.random() * 50),
    timestamp: now,
    size: '48.8 MB',
    type: 'Manual Admin Snapshot',
    status: 'Completed'
  });
  renderActiveModule();
  showToast('Encrypted snapshot created & verified!');
}

function renderSysLogsModule(container) {
  const logs = state.sysLogs.filter(l => state.logFilterLevel === 'ALL' || l.level === state.logFilterLevel);
  container.innerHTML = `
    <div class="flex items-center justify-between">
      <div class="flex gap-1.5">
        ${['ALL', 'INFO', 'WARN', 'ERROR'].map(lvl => `
          <button onclick="state.logFilterLevel='${lvl}'; renderActiveModule();" class="px-3 py-1.5 rounded-xl text-xs font-bold ${state.logFilterLevel === lvl ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 text-slate-700'}">
            ${lvl}
          </button>
        `).join('')}
      </div>
      <span class="text-xs text-slate-500">Showing ${logs.length} events</span>
    </div>

    <div class="bg-slate-900 text-slate-200 rounded-2xl p-4 font-mono text-xs space-y-2">
      ${logs.map(l => {
        const color = l.level === 'ERROR' ? 'text-rose-400' : l.level === 'WARN' ? 'text-amber-300' : 'text-emerald-400';
        return `<div class="p-2 rounded-lg bg-slate-800/80 flex flex-wrap gap-3">
          <span class="text-slate-500">[${l.time}]</span>
          <span class="font-bold ${color}">${l.level}</span>
          <span class="text-teal-300">[${l.service}]</span>
          <span>${l.message}</span>
        </div>`;
      }).join('')}
    </div>
  `;
}

function renderSysMonitorModule(container) {
  const metrics = [
    { label: 'CPU Utilization (4 vCPU)', pct: 28, color: 'bg-emerald-500', detail: '1.12 GHz avg' },
    { label: 'Memory Usage (8 GB RAM)', pct: 54, color: 'bg-teal-600', detail: '4.32 GB / 8.00 GB' },
    { label: 'NVMe SSD Storage', pct: 36, color: 'bg-indigo-600', detail: '72 GB / 200 GB' },
    { label: 'API & KHQR Gateway Latency', pct: 18, color: 'bg-amber-500', detail: '42 ms p95' }
  ];
  container.innerHTML = `
    <div class="grid sm:grid-cols-2 gap-4">
      ${metrics.map(m => `
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
          <div class="flex justify-between text-xs font-bold">
            <span>${m.label}</span>
            <span class="text-teal-700">${m.pct}% (${m.detail})</span>
          </div>
          <div class="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
            <div class="h-full ${m.color} rounded-full" style="width: ${m.pct}%"></div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderSysSettingsModule(container) {
  container.innerHTML = `
    <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-2xl space-y-4 text-xs">
      <h3 class="font-extrabold text-slate-900 text-base">Technical & Security Settings</h3>
      <div class="space-y-3">
        <label class="flex items-center justify-between p-3 rounded-xl bg-slate-50">
          <span class="font-bold">Automated Nightly PostgreSQL Backups (02:00 UTC+7)</span>
          <input type="checkbox" checked class="rounded text-teal-700" />
        </label>
        <label class="flex items-center justify-between p-3 rounded-xl bg-slate-50">
          <span class="font-bold">Enforce RBAC Session Timeout (30 mins idle)</span>
          <input type="checkbox" checked class="rounded text-teal-700" />
        </label>
        <label class="flex items-center justify-between p-3 rounded-xl bg-slate-50">
          <span class="font-bold">KHQR Payment Webhook Signature Verification</span>
          <input type="checkbox" checked class="rounded text-teal-700" />
        </label>
      </div>
      <button onclick="showToast('Technical security policies updated!')" class="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold">Apply Technical Settings</button>
    </div>
  `;
}

// -----------------------------------------------------------------------
// 9. ROLE-AWARE AI ASSISTANT 'KESOR' (កេសរ)
// -----------------------------------------------------------------------
let kesorOpen = false;
function toggleKesor() {
  kesorOpen = !kesorOpen;
  const win = document.getElementById('kesor-window');
  win.classList.toggle('hidden', !kesorOpen);
}

const KESOR_ROLE_DATA = {
  patient: {
    badgeEn: 'Patient', badgeKm: 'អ្នកជំងឺ',
    greetEn: 'Hello! I am KeSor (កេសរ), your DentalCare patient guide. Ask me about services, pricing, dentists, or booking your visit.',
    greetKm: 'សួស្តី! ខ្ញុំគឺ កេសរ (KeSor) ជំនួយការអ្នកជំងឺ។ សូមសួរអំពីសេវាកម្ម តម្លៃ ឬការកក់ការណាត់ជួប!',
    promptsEn: ['Scaling & whitening prices?', 'Which dentists are available?', 'How do I cancel an appointment?'],
    promptsKm: ['តម្លៃសម្អាតធ្មេញប៉ុន្មាន?', 'ទន្តបណ្ឌិតណាខ្លះទំនេរ?', 'តើត្រូវបោះបង់ការណាត់ជួបយ៉ាងដូចម្តេច?']
  },
  clinic_admin: {
    badgeEn: 'Clinic Admin', badgeKm: 'អ្នកគ្រប់គ្រងគ្លីនិក',
    greetEn: 'Welcome Sophea! I am KeSor (កេសរ) for Clinic Administration. Ask me about daily revenue, pending approvals, or staff KPIs.',
    greetKm: 'សូមស្វាគមន៍ សុភា! ខ្ញុំគឺ កេសរ។ សូមសួរអំពីចំណូលប្រចាំថ្ងៃ បុគ្គលិក ឬរបាយការណ៍ហិរញ្ញវត្ថុ។',
    promptsEn: ['Summarize today’s revenue', 'How many pending appointments?', 'Show dentist revenue breakdown'],
    promptsKm: ['សង្ខេបចំណូលថ្ងៃនេះ', 'មានការណាត់ជួបរង់ចាំប៉ុន្មាន?', 'បង្ហាញចំណូលតាមទន្តបណ្ឌិត']
  },
  system_admin: {
    badgeEn: 'System Admin (IT)', badgeKm: 'អ្នកគ្រប់គ្រងប្រព័ន្ធ',
    greetEn: 'Hello Dara! KeSor IT Diagnostics online. All services are healthy: App Running, DB Connected, Server Online, Latest Backup Completed.',
    greetKm: 'សួស្តី តារា! ប្រព័ន្ធទាំងអស់ដំណើរការល្អ៖ App Running, DB Connected, Server Online និង Backup រួចរាល់។',
    promptsEn: ['Check database & backup status', 'Any recent WARN/ERROR logs?', 'Run server health summary'],
    promptsKm: ['ពិនិត្យស្ថានភាព DB និង Backup', 'តើមាន ERROR logs ថ្មីៗទេ?', 'សង្ខេបសុខភាពម៉ាស៊ីនមេ']
  },
  receptionist: {
    badgeEn: 'Receptionist', badgeKm: 'អ្នកទទួលភ្ញៀវ',
    greetEn: 'Hi Malis! KeSor Front-Desk Assistant ready. Need help with walk-in bookings, patient check-ins, or Bakong KHQR invoices?',
    greetKm: 'សួស្តី ម៉ាលីស! ខ្ញុំអាចជួយអ្នកក្នុងការកក់ភ្ញៀវ Walk-in ការចុះឈ្មោះអ្នកជំងឺ និងការចេញវិក្កយបត្រ KHQR។',
    promptsEn: ['Who is next in today’s queue?', 'How to record a KHQR payment?', 'Unpaid invoices summary'],
    promptsKm: ['អ្នកជំងឺណាបន្ទាប់ថ្ងៃនេះ?', 'របៀបកត់ត្រាការទូទាត់ KHQR', 'វិក្កយបត្រមិនទាន់ទូទាត់']
  },
  dentist: {
    badgeEn: 'Dentist', badgeKm: 'ទន្តបណ្ឌិត',
    greetEn: 'Hello Dr. Bopha! KeSor Clinical Assistant ready. Ask about patient allergies, 32-tooth chart findings, or today’s chair schedule.',
    greetKm: 'សួស្តី ទន្តបណ្ឌិត បុប្ផា! ខ្ញុំអាចជួយពិនិត្យប្រវត្តិអាឡែស៊ី តារាងធ្មេញ ៣២ និងកាលវិភាគព្យាបាលថ្ងៃនេះ។',
    promptsEn: ['Check PT-1001 tooth #16 & allergies', 'My appointments today', 'Active treatment plans'],
    promptsKm: ['ពិនិត្យធ្មេញ #16 និងអាឡែស៊ី PT-1001', 'ការណាត់ជួបរបស់ខ្ញុំថ្ងៃនេះ', 'ផែនការព្យាបាលកំពុងដំណើរការ']
  }
};

function updateKesorForRole() {
  const cfg = KESOR_ROLE_DATA[state.role];
  const isKm = state.lang === 'km';
  document.getElementById('kesor-role-pill').textContent = isKm ? cfg.badgeKm : cfg.badgeEn;

  const msgBox = document.getElementById('kesor-messages');
  msgBox.innerHTML = `
    <div class="p-3 rounded-2xl rounded-tl-none bg-white border border-slate-200 text-slate-800 shadow-sm">
      ${isKm ? cfg.greetKm : cfg.greetEn}
    </div>
  `;

  const prompts = isKm ? cfg.promptsKm : cfg.promptsEn;
  document.getElementById('kesor-quick-prompts').innerHTML = prompts.map(p => `
    <button onclick="sendKesorPrompt('${p.replace(/'/g, "\\'")}')" class="px-2.5 py-1 rounded-full bg-mintSoft hover:bg-teal-100 text-teal-800 text-[11px] font-semibold transition">
      ${p}
    </button>
  `).join('');
}

function handleKesorSubmit(e) {
  e.preventDefault();
  const inp = document.getElementById('kesor-input');
  const text = inp.value.trim();
  if (!text) return;
  inp.value = '';
  sendKesorPrompt(text);
}

function sendKesorPrompt(question) {
  const msgBox = document.getElementById('kesor-messages');
  msgBox.innerHTML += `
    <div class="p-3 rounded-2xl rounded-tr-none bg-teal-700 text-white ml-8 shadow-sm">
      ${question}
    </div>
  `;

  const reply = generateKesorReply(question);
  setTimeout(() => {
    msgBox.innerHTML += `
      <div class="p-3 rounded-2xl rounded-tl-none bg-white border border-slate-200 text-slate-800 mr-4 shadow-sm">
        ${reply}
      </div>
    `;
    msgBox.scrollTop = msgBox.scrollHeight;
  }, 250);
}

function generateKesorReply(q) {
  const lower = q.toLowerCase();
  const totalBilled = state.invoices.reduce((s, i) => s + i.total, 0);
  const totalPaid = state.invoices.reduce((s, i) => s + i.paid, 0);

  if (state.role === 'system_admin') {
    if (lower.includes('backup') || lower.includes('db')) {
      return `<strong>System Status:</strong> Application Running, Database Connected (14ms), Server Online. Latest backup <code>${state.backups[0].id}</code> completed at ${state.backups[0].timestamp} (${state.backups[0].size}).`;
    }
    if (lower.includes('log') || lower.includes('error')) {
      return `There is 1 WARN (SMS gateway latency 420ms, auto-retried) and 1 resolved ERROR (imaging cache timeout, recovered in 1.2s). Open <strong>System Logs</strong> for full trace.`;
    }
    return `CPU is at 28%, RAM at 54% (4.32/8 GB), and API p95 latency is 42ms. All 4 infrastructure nodes are green.`;
  }

  if (state.role === 'clinic_admin') {
    if (lower.includes('revenue') || lower.includes('ចំណូល')) {
      return `Today's billed revenue is <strong>$${totalBilled.toFixed(2)}</strong> with <strong>$${totalPaid.toFixed(2)}</strong> collected so far. Monthly gross revenue is $14,850 ($9,430 net profit).`;
    }
    return `You currently have <strong>${state.appointments.filter(a => a.status === 'Pending').length} pending appointments</strong>, ${state.patients.length} registered patients, and ${state.staff.length} active staff accounts.`;
  }

  if (state.role === 'dentist') {
    const pt = state.patients[0];
    return `<strong>Patient ${pt.name} (${pt.id}):</strong> Allergy alert: <span class="text-amber-700 font-bold">${pt.allergies}</span>. Tooth #16 is marked <strong>${pt.teeth[16] || 'healthy'}</strong>. ${pt.clinicalNotes}`;
  }

  if (state.role === 'receptionist') {
    const unpaid = state.invoices.filter(i => i.status !== 'Paid');
    return `There are <strong>${unpaid.length} open invoices</strong> with remaining balances (INV-9001: $30 due, INV-9003: $240 due). You can process Bakong/KHQR or Cash payments in <strong>Billing & Payments</strong>.`;
  }

  // Patient default
  if (lower.includes('price') || lower.includes('scaling') || lower.includes('តម្លៃ')) {
    return `Ultrasonic Scaling & Polishing is <strong>$35</strong>, Composite Filling is <strong>$55</strong>, and Laser Teeth Whitening is <strong>$180</strong>. You can book directly in the form above!`;
  }
  return `Dr. Bopha Chea and Dr. Piseth Keo have open slots today. Use the <strong>Book an Appointment</strong> form on this page or click <strong>Staff Dashboard Login</strong> at the top to preview any staff role.`;
}

// -----------------------------------------------------------------------
// 10. INITIALIZATION
// -----------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {
  initTheme();
  applyTranslations();
  renderPublicPortal();
  updateKesorForRole();
});
