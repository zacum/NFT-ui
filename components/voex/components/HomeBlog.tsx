import { mask } from "@assets";
import React from "react";
import { HomeBlogItem } from "./HomeBlogItem";

export const HomeBlog = () => {
  return (
    <div className=" bg-purple d-flex justify-content-center py-5">
      <div className=" col-11 col-xl-9 col-xxl-9 py-5">
        <h3 style={{fontSize:"4rem"}} className=" font_dm  text-center text-xl-start mb-5">Blog</h3>

        <div className="mt-1">
          <HomeBlogItem
            imgUrl={mask.src}
            text="Duis blandit ante odio, in luctus elit interdum non"
          />
        </div>
        <div className="mt-3">
          <HomeBlogItem
            imgUrl={mask.src}
            text="Ut vehicula bibendum auctor fusce vel tempor leo"
          />
        </div>
        <div className="mt-3">
          <HomeBlogItem
            imgUrl={mask.src}
            text="Nulla suscipit euismod felis pellentesque dapibus dui"
          />
        </div>
        <div className="mt-3">
          <HomeBlogItem
            imgUrl={mask.src}
            text="Suspendisse potenti donec eget ligula tempor"
          />
        </div>
      </div>
    </div>
  );
};
