
//  <div className="relative w-[350px] flex-shrink-0 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-colors hover:border-slate-500 hover:bg-slate-800">
// <div className="flex items-center gap-4 mb-4">
//     <img src="https://picsum.photos/seed/elena/100/100" className="h-10 w-10 rounded-full object-cover border border-slate-600" alt="" />
//     <div>
//         <h4 className="text-sm font-semibold text-white">
//            Elena Rodri
//         </h4>
//         <p className="text-xs text-slate-400">
//             Frontend Dev
//         </p>
//     </div>
// </div>
// <p className="text-sm text-slate-300 leading-relaxed">
//     Performance is unmatched. Highly recommend for any high-scale application.
// </p>
// <div className="mt-4 flex gap-1">
//     <FaRegStar />
//     <FaRegStar />
//     <FaRegStar />
//     <FaRegStar />
//     <FaRegStar />

// </div>

// </div> 



import React from "react";
import { motion } from "framer-motion";
import { FaRegStar, FaStar } from "react-icons/fa"; 

const reviews = [
  {
    id: 1,
    name: "Elena Rodri",
    role: "student",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Quick approval and a very smooth student loan process, with everything completed and funds disbursed within just 48 hours.",
  },
  {
    id: 2,
    name: "Mark Zukar",
    role: "Small Business Owner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "LoanLink provided the capital I needed to expand my bakery within 48 hours. The process was seamless.",
  },
  {
    id: 3,
    name: "Suma Akter",
    role: "Freelance Designer",
    rating: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "Low interest rates and a transparent approval process, highly recommended for freelancers within a short time.",
  },
  {
    id: 4,
    name: "John Doe",
    role: "Agri-Entrepreneur",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    text: "The microloan helped me buy essential equipment quickly, and repayment terms were very flexible.",
  },
];

const CustomerFeedback = () => {

    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => {
            return index < rating ? (
                <FaStar key={index} className="text-yellow-400"/>
            ) : (<FaRegStar key={index} className="text-slate-600"/>)
        });
    } 
  return (
    <div className="w-full py-20 overflow-hidden bg-slate-950">
      
      <div className="flex">
        <motion.div
          className="flex gap-6 pr-6"
          animate={{ x: "-50%" }}
          transition={{
            duration: 60, 
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            
            <div
              key={index}
              className="relative w-[350px] flex-shrink-0 rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm transition-colors hover:border-[#F5AF35] hover:bg-slate-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.image}
                  className="h-10 w-10 rounded-full object-cover border border-slate-600"
                  alt={review.name}
                />
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {review.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {review.role}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {review.text}
              </p>
              
              <div className="mt-4 flex gap-1 ">
                {/* <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar /> */}
                {renderStars(review.rating)}
              </div>
            </div>
            
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerFeedback;





