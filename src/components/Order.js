import React from "react";
import { motion } from "framer-motion";

import { containerVariants, childVariants } from "../utils/animatons";

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
