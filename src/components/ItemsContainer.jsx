import Item from "./Item";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { MdLocationPin, MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div>
      {" "}
      <div className="grid justify-center grid-cols-1 smd:grid-cols-1 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
        <Item Links={PRODUCTS} title={<MdEmail className="mt-1" />} />
        <Item Links={RESOURCES} title={<FiPhoneCall className="mt-1" />} />
        <Item Links={COMPANY} title={<MdLocationPin className="mt-1" />} />
      </div>
    </div>
  );
};

export default ItemsContainer;
