import { Card, CardBody, Button, CardFooter, Image } from "@nextui-org/react";

export default function Sectionthree() {
  const list = [
    {
      title: "Our App",
      video: "https://www.youtube.com/embed/lYKCPJuvycM",
    },
    {
      title: "MS Excel",
      video: "https://www.youtube.com/embed/tGOzqo2LA6c",
    },
    {
      title: "Google Sheets",
      video: "https://www.youtube.com/embed/2GgdICSCopU",
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="gap-2 grid grid-cols-1 sm:grid-cols-3">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0">
              {item.video ? (
                <iframe
                  width="100%"
                  height="240px"
                  src={item.video}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              ) : (
                <Image
                  shadow="sm"
                  radius="lg"
                  width="100%"
                  alt={item.title}
                  className="w-full object-cover h-[240px]"
                  src={item.img}
                />
              )}
            </CardBody>
            <CardFooter className="text-small justify-between w-[340px]">
              <b>{item.title}</b>
              <Button color="primary" variant="flat">Learn More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
