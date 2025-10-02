// import About from "./About";
// import AdvisorsBackers from "./AdvisorsBackers";
// import Blog from "./Blog";
// import BlogDetails from "./BlogDetails";
// import HelpCenter from "./HelpCenter";
// import Home01 from "./Home01";
// import Home02 from "./Home02";
// import Home03 from "./Home03";
// import Nfts from "./Nfts";
// import ParticipantAssets from "./ParticipantAssets";
// import Partners from "./Partners";
// import RoadMap from "./RoadMap";
// import VisionsMission from "./VisionsMission";
// import My_Page from "./My_Page";
// import Payment from "./PaymentGateWay";
// import Team from "./Team";
import Contact from "./Contact";
import Home_V from "./Home_V";
import Department from "../pages/Departments";
import EventsPage from "../pages/eventsPage";
import EachEvent from "../pages/EachEvent";
import AboutUs from "../components/about/aboutdemo"
import Dummy from "../components/Register/dummy";
import Team from "./Team"
import MyTeam from "../components/myteam/myTeam.jsx"
import Poster from "./Poster";
// import Dummy from "../components/Register/dummy";
// { path: '/nfts', component: <Nfts />},
// { path: '/blog', component: <Blog />},
// { path: '/blog-details', component: <BlogDetails />},
// { path: '/visions-mission', component: <VisionsMission />},
// { path: '/help-center', component: <HelpCenter />},
// { path: '/participants-assets', component: <ParticipantAssets />},
// { path: '/advisors-backers', component: <AdvisorsBackers />},
// { path: '/partners', component: <Partners />},
// { path: '/road-map', component: <RoadMap />},
// { path:"/dsp",component:<My_Page />},
// { path: '/dsp', component: <Payment />}



const routes = [
  { path: '/veda2024', component: <Home_V />},
  { path: '/veda2024/Events', component: <Department />},
  { path: '/veda2024/DepartmentEvent/:department', component: <EventsPage />},
  { path: '/veda2024/EachEvent/:department/:eventName', component: <EachEvent />},
  { path: '/veda2024/about', component: <AboutUs />},
  // { path: '/team', component: <Team />},
  { path: '/veda2024/contact', component: <Contact />},
  { path: '/veda2024/organizing-committee', component: <Team />},
  { path:"/veda2024/Register/:department/:eventName",component:<Dummy />},
  { path:"/veda2024/creators-community",component:<MyTeam />},
  { path: '/veda2024/poster', component: <Poster />},
  
  // { path: '/veda2024', component: <Home_V />},
]

export default routes;