import React from "react";

import { Typography, Card, CardBody } from "@material-tailwind/react";

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}


export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <Card color="transparent" shadow={false} placeholder="YourPlaceholderValue">
      <CardBody className="grid px-0" placeholder="YourPlaceholderValue">
        <Typography variant="h2" color="blue-gray" className="mb-2" placeholder="YourPlaceholderValue">
          {title}
        </Typography>
        <Typography placeholder="YourPlaceholderValue" className=" font-normal">{children}</Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;