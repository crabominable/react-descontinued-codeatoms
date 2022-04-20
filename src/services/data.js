const data = [
  {
    id: 1,
    title: 'Mod pronta entrega',
		imagePath: 'https://i.imgur.com/Xim7p6k.png',
		price: 100.00,
		category: 'Product',
		filter: 'Modreadytodeliver',
		byRequest: false,
		containReact: false,
		containSupport: false,
		onTheRise: true,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue.',
			allReadyTo: true,
  	}
  }, {
		id: 2,
    title: 'Mod sob demanda',
		imagePath: 'https://i.imgur.com/Xim7p6k.png',
		price: 200.00,
		category: 'Product',
		filter: 'Modbyrequest',
		byRequest: true,
		containReact: false,
		containSupport: false,
		onTheRise: false,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 3,
    title: 'Script pronta entrega',
		imagePath: 'https://i.imgur.com/2JsbGlX.png',
		price: 80.00,
		category: 'Product',
		filter: 'Scriptreadytodeliver',
		byRequest: false,
		containReact: false,
		containSupport: false,
		onTheRise: false,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 4,
    title: 'Script sob demanda',
		imagePath: 'https://i.imgur.com/2JsbGlX.png',
		price: 140.00,
		category: 'Product',
		filter: 'Scriptbyrequest',
		byRequest: true,
		containReact: false,
		containSupport: false,
		onTheRise: true,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 5,
    title: 'Nui pronta entrega',
		imagePath: 'https://i.imgur.com/Wk1hdd5.png',
		price: 100.00,
		category: 'Product',
		filter: 'Nuireadytodeliver',
		byRequest: false,
		containReact: false,
		containSupport: false,
		onTheRise: false,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 6,
    title: 'Nui sob demanda',
		imagePath: 'https://i.imgur.com/Wk1hdd5.png',
		price: 180.00,
		category: 'Product',
		filter: 'Nuibyrequest',
		byRequest: true,
		containReact: false,
		containSupport: false,
		onTheRise: true,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 7,
    title: 'Nui com React',
		imagePath: 'https://i.imgur.com/Wk1hdd5.png',
		price: 260.00,
		category: 'Product',
		filter: 'NuiwithReact',
		byRequest: true,
		containReact: true,
		containSupport: false,
		onTheRise: true,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 8,
    title: 'Base pronta entrega',
		imagePath: 'https://i.imgur.com/ne4XZQH.png',
		price: 500.00,
		category: 'Product',
		filter: 'Basereadytodeliver',
		byRequest: false,
		containReact: false,
		containSupport: false,
		onTheRise: false,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 9,
    title: 'Base sob demanda',
		imagePath: 'https://i.imgur.com/ne4XZQH.png',
		price: 800.00,
		category: 'Product',
		filter: 'Basebyrequest',
		byRequest: true,
		containReact: false,
		containSupport: true,
		onTheRise: true,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 10,
    title: 'Por projeto',
		imagePath: 'https://i.imgur.com/WtiHqZz.png',
		price: '$$$$',
		category: 'Service',
		filter: 'Byproject',
		byRequest: true,
		containReact: true,
		containSupport: true,
		onTheRise: false,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 11,
    title: 'Otimização de scripts',
		imagePath: 'https://i.imgur.com/l65jptV.png',
		price: 100.00,
		category: 'Service',
		filter: 'Scriptotimization',
		byRequest: true,
		containReact: false,
		containSupport: false,
		onTheRise: true,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}, {
		id: 12,
    title: 'Suporte',
		imagePath: 'https://i.imgur.com/RJj6sPO.png',
		price: '$$$$',
		category: 'Service',
		filter: 'Support',
		byRequest: true,
		containReact: false,
		containSupport: true,
		onTheRise: false,
		rating: [1, 2, 3],
    moreDetails: {
    	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus nullam eget felis eget nunc lobortis mattis aliquam faucibus. Eu mi bibendum neque egestas congue. Facilisi morbi tempus iaculis urna id. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Amet consectetur adipiscing elit pellentesque habitant morbi tristique. Sit amet risus nullam eget felis. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. Diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices.',
			allReadyTo: true,
  	}
	}
];

export default data;
