import { Link } from "react-router-dom";
import Icon1 from "../components/realisationSvgs/Icon1";
import Icon2 from "../components/realisationSvgs/Icon2";
import Icon3 from "../components/realisationSvgs/Icon3";
import Icon4 from "../components/realisationSvgs/Icon4";
import Icon5 from "../components/realisationSvgs/Icon5";
import Facebook from "../components/socialMediaIcons/Facebook";
import Instagram from "../components/socialMediaIcons/Instgram";
import Linkedin from "../components/socialMediaIcons/Linkedin";
import strageyIcon1 from "../assets/icons - svg/Blanc/24 px/icon-12.svg";
import strageyIcon2 from "../assets/icons - svg/Blanc/24 px/icon-13.svg";
import strageyIcon3 from "../assets/icons - svg/Blanc/24 px/icon-14.svg";

import productImg1 from "../assets/imgs/p1.png";
import productImg2 from "../assets/imgs/p2.png";
import productImg3 from "../assets/imgs/p3.png";

import postInstaImg1 from "../assets/imgs/SEAFOOD.png";
import postInstaImg2 from "../assets/imgs/DAIRY.png";
import postInstaImg3 from "../assets/imgs/MEAT & POULTRY.png";
import postInstaImg4 from "../assets/imgs/img03.png";

import categoryImg1 from "../assets/imgs/img06.png";
import categoryImg2 from "../assets/imgs/img07.png";
import categoryImg3 from "../assets/imgs/img08.png";
import categoryImg4 from "../assets/imgs/img09.png";
import categoryImg5 from "../assets/imgs/img10.png";
import categoryImg6 from "../assets/imgs/img11.png";
import categoryImg7 from "../assets/imgs/img12.png";

import productImg4 from "../assets/imgs/product01.png";
import productImg5 from "../assets/imgs/product02.png";
import productImg6 from "../assets/imgs/product03.png";
import productImg7 from "../assets/imgs/product04.png";
import productImg8 from "../assets/imgs/product05.png";
import productImg9 from "../assets/imgs/product06.png";

import realisationsImg1 from "../assets/imgs/img03.png";
import realisationsImg2 from "../assets/imgs/img01.png";
import realisationsImg3 from "../assets/imgs/img13.png";
import realisationsImg4 from "../assets/imgs/img02.png";
import realisationsImg5 from "../assets/imgs/img04.png";



export const menu = [
    {
        title: "home",
        path: "./"
    },
    {
        title: "products",
        path: "./products"
    },
    {
        title: "about",
        path: "./about"
    },
    {
        title: "contact",
        path: "./contact"
    },
    // {
    //     title: "blog",
    //     path: "./blog"
    // },

]
export const icons = [
    {
        icon: <Instagram />,
        link: 'https://web.facebook.com/'
    },
    {
        icon: <Facebook />,
        link: 'https://web.facebook.com/'
    },
    {
        icon: <Linkedin />,
        link: 'https://web.facebook.com/'
    },
]
export const services = [
    {
        title: "transportation",
        icon: "../assets/icons - svg/Noir/24 px/icon-06.svg",
        path: ""
    },
    {
        title: "wearhouse",
        icon: "../assets/icons - svg/Noir/24 px/icon-02.svg",
        path: ""
    },
    {
        title: "online reservation",
        icon: "../assets/icons - svg/Noir/24 px/icon-03.svg",
        path: "/reservation"
    },
]
export const news = [
    {
        date: "april, 22 2022",
        title:"Rahal Group Showcases Richness of Moroccan Gastronomy in Washington",
        content:"Moroccan gastronomy is best known for its diversity and the singularity of each dish. Rabat - Moroccan cuisine was on full display during the 2022 Spring Meetings of the International Monetary Fund (IMF) and the World Bank Group (WBG).",
        link:"https://www.moroccoworldnews.com/2022/04/348531/rahal-group-showcases-richness-of-moroccan-gastronomy-in-washington"
    },
    {
        date: "janvier, 05 2022",
        title:"Moroccan Joint Venture to Provide Catering at Shell Stations in Morocco",
        content:"The international business agreement will bring improved catering to Shell service stations across Morocco. Rabat - Petroleum company Vivo Energy Maroc signed today a joint venture with Multi Food Group. ",
        link:"https://www.moroccoworldnews.com/2022/01/346359/moroccan-joint-venture-to-provide-catering-at-shell-stations-in-morocco"
    },
    {
        date: "november, 28 2021",
        title:"Moroccan Group Advises Adenia to Acquire Leading Caterer Company.",
        content:"A Moroccan financial advisory team advised Adenia Partners on their acquisition of leading catering company Overseas Catering Services (OCS), converging sources have reported.",
        link:"https://www.moroccoworldnews.com/2021/11/345755/moroccan-group-advises-adenia-to-acquire-leading-caterer-company"
    },
    {
        date: "october, 07 2021",
        title:"Newrest catering services evolve in Morocco with the opening of “My Place”",
        content:'Newrest opens a new restaurant in Morocco based on the "My Place" student concept. Both the university restaurant and the youth center are dedicated to the students of the Lycée Méditerranéen de Tétouan.',
        link:"newrest.eu/news/newrest-catering-services-evolve-in-morocco-with-the-opening-of-my-place/"
    },
    {
        date: "december, 19 2020",
        title:"Couscous, on the UNESCO Intangible Heritage List",
        content:"The dish of couscous, famous in Morocco and other Maghreb countries, has entered the intangible heritage of UNESCO. UNESCO has accepted the candidature of four countries: Morocco, Tunisia, Algeria and Mauritania, in a file entitled:",
        link:"https://www.mjtnews.com/2020/12/19/couscous-on-the-unesco-intangible-heritage-list/"
    },
]

