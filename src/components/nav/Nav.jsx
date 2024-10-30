import Link from "./Link";

const Nav = () => {

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' } // 404 page
      ];
    return (
        <nav>
            <ul>
                    {
                        routes.map(route =><Link key={route.id} route={route}></Link> )
                    }
            </ul>
        </nav>
    );
};

export default Nav;