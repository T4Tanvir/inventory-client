import { FaFileInvoiceDollar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./highlightCard.scss"

const HighlightCard = () => {
  return <div className="highlightcard">
    <div className="icon">
    <FaFileInvoiceDollar/>
    </div>
    <div className="informations">
        <p>Invoice amount</p>
        <p>TK 500</p>
        <Link>
        <button>invoice generate</button>
        </Link>
    </div>
  </div>;
};

export default HighlightCard;
