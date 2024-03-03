import React, { useContext } from "react";
import { AuthContext } from "../../../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { _id, image, recipe, name, price } = item;
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [ , refetch] = useCart();
  const handleAddToCart = (item) => {
    const cartItem = {menuItemId : _id , name , image , price , email : user.email};
    if(user && user.email){
      fetch('http://localhost:5000/carts' , {
        method : "POST",
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(cartItem)
      })
      .then((res) => res.json())
      .then((data) => {
        if(data.insertedId){
          refetch(); // refetch cart to update the number of items in the cart 
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Added On The Cart",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(err => console.error(err.message))
    }
    else{
      Swal.fire({
        title: "Please Login to the Order The Food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login' , {state : {from : location}})
        }
      });
    }
  };
  return (
    <div className="card bg-[#F3F3F3]">
      <figure>
        <img
          src={image ? image : "Image Not Found"}
          className="object-cover w-full"
          alt="item img"
        />
        {price && (
          <button className="btn btn-neutral absolute right-3 top-3 text-white">
            ${price ? price : "00.0"}
          </button>
        )}
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title mx-auto text-solid font-inter text-2xl font-semibold">
          {name ? name : "Data Not Found"}
        </h2>
        <p className="text-base font-normal font-inter text-solid">
          {recipe ? recipe : "Data Not Found"}
        </p>
        <div className="card-actions justify-center">
          <button onClick={() => handleAddToCart(item)} className="btn bg-[#F3F3F3] text-dark-yellow outline-none border-0 border-b-2 border-dark-yellow font-medium font-inter text-xl uppercase shadow-lg">
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
