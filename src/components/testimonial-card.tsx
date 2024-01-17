import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

interface TestimonialCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function TestimonialCard({
  img,
  feedback,
  client,
  title,
}: TestimonialCardProps) {
  return (
    <Card shadow={false} className="items-center text-center" placeholder="YourPlaceholderValue">
      <CardBody>
        <Avatar src={img} className="mb-3" alt={client} size="lg" placeholder="YourPlaceholderValue"/>
        <Typography variant="h6" color="blue-gray" placeholder="YourPlaceholderValue">
          {client}
        </Typography>
        <Typography variant="small" className="mb-3 font-medium !text-gray-700" placeholder="YourPlaceholderValue">
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-5 font-normal !text-gray-500"
          placeholder="YourPlaceholderValue"
        >
          &quot;{feedback}&quot;
        </Typography>
      </CardBody>
    </Card>
  );
}

export default TestimonialCard;