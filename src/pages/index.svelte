<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";
  import Icon from "svelte-awesome";
  import {
    faChalkboardTeacher,
    faKeyboard,
    faUserGraduate
  } from "@fortawesome/free-solid-svg-icons";
  import Box from "../components/Box.svelte";

  const data = [
    {
      name: "Alhan Saha Sadida",
      status: "Siswa",
      position: "XI RPL 1"
    },
    {
      name: "Raihan Ramadhan Rahman",
      status: "Siswa",
      position: "XI RPL 1"
    },
    {
      name: "Mahmud Joko Susanto",
      status: "Siswa",
      position: "X TKJ 2"
    },
    {
      name: "Jhon Welldone",
      status: "Siswa",
      position: "X TPM 3"
    },
    {
      name: "Donald Gowell",
      status: "Staff",
      position: "OB"
    },
    {
      name: "Dudung Dzulkifli",
      status: "Guru",
      position: "PWPB"
    },
    {
      name: "Thomas Roweld",
      status: "Siswa",
      position: "XII TPM 1"
    },
    {
      name: "Bruno Mculding",
      status: "Siswa",
      position: "XIII TOI 1"
    },
    {
      name: "Asep Tri Widiyantoro",
      status: "Guru",
      position: "PBO"
    },
    {
      name: "Bayu Perdana",
      status: "Siswa",
      position: "XII TKJ 2"
    },
    {
      name: "Jack Jhonson",
      status: "Staff",
      position: "OB"
    },
    {
      name: "Sam Gilbert",
      status: "Siswa",
      position: "XII TPTU 1"
    },
    {
      name: "Titi Nurlaela",
      status: "Guru",
      position: "MTK"
    },
    {
      name: "Budi Budiman",
      status: "Staff",
      position: "TU"
    },
    {
      name: "Surya Cahyo",
      status: "Guru",
      position: "DDG"
    }
  ];

  let teacher = data.filter(data => data.status == "Guru");
  let staff = data.filter(data => data.status == "Staff");
  let student = data.filter(data => data.status == "Siswa");

  Chart.defaults.global.legend.display = false;

  onMount(() => {
    var ctx = document.getElementById("myChart").getContext("2d");
    var chart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Guru", "Staff", "Murid"],
        datasets: [
          {
            label: "My First dataset",
            backgroundColor: [
              "rgb(16, 185, 129)",
              "rgb(59, 130, 246)",
              "rgb(239, 68, 68)"
            ],
            data: [teacher.length, staff.length, student.length]
          }
        ]
      }
    });
  });
</script>

<style>
  td {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
</style>

<div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 items-center">
  <div class="flex flex-row w-full mx-auto space-x-3 items-center bg-white py-4 px-2 rounded shadow">
    <div class="flex w-10 h-10 rounded-full bg-green-500 text-white items-center">
      <Icon data={faChalkboardTeacher} class="fill-current mx-auto" scale="1.5"/>
    </div>
    <div class="flex flex-row sm:flex-col items-center sm:items-start space-x-3 sm:space-x-0">
      <span class="text-xl">{teacher.length}</span>
      <span class="text-gray-600">Guru</span>
    </div>
  </div>
  <div class="flex flex-row w-full space-x-3 items-center bg-white py-4 px-2 rounded shadow">
    <div class="flex w-10 h-10 rounded-full bg-blue-500 text-white items-center">
      <Icon data={faKeyboard} class="fill-current mx-auto" scale="1.5"/>
    </div>
    <div class="flex flex-row sm:flex-col items-center sm:items-start space-x-3 sm:space-x-0">
      <span class="text-xl">{staff.length}</span>
      <span class="text-gray-600">Staff</span>
    </div>
  </div>
  <div class="flex flex-row w-full space-x-3 items-center bg-white py-4 px-2 rounded shadow">
    <div class="flex w-10 h-10 rounded-full bg-red-500 text-white items-center">
      <Icon data={faUserGraduate} class="fill-current mx-auto" scale="1.5"/>
    </div>
    <div class="flex flex-row sm:flex-col items-center sm:items-start space-x-3 sm:space-x-0">
      <span class="text-xl">{student.length}</span>
      <span class="text-gray-600">Murid</span>
    </div>
  </div>
</div>

<div class="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
  <Box title="Tampilan Data" width="w-full sm:w-2/3">
    <div class="overflow-y-scroll h-full">
      <table class="table-auto w-full">
        {#each data as data}
          <tr class="border-b">
            <td>{data.name}</td>
            <td>{data.status}</td>
            <td>{data.position}</td>
          </tr>
        {/each}
      </table>
    </div>
  </Box>

  <Box title="Grafik" width="w-full sm:w-1/3">
    <span class="text-sm text-gray-400 text-center mb-3">Jumlah Penduduk Sekolah</span>
      <canvas id="myChart" width="100%" height="100%" class="mx-auto"></canvas>
  </Box>
</div>

<div class="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
  <Box title="Guru" width="w-full sm:w-1/3">
    <div class="overflow-y-scroll h-40">
      <table class="table-auto w-full">
        {#each teacher as data}
          <tr class="border-b">
            <td>{data.name}</td>
            <td>{data.position}</td>
          </tr>
        {/each}
      </table>
    </div>
  </Box>

  <Box title="Staff" width="w-full sm:w-1/3">
    <div class="overflow-y-scroll h-40">
      <table class="table-auto w-full">
        {#each staff as data}
          <tr class="border-b">
            <td>{data.name}</td>
            <td>{data.position}</td>
          </tr>
        {/each}
      </table>
    </div>
  </Box>

  <Box title="Siswa" width="w-full sm:w-1/3">
    <div class="overflow-y-scroll h-40">
      <table class="table-auto w-full">
        {#each student as data}
          <tr class="border-b">
            <td>{data.name}</td>
            <td>{data.position}</td>
          </tr>
        {/each}
      </table>
    </div>
  </Box>
</div>