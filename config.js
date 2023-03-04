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
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

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

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Google',
      icon: 'search',
      link: 'https://www.google.co.in/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/mail/u/x0rzavi@gmail.com',
    },
    {
      id: '3',
      name: 'Keep',
      icon: 'sticky-note',
      link: 'https://keep.google.com/u/coc.avishek.sen@gmail.com',
    },
	{
      id: '4',
      name: 'Calendar',
      icon: 'calendar-days',
      link: 'https://calendar.google.com/calendar/u/coc.avishek.sen@gmail.com/r/month',
    }, 
    {
      id: '5',
      name: 'Router',
      icon: 'wifi',
      link: 'http://192.168.0.1/',
    },
	{
      id: '6',
      name: 'MAKAUT',
      icon: 'graduation-cap',
      link: 'https://makaut1.ucanapply.com/smartexam/public/',
    },
  ],

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
      link: 'https://new.reddit.com',
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

  // ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'coffee',
			id: '1',
			links: [
				{
					name: 'NSEC Mail',
					link: 'https://mail.google.com/mail/u/avisheksen.it2022@nsec.ac.in',
				},
				{
					name: 'Drive',
					link: 'https://drive.google.com/drive/u/x0rzavi@gmail.com/my-drive',
				},
				{
					name: 'Blaze',
					link: 'https://blaze.vercel.app/',
				},
				{
					name: 'ChatGPT',
					link: 'https://chat.openai.com/chat',
				},
			],
		},
		{
			icon: 'message-square',
			id: '2',
			links: [
				{
					name: 'Reddit',
					link: 'https://www.reddit.com/',
				},
        {
					name: 'Youtube',
					link: 'https://www.youtube.com/',
				},
        {
					name: 'Github',
					link: 'https://github.com/',
				},
        {
					name: 'Linkedin',
					link: 'https://www.linkedin.com',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],

};
