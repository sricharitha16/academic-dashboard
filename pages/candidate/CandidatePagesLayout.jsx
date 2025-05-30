import { Outlet } from 'react-router-dom';
import { VerticalNavBarComponent } from '../../components';

const CandidatePagesLayout = () => {
    const links =[
        {to: '/candidate', label: 'Dashboard', icon: 'fas fa-tachometer-alt'},
        {to: '/candidate/applications', label: 'Applications', icon: 'fa-solid fa-briefcase'},
        {to: '/candidate/chat', label: 'Chat', icon: 'fa-solid fa-comments'},
        {to: '/candidate/profile', label: 'Profile', icon: 'fa-solid fa-user'},
        {to: 'https://axt4888.uta.cloud/', label: 'Blog', icon: 'fa-solid fa-blog'},
        {to: '/candidate/settings', label: 'Settings', icon: 'fa-solid fa-gear'},
        {to: '/logout', label: 'Logout', icon: 'fas fa-sign-out-alt'},
    ]
    return (
        <div className='main-container'>
            <VerticalNavBarComponent links={links}/>
            <div></div>
            <main><Outlet></Outlet></main>
        </div>
    )
}

export default CandidatePagesLayout;