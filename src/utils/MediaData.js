const imageData = 
[ 
    {
        mediaUrl: 'https://res.cloudinary.com/dnr8dgxt2/image/upload/v1676601982/Studio%20Project%20Images/studio_banner_3_soeqsg.jpg',
        logo: 'https://res.cloudinary.com/dnr8dgxt2/image/upload/v1677346701/Studio%20Project%20Images/RSH_grey_mxjfha.png',
        studioBlurb: 'https://res.cloudinary.com/dnr8dgxt2/image/upload/v1679110624/Studio%20Project%20Images/wide-studio-space_mbilaj.jpg',
    }
];

const videoData=[
    {
        mediaUrl: "https://player.vimeo.com/video/799706808?autoplay=1&loop=1&autopause=0&muted=1",
    }
];

const blurbInfo=[
    {
        caption: "STATE OF THE ART STUDIO SPACE", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }, 
    {
        caption: "STELLAR SERVICES AND CUTTING EDGE EQUIPMENT",
        DESCRIPTION: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    }
]


// In vimeo - after "?" use autoplay=1&loop=1&autopause=0&muted=1 in order to autoplay, need to mute due to new laws
export { imageData, videoData, blurbInfo}