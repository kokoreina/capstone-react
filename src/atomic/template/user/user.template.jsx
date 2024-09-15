import axios from "axios";
import { Suspense } from "react";
import { Link, Outlet } from "react-router-dom";

export function Usertemplate() {
  return (
    <>
      <header className="h-24 px-16 bg-black text-white sticky flex items-center justify-between">
        <div className="flex items-center gap-16">
          <Link to={"/"}>
            <img className="h-16" src="/image.png" alt=" logo" />
          </Link>
          <nav className="flex gap-16">
            <Link to="/home">Trang chủ</Link>
            <Link to="/datve">Đặt vé </Link>
            <Link to="/chitietphim">Chi tiết phim</Link>
          </nav>
        </div>
        <div>
          <Link className="pr-10" to="/dangky">
            Đăng ký
          </Link>
          <Link to="/dangnhap">Đăng nhập</Link>
        </div>
      </header>
      <Suspense fallback={<>loading....</>}>
        <Outlet />
      </Suspense>
    </>
  );
}
