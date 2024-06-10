import Unknown from '/src/assets/Unknown.png'
import Stoked from '/src/assets/Stoked.avif'
import Jammming from '/src/assets/Jammming.avif'

export const projects = [
    {
        id: 1,
        title: "The Unknown",
        img: Unknown,
        description: "The Unknown is an innovative e-commerce platform specializing in camping equipment. Users can explore various product pages, detailed product descriptions, campsite information, and a shopping cart. The platform features advanced filtering options to categorize products effectively. Additionally, it integrates the NPS API, enabling users to search for campsites by their preferred state.",
        code: "https://github.com/BaileyKH/the-unknown",
        demo: "https://the-unknown.vercel.app/",
        structure: "React",
        style: "Tailwind CSS"
    },
    {
        id: 2,
        title: "Stoked Snowboarding",
        img: Stoked,
        description: "Stoked is a simple ecommerce website that allows users to browse for snowboard equipment. It allows for views of a product page and cart page, while also allowing to filter products by their designated category.",
        code: "https://github.com/BaileyKH/stoked-app",
        demo: "https://stokedsnow.vercel.app/",
        structure: "React",
        style: "CSS"
    },
    {
        id: 3,
        title: "Jammming",
        img: Jammming,
        description: "Utilizing the SpotifyAPI, Jammming is a music website that allows a user to search for songs or a specific artist, then displays the most relevant results. After displaying the results, the user can then add thier choice of songs to a custom playlist, which can then be directly saved to their personal spotify account. ",
        code: "https://github.com/BaileyKH/Jammming",
        demo: "https://jammming-spotify.vercel.app/",
        structure: "React",
        style: "CSS"
    },
]