export const realisations = [
    {
        icon: <Icon1/>,
        number: "9000+",
        img: realisationsImg1,
        desc:
            <p className="desc">
                PALETS STORAGE FOR
                5000 DRY PRODUCTS
                2000 FROZEN 2000
                CHILLED
            </p>,
        bgColor:"bg-orange"
    },
    {
        icon: <Icon2/>,
        number: "120",
        img: realisationsImg2,
        desc:
            <p className="desc">
                EMPLOYEES COMPOSING OUR MOTIVATED,
                DIVERSE & EXPERT
                TEAM
            </p>,
        bgColor:"bg-verte"
    },
    {
        icon: <Icon3/>,
        number: "5000+",
        img: realisationsImg3,
        desc:
            <p className="desc">
                PRODUCTS COVERING
                ALL TYPES OF WORLD
                CUISINES
            </p>,
        bgColor:"bg-[#26bcbc]"
    },
    {
        icon: <Icon4/>,
        number: "1500+",
        img: realisationsImg4,
        desc:
            <p className="desc">
                CUSTOMERS FROM
                SMALL RETAILERS TO
                INTERNATIONAL HOTEL
                CHAINS
            </p>,
        bgColor:"bg-[#b5b515]"
    },
    {
        icon: <Icon5/>,
        number: "25",
        img: realisationsImg5,
        desc:
            <p className="desc">
                TRANSPORTATION
                VEHICLES DELIVERING
                OUR PRODUCTS ALL
                OVER MOROCCO
            </p>,
        bgColor:"bg-[#4d1b87]"
    },
]
export const strategySteps = [
    {
        icon:  <img src={strageyIcon1} alt="" className="p-5 w-full h-[167px] strategyImg" />,
        title: "cash & carry",
        desc: <p className="desc">
            6 Stores offering Large
            choice of products for
            small customers who
            need to shop directly
            from shelf.
        </p>,
    },
    {
        icon:  <img src={strageyIcon2} alt="" className="p-5 w-full h-[223px] strategyImg" />,
        title: "direct distribution",
        desc: <p className="desc">
            Very Large choice of
            products to Food service
            operators (restaurants,
            hotels, ...)
        </p>,
    },
    {
        icon:  <img src={strageyIcon3} alt="" className="p-5 w-full h-[223px] strategyImg" />,
        title: "indirect distribution",
        desc: <p className="desc">
            Very Large choice of
            products for retail &
            wholesale resellers.
        </p>,
    },
]
export const postInsta = [
    {
        img: postInstaImg1,
        path: "/"
    },
    {
        img: postInstaImg2,
        path: "/"
    },
    {
        img: postInstaImg3,
        path: "/"
    },
    {
        img: postInstaImg4,
        path: "/"
    },
    {
        img: postInstaImg2,
        path: "/"
    },
]
export const productHomepage = [
    {
        title: "DAIRY",
        img: productImg1,
        link: "Cheese"
    },
    {
        title: "MEAT & POULTRY",
        img: productImg2,
        link: "Meat & Poultry"
    },
    {
        title: "SEAFOOD",
        img: productImg3,
        link: "Seafood"
    },
]
export const products = [
    {
        title: "Topping Chocolat",
        img: productImg4,
        link: "./productList/:productId",
        brand:"Gourmés",
        price:"$5.99",
        categories:["Beverages"]
    },
    {
        title: "Jackfruit, BBQ",
        img: productImg5,
        link: "./productList/:productId",
        brand:"Jackfruit",
        price:"$5.99",
        categories:["Plant-based"]
    },
    {
        title: "Topping Rraise",
        img: productImg6,
        link: "./productList/:productId",
        brand:"Gourmés",
        price:"$5.99",
        categories:["Beverages"]
    },
    {
        title: "Plant-Based Protein Shake,...",
        img: productImg7,
        link: "./productList/:productId",
        brand:"Koia",
        price:"$5.99",
        categories:["Beverages"]
    },
    {
        title: "Sauce PITA",
        img: productImg8,
        link: "./productList/:productId",
        brand:"Gourmés",
        price:"$5.99",
        categories:["Beverages"]
    },
    {
        title: "Balanced Breaks",
        img: productImg9,
        link: "./productList/:productId",
        brand:"Sargento",
        price:"$5.99",
        categories:["Cheese"]
    },
    {
        title: " 2 Topping Chocolat",
        img: productImg4,
        link: "./productList/:productId",
        brand:"Gourmés",
        price:"$5.99",
        categories:["Beverages"]
    },
    {
        title: " 2 Jackfruit, BBQ",
        img: productImg5,
        link: "./productList/:productId",
        brand:"Jackfruit",
        price:"$5.99",
        categories:["Plant-based"]
    },
    {
        title: " 2 Topping Rraise",
        img: productImg6,
        link: "./productList/:productId",
        brand:"Gourmés",
        price:"$5.99",
        categories:["Beverages"]
    },
    {
        title: " 2 Plant-Based Protein Shake,...",
        img: productImg7,
        link: "./productList/:productId",
        brand:"Koia",
        price:"$5.99",
        categories:["Beverages"]
    },
    {
        title: " 2 Sauce PITA",
        img: productImg8,
        link: "./productList/:productId",
        brand:"Gourmés",
        price:"$5.99",
        categories:["Beverages"]
    },
    {
        title: " 2 Balanced Breaks",
        img: productImg9,
        link: "./productList/:productId",
        brand:"Sargento",
        price:"$5.99",
        categories:["Cheese"]
    },
]
export const categories=[
    {
        img:categoryImg1,
        title:"Cheese",
    },
    {
        img:categoryImg2,
        title:"Dairy",
    },
    {
        img:categoryImg3,
        title:"Berries & Vegetables",
    },
    {
        img:categoryImg4,
        title:"Plant-based",
    },
    {
        img:categoryImg5,
        title:"Meat & Poultry",
    },
    {
        img:categoryImg6,
        title:"Seafood",
    },
    {
        img:categoryImg7,
        title:"Beverages",
    },
]
export const findUsData=[
    {
        city:"Marrakech",
        img:"",
        storageTitle:"Showroom",
        adress:"36, rue bani - rés. la joie, hay el asskari Marrakech - Maroc",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.8203437663897!2d-8.028214073562484!3d31.638769021616433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9818f3cdf1%3A0x40a3ba4b83c3d421!2s36%20Rue%20du%20Bani%2C%20Marrakesh%2040000!5e0!3m2!1sen!2sma!4v1659431904066!5m2!1sen!2sma",
    },
    {
        city:"Casablanca",
        img:"",
        storageTitle:"Dépôt",
        adress:"56, rue chefchaouen ain sebaa - Casablanca - Maroc",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26584.16313639721!2d-7.556346406675012!3d33.60477536670478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd0d97b94767%3A0xefaa690d3b09f762!2sPrivate%20Hospital%20Of%20Casablanca%2C%20A%C3%AEn%20Seba%C3%A2.!5e0!3m2!1sen!2sma!4v1659451088840!5m2!1sen!2sma",
    },
    {
        city:"Agadir",
        img:"",
        storageTitle:"",
        adress:"",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.16099128369!2d-9.533018173824964!3d30.40317392339069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9b7e7260a7f%3A0x4ef4d088a51fa8d3!2sTechnopark%20Agadir!5e0!3m2!1sen!2sma!4v1659451402489!5m2!1sen!2sma",
    },
    {
        city:"Fès",
        img:"",
        storageTitle:"",
        adress:"",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"",
    },
    {
        city:"Rabat",
        img:"",
        storageTitle:"",
        adress:"",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"",
    },
    {
        city:"Marrakech",
        img:"",
        storageTitle:"",
        adress:"36, rue bani - rés. la joie, hay el asskari Marrakech - Maroc",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.8203437663897!2d-8.028214073562484!3d31.638769021616433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee9818f3cdf1%3A0x40a3ba4b83c3d421!2s36%20Rue%20du%20Bani%2C%20Marrakesh%2040000!5e0!3m2!1sen!2sma!4v1659431904066!5m2!1sen!2sma",
    },
    {
        city:"Casablanca",
        img:"",
        storageTitle:"",
        adress:"56, rue chefchaouen ain sebaa - Casablanca - Maroc",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26584.16313639721!2d-7.556346406675012!3d33.60477536670478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd0d97b94767%3A0xefaa690d3b09f762!2sPrivate%20Hospital%20Of%20Casablanca%2C%20A%C3%AEn%20Seba%C3%A2.!5e0!3m2!1sen!2sma!4v1659451088840!5m2!1sen!2sma",
    },
    {
        city:"Agadir",
        img:"",
        storageTitle:"",
        adress:"",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.16099128369!2d-9.533018173824964!3d30.40317392339069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9b7e7260a7f%3A0x4ef4d088a51fa8d3!2sTechnopark%20Agadir!5e0!3m2!1sen!2sma!4v1659451402489!5m2!1sen!2sma",
    },
    {
        city:"Fès",
        img:"",
        storageTitle:"",
        adress:"",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"",
    },
    {
        city:"Rabat",
        img:"",
        storageTitle:"",
        adress:"",
        phoneNumers:["T : +212 600 000 000","T : +212 524 000 000"],
        email:"contact@achibest.com",
        mapApi:"",
    },

]
export const footerComposant=[
    {
        title:<img className='w-[179px] ' src="../assets/logos/Achibest-Express-Logo.svg" alt="" />,
    },
    {
        title:"Find us",
        subComposant:[
            {
                title:"Showroom",
                content:<div className='opacity-60 text-sm '>
                36, rue bani - rés. <br />
                la joie, hay el asskari 
                Marrakech
            </div>,
            },
            {
                title:"Dépôt",
                content: <div className='opacity-60 text-sm '>
                56, rue chefchaouen <br />
                ain sebaa - Casablanca
            </div>,
            }
        ]

    },
    {
        title:"Quick links",
        content:<ul className="linkList gap-1 flex flex-col ">
        {
            menu.map((item, i) => (
                <li className="w-full sm:w-[calc(100%/2-4px)] lg:w-full " key={i} >
                    <Link to={item.path} className=" w-full transition-all hover:text-orange hover:opacity-100 linkItem opacity-60 text-sm capitalize">
                        {item.title}
                    </Link>
                </li>
            ))
        }
    </ul>

    },
    {
        subComposant:[
            {
                title:"Careers",
                content:<a href='mailto:hr@achibest.com' className='transition-all hover:text-orange hover:opacity-100 opacity-60 text-sm'>
                hr@achibest.com
            </a>,
            },
            {
                title:"Email us",
                content:<a href='mailto:contact@achibest.com' className='transition-all hover:text-orange hover:opacity-100 opacity-60 text-sm'>
                contact@achibest.com
            </a>
            }
        ],

    },
    {
        title:"Call us",
        subComposant:[
            {
                title:"Marrakech",
                content: <div>
                <div className='opacity-60 text-sm'>
                    T : +212 600 000 000
                </div>
                <div className='opacity-60 text-sm'>
                    T : +212 600 000 000
                </div>
            </div>,
            },
            {
                title:"Casablanca",
                content:<div>
                <div className='opacity-60 text-sm'>
                    T : +212 600 000 000
                </div>
                <div className='opacity-60 text-sm'>
                    T : +212 600 000 000
                </div>
            </div>,
            }
        ]

    },
]
export const reservationFields=[
    {
        label:"First name",
        isRequired:true,
        onChange:"set",
        inputType:"text",
        placeholder:"Your first name",
    },
    {
        label:"Last name",
        isRequired:true,
        onChange:"",
        inputType:"text",
        placeholder:"Your last name",
    },
    {
        label:"Email",
        isRequired:true,
        onChange:"",
        inputType:"email",
        placeholder:"Your Email",
    },
    {
        label:"Phone",
        isRequired:true,
        onChange:"",
        inputType:"text",
        placeholder:"Your Phone",
    },
    {
        label:"Type of request",
        isRequired:true,
        onChange:"",
        inputType:"select",
        placeholder:"Select your request",
        options:[
            "Transportation",
            "Wearhouse",
            "Reservation"
        ]
    },
    {
        label:"Address",
        isRequired:false,
        onChange:"",
        inputType:"text",
        placeholder:"Your address",
    },
    {
        label:"City",
        isRequired:false,
        onChange:"",
        inputType:"text",
        placeholder:"Your city",
    },
    {
        label:"Zip Code",
        isRequired:false,
        onChange:"",
        inputType:"text",
        placeholder:"Your zip code",
    }
]
export const blogPostsData=[
    {
        title:{rendered:"Bonjour"},
        excerpt:{rendered:"test"},
        content:{rendered:"test"},
        img:{rendered:"kkk"},
    }
]
