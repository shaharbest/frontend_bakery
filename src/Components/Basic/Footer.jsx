import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getDomainMap } from "../../DataBaseAccess";

function Footer() {
  return (
    <div className="text-center border-t-2 py-1">
      <div className="space-x-1">
        {Object.values(getDomainMap()).map((curDomain, index) => (
          <a key={index} href={curDomain.path}>
            <FontAwesomeIcon className='text-l2' icon={['fab', curDomain.icon]} />
          </a>
        ))}
      </div>
      <div>all rights reseved to Shahar's Corp &copy; </div>
    </div>
  );
}

export default Footer;
