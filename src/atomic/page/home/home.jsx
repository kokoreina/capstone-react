import { useEffect, useState } from "react";
import { useTitle } from "../../../common";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { Cards } from "../../components/cards";

function Home() {
  const [listmovie, setListmovie] = useState([]);
  const [listdanhsach, setListdanhsach] = useState([]);
  const [listicon, setListicon] = useState([]);
  const [listhethong,setListhethong]=useState([]);
  useTitle("Movie");
  useEffect(() => {
    (async () => {
      try {
        const data = await axios({
          method: "get",
          url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap",
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ",
          },
        });

        console.log("hethong List:", data.data.content); // Kiểm tra dữ liệu
        setListhethong(data.data.content.filter((i) => i.mahom));
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios({
          method: "get",
          url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap",
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ",
          },
        });

        console.log("icon List:", data.data.content); // Kiểm tra dữ liệu
        setListicon(data.data.content.filter((i) => i.biDanh));
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      try {
        const data = await axios({
          method: "get",
          url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
          headers: {
            TokenCybersoft:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ",
          },
        });

        console.log("Movie List:", data.data.content); // Kiểm tra dữ liệu
        setListdanhsach(data.data.content.filter((i) => i.sapChieu));
      } catch (error) {
        console.error("Error fetching movie list:", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios({
          method: "get",
          url: "https://movieapi.cyberlearn.vn/api/QuanLyPhim/LayDanhSachBanner",
        });

        // Kiểm tra phản hồi từ API
        console.log("API Response:", response.data);
        // Cập nhật state với dữ liệu nhận được
        setListmovie(response.data.content);
      } catch (error) {
        // In ra lỗi nếu có vấn đề khi gọi API
        console.error("Error fetching data:", error);
      }
    })();
  }, []);

  return (
    <>
      <div className="w-full h-full">

        {/* Carousel duy nhất */}
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {listmovie.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : ""}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Carousel Inner */}
          <div className="carousel-inner">
            {listmovie.map((item, index) => (
              <div
                key={item.maPhim}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={item.hinhAnh}
                  className="d-block w-100"
                  alt={item.tenPhim}
                />
              </div>
            ))}
          </div>

          {/* Carousel Controls (Optional) */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {listdanhsach?.map((i) => (
          <Link to={`/movie/${i.maPhim}`} key={i.maPhim}>
            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col justify-between min-h-[25rem]">
              <img
                src={i.hinhAnh}
                alt={i.tenPhim}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">{i.tenPhim}</h3>
                {/* <p>Mô tả {i.moTa}</p> */}
                <p className="mt-2 font-bold">Rating: {i.danhGia}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="container mx-auto my-10 p-20">
        {/* Wrapper to create 2 columns */}
        <div className="flex">
          {/* Left column: Movie List */}
          <div className="w-1/4 border-r-2 pr-4">
            <ul>
              {listicon?.map((movie) => (
                <li key={movie.maHeThongRap} className="mb-4 flex">
                  <img
                    src={movie.logo}
                    alt={movie.maHeThongRap}
                    className="w-20 h-34 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{movie.tenHeThongRap}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: Movie showtimes */}
          <div className="w-3/4 pl-4">
            <h2 className="text-2xl font-semibold mb-4">Thông tin các Rạp </h2>
            <div className="border rounded-lg p-4">
              {listhethong?.map((showtime) => (
                <div key={showtime.mahom} className="mb-4">
                  <div className="flex items-center">
                    <span className="text-sm bg-red-500 text-white rounded px-2 py-1 mr-2">
                      {showtime.tenHeThongRap}
                    </span>
                    <img className="w-20 h-34 object-cover rounded mr-4" src={showtime.logo} />
                  </div>
                  <Link to>
                  <div className="flex space-x-4 mt-2 flex-wrap gap-10">
                    {showtime.lstCumRap.map((index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-600 px-3 py-1 rounded gird grid-cols-2 flex flex-col "
                      >
                        {index.tenCumRap}
                        {/* <br /> */}
                        {/* {index.diaChi} */}
                        <img className="w-full h-34 object-cover rounded mr-4" src={index.hinhAnh}/>
                      </span>
                    ))}
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Home;
