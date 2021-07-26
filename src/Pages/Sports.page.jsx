import React from "react";
import Filter from "../components/PlaysFilter/Filter.component";
import Poster from "../components/Poster_leftover/poster.component";


const SportsPage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          {/* Right side with Posters */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl lg:text-3 xl font-semibold my-4">
              Sports in Mumbai
            </h2>
            <div className="flex flex-wrap my-3">
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg"
                  title="Travelling Clues- Online Games"
                  subtitle="₹149 onwards"
                  location="Online Event"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg"
                  title="Travelling Clues- Online Games"
                  subtitle="₹149 onwards"
                  location="Online Event"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg"
                  title="Travelling Clues- Online Games"
                  subtitle="₹149 onwards"
                  location="Online Event"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg"
                  title="Travelling Clues- Online Games"
                  subtitle="₹149 onwards"
                  location="Online Event"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg"
                  title="Travelling Clues- Online Games"
                  subtitle="₹149 onwards"
                  location="Online Event"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311675-wfqgcdyuue-portrait.jpg"
                  title="Travelling Clues- Online Games"
                  subtitle="₹149 onwards"
                  location="Online Event"
                />
              </div>
            </div>
          </div>

          {/* Left side with the filters */}
          <div className="lg:w-3/12 hidden lg:block mr-10">
            <h2 className="text-2xl lg:text-3 xl font-semibold my-4">
              Filters
            </h2>

            {/* Filters titles */}
            <div className="my-3 bg-white ">
              <Filter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            </div>
            <div className="my-3 bg-white">
              <Filter title="Categories" tags={["E-Sports"]} />
            </div>
            <div className="my-3 bg-white">
              <Filter
                title="More Filters"
                tags={["Kids allowed", "Online streaming", "Kids Activities"]}
              />
            </div>

            <div className="my-3 bg-white">
              <Filter
                title="Price"
                tags={["Free", "0-500", "501-2000", "Above 2000"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportsPage;
