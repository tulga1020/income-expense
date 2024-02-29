import { Buttons } from "./Buttons";
import { Arrow, Eyes } from "./Svg";
export const CategoryItems = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Food & Drink" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Shopping" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Housing" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Transportation" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Vehicle" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Life & Entertainment" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Communication, PC" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Financial expenses" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Investments" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Income" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="categoryDiv">
        <Eyes />
        <Buttons bText="Others" bClass="categoryText" />
        <Arrow />
      </div>
      <div className="flex items-center h-8 gap-2">
        <div className="text-2xl text-[#0166FF] my-0">+</div>
        <div>Add Category</div>
      </div>
    </div>
  );
};
