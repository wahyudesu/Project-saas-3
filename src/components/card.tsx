import {Card, CardBody, CardFooter} from "@nextui-org/react";

export default function Card_stats() {
  const list = [
    {
      title: "Orange",
      color: "#FFA07A",
      price: "$5.50",
    },
    {
      title: "Tangerine",
      color: "#FFD700",
      price: "$3.00",
    },
    {
      title: "Raspberry",
      color: "#FF6347",
      price: "$10.00",
    },
    {
      title: "Lemon",
      color: "#FFFF00",
      price: "$5.30",
    }
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <div
              className="w-full object-cover h-[140px]"
              style={{ backgroundColor: item.color }}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
