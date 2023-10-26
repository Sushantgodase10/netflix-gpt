import React from 'react'
import placeholderImage from "../components/img/PlayStore.png";
import placeholderImage1 from "../components/img/AppStore.png";



const Footer = () => {
    const Google = placeholderImage;
    const Iphone = placeholderImage1;
  return (
    <footer class="  bg-gray-900 text-white py-10 ">
    <div class="container mx-auto flex flex-wrap justify-between">
      
        <div class="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h2 class="text-lg font-semibold mb-4">Contact Us</h2>
          
            <p>Pune, India</p>
            <p>Mobile: +91 7057445737</p>
            <p>Email: sushantgodase1048@gmail.com</p>
        </div>

        <div class="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h2 class="text-lg font-semibold mb-4">Download Our App</h2>
            <div class="flex space-x-4">
                <a href="#" class="flex items-center justify-center bg-white text-gray-900 rounded-lg p-2">
                    <img src={Iphone} alt="App Store" class="w-40 h-18"/>
                </a>
                <a href="#" class="flex items-center justify-center bg-white text-gray-900 rounded-lg p-2">
                    <img src={Google} alt="Google Play" class="w-50 h-20"/>
                </a>
            </div>
        </div>

       
        <div class="w-full sm:w-1/2 lg:w-1/4 mb-8">
            <h2 class="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <form action="#" method="post" class="flex">
                <input type="email" placeholder="Your email" class="rounded-l-md p-2 flex-grow" required/>
                <button type="submit" class="bg-blue-500 text-white rounded-r-md p-2">Subscribe</button>
            </form>
        </div>

      
    </div>
</footer>
  )
}

export default Footer