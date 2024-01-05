import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request: any) {
  // ...

  return NextResponse.json(items.Items);
}

const items = {
  Items: [
    {
      Id: "1ac400fd-98bd-46ee-b4e8-d2f983f2bbc2",
      Name: "Cake",
      Price: 11.0,
      ImageUrl: "https://i.imgur.com/7hEb9ms.jpg",
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "38332e95-7f66-45af-829b-c51b3d23caba",
      Name: "Chicken Fry",
      Price: 25.0,
      ImageUrl: "https://i.imgur.com/YyYut7G.jpg",
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "39487b87-09e0-4e6c-acfa-6ac907e0742a",
      Name: "Fried Rice",
      Price: 9.0,
      ImageUrl: "https://i.imgur.com/O0YSuFI.jpg",
      IsPopular: true,
      IsRecommended: false,
    },
    {
      Id: "a3ef9e36-c7ee-48c5-99e2-6f966157e116",
      Name: "Garlic Bread",
      Price: 24.75,
      ImageUrl: "https://i.imgur.com/dsqHvaZ.jpg",
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "1280cb1b-9115-45c5-babd-601febd462de",
      Name: "Burger",
      Price: 10.99,
      ImageUrl: "https://i.imgur.com/5rzUi7f.jpg",
      IsPopular: true,
      IsRecommended: false,
    },
    {
      Id: "14f0a9d0-49f9-4020-a656-e23b7ac59216",
      Name: "Pizza",
      Price: 8.5,
      ImageUrl: "https://i.imgur.com/QVXpgTD.jpg",
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "f6fdc153-052a-4eab-8b7d-bb1478d2179c",
      Name: "Pasta",
      Price: 3.0,
      ImageUrl: "https://i.imgur.com/Tl73dZE.jpg",
      IsPopular: true,
      IsRecommended: true,
    },
    {
      Id: "2b1bca6f-f7d6-4854-86dd-126db70776a2",
      Name: "Cappuchino",
      Price: 3.0,
      ImageUrl: "https://i.imgur.com/Tkzb5vn.jpg",
      IsPopular: true,
      IsRecommended: true,
    },
  ],
  TotalCount: 8,
};
