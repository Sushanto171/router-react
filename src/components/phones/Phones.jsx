import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
const Phones = () => {
    const [phones, setPhones] = useState([])
    useEffect(()=>{
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res=> res.json())
        // .then(data => setPhones(data.data))
        axios.get("https://openapi.programming-hero.com/api/phones?search=iphone")
        .then(data =>{
            const phoneData = data.data.data;
            const phoneWithFakeData = phoneData.map(phone=>{
                const obj= {
                    name : phone.phone_name,
                    price: parseInt(phone.slug.split("-")[1])
                }
                return obj
            })
            console.log(phoneWithFakeData)
            setPhones(phoneWithFakeData)
        } )
    }, [])
    return (
        <div>
            
            <h2>Phones: {phones.length}</h2>

            <BarChart width={1000} height={250} data={phones} >
               <XAxis dataKey="name" />
               <CartesianGrid strokeDasharray=" 3 10" />
               <YAxis />
               <Bar dataKey="price" fill="#8884d8" />
                <Legend />
                <Tooltip />
            </BarChart>
        </div>
    );
};

export default Phones;