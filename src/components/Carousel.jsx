import React, { useContext, useEffect, useState } from "react";
import Carousel from "nuka-carousel";
import { DataContext } from "../App";

const Carousels = () => {
  const { data } = useContext(DataContext);

  // Ensure data is available and has at least 21 elements (indices 0 to 20).
  if (!data || data.length < 2) {
    return <div>No data available for carousel.</div>;
  }

  const [datas, setDatas] = useState(data);

  useEffect(() => {
    setDatas(data);
  }, [data]);

  console.log(datas);

  return (
    <Carousel style={{backgroundColor: '#875b31'}} slidesToShow={3} autoplay={true} speed={100000}  pauseOnHover={true} scrollMode='remainder' withoutControls wrapAround>
      <img style={{ width: 300 }} key={1} src={data[0].image} />
      <img style={{ width: 300 }} key={2} src={data[1].image} />
      <img style={{ width: 300 }} key={3} src={data[2].image} />
      <img style={{ width: 300 }} key={4} src={data[3].image} />
      <img style={{ width: 300 }} key={5} src={data[4].image} />
      <img style={{ width: 300 }} key={6} src={data[5].image} />
      <img style={{ width: 300 }} key={8} src={data[6].image} />
      <img style={{ width: 300 }} key={9} src={data[7].image} />
      <img style={{ width: 300 }} key={10} src={data[8].image} />
      <img style={{ width: 300 }} key={11} src={data[9].image} />
      <img style={{ width: 300 }} key={12} src={data[10].image} />
      <img style={{ width: 300 }} key={13} src={data[11].image} />
      <img style={{ width: 300 }} key={14} src={data[12].image} />
      <img style={{ width: 300 }} key={15} src={data[13].image} />
      <img style={{ width: 300 }} key={16} src={data[14].image} />
      <img style={{ width: 300 }} key={17} src={data[15].image} />
      <img style={{ width: 300 }} key={18} src={data[16].image} />
      <img style={{ width: 300 }} key={19} src={data[17].image} />
      <img style={{ width: 300 }} key={20} src={data[18].image} />
      <img style={{ width: 300 }} key={21} src={data[19].image} />
      <img style={{ width: 300 }} key={22} src={data[20].image} />
    </Carousel>
  );
};

export default Carousels;
