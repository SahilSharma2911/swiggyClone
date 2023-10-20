import React from 'react'
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'


const Info = () => {

    const [visible, setVisible] = React.useState(false);

    return (
        <>
            <div className='px-4 lg:px-[115px] pt-[60px]'>
            <hr className="mb-[50px]" />
                <div>
                    <h2 className='font-bold text-[23px] mb-5 px-2'>Food culture in Bangalore</h2>
                </div>


                <div className='border border-gray-200 rounded-2xl pt-10 pb-5 px-6'>
                    <h1 className='font-semibold text-slate-600 text-[28px] mt-2'>Reasons to Order Food Online in Bangalore via Swiggy</h1>
                    <p className='text-gray-500 mt-2'>Bangalore, the IT hub of the country, is the city that is a home to millions of young techies staying far away from their homes. If you are also one of those, who does not have a proper functional kitchen, you can understand the pain of missing out on your favourite food. Imagine one day you are having a hectic day at work, and suddenly you find it’s lunchtime. The rats have already started growling in your stomach as it’s already Food O’clock, but you can’t visit the food court due to your ongoing work. Bummer? But no worries, as Swiggy is here to help you. Just take a pause, order food online in Bangalore, and you can resume work. Swiggy assures you of lightning-fast delivery, and the delivery agents will deliver your food within 45 minutes, fresh and hot from the restaurant.</p>
                    {visible && <div>
                        <h1 className='font-semibold text-slate-600 text-[20px] mt-2'>Get your food delivery in Bangalore to experience its food culture</h1>
                        <p className='text-gray-500 mt-2'>The services of food delivery in Bangalore make it easy for you to taste the delicious dishes that this city has to offer. From authentic pizzas and burgers to crispy masala dosa, idli, vada and droolworthy filter coffee, the city has it all. If you want to start with the famous food of Bangalore, try Ragi Mudde, which are traditional gluten-free balls made with finger millet flour. Next on the platter can be Mangaluru buns, which is a banana-based food, served with delicious coconut chutney and kurma. Biryani lovers must try the Anand Dum Biryani served at Hostoke. Bisi Bele Bath is an authentic vegetarian dish made with a combination of rice, veggies, lentils, and ghee and has the flavour of rich spices. The combination of akki roti and chutney pudi is comfort food at its best. Don’t forget to gorge on Chow Chow Bath, a popular street food and dessert of Bangalore.</p>
                        <h3 className='font-semibold text-slate-600 text-[20px] mt-2'>Places to order food online in Bangalore</h3>
                        <p className='text-gray-500 mt-2'>
                            You will not have a dearth of places to order food online, as there are many restaurants offering
                            online
                            food delivery in Bangalore. Here is a list of the restaurants that deliver and serve multi-cuisine
                            food
                            and will offer you an out-of-the-world gastronomical experience:
                            <ul className='list-disc ml-5'>
                                <li>Biryani Pot</li>
                                <li>Meghana Foods</li>
                                <li>Third Wave Coffee</li>
                                <li>Kannur Food Point</li>
                                <li>Asha Tiffins</li>
                                <li>Bakingo</li>
                                <li>Onesta</li>
                                <li>Namaste</li>
                                <li>Madeena Hotel</li>
                                <li>Sandwich Guru</li>
                                <li>Zaitoon</li>
                                <li>Chinese Bae</li>
                                <li>Call Me Chow</li>
                                <li>Al Taza</li>
                                <li>The Bowl Company</li>
                            </ul>
                        </p>
                        <h3 className='font-semibold text-slate-600 text-[20px] mt-2'>Trust Swiggy to tantalize your taste buds</h3>
                        <p className='text-gray-500 mt-2'>If you are constantly searching for food delivery options near you, Swiggy is your best bet. We
                            connect
                            customers who want to place online food orders with restaurant partners. We provide a single window
                            for
                            ordering from a wide range of restaurants and delivering tasty food to your doorstep at the
                            earliest.
                            There is no restriction in order value. Hence, you can place an order for a minimum amount for
                            yourself
                            and your friends. The live tracking feature helps you track the live location of the delivery agent,
                            and
                            you will get an estimate of how long it will take for the food to be delivered.</p>
                        <h3 className='font-semibold text-slate-600 text-[20px] mt-2'>FAQs:</h3>
                        <h3 className='font-semibold text-slate-600 text-[20px] mt-2'>Q. When can I expect my food to be delivered once the order has been placed?</h3>
                        <p className='text-gray-500 mt-2'>
                            A. Once the order has been placed, the delivery agent will deliver the food within 45 minutes.
                        </p>
                        <h3 className='font-semibold text-slate-600 text-[20px] mt-2'>Q. Which areas of Bangalore are served by Swiggy?</h3>
                        <p className='text-gray-500 mt-2'>
                            A. Currently, we are available at Yeshwanthpur, Koramangala, HSR, Banashankari, Kammanahalli/Kalyan
                            Nagar, Battarahalli, Bellandur/Serjapur, Yelahanka, R.T. Nagar, Rajarajeshwari Nagar, Shantinagar,
                            Wilson Garden, Geddalahalli, JP Nagar, Arekere, Whitefield, Kumaraswamy Layout & Uttarahalli,
                            Banaswadi,
                            Frazer Town, Majestic, Kadugodi, CV Raman Nagar, Kudlo Gate, Jayanagar, Basavanavugi, Mahadevpura,
                            Indiranagar, BTM, Basaveshwaranagar, Sanjay Nagar, New BEL Road, Kanakapura Road, Marathahalli,
                            Electronic City, Central Bangalore and Kadubeesanahalli.
                        </p>

                    </div>}
                    <button className='font-bold text-red-600 mt-3 flex items-center' onClick={() => setVisible(!visible)}>
                        {visible ? (
                            <>
                                Show less <IoIosArrowUp className='mx-1 mt-[3px]' />

                            </>
                        ) : (
                            <>
                                Show More <IoIosArrowDown className='mx-1 mt-[3px]' />
                            </>
                        )}
                    </button>
                </div>

                <div className='mt-10'>
                    <h1 className='font-bold text-[23px] mb-5 px-2'>
                        Explore localities in and around Bangalore</h1>
                    <div className="">
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Kr Puran
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Huskur
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Lakshmipura
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Gollahalli
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Hannasandra
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Kadabagere
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Kithonahalli
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Sondekoppa
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Manchanbele
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Mayaganhalli
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Hullagowdanahalli
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Show more
                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <h1 className='font-bold text-[23px] mb-5 px-2'>
                        Restaurant Chains in Bangalore</h1>
                    <div>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Afgani
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            American
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Andra
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Arabian
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Asian
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Awadhi
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Bakery
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Bengali
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Beverages
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Bihari
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Barbecue
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Show more

                        </button>
                    </div>
                </div>

                <div className="mt-10">
                    <h1 className='font-bold text-[23px] mb-5 px-2'>
                        More Food Options Near Me</h1>
                    <div>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Oven Story Pizza
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Beijing Bite
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Andra Gunpowder
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Firangi Bake
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            The Good Bowl
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Ehrouz Biryani
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Faasos - Wraps & Rolls
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Sweet Truth - Cake and Dessert
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Baskin Robbins
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Sharefi Bhai
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Polar Bear Ice Cream Sundaes
                        </button>
                        <button className="border border-gray-200 rounded-xl h-[50px] w-[150px] md:w-[16vw] lg:w-[18vw] mx-3 my-2 truncate px-1">
                            Show more

                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}


export default Info
