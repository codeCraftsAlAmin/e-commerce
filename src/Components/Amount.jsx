import React from "react";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Amount = ({ amount, setIcrease, setDcrease }) => {
  return (
    <div className="amount_toggle">
      <button>
        <FaMinus onClick={() => setDcrease()} />
      </button>
      <p>{amount}</p>
      <button>
        <FaPlus onClick={() => setIcrease()} />
      </button>
    </div>
  );
};

export default Amount;
