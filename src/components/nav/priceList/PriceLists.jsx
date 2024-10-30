import PriceList from "./PriceList";

const PriceLists = () => {
    const prices =[
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Free Wi-Fi",
                "Group fitness classes (limited)",
                "Locker room access",
                "Monthly fitness assessments"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Free Wi-Fi",
                "Unlimited group fitness classes",
                "1 personal training session per month",
                "Discount on merchandise",
                "Access to cardio and strength training machines",
                "Weekly fitness workshops"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 69.99,
            "features": [
                "All Standard Membership features",
                "24/7 gym access",
                "Access to specialized classes (yoga, pilates)",
                "2 personal training sessions per month",
                "Free nutrition consultation",
                "Access to sauna and steam room",
                "Priority booking for classes",
                "Monthly wellness newsletters"
            ],
        // },
        // {
        //     "id": 4,
        //     "name": "Family Membership",
        //     "price": 99.99,
        //     "features": [
        //         "All Premium Membership features for up to 4 family members",
        //         "Family-oriented group fitness classes",
        //         "Free family wellness workshops",
        //         "Children's fitness programs",
        //         "Family discounts on additional sessions",
        //         "Access to family lounge area"
        //     ]
        // },
        // {
            "id": 5,
            "name": "Student Membership",
            "price": 19.99,
            "features": [
                "Access to gym equipment",
                "Free Wi-Fi",
                "Discounted group fitness classes",
                "Flexible payment plans",
                "Access to study areas with Wi-Fi",
                "Monthly group study sessions",
                "Special student events and challenges"
            ]
        }
    ]
    
    return (
        <div className="w-10/12 mx-auto mt-20">
            <h3 className="text-2xl md:text-5xl font-semibold">Best Prices in the town</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {
                prices.map(price => <PriceList key={price.id} price={price}/>)
            }
            </div>
        </div>
    );
};

export default PriceLists;