import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart , refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  const handleDelete = (item) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:5000/carts/${item._id}` , {
            method : "DELETE"
          })
          .then(res => res.json())
          .then(data => {
            if(data.deletedCount > 0){
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
          })
          .catch(error => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: {error},
              });
          })
        }
      });
  };
  return (
    <section className="w-full bg-[#f3f3f3f3]">
      {/* Dynamic Title Part*/}
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      {/* Section Title */}
      <SectionTitle subHeading="My Heading" heading="WANNA ADD MORE?" />
      {/* Cart Details */}
      <div className="mx-auto w-10/12 lg:w-[992px] p-10 bg-white mb-10">
        <div className="md:flex md:flex-row items-center justify-between uppercase mb-10">
          <p className="font-bold font-cinzel text-3xl text-solid">
            Total orders: {cart.length}
          </p>
          <p className="font-bold font-cinzel text-3xl text-solid">
            Total price: ${total}
          </p>
          <button className="btn bg-dark-yellow border-0 hover:bg-dark-yellow text-white">
            PAY
          </button>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-[#D1A054]">
                <th className="text-white"></th>
                <th className="text-white">ITEM IMAGE</th>
                <th className="text-white">ITEM NAME</th>
                <th className="text-white">PRICE</th>
                <th className="text-white">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cart?.map((item, index) => (
                <tr key={index} className="text-solid">
                  <td>{index + 1}</td>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item?.image} alt="" />
                      </div>
                    </div>
                  </td>
                  <td>{item?.name}</td>
                  <td>${item?.price}</td>
                  <td>
                    <button onClick={() => handleDelete(item)} className="btn btn-error">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default MyCart;
