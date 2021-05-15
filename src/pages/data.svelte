<script>
  import { getContext } from 'svelte';
  import { faEdit } from "@fortawesome/free-solid-svg-icons";
  import { datas, query, data, getFile } from "../server";
  import Box from "../components/Box.svelte";
  import ModalForm from '../components/ModalForm.svelte';

  async function remove(id) {
    const object = await query.get(id);
    object.destroy().then(() => location.reload());
  }

  async function edit(id, name, status, position, image) {
    await query.get(id).then((obj) => {
      obj.set("name", name)
      obj.set("status", status)
      obj.set("position", position)
      if(image[0] != undefined){
        getFile(image[0].name, image[0]).save().then((file) => {
          obj.set("image", file)
          obj.save().then(() => location.reload())
        })
      }else{
        obj.save().then(() => location.reload())
      }
    })
    close()
  }

  function create(name, status, position, image) {
    data.set("name", name)
    data.set("status", status)
    data.set("position", position)
    if(image[0] != undefined){
      getFile(image[0].name, image[0]).save().then((file) => {
        data.set("image", file)
        data.save().then(() => location.reload())
      })
    }else{
      data.save().then(() => location.reload())
    }

    close()
  }

  const { open, close } = getContext('simple-modal');

  const showModal = (title, name, status, position, image, onSubmit) => {
    open(ModalForm, { title, name, status, position, image, onSubmit });
  };
</script>
<style>
  td {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
</style>
<Box title="Data" width="w-full" className="space-y-4">
  {#await datas}
    <span>Tunggu Sebentar...</span>
  {:then data}
    <div class="overflow-y-scroll overflow-x-auto h-64">
      <table class="table-auto w-full">
        {#each data as data}
          <tr class="border-b text-sm sm:text-base">
            <td><img src={data.get("image")._url} alt="profile" class="w-10 sm:w-8 h-8 sm:rounded-full object-cover"/></td>
            <td>{data.get("name")}</td>
            <td>{data.get("status")}</td>
            <td>{data.get("position")}</td>
            <td class="flex space-x-3">
              <div class="px-2 py-1 bg-purple-500 text-white text-sm font-semibold rounded cursor-pointer" on:click={() => showModal("Edit", data.get("name"), data.get("status"), data.get("position"), data.get("image")._name, (name, status, position, image) => edit(data.id, name, status, position, image))}>Edit</div>
              <div class="px-2 py-1 bg-red-500 text-white text-sm font-semibold rounded cursor-pointer" on:click={() => remove(data.id)}>Hapus</div>
            </td>
          </tr>
        {/each}
      </table>
    </div>
  {/await}
  
  <div class="flex">
    <div class="px-2 py-1 bg-blue-500 text-white font-semibold rounded cursor-pointer" on:click={() => showModal("Create", "", "Guru", "", "", (name, status, position, image) => create(name, status, position, image))}>+ Tambah</div>
  </div>
</Box>