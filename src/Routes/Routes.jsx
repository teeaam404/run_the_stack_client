import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';
import QnaSection from '../Components/QnaSection/QnaSection';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "askqna",
                element: <QnaSection></QnaSection>
            }
        ]
    }
])

export default router