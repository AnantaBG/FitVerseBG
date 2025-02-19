import { Helmet } from "react-helmet";

const Membership = () => {
    return (
        <div className="my-5 font-mono flex justify-center">
          <Helmet>
                <title>Know More || Membership</title>
            </Helmet>
        <table className="border-collapse border border-gray-200"> 
      <thead className="text-xl">
        <tr>
          <th className="border border-gray-200 p-2">Basic Membership</th>
          <th className="border border-gray-200 p-2">Standard Membership</th>
          <th className="border border-gray-200 p-2">Premium Membership</th>

        </tr>
      </thead>
      <tbody className="text-sm">
        <tr>
          <td className="border border-gray-200 p-2">Access to gym facilities during regular operating hours.</td>
          <td className="border border-gray-200 p-2">All benefits of the basic membership.</td>
          <td className="border border-gray-200 p-2">All benefits of the standard membership.</td>

        </tr>
        <tr>
          <td className="border border-gray-200 p-2">Use of cardio and strength training equipment.</td>
          <td className="border border-gray-200 p-2">Access to group fitness classes such as yoga, spinning, and Zumba.</td>
          <td className="border border-gray-200 p-2">Access to personal training sessions with certified trainers.</td>

        </tr>
        <tr>
          <td className="border border-gray-200 p-2">Access to locker rooms and showers.</td>
          <td className="border border-gray-200 p-2">Use of additional amenities like a sauna or steam room.</td>
          <td className="border border-gray-200 p-2">Discounts on additional services such as massage therapy or nutrition counseling.</td>

        </tr>
        <tr className="font-bold">
          <td className="border border-gray-200 p-2">Price: $10</td>
          <td className="border border-gray-200 p-2">Price: $50</td>
          <td className="border border-gray-200 p-2">Price: $100</td>

        </tr>
      </tbody>
    </table>
            
        </div>
    );
};

export default Membership;