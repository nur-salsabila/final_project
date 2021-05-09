<script>
  import Box from "../components/Box.svelte";
  import { getContext } from 'svelte';
  import ModalForm from '../components/ModalForm.svelte';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import App from "../App.svelte";
  let name, status, position;
  let data = [
    {
      name: "Alhan Saha Sadida",
      status: "Siswa",
      position: "XI RPL 1",
      image: "https://i.ytimg.com/vi/H4W59Tl7-2k/maxresdefault.jpg"
    },
    {
      name: "Raihan Ramadhan Rahman",
      status: "Siswa",
      position: "XI RPL 1",
      image: ""
    },
    {
      name: "Mahmud Joko Susanto",
      status: "Siswa",
      position: "X TKJ 2",
      image: ""
    },
    {
      name: "Jhon Welldone",
      status: "Siswa",
      position: "X TPM 3",
      image: ""
    },
    {
      name: "Donald Gowell",
      status: "Staff",
      position: "OB",
      image: ""
    },
    {
      name: "Dudung Dzulkifli",
      status: "Guru",
      position: "PWPB",
      image: ""
    },
    {
      name: "Thomas Roweld",
      status: "Siswa",
      position: "XII TPM 1",
      image: ""
    },
    {
      name: "Bruno Mculding",
      status: "Siswa",
      position: "XIII TOI 1",
      image: ""
    },
    {
      name: "Asep Tri Widiyantoro",
      status: "Guru",
      position: "PBO",
      image: ""
    },
    {
      name: "Bayu Perdana",
      status: "Siswa",
      position: "XII TKJ 2",
      image: ""
    },
    {
      name: "Jack Jhonson",
      status: "Staff",
      position: "OB",
      image: ""
    },
    {
      name: "Sam Gilbert",
      status: "Siswa",
      position: "XII TPTU 1",
      image: ""
    },
    {
      name: "Titi Nurlaela",
      status: "Guru",
      position: "MTK",
      image: ""
    },
    {
      name: "Budi Budiman",
      status: "Staff",
      position: "TU",
      image: ""
    },
    {
      name: "Surya Cahyo",
      status: "Guru",
      position: "DDG",
      image: ""
    }
  ];

  function remove(id) {
    data = data.filter(e => e.name != id);
  }

  function edit(id, name, status, position) {
    let objIndex = data.findIndex((e => e.name == id));

    data[objIndex].name = name;
    data[objIndex].status = status;
    data[objIndex].position = position;
    close()
  }

  function create(name, status, position) {
    data = [...data, {name: name, status: status, position: position, image: ""}];
    close()
  }

  const { open, close } = getContext('simple-modal');

  const showModal = (title, name, status, position, onSubmit) => {
    open(ModalForm, { title, name, status, position, onSubmit });
  };
