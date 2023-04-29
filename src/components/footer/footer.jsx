import React from "react";
import Follow from "./follow/follow";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer ">
      <Follow />
      
      <div className="foot our_container" >
        <div className="column" style={{paddingRight: "20px"}}>
          <img loading="lazy"   src="/assets/logo_home.png" />
        </div>
        <div className="column">

          {/* //all Categories */}
          <div className="title">All Categories</div>
          <div className="item">
            <a href="#">Vehicules & Motors</a>
          </div>
          <div className="item">
            <a href="#">Specials</a>
          </div>
          <div className="item">
            <a href="#">Fashion, Beauty & Toys</a>
          </div>
          <div className="item">
            <a href="#">Others</a>
          </div>
        </div>
        
        {/* //Specials */}
        <div className="column">
          <div className="title">Specials</div>
          <div className="item">
            <a href="#">Phone Numbers</a>
          </div>
          <div className="item">
            <a href="#">Plate Numbers</a>
          </div>
        </div>

        {/* //vehicules */}
        <div className="column">
          <div className="title">Vehicules & Motors</div>
          <div className="item">
            <a href="#">Car Auctions</a>
          </div>
          <div className="item">
            <a href="#">Cars for Sales</a>
          </div>
          <div className="item">
            <a href="#">Cars for Rent</a>
          </div>
        </div>
        
        
        {/* //Applicances */}
        <div className="column">
          <div className="title">Applicances & Furniture</div>
          <div className="item">
            <a href="#">Tools</a>
          </div>
          <div className="item">
            <a href="#">Kitchen Equipment</a>
          </div>
          <div className="item">
            <a href="#">Mobile</a>
          </div>
          <div className="item">
            <a href="#">Electric Applicances</a>
          </div>
          <div className="item">
            <a href="#">Furniture</a>
          </div>
          <div className="item">
            <a href="#">Soirt Equipments</a>
          </div>
          
        </div>
        
        {/* //Fashion, Beauty & Toys */}
        <div className="column">
          <div className="title">Fashion, Beauty & Toys</div>
          <div className="item">
            <a href="#">Car Auctions</a>
          </div>
          <div className="item">
            <a href="#">Fashion</a>
          </div>
          <div className="item">
            <a href="#">Kids & baby Toys</a>
          </div>
        </div>
        
        {/* //connect with us */}
        <div className="column">
          <div className="title">Connect with us</div>
          <div className="item">
            <a href="#">About us</a>
          </div>
          <div className="item">
            <a href="https://instagram.xomhttps://www.facebook.com/cardealerlebanon">
              Facebook
            </a>
          </div>
          <div className="item">
            <a href="https://www.instagram.com/cardealer.lebanon/?utm_medium=copy_link">
              Instagram
            </a>
          </div>
          <div className="title">Download the App</div>
          <div className="item">
            <a href="https://www.instagram.com/cardealer.lebanon/?utm_medium=copy_link">
              <img loading="lazy"  src="/assets/5a902db97f96951c82922874.png" />
            </a>
          </div>
          <div className="item">
            <a href="https://www.instagram.com/cardealer.lebanon/?utm_medium=copy_link">
            <img loading="lazy"  src="/assets/5a902dbf7f96951c82922875.png"/>
            </a>
          </div>
        </div>




      </div>
    </footer>
  );
}
