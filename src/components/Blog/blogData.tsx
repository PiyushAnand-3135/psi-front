import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Object Detection",
    paragraph:
      "Object detection was implemented using YOLOv8 , which is a deep learning-based real-time object detection model.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Sajal Jha",
      image: "/images/blog/author-01.png",
      designation: "ML Engineer",
    },
    tags: ["creative"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Attendence Tracking",
    paragraph:
      "Uses AI-powered facial recognition to automate attendance tracking in schools, offices, and public spaces.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Piyush Anand",
      image: "/images/blog/author-02.png",
      designation: "Software Developer",
    },
    tags: ["computer"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Behaviour Recognization",
    paragraph:
      " Our project leverages AI-powered behavior analysis to monitor crowd movement, unusual activities, and potential security threats in real-time.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Prabhat Teotia",
      image: "/images/blog/author-03.png",
      designation: "FulLStack Developer",
    },
    tags: ["design"],
    publishDate: "2025",
  },
];
export default blogData;
