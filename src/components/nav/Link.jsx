const Link = ({route}) => {
    return (
        <li className="px-6 py-2 text-center">
         <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;