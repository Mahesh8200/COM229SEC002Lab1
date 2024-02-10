import React from "react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="max-w-2xl p-10 h-64 bg-white shadow-md">
        <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
        <p className="mb-2">
          <strong>Address:</strong> Centennial College, 941 Progress Ave,
          Scarborough, ON M1G 3T8
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
        <p className="mb-4">
          <strong>Email:</strong> maheshmakwana8200@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
