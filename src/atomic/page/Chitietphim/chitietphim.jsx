import { useEffect, useState } from "react";
import axios from "axios";
import { Link,Outlet } from "react-router-dom";
function Chitietphim(){
    const [listicon,setListicon]=useState([])
    const [listthongtin,setListthongtin]=useState([]);
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
              url: "https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=1329",
              headers: {
                TokenCybersoft:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBETiAxMSIsIkhldEhhblN0cmluZyI6IjIyLzAxLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTczNzUwNDAwMDAwMCIsIm5iZiI6MTcwOTc0NDQwMCwiZXhwIjoxNzM3NjUxNjAwfQ.nl0s6U9TVtfCtNNz9yMfG6ZupTn18NciJE96XGDOTmQ",
              },
            });
    
        
            console.log("thong List:", data.data.content); // Kiểm tra dữ liệu
            console.log("test",data.data.content.filter((i)=>i.hinhAnh));
            setListthongtin(data.data.content.filter((i)=>i.maPhim));
          } catch (error) {
            console.error("Error fetching movie list:", error);
          }
        })();
      }, []);
    return(
        <>
        
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
            <h2 className="text-2xl font-semibold mb-4">Thông tin về phim </h2>
            <div className="border rounded-lg p-4">
              {listthongtin.map((showtime) => (
                <div key={showtime.biDanh} className="mb-4">
                  <div className="flex items-center">
                    <span className="text-sm bg-red-500 text-white rounded px-2 py-1 mr-2">
                      {showtime.tenPhim}
                      
                    </span>
                    <img className="w-20 h-34 object-cover rounded mr-4" src={showtime.hinhAnh} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Outlet />
        </>
    )
}
export default Chitietphim;