</script>
<style>
  td {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
</style>
<Box title="Data" width="w-full" className="space-y-4">
  <div class="overflow-y-scroll overflow-x-auto h-64">
    <table class="table-auto w-full">
      {#each data as data}
        <tr class="border-b text-sm sm:text-base">
          <td><img src={data.image !== "" ? data.image : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXk5uf////v8PHm6On8/Pz09fXi5OX3+Pjs7e7x8vLp6+v29vf5+frm6Ojs7u7v8fG0wfkyAAAFc0lEQVR4nO2dCbarOAxEA2YwhEf2v9sPIWnmAMZSSW7fFVBHsiY8PB6RSCQSiUQikUgkEolEIpFIJBKJRCKRiDqMMXVr07S1dW0M+ms8Y2z1bLJkSlbmaSgy62qubSozt+ivu02d78r78LSKTWnSI3kfS2rVeE7fG5Uaq9Py3pSmQH/xNV7X9KmzY91cF9itxxT93ae56KAjpQ4zmtJVYGdGDfnRuuvrydHff4izh35phHtqfldg56l/aBG/uLEEJxIFW9GLQMkSnbLgJjVayjaeLChXok+BIh31dpqY06D1rLiZ6NeUaEULat8Ck6QS1U6Z883ueUTVqE8CgUkiKNp4X4QDgpYijUBBfuqh3N5GSlYkiKNfhHSL/srRNSKqt5ZQYFJKSIoUqXBEgBFJTSiiPqU1oQAjEiX7EXg4pQykA+CcaMgFJhVWIVk5M4ItbEi6piXQ6pQ8zvQ8kQpp+sIFSDf943BSqJsSdhVTgCnR8wRxjwxWfhf06X4AthAZ0v0A7Ac/S67ogS1EpmUIbKFYsuEbkMCCJxv2gEJNwSYQlfPZQimsg2KqaHpAwZR4BjUF1F447D90BfSPhi0dwhIiwwTjC6hFjAqjQvkK+crSaMOo0BXOfIhRmDIqhAjkrEtBVRtjbwGqvMPvD8m2Qq0B9fiMcxrUz3yv+55/AhLIlxAzlEK2mTfsH2n4/y3Idwt9we0a4qq9cdv3mBYicDc0y2aTJGlxCpkyInLLEMtQuEHuomXJFy+gQBY3BW/YZ4im0E1fD46kj94kTF59wzd6k8ca/MkgYiPCGqcR4v2JEu47ITWiABMSF6cSTEg6+4YH0g90mzDRufAL2fAbfl7mS0H0r1TKEdIemmAjxUd7SPxU1pUDBK2woLPqb7yP3eRdpuQ7ZUhahB/8Rht8S7HGa/WGnc3sUfuTKKMcXeNNolSB3hp+uQI9rUXkEP8Ycz9pSIyiU8zN1N8IzINLbg2JdVy1e8NTpXvofzjONZ4qDDjgctNuJjuGrrAXXTVT+I6AvZIbK336Oor2pB0znfremOpQZPZUE0B3+PG8Rf8sQqvXfBPq19YrF1lZ1UHIGygexqZ5+SGvbK3tLYTI/wIzA/01/jDWvqpnt/aa7E0XYXqapnmWeZq2aoNN8ajXbzztpYxOqjWFoshjbFU6TDOaPFUQYE2duogbzZnlVq7fdqY755WHMsuXEffToqiPC9BrKmW9V3b89JgTTSpjWf6srG+LhBfmJqW+DKtzV6BIy7PNG9QgF4bSO5eU7HGnqBkP479hNmTLdy4PopFp+W1o5Jn5u72L5wvyA8HFnWfjNGj8Y7woYhfC6f8fZ374RUn0j/HqnwhKSEIOfAHOaX0X5WyHmk/j90VPw13BnMFnxPG42ckr3v4ZM95Dc5HMS1D1sEOGEA/7iOWFmDm3dxLL9dAvN7cYSajSjrj1SrKwLL+HdV2MTPcJeMCx39Aj0FGiJoFOJ6R0CXSQqE1gJ/FauGF6fMQr19ai6Eptjysb4DUk+g1Ot1MF47WdfjnbTakVePbQKeOVlt45dfZbX56YciagShzJXOC40WB8DoCEw6WoeREOHL0+qzLVz/md+OUPLU7wy08ZbwYm5FeboWRqccT+bEp/mBnYz/sBhJmBvWAjffh7nr27l4Ix4d5x/iAyxYdtIwZkwm0jMr50wMCWEZX3FEvWOTGMcmZkXdjoHV3ssKpOVXf2WyyzfigF28iydAvOSVexJqhkODB30/CcdOmm2udPW8xnUoG0vnNmg8XgckXPdCGGuAznm4nC6X1nTCanAWbDnkmoCTLQTHM+4+NbrIxtMOMj6axMfrWhP4WIsUcMrfv9MtZtJg2Td1HzD4mEaMZPRDf0AAAAAElFTkSuQmCC"} alt="profile" class="w-10 sm:w-8 h-8 sm:rounded-full object-cover"/></td>
          <td>{data.name}</td>
          <td>{data.status}</td>
          <td>{data.position}</td>
          <td class="flex space-x-3">
            <div class="px-2 py-1 bg-purple-500 text-white text-sm font-semibold rounded cursor-pointer" on:click={() => showModal("Edit", data.name, data.status, data.position, (name, status, position) => edit(data.name, name, status, position))}>Edit</div>
            <div class="px-2 py-1 bg-red-500 text-white text-sm font-semibold rounded cursor-pointer" on:click={() => remove(data.name)}>Hapus</div>
          </td>
        </tr>
      {/each}
    </table>
  </div>
  <div class="flex">
    <div class="px-2 py-1 bg-blue-500 text-white font-semibold rounded cursor-pointer" on:click={() => showModal("Create", "", "", "", (name, status, position) => create(name, status, position))}>+ Tambah</div>
  </div>
</Box>