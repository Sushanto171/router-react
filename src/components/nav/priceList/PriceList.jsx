import { FaCircleCheck } from "react-icons/fa6";


const PriceList = ({price}) => {
    return (
        <div className="text-center bg-red-300 p-5 rounded-lg flex flex-col gap-10">
            <h3 className="">
                <span className="text-7xl">{price.price}</span>
                <span className="text-2xl">/mon</span>
            </h3>
            <h3 className="font-bold text-2xl">{price.name}</h3>
            <ul className="flex-grow text-left">{price.features.map((feature, i)=> <li  key={i} className="flex items-center gap-2"><FaCircleCheck className="text-emerald-500" />
                {feature}</li>)}</ul>
            <button className=" hover:bg-green-300 bg-yellow-300 w-full rounded-md py-2 font-semibold">Shop now</button>
        </div>
    );
};

export default PriceList;