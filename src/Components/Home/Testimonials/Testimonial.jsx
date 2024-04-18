import { Card, CardContent } from "@/Components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/ui/carousel";

export function Testimonial() {
  return (
    // <div className="container-fluid">
    //   <div className="container">
    <Carousel className="w-[70%] mx-auto ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <div className="border border-solid bg-[#191919] border-gray-400  p-16 rounded-lg h-[536px]">
                <div className="flex flex-col justify-between h-full">
                  <p className="text-white">
                    «Group-IB is a reliable and effective partner that we’ve
                    been building business with since 2016. When I first saw
                    Group-IB Attack Surface Management, I was extremely excited
                    because it condenses a great deal of threat intelligence
                    into an attack surface management product that is accessible
                    to a much broader customer base than similar solutions».
                  </p>
                  <div className="flex gap-5 items-center">
                    <div className="w-24 h-24 ">
                      <img
                        src="/images/review_user.png"
                        alt=""
                        className="w-full rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className=" light-blue-gradient text-3xl">
                        Gerardo Costabile
                      </h3>
                      <p className="text-white text-lg">
                        CEO of DeepCyber, a Maggioli Group company
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={"border-none text-white bg-transparent  text-5xl"}
      />
      <CarouselNext className={"border-none  text-white  bg-transparent "} />
    </Carousel>
    //   </div>
    // </div>
  );
}
