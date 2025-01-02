import React from "react";
import {
  MdFireTruck,
  MdOutlineSecurity,
  MdOutlinePayment,
} from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";

const Services = () => {
  return (
    <div className="service_sec">
      <div className="sec_box">

        {/* service -1 */}
        <div className="serv_1">
          <MdFireTruck className="icon" />
          <h3>super fast and free delivery</h3>
        </div>
        
        {/* service -2 */}
        <div className="serv_2">
          <div className="col_1">
            <MdOutlineSecurity className="icon" />
            <h3>Non-contact Shipping</h3>
          </div>
          <div className="col_2">
            <GiReceiveMoney className="icon" />
            <h3>Money-back Guaranteed</h3>
          </div>
        </div>

        {/* service -3 */}
        <div className="serv_3">
          <MdOutlinePayment className="icon" />
          <h3>Super Secure Payment System</h3>
        </div>
      </div>
    </div>
  );
};

export default Services;
