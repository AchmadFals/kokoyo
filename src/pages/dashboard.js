import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Navbar";
import Uwong from "../asset/uwong.jpg";
import vespaLaundry from "../asset/vespa_laundry.png";
import "../asset/App.css";
import Laundry from "../asset/laundry.png";
import Schedule from "../asset/icon_schedule.png";
import mesinCuci from "../asset/icon_mesin_cuci.png";
import delivery2 from "../asset/icon_delivery2.png";
import { useTable } from "react-table";
import { AiFillCaretRight } from "react-icons/ai";
import { AiFillCaretLeft } from "react-icons/ai";

const Dashboard = () => {
  const [machine, setMachine] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [formModalVisible, setFormModalVisible] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [formData, setFormData] = useState({});
  const handleNewSubmit = async (event) => {
    await axios.post("http://fresh-laundry.landside.my.id/machine/create", {
      ...formData,
    });
    setFormModalVisible(false);
  };
  const handleDeleteSubmit = async (event) => {
    console.log("...handleDeleteSumit", formData);
    await axios.post("http://fresh-laundry.landside.my.id/machine/delete", {
      id: formData.id,
    });
    setIsDropdownOpen({
      ...isDropdownOpen,
      delete: false,
    });
  };
  const handleEditSubmit = async (event) => {
    await axios.post("http://fresh-laundry.landside.my.id/machine/update", {
      ...formData,
    });
    setFormModalVisible(false);
  };
  const columns = React.useMemo(
    () => [
      {
        Header: "Serial number",
        accessor: "serialNumber", // accessor is the "key" in the data
      },
      {
        Header: "Nama mesin",
        accessor: "machineName",
      },
      {
        Header: "Muatan",
        accessor: "muatan",
      },
      {
        Header: "Action",
        accessor: "_id",
        Cell: (props) => {
          return (
            <div className="">
              <button
                className="border-1 px-4 rounded text-white border-solid border-purple-600 bg-orange-600"
                onClick={() => {
                  setIsOpenEdit(true);
                  setFormModalVisible(true);
                  setFormData(props.row.original);
                }}
              >
                Edit
              </button>
              &nbsp;
              <button
                className="border-1 px-4 rounded text-white border-solid border-purple-600 bg-red-600"
                onClick={() => {
                  setIsDropdownOpen({
                    ...isDropdownOpen,
                    delete: true,
                  });
                  setFormData({
                    id: props.value,
                  });
                }}
              >
                Delete
              </button>
            </div>
          );
        },
      },
    ],
    []
  );
  useEffect(() => {
    getMachine();
  }, []);
  const getMachine = async () => {
    let result = await axios.get(
      "http://fresh-laundry.landside.my.id/machine/read"
    );
    result = result.data.data;
    result = result.filter((res) => !res._deletedAt);
    console.log(result);
    setMachine(result);
  };
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: machine });
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="grid grid-cols-2 bg-[#3986c0] pt-16">
          <div className="mx-16 my-16">
            <h3 className="text-5xl font-poppins text-white font-semibold">
              Laundry antar jemput
            </h3>
            <h5 className="text-3xl font-poppins text-white mt-5">
              hemat waktu dan simpel buat kamu yang #mager
            </h5>
          </div>
          <div>
            <img src={vespaLaundry} className="ml-36 mt-5 mb-5 w-96" alt="bg" />
          </div>
        </div>
        <div className="px-24">
          <h1 className="text-center text-5xl mt-20 font-poppins">
            Selamat Datang Di Website Official
          </h1>
          <br />
          <h2 className="text-center text-xl mb-20 mx-20 font-poppins text-slate-700">
            Cucian menumpuk? tidak punya waktu buat nyuci? Pengen hemat air dan
            listrik tapi pakaian pengennya bersih, rapih dan wangi? Jelas
            kamilah solusinya @cleanlaundry
          </h2>
          <br />
          <br />
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="mr-10">
              <h1 className="text-3xl font-semibold font-poppins">
                Z Bods Spray Tanning
              </h1>
              <br />
              <p className="text-justify text-lg font-poppins text-slate-700">
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
          <div className="bg-sky-700">
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
          <div className="bg-sky-800">
            <h2 className="text-center text-4xl font-poppins text-white p-2.5 mt-10">
              Semprotan Seluler Tan
            </h2>
            <br />
            <p className="text-center text-2xl text-white mb-10 mx-4 font-poppins">
              Layanan penyamakan semprotan mobile Z Bods dilakukan di kenyamanan
              rumah Anda. Cari tahu apa yang membedakan kami dari yang lain
            </p>
          </div>
        </div>
        <div className="mx-24">
          <h2 className="font-semibold text-4xl mb-6 mt-16 font-poppins">
            Tentang Kami
          </h2>
          <p className="text-lg mb-2.5 font-poppins text-slate-700">
            Cleanlaundry merupakan platform Kemitraan Usaha Laundry
            (partnership) yang didukung oleh teknologi online yang akan
            memberikan kemudahan baik kepada seluruh stakeholder baik pelanggan,
            partner maupun investor (Passive Partner).
          </p>
          <p className="text-lg mb-20 font-poppins text-slate-700">
            lebih dari ratusan outlet berdiri serta lebih dari 100 investor
            telah bergabung bersama kami sejak tahun 2017 dan lebih dari 300
            partner bergabung serta puluhan ribu pelanggan aktif yang telah
            mempercayakan pakaiannya kepada kami baik online maupun offline
            dengan mencapai lebih dari 500kg laundry perhari.
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
          <div className="text-right mb-1">
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-1 text-xs sm:text-sm"
              onClick={() =>
                setFormModalVisible({
                  ...formModalVisible,
                  add: true,
                })
              }
            >
              Add
            </button>
          </div>
          <table
            {...getTableProps()}
            style={{ border: "solid 1px black" }}
            className="w-full mb-4"
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
          <div className="flex justify-end mb-5">
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
        <div className="w-full grid grid-cols-3 ">
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

      {/* Modal Component */}
      <div
        className={`${
          formModalVisible ? "block" : "hidden"
        } py-12 bg-gray-700/50 transition duration-150 ease-in-out z-10 fixed top-12 right-0 bottom-0 left-0`}
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded-lg border border-gray-400 text-left">
            <div className="w-full flex justify-start text-gray-600 mb-3"></div>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4 text-left">
              {isOpenEdit ? "Edit pesanan" : "Masukkan pesanan baru"}
            </h1>
            <label
              for="name"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal text-left"
            >
              Serial Number
            </label>
            <input
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Serial Number"
              onChange={(e) =>
                setFormData({ ...formData, serialNumber: e.target.value })
              }
              value={formData.serialNumber}
            />
            <label
              for="email2"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal text-left"
            >
              Nama mesin
            </label>
            <div className="relative mb-5 mt-2">
              <input
                id="email2"
                className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Nama Mesin"
                onChange={(e) =>
                  setFormData({ ...formData, machineName: e.target.value })
                }
                value={formData.machineName}
              />
            </div>
            <label
              for="expiry"
              className="text-gray-800 text-sm font-bold leading-tight tracking-normal text-left"
            >
              Muatan
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer"></div>
              <input
                id="expiry"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Berat"
                onChange={(e) =>
                  setFormData({ ...formData, muatan: e.target.value })
                }
                value={formData.muatan}
              />
            </div>
            <div className="flex items-center justify-start w-full">
              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                onClick={isOpenEdit ? handleEditSubmit : handleNewSubmit}
              >
                Submit
              </button>
              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                onClick={() => setFormModalVisible(false)}
              >
                Cancel
              </button>
            </div>
            <button
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
              onClick={() => setFormModalVisible(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        class={`${
          isDropdownOpen?.delete ? "block" : "hidden"
        } min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover`}
        id="modal-id"
      >
        <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div class="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div class="">
            <div class="text-center p-5 flex-auto justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              {console.log(formData)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-16 h-16 flex items-center text-red-500 mx-auto"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
              <h2 class="text-xl font-bold py-4 ">Apa kamu yakin?</h2>
              <p class="text-sm text-gray-500 px-8">
                Apakah Anda benar-benar ingin menghapus pesanan Anda?
              </p>
            </div>
            <div class="p-3  mt-2 text-center space-x-4 md:block">
              <button
                class="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
                onClick={() =>
                  setIsDropdownOpen({
                    ...isDropdownOpen,
                    delete: false,
                  })
                }
              >
                Cancel
              </button>
              <button
                class="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
                onClick={handleDeleteSubmit}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
