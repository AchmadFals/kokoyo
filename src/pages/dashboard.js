import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Uwong from "../asset/uwong.jpg";
import vespaLaundry from "../asset/antar-jemput.png";
import "../asset/App.css";
import Laundry from "../asset/laundry.png";
import Schedule from "../asset/icon_schedule.png";
import mesinCuci from "../asset/icon_mesin_cuci.png";
import delivery2 from "../asset/icon_delivery2.png";
import { useTable } from "react-table";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

const Dashboard = () => {
  const data = React.useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
        col3: "you",
      },
      {
        col1: "react-table",
        col2: "rocks",
        col3: "paper",
      },
      {
        col1: "whatever",
        col2: "you want",
        col3: "create",
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      {
        Header: "Serial number",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Nama mesin",
        accessor: "col2",
      },
      {
        Header: "Muatan",
        accessor: "col3",
      },
    ],
    []
  );
  useEffect(() => {
    getMachine();
  }, []);
  const getMachine = async () => {
    const [machine, setMachine] = useState();
    const result = await axios.get(
      "http://fresh-laundry.landside.my.id/machine/read",
    );
    console.log(result.data.data)
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="grid grid-cols-2 bg-[#42C2FF] pt-16">
          <div className="mx-16 my-16">
            <h3 className="text-5xl font-poppins text-white font-semibold">
              Laundry antar jemput
            </h3>
            <h5 className="text-3xl font-poppins text-white mt-5">
              hemat waktu dan simpel buat kamu yang #mager
            </h5>
          </div>
          <div>
            <img src={vespaLaundry} className="m-8" alt="bg" />
          </div>
        </div>
        <div className="px-24">
          <h1 className="text-center text-5xl mt-20 font-poppins">
            Selamat Datang Di Website Official
          </h1>
          <br />
          <h2 className="text-center text-2xl mb-20 font-poppins">
            Cucian menumpuk? tidak punya waktu buat nyuci? Pengen hemat air dan
            listrik tapi pakaian pengennya bersih, rapih dan wangi? Jelas
            kamilah solusinya @cleanlaundry
          </h2>
          <br />
          <br />
          <div className="w-full grid grid-cols-2 gap-4">
            <div>
              <h1 className="text-4xl font-medium font-poppins">
                Z Bods Spray Tanning
              </h1>
              <br />
              <p className="text-justify text-lg">
                Musim hujan membuat jemuran semakin menumpuk? Anda tidak perlu
                bingung. Gunakan waktu sebaik mungkin untuk mengerjakan
                rutinitas lain yang lebih berharga. Karena Rumah Setrika siap
                merapikan pakaian Anda hingga lebih licin, wangi, dan siap
                pakai. Soal harga, kami berikan garansi jaminan harga termurah
                untuk Anda
              </p>
            </div>
            <div>
              <img
                src={Uwong}
                alt="wangi"
                className="rounded-lg shadow-md shadow-gray-500"
              />
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 pt-10">
          <div className="bg-cyan-500">
            <h2 className="text-center text-4xl font-poppins text-white p-2.5 mt-10">
              Semprotan
            </h2>
            <br />
            <p className="text-center text-2xl text-white mb-10 mx-4 font-poppins">
              Z Bods di lokasi toko menawarkan tan semprotan airbrush tanpa
              sinar matahari khusus untuk semua warna kulit. Temukan detail
              lebih lanjut tentang solusi kami dan paket yang berbeda!
            </p>
          </div>
          <div className="bg-cyan-600">
            <h2 className="text-center text-4xl font-poppins text-white p-2.5 mt-10">
              Semprotan Seluler Tan
            </h2>
            <br />
            <p className="text-center text-2xl text-white mb-10 mx-3.5 font-poppins">
              Layanan penyamakan semprotan mobile Z Bods dilakukan di kenyamanan
              rumah Anda. Cari tahu apa yang membedakan kami dari yang lain
            </p>
          </div>
        </div>
        <div className="mx-24">
          <h2 className="font-medium text-2xl mb-6 mt-16 font-poppins">
            Tentang Kami
          </h2>
          <h2 className="text-3xl mb-2">
            Selamat Datang di era Digital Laundry
          </h2>
          <h1 className="text-5xl font-medium text-orange-500 mb-10 font-poppins">
            Tingkatkan produktivitas harian anda dengan fasilitas laundry antar
            jemput
          </h1>
          <p className="text-lg mb-2.5 font-poppins">
            Apakah anda tidak mempunyai waktu banyak untuk mengantar pakaian
            anda ke laundry? Di tengah kesibukan anda, kami hadir sebagai
            membantu anda mencuci pakaian. Dilengkapi dengan dukungan prosedur
            dan staff terbaik untuk membantu mensolusikan pakaian anda.
          </p>
          <p className="text-lg mb-20 font-poppins">
            <p className="font-semibold">Apa yang berbeda di laundry kami ?</p>{" "}
            Kami mempunyai standar khusus yang memudahkan anda tanpa harus repot
            datang. Jaminan terpercaya bagi anda yang belum merasakan jasa
            layanan kami dengan melihat review dan kegiatan sehari-hari di
            website ini atau Social Media kami. Setiap pengguna jasa yang masuk
            di laundry kami, ditangani oleh pekerja yang terlatih dan
            berkomitmen. Dengan memanfaatkan teknologi, mempermudah anda tanpa
            repot datang ke laundry kami. Jangan ragu untuk menjadikan kami
            sebagai bagian dari mitra laundry dalam membantu anda mencuci
            pakaian
          </p>
        </div>
        <h1 className="text-4xl font-bold text-orange-500 text-center mb-20 font-poppins">
          Cara Kerja Laundry Kami
        </h1>
        <div className="grid grid-cols-3 mb-20">
          <div>
            <img src={Schedule} alt="schedule" className="w-50 mx-44 mb-3.5" />
            <h2 className="text-center font-medium font-poppins">
              Pilih Jadwal Pengambilan kapan saja
            </h2>
          </div>
          <div>
            <img
              src={mesinCuci}
              alt="mesinCuci"
              className="w-50 mx-44 mb-3.5"
            />
            <h2 className="text-center font-medium font-poppins">
              Kami Proses Pakaian Anda
            </h2>
          </div>
          <div>
            <img src={delivery2} alt="delivery" className="w-50 mx-48 mb-3.5" />
            <h2 className="text-center font-medium font-poppins">
              Antar Pakaian Sesuai Jadwal antar jemput tambakboyo
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-4/5">
          <table
            {...getTableProps()}
            style={{ border: "solid 1px black" }}
            className="w-full mb-11"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps()}
                      className="py-1.5 border-2 border-solid border-[#a6a6a6] bg-[#70706f] font-bold text-white"
                    >
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} className="text-center">
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="p-2 border-solid border-[1px] border-gray-600 bg-[#ffff]"
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="flex justify-end">
            <div className="flex gap-2 items-center">
              <label for="cars">Rows per page</label>
              <select name="cars" id="cars">
                <option value="volvo">10</option>
                <option value="saab">30</option>
                <option value="opel">50</option>
              </select>
              <AiFillCaretLeft />
              <AiFillCaretRight />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-900 pt-4">
        <h1 className="text-center font-semibold text-white text-3xl font-poppins">
          Don't have time to wash....!!!
        </h1>
        <div class="w-full grid grid-cols-3 ">
          <div className="">
            <img src={Laundry} alt="londri" className="h-20 m-10 mb-26" />
          </div>
          <div>
            <h2 className="text-left font-semibold text-white text-2xl mt-4 mb-4 font-poppins">
              About
            </h2>
            <p className="text-left mr-10 text-white font-medium font-poppins">
              Bingung karena jemuran belum kering juga? Jemuran numpuk, banyak
              yang ga kebagian tempat? Baju pada bau apek? Cleanlaundry
              solusinya. Jasa laundry yang BISA menyiapkan pakaian Anda dengan
              cepat, rapi, bersih, dan tentunya WANGI. Cleanlaundry buka 15 jam
              setiap hari!
            </p>
          </div>
          <div>
            <h2 className="text-left font-semibold text-white text-2xl mt-4 mb-4 font-poppins">
              Contact Us
            </h2>
            <h4 className="text-left font-lg text-white font-medium font-poppins">
              WhatsApp
            </h4>
            <p className="mb-2.5 text-white">085708648046</p>
            <h4 className="text-left font-lg text-white font-medium font-poppins">
              TelePhone
            </h4>
            <p className="mb-2.5 text-white">085853757211</p>
            <h4 className="text-left font-lg text-white font-medium font-poppins">
              Email
            </h4>
            <p className="text-white mb-6">adityaontonk1414@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
