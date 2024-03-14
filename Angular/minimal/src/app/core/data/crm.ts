const Contacts = [
  {
    profile: "assets/images/users/avatar-10.jpg",
    name: "Tonya Noble",
    company: "Nesta Technologies",
    email: "tonyanoble@velzon.com",
    phone: "414-453-5725",
    score: "154",
    date: "15 Dec, 2021",
    time: "08:58AM",
    tags: ['Lead', 'Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-8.jpg",
    name: "Thomas Taylor",
    company: "iTest Factory",
    email: "thomastaylor@velzon.com",
    phone: "580-464-4694",
    score: "236",
    date: "17 Dec, 2021",
    time: "10:32AM",
    tags: ['Lead'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-9.jpg",
    name: "Nancy Martino",
    company: "Force Medicines",
    email: "nancymartino@velzon.com",
    phone: "786-253-9927",
    score: "197",
    date: "04 Dec, 2021",
    time: "01:36PM",
    tags: ['Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-7.jpg",
    name: "Alexis Clarke",
    company: "Digitech Galaxy",
    email: "alexisclarke@velzon.com",
    phone: "515-395-1069",
    score: "369",
    date: "27 Oct, 2021",
    time: "03:47PM",
    tags: ['Lead', 'Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-6.jpg",
    name: "James Price",
    company: "Themesbrand",
    email: "jamesprice@velzon.com",
    phone: "646-276-2274",
    score: "81",
    date: "23 Oct, 2021",
    time: "03:47PM",
    tags: ['Exiting', 'Lead', 'Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-5.jpg",
    name: "Mary Cousar",
    company: "Micro Design",
    email: "marycousar@velzon.com",
    phone: "540-575-0991",
    score: "643",
    date: "18 Oct, 2021",
    time: "11:08AM",
    tags: ['Exiting'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-3.jpg",
    name: "Herbert Stokes",
    company: "Themesbrand",
    email: "herbertstokes@velzon.com",
    phone: "949-791-0614",
    score: "784",
    date: "01 Jan, 2022",
    time: "03:51PM",
    tags: ['Lead'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-4.jpg",
    name: "Michael Morris",
    company: "Syntyce Solutions",
    email: "michaelmorris@velzon.com",
    phone: "484-606-3104",
    score: "361",
    date: "20 Sep, 2021",
    time: "07:55AM",
    tags: ['Lead', 'Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-2.jpg",
    name: "Timothy Smith",
    company: "Digitech Galaxy",
    email: "timothysmith@velzon.com",
    phone: "231-480-8536",
    score: "732",
    date: "02 Jan, 2022",
    time: "09:32AM",
    tags: ['Long-term', 'Lead'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-9.jpg",
    name: "Kevin Dawson",
    company: "Meta4Systems",
    email: "kevindawson@velzon.com",
    phone: "745-321-9874",
    score: "00",
    date: "02 Jan, 2022",
    time: "09:32AM",
    tags: ['Partner'],
    isSelected: false
  },
]

const Companies = [
  {
    img: 'assets/images/brands/dribbble.png',
    companyName: "Nesta Technologies",
    owner: "Tonya Noble",
    industryType: "Computer Industry",
    rating: "4.5",
    location: "Los Angeles, USA",
    isSelected: false
  },
  {
    img: 'assets/images/brands/bitbucket.png',
    companyName: "iTest Factory",
    owner: "Thomas Taylor",
    industryType: "Chemical Industries",
    rating: "3.8",
    location: "Berlin, Germany",
    isSelected: false
  },
  {
    img: 'assets/images/companies/img-8.png',
    companyName: "Force Medicines",
    owner: "Glen Matney",
    industryType: "Health Services",
    rating: "4.1",
    location: "Phoenix, USA",
    isSelected: false
  },
  {
    img: 'assets/images/companies/img-1.png',
    companyName: "Digitech Galaxy",
    owner: "Alexis Clarke",
    industryType: "Telecommunications Services",
    rating: "3.2",
    location: "Bogota, Colombia",
    isSelected: false
  },
  {
    img: 'assets/images/companies/img-6.png',
    companyName: "Zoetic Fashion",
    owner: "James Price",
    industryType: "Textiles: Clothing, Footwear",
    rating: "4.4",
    location: "Brasilia, Brazil",
    isSelected: false
  },
  {
    img: 'assets/images/brands/dropbox.png',
    companyName: "Micro Design",
    owner: "Mary Cousar",
    industryType: "Financial Services",
    rating: "2.7",
    location: "Windhoek, Namibia",
    isSelected: false
  },
  {
    img: 'assets/images/brands/mail_chimp.png',
    companyName: "Syntyce Solutions",
    owner: "Michael Morris",
    industryType: "Chemical Industries",
    rating: "4.0",
    location: "Damascus, Syria",
    isSelected: false
  },
  {
    img: 'assets/images/companies/img-3.png',
    companyName: "Meta4Systems",
    owner: "Nancy Martino",
    industryType: "Computer Industry",
    rating: "3.3",
    location: "London, UK",
    isSelected: false
  },
  {
    img: 'assets/images/companies/img-4.png',
    companyName: "Moetic Fashion",
    owner: "Timothy Smith",
    industryType: "Textiles: Clothing, Footwear",
    rating: "4.9",
    location: "Damascus, Syria",
    isSelected: false
  },
  {
    img: 'assets/images/brands/slack.png',
    companyName: "Syntyce Solutions",
    owner: "Herbert Stokes",
    industryType: "Health Services",
    rating: "2.9",
    location: "Berlin, Germany",
    isSelected: false
  },
];

// DEALS
const deals = [
  {
    id: 1,
    bgColor: "danger",
    title: "Lead Discovered",
    price: "$265,200",
    deals: "4",
    subItems: [
      {
        id: 1,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-1.jpg",
        title: "Managing sales team meeting",
        price: "$87k",
        date: "01 Jan, 2022",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 2,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-2.jpg",
        title: "Airbnb React Development",
        price: "$20.3k",
        date: "24 Dec, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 3,
        isRibbon: true,
        isOpen: true,
        img: "assets/images/users/avatar-3.jpg",
        title: "Discovery Capital",
        price: "$124.3k",
        date: "29 Dec, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 4,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-4.jpg",
        title: "Airbnb React Development",
        price: "$33.6k",
        date: "24 Dec, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
    ],
  },
  {
    id: 2,
    bgColor: "success",
    title: "Contact Initiated",
    price: "$108,700",
    deals: "5",
    subItems: [
      {
        id: 1,
        isRibbon: true,
        isOpen: false,
        img: "assets/images/users/avatar-5.jpg",
        title: "Custom Mobile Apps",
        price: "$28.7k",
        date: "13 Dec, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 2,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/brands/github.png",
        title: "Investment Deal for Zoetic Fashion",
        price: "$32.8k",
        date: "10 Oct, 2021",
        subTitle: "Zoetic Fashion",
        timeDuration: "25 Days",
        timeDurationClass: "warning",
        isFooter: true,
      },
      {
        id: 3,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-6.jpg",
        title: "Modern Design",
        price: "$23k",
        date: "03 Oct, 2021",
        subTitle: "Micro Design",
        timeDuration: "2 Month",
        timeDurationClass: "success",
        isFooter: true,
      },
      {
        id: 4,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-7.jpg",
        title: "Hotel Logo Design",
        price: "$10.9k",
        date: "05 Jan, 2022",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 5,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/brands/mail_chimp.png",
        title: "Managing Sales",
        price: "$13.3k",
        date: "04 Sep, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
    ],
  },
  {
    id: 3,
    bgColor: "warning",
    title: "Needs Identified",
    price: "$708,200",
    deals: "7",
    subItems: [
      {
        id: 1,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-9.jpg",
        title: "Art Studio Design",
        price: "$147.5k",
        date: "24 Sep, 2021",
        subTitle: "Alexis Clarke",
        timeDuration: "7 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 2,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-8.jpg",
        title: "Billing Page Bug",
        price: "$15.8k",
        date: "17 Dec, 2021",
        subTitle: "Meta4Systems",
        timeDuration: "35 Days",
        timeDurationClass: "warning",
        isFooter: true,
      },
      {
        id: 3,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/brands/dribbble.png",
        title: "Food Selection Platform",
        price: "$72.5k",
        date: "04 Jan, 2022",
        subTitle: "Syntyce Solutions",
        timeDuration: "15 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 4,
        isRibbon: true,
        isOpen: false,
        img: "assets/images/users/avatar-1.jpg",
        title: "Skote React Development",
        price: "$89.8",
        date: "21 Nov, 2021",
        subTitle: "Themesbrand",
        timeDuration: "3 Month",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 5,
        isRibbon: true,
        isOpen: false,
        img: "assets/images/users/avatar-2.jpg",
        title: "Velzon - Admin Dashboard",
        price: "$126.7k",
        date: "30 Dec, 2021",
        subTitle: "Themesbrand",
        timeDuration: "3 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 6,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/companies/img-6.png",
        title: "Wood Elements Design",
        price: "$120.2k",
        date: "24 Nov, 2021",
        subTitle: "iTest Factory ",
        timeDuration: "42 Days",
        timeDurationClass: "warning",
        isFooter: true,
      },
      {
        id: 7,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-10.jpg",
        title: "PayPal SEO audit",
        price: "$135.7k",
        date: "23 Nov, 2021",
        subTitle: "Meta4Systems ",
        timeDuration: "6 Month",
        timeDurationClass: "success",
        isFooter: true,
      },
    ],
  },
  {
    id: 4,
    bgColor: "info",
    title: "Meeting Arranged",
    price: "$44,900",
    deals: "3",
    subItems: [
      {
        id: 1,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/companies/img-5.png",
        title: "SASS app workflow diagram",
        price: "$17.8k",
        date: "01 Jan, 2022",
        subTitle: "Nesta Technologies",
        timeDuration: "10 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 2,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-3.jpg",
        title: "Uber new brand system",
        price: "$24.5k",
        date: "22 Dec, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 3,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/companies/img-8.png",
        title: "TripAdvisor",
        price: "$2.6k",
        date: "12 Dec, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
    ],
  },
  {
    id: 5,
    bgColor: "secondary",
    title: "Offer Accepted",
    price: "$819,300",
    deals: "8",
    subItems: [
      {
        id: 1,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-10.jpg",
        title: "Coupon Website",
        price: "$27.4k",
        date: "07 Jan, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 2,
        isRibbon: true,
        isOpen: false,
        img: "assets/images/brands/slack.png",
        title: "Marketing Automation Demo",
        price: "$94.8",
        date: "19 Nov, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "47 Days",
        timeDurationClass: "warning",
        isFooter: true,
      },
      {
        id: 3,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-4.jpg",
        title: "New Email Design Templates",
        price: "$136.9k",
        date: "05 Jan, 2022",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: false,
      },
      {
        id: 4,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-7.jpg",
        title: "Create New Components",
        price: "$45.9k",
        date: "26 Dec, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Month",
        timeDurationClass: "success",
        isFooter: true,
      },
      {
        id: 5,
        isRibbon: true,
        isOpen: false,
        img: "assets/images/companies/img-3.png",
        title: "New Test Tickets",
        price: "$118k",
        date: "01 Jan, 2022",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 6,
        isRibbon: true,
        isOpen: false,
        img: "assets/images/users/avatar-6.jpg",
        title: "Recover Deleted Folder",
        price: "$87.3k",
        date: "03 Jan, 2022",
        subTitle: "Nesta Technologies",
        timeDuration: "14 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 7,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/brands/github.png",
        title: "Github SEO audit",
        price: "$241.2k",
        date: "21 Sep, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
      {
        id: 8,
        isRibbon: false,
        isOpen: false,
        img: "assets/images/users/avatar-2.jpg",
        title: "Urban Modern Design",
        price: "$67.8k",
        date: "09 Oct, 2021",
        subTitle: "Nesta Technologies",
        timeDuration: "4 Days",
        timeDurationClass: "danger",
        isFooter: true,
      },
    ],
  },
];

const Leads = [
  {
    profile: "assets/images/users/avatar-4.jpg",
    name: "Alexis Clarke",
    company: "Force Medicines",
    score: "147",
    phone: "580-464-4694",
    location: "Los Angeles, USA",
    date: "07 Apr, 2021",
    tags: ['Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-1.jpg",
    name: "James Morris",
    company: "iTest Factory",
    score: "230",
    phone: "863-577-5537",
    location: "Phoenix, USA",
    date: "15 Feb, 2021",
    tags: ['Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-5.jpg",
    name: "Nancy Martino",
    company: "Syntyce Solutions",
    score: "159",
    phone: "786-253-9927",
    location: "London, UK",
    date: "02 Jan, 2022",
    tags: ['Lead', 'Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-6.jpg",
    name: "Michael Morris",
    company: "Micro Design",
    score: "352",
    phone: "786-253-9927",
    location: "Damascus, Syria",
    date: "19 May, 2021",
    tags: ['Exiting', 'Lead', 'Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-3.jpg",
    name: "Kevin Dawson",
    company: "Nesta Technologies",
    score: "78",
    phone: "213-741-4294",
    location: "Bogota, Colombia",
    date: "14 Apr, 2021",
    tags: ['Long-term', 'Lead'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-8.jpg",
    name: "Herbert Stokes",
    company: "Zoetic Fashion",
    score: "85",
    phone: "414-453-5725",
    location: "Windhoek, Namibia",
    date: "07 Jun, 2022",
    tags: ['Exiting'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-10.jpg",
    name: "Glen Matney",
    company: "Moetic Fashion",
    score: "365",
    phone: "515-395-1069",
    location: "Berlin, Germany",
    date: "02 Nov, 2021",
    tags: ['Long-term', 'Lead'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-7.jpg",
    name: "Charles Kubik",
    company: "Syntyce Solutions",
    score: "236",
    phone: "231-480-8536",
    location: "Brasilia, Brazil",
    date: "25 Sep, 2021",
    tags: ['Lead'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-2.jpg",
    name: "Thomas Taylor",
    company: "Digitech Galaxy",
    score: "754",
    phone: "231-480-8536",
    location: "Windhoek, Namibia",
    date: "16 Sep, 2021",
    tags: ['Lead', 'Partner'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-9.jpg",
    name: "Tonya Noble",
    company: "Micro Design",
    score: "193",
    phone: "745-321-9874",
    location: "London, UK",
    date: "23 Nov, 2021",
    tags: ['Lead'],
    isSelected: false
  },
  {
    profile: "assets/images/users/avatar-10.jpg",
    name: "Anna Martino",
    company: "Syntyce Solutions",
    score: "254",
    phone: "654-987-0123",
    location: "London, UK",
    date: "02 Jan, 2022",
    tags: ['Lead', 'Partner'],
    isSelected: false
  },
];

export { Contacts, Companies, deals, Leads };