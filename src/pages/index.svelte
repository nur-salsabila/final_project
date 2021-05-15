<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";
  import Icon from "svelte-awesome";
  import {
    faChalkboardTeacher,
    faKeyboard,
    faUserGraduate
  } from "@fortawesome/free-solid-svg-icons";
  import { datas, query } from "../server";
  import Box from "../components/Box.svelte";

  let teacher, staff, student;
  
  const data = datas.then((res) => res)
  
  teacher = data.then((res) => res.filter((e) => e.get("status") == "Guru"))
  staff = data.then((res) => res.filter((e) => e.get("status") == "Staff"))
  student = data.then((res) => res.filter((e) => e.get("status") == "Murid"))

  Chart.defaults.global.legend.display = false;

  onMount(async() => {
    var chartData = await Promise.all([teacher, staff, student]).then((res) => {
      return res.map((e) => e.length)
    })
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
            data: chartData
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
      {#await teacher}
        <span class="text-xl">Tunggu...</span>
      {:then teacher} 
        <span class="text-xl">{teacher.length}</span>        
      {/await}
      <span class="text-gray-600">Guru</span>
    </div>
  </div>
  <div class="flex flex-row w-full space-x-3 items-center bg-white py-4 px-2 rounded shadow">
    <div class="flex w-10 h-10 rounded-full bg-blue-500 text-white items-center">
      <Icon data={faKeyboard} class="fill-current mx-auto" scale="1.5"/>
    </div>
    <div class="flex flex-row sm:flex-col items-center sm:items-start space-x-3 sm:space-x-0">
      {#await staff}
        <span class="text-xl">Tunggu...</span>
      {:then staff} 
        <span class="text-xl">{staff.length}</span>        
      {/await}
      <span class="text-gray-600">Staff</span>
    </div>
  </div>
  <div class="flex flex-row w-full space-x-3 items-center bg-white py-4 px-2 rounded shadow">
    <div class="flex w-10 h-10 rounded-full bg-red-500 text-white items-center">
      <Icon data={faUserGraduate} class="fill-current mx-auto" scale="1.5"/>
    </div>
    <div class="flex flex-row sm:flex-col items-center sm:items-start space-x-3 sm:space-x-0">
      {#await student}
        <span class="text-xl">Tunggu...</span>
      {:then student} 
        <span class="text-xl">{student.length}</span>        
      {/await}
      <span class="text-gray-600">Murid</span>
    </div>
  </div>
</div>

<div class="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
  <Box title="Tampilan Data" width="w-full sm:w-2/3">
    {#await datas}
      <span>Tunggu Sebentar...</span>
    {:then data}
      <div class="overflow-y-scroll h-64">
        <table class="table-auto w-full">
          {#each data as data}
            <tr class="border-b">
              <td>{data.get('name')}</td>
              <td>{data.get('status')}</td>
              <td>{data.get('position')}</td>
            </tr>
          {/each}
        </table>
      </div>
    {/await}
  </Box>

  <Box title="Grafik" width="w-full sm:w-1/3">
    <span class="text-sm text-gray-400 text-center mb-3">Jumlah Penduduk Sekolah</span>
      <canvas id="myChart" width="100%" height="100%" class="mx-auto"></canvas>
  </Box>
</div>

<div class="w-full flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
  <Box title="Guru" width="w-full sm:w-1/3">
    {#await teacher}
      <span>Tunggu Sebentar...</span>
    {:then teacher} 
      <div class="overflow-y-scroll h-40">
        <table class="table-auto w-full">
          {#each teacher as data}
            <tr class="border-b">
              <td>{data.get("name")}</td>
              <td>{data.get("position")}</td>
            </tr>
          {/each}
        </table>
      </div>
    {/await}
  </Box>

  <Box title="Staff" width="w-full sm:w-1/3">
    {#await staff}
      <span>Tunggu Sebentar...</span>
    {:then staff} 
      <div class="overflow-y-scroll h-40">
        <table class="table-auto w-full">
          {#each staff as data}
            <tr class="border-b">
              <td>{data.get("name")}</td>
              <td>{data.get("position")}</td>
            </tr>
          {/each}
        </table>
      </div>
    {/await}
  </Box>

  <Box title="Siswa" width="w-full sm:w-1/3">
    {#await student}
      <span>Tunggu Sebentar...</span>
    {:then student} 
      <div class="overflow-y-scroll h-40">
        <table class="table-auto w-full">
          {#each student as data}
            <tr class="border-b">
              <td>{data.get("name")}</td>
              <td>{data.get("position")}</td>
            </tr>
          {/each}
        </table>
      </div>
    {/await}
  </Box>
</div>