"use client";

import { ProductCard } from "@/components/features/product/ProductCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";

export default function Home() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const products = [
    {
      id: 1,
      name: "สมาร์ทโฟน Galaxy Luna Pro",
      price: "15990",
      originalPrice: "18990",
      image: "/modern-smartphone.png",
      rating: 4.8,
      reviews: 124,
      discount: "15%",
      category: "สมาร์ทโฟน",
      inStock: true,
      description:
        "สมาร์ทโฟนรุ่นล่าสุดพร้อมกล้องความละเอียดสูงและแบตเตอรี่ทนทาน",
    },
    {
      id: 2,
      name: "เสื้อยืดคอตตอน 100% สีขาว",
      price: "590",
      originalPrice: "790",
      image: "/white-cotton-t-shirt.png",
      rating: 4.6,
      reviews: 89,
      discount: "25%",
      category: "เสื้อผ้า",
      inStock: true,
      description:
        "เสื้อยืดคอตตอนแท้ 100% นุ่มสบาย ระบายอากาศดี เหมาะสำหรับใส่ประจำวัน",
    },
    {
      id: 3,
      name: "แหวนเพชร CZ ชุบทองคำขาว",
      price: "2990",
      originalPrice: "3990",
      image: "/diamond-ring-white-gold.jpg",
      rating: 4.9,
      reviews: 156,
      discount: "25%",
      category: "แหวน",
      inStock: true,
      description:
        "แหวนเพชร CZ คุณภาพสูง ชุบทองคำขาว 18K ดีไซน์หรูหรา เหมาะสำหรับโอกาสพิเศษ",
    },
    {
      id: 4,
      name: "สร้อยคอทองคำ 18K ลายโซ่เวเนเซียน",
      price: "8990",
      originalPrice: "12990",
      image: "/gold-chain-necklace-venetian.jpg",
      rating: 4.8,
      reviews: 78,
      discount: "31%",
      category: "สร้อย",
      inStock: true,
      description: "สร้อยคอทองคำแท้ 18K ลายโซ่เวเนเซียนคลาสสิค น้ำหนัก 2 บาท",
    },
    {
      id: 5,
      name: "กำไรเพชร CZ รูปหยดน้ำ",
      price: "1590",
      originalPrice: "2290",
      image: "/diamond-teardrop-earrings.jpg",
      rating: 4.7,
      reviews: 203,
      discount: "31%",
      category: "กำไร",
      inStock: true,
      description:
        "กำไรเพชร CZ รูปหยดน้ำ ชุบทองคำขาว ดีไซน์เรียบหรู เหมาะกับทุกโอกาส",
    },
    {
      id: 6,
      name: "เดรสลายดอกไม้ แขนยาว",
      price: "1290",
      originalPrice: "1890",
      image: "/floral-long-sleeve-dress.jpg",
      rating: 4.5,
      reviews: 67,
      discount: "32%",
      category: "เสื้อผ้า",
      inStock: true,
      description:
        "เดรสลายดอกไม้สวยงาม ผ้าชีฟอง แขนยาว เหมาะสำหรับงานปาร์ตี้หรือออกเดท",
    },
    {
      id: 7,
      name: "เสื้อเชิ้ตผู้ชาย แขนยาว สีน้ำเงิน",
      price: "890",
      originalPrice: "1290",
      image: "/mens-blue-long-sleeve-shirt.jpg",
      rating: 4.4,
      reviews: 92,
      discount: "31%",
      category: "เสื้อผ้า",
      inStock: true,
      description:
        "เสื้อเชิ้ตผู้ชายแขนยาว ผ้าคอตตอนผสม สีน้ำเงินเข้ม เหมาะสำหรับทำงาน",
    },
    {
      id: 8,
      name: "สร้อยข้อมือเงินแท้ 925 ลายถัก",
      price: "2490",
      originalPrice: "3490",
      image: "/silver-braided-bracelet-925.jpg",
      rating: 4.6,
      reviews: 134,
      discount: "29%",
      category: "เครื่องประดับ",
      inStock: false,
      description:
        "สร้อยข้อมือเงินแท้ 925 ลายถักสวยงาม น้ำหนัก 15 กรัม พร้อมใบรับประกัน",
    },
    {
      id: 9,
      name: "แหวนทองคำ 18K ฝังพลอยทับทิม",
      price: "15990",
      originalPrice: "19990",
      image: "/gold-ring-ruby-gemstone.jpg",
      rating: 4.9,
      reviews: 45,
      discount: "20%",
      category: "แหวน",
      inStock: true,
      description:
        "แหวนทองคำแท้ 18K ฝังพลอยทับทิมแท้ ดีไซน์คลาสสิค เหมาะสำหรับของขวัญ",
    },
    {
      id: 10,
      name: "กำไรห่วงทองคำ 14K ขนาดกลาง",
      price: "3990",
      originalPrice: "5490",
      image: "/gold-hoop-earrings-14k.jpg",
      rating: 4.7,
      reviews: 88,
      discount: "27%",
      category: "กำไร",
      inStock: true,
      description:
        "กำไรห่วงทองคำแท้ 14K ขนาดกลาง 2.5 ซม. ดีไซน์เรียบง่าย ใส่ได้ทุกวัน",
    },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">สินค้าทั้งหมด</h1>
          <p className="text-muted-foreground">
            ค้นพบสินค้าคุณภาพดีในราคาที่เหมาะสม
          </p>
        </div>
        <Button variant="primary" rightIcon={<Moon />} loading>
          Button
        </Button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 space-y-6"></div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  แสดง {products.length} สินค้า
                </span>
              </div>
            </div>

            {/* Products Grid/List */}
            {/* <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  : "space-y-4"
              }
            >
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>             */}
          </div>
        </div>
      </div>
    </div>

    // <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //   <div className="flex flex-col lg:flex-row gap-8">
    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm group hover:shadow-lg transition-shadow overflow-hidden">
    //         {products.map((product) => (
    //           <ProductCard key={product.id} product={product} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <div className="max-w-[935px] w-[calc(100%-40px)] my-auto p-8">
    //   <div className="w-full">
    //     <div className="grid grid-cols-2">
    //       <section className="col-start-1 row-end-5 row-start-1">
    //         <Image
    //           src={profilePicture}
    //           width={150}
    //           height={150}
    //           alt="profile"
    //           className="rounded-full"
    //         />
    //       </section>
    //       <section className="col-start-2 col-end-3 row-start-1 mb-5">
    //         <div className="flex gap-2">
    //           <div className="text-white text-lg">{"tsukinuii"}</div>
    //           <div className="flex gap-2">
    //             <div className="flex justify-center items-center text-sm rounded-[8px] bg-stone-400 px-2">
    //               {"edit profile"}
    //             </div>
    //             <div className="flex justify-center items-center text-sm rounded-[8px] bg-stone-400 px-2">
    //               {"view archive"}
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //       <section className="col-start-2 col-end-3 row-start-2 flex gap-4 mb-5">
    //         <div className="text-white text-lg">{"26 posts"}</div>
    //         <div className="text-white text-lg">{"698 followers"}</div>
    //         <div className="text-white text-lg">{"442 following"}</div>
    //       </section>
    //       <section className="col-start-2 col-end-3 row-start-3">
    //         <div className="text-white text-lg">{"Nui Sasithon"}</div>
    //         <div
    //           className="text-white text-sm"
    //           dangerouslySetInnerHTML={{ __html: description }}
    //         />
    //       </section>
    //       <section className="col-start-1 col-end-3 row-start-6 flex gap-2 mt-5">
    //         {storyButton.map((button, index) => (
    //           <div key={index} className="flex justify-center items-center text-sm rounded-[8px] px-2">
    //             <div className="flex flex-col gap-2 items-center">
    //               <Image src={button.image} width={70} height={70} alt="story" className="rounded-full" />
    //               <div className="text-sm">{button.text}</div>
    //             </div>
    //           </div>
    //         ))}
    //       </section>
    //     </div>
    //     <div>{"section menu"}</div>
    //     <div>{"section results menu"}</div>
    //   </div>
    // </div>
  );
}
