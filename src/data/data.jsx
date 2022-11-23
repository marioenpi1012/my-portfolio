import todoImg from '../assets/images/desktop-design-dark.jpg'
import InsureLPImg from '../assets/images/desktop-preview.jpg'
import NetflixCloneImg from '../assets/images/netflixClone.png'
import UrlShorteningImg from '../assets/images/url_shortening.png'
import ElPanamericanoImg from '../assets/images/el_panamericano.png'
import EcomerceImg from '../assets/images/ecomerce.png';
import PhotosnapImg from '../assets/images/photosnap.jpg'
const projectsInfo = [
        {
            id :0,
            title: 'El Panamericano',
            image: ElPanamericanoImg,
            description: "A Landing page for a Restaurant including an admin panel accessible exclusive to the owner. Developed CRUD functionalities with NextJs Rest API and MongoDB.",
            liveWebsite: 'https://elpanamericano.vercel.app',
        },
        
        {
            id:1,
            title: 'Netflix Clone',
            image: NetflixCloneImg,
            description: "A Netflix Clone using an API to get trending, top-rated and more movies/tv-shows. Developed Mobile First with NextJS and Typescript using React hooks exclusively to handle the application life-cycle progress.",
            liveWebsite: 'https://netflix-clone-marioenpi1012.vercel.app/',
            code : 'https://github.com/marioenpi1012/netflix-clone'
        },
        {
            id:2,
            title: 'PhotoSnap',
            image: PhotosnapImg,
            description: "",
            liveWebsite: 'https://photographer-gallery.vercel.app/',
            code : 'https://github.com/marioenpi1012/Photographer-Website'
        },
        {
            id:3,
            title: 'E-commerce',
            image: EcomerceImg,
            description: "An E-commerce displaying products gather from the storeAPI using React. Managed Application State with Redux, increasing efficiency and organization.",
            liveWebsite: 'https://marioenpi1012.github.io/Ecomerce-with-react-redux',
            code : 'https://github.com/marioenpi1012/Ecomerce-with-react-redux'
        },
        {
            id:4,
            title:'URL Shortening',
            image:UrlShorteningImg,
            description:'Build responsive with HTML, SCSS, and React. A URL Shortening app uses am API to short links which are save in local storage.',
            liveWebsite:'https://marioenpi1012.github.io/url_shortening/',
            code:'https://github.com/marioenpi1012/url_shortening'
        },
        {
            id:5,
            title: 'Insure Landing Page',
            image: InsureLPImg,
            description: "Build with HTML/ SCSS and JavaScript A company landing page Design Credit to FrontEnd Mentor.",
            liveWebsite: 'https://marioenpi1012.github.io/InsureLandingPage/',
            code : 'https://github.com/marioenpi1012/InsureLandingPage'
        },
        {
            id :6,
            title: 'Todo App',
            image: todoImg,
            description: "Build with HTML/ SCSS and JavaScript A todo app that stores its data in local storage as long with a dark and light theme. Design Credit to FrontEnd Mentor.",
            liveWebsite: 'https://marioenpi1012.github.io/todo-app/',
            code:'https://github.com/marioenpi1012/todo-app'
        },

]

export default projectsInfo;