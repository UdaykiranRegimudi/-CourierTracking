import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Tracking Number", "Status", "Location", "Delivery Date",""];
const TABLE_ROWS = [
    { trackingNumber: 123456, status: "In Transit", location: "New York", deliveryDate: "2024-02-22" },
    { trackingNumber: 789012, status: "Delivered", location: "Los Angeles", deliveryDate: "2024-02-20" },
    { trackingNumber: 345678, status: "Out for Delivery", location: "Chicago", deliveryDate: "2024-02-23" },
    { trackingNumber: 901234, status: "In Transit", location: "Houston", deliveryDate: "2024-02-21" },
    { trackingNumber: 567890, status: "Delivered", location: "San Francisco", deliveryDate: "2024-02-19" },
    { trackingNumber: 123789, status: "In Transit", location: "Miami", deliveryDate: "2024-02-22" },
    { trackingNumber: 456012, status: "Pending", location: "Seattle", deliveryDate: "2024-02-24" },
    { trackingNumber: 890123, status: "In Transit", location: "Boston", deliveryDate: "2024-02-23" }
    
];

const  Coriers = () => {
  return (
    <Card className="h-full w-full overflow-scroll mt-5 rounded-lg">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ trackingNumber, status, location, deliveryDate}, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
            return (
              <tr key={trackingNumber}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {trackingNumber}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {status}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {location}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {deliveryDate}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                    Edit
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

export default Coriers