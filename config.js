// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Avi',
  imageBackground: true,
  openInNewTab: false,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Layout
  bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: '2651664b5034d224d8e01a92cabfb898', // Write here your API Key
  weatherIcons: 'White', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '22.684',
  defaultLongitude: '88.453',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Google',
      icon: 'search',
      link: 'https://www.google.co.in/',
    },
    {
      id: '2',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '3',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/?authuser=1',
    },
    {
      id: '4',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '5',
      name: 'Youtube',
      icon: 'youtube',
      link: 'https://www.youtube.com/?gl=IN&tab=r1&authuser=0',
    },
    {
      id: '6',
      name: 'Spotify',
      icon: 'music',
      link: 'https://open.spotify.com/',
    },
  ],

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Physics Wallah',
      icon: 'graduation-cap',
      link: 'https://www.physicswallah.live/tabs/tabs/batch-tab',
    },
    {
      id: '2',
      name: 'WhatsApp',
      icon: 'message-circle',
      link: 'https://web.whatsapp.com/',
    },
    {
      id: '3',
      name: 'Telegram',
      icon: 'send',
      link: 'https://webk.telegram.org/',
    },
    {
      id: '4',
      name: 'Office',
      icon: 'files',
      link: 'https://www.office.com/',
    },
    {
      id: '5',
      name: 'Router',
      icon: 'wifi',
      link: 'http://192.168.0.1/',
    },
    {
      id: '6',
      name: 'Speedtest',
      icon: 'activity',
      link: 'https://www.speedtest.net/',
    },
  ],
};
