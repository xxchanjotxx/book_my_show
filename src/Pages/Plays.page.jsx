import React from "react";

//components
import Poster from "../components/Poster/poster.component";
import Filter from "../components/PlaysFilter/Filter.component";

const PlaysPage = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          {/* Right side with Posters */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl lg:text-3 xl font-semibold my-4">
              Plays in Mumbai
            </h2>
            <div className="flex flex-wrap my-3">
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311044-nczsvhgcsm-portrait.jpg"
                  title="Ellamae Thamash Than"
                  subtitle="Tamil ₹150"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311044-nczsvhgcsm-portrait.jpg"
                  title="Ellamae Thamash Than"
                  subtitle="Tamil ₹150"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311044-nczsvhgcsm-portrait.jpg"
                  title="Ellamae Thamash Than"
                  subtitle="Tamil ₹150"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311044-nczsvhgcsm-portrait.jpg"
                  title="Ellamae Thamash Than"
                  subtitle="Tamil ₹150"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311044-nczsvhgcsm-portrait.jpg"
                  title="Ellamae Thamash Than"
                  subtitle="Tamil ₹150"
                />
              </div>
              <div className="w-1/2 md:w-1/3 my-3 lg:w-3/12">
                <Poster
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNCBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00311044-nczsvhgcsm-portrait.jpg"
                  title="Ellamae Thamash Than"
                  subtitle="Tamil ₹150"
                />
              </div>
            </div>
          </div>

          {/* Left side with the filters */}
          <div className="lg:w-3/12 hidden lg:block">
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
              <Filter title="Categories" tags={["Theatre"]} />
            </div>
            <div className="my-3 bg-white">
              <Filter title="Language" tags={["Tamil", "Telugu", "Hindi"]} />
            </div>

            <div className="my-3 bg-white">
              <Filter
                title="Genres"
                tags={[
                  "Drama",
                  "Adaption",
                  "History",
                  "Comedy",
                  "Online Streaming Plays",
                ]}
              />
            </div>
            <div className="my-3 bg-white">
              <Filter
                title="More Filters"
                tags={["Online Streaming", "Kids allowed"]}
              />
            </div>
            <div className="my-3 bg-white">
              <Filter
                title="Prize"
                tags={["Free", "0-500", "501-2000", "Above 2000"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaysPage;
