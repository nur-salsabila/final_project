<script>
    export let title;
    export let image;
    export let name;
    export let status;
    export let position;
    export let onSubmit;
</script>

<span class="w-full text-xl font-semibold">{title}</span>
<hr/>
<div class="flex flex-col w-full space-y-4 p-4">
    <span class="font-semibold">Foto Profil</span>
    <input type="file" accept="image/png, image/jpeg" class="w-full border p-2 rounded" bind:files={image}/>
    <span class="font-semibold">Nama</span>
    <input type="text" class="w-full border p-2 rounded" bind:value={name}/>
    <span class="font-semibold">Status</span>
    <select bind:value={status} class="w-full p-2 border">
        <option value="Guru">Guru</option>
        <option value="Staff">Staff</option>
        <option value="Murid">Murid</option>
    </select>
    <span class="font-semibold">Jabatan / Kelas</span>
    <input type="text" class="w-full border p-2 rounded" bind:value={position}/>
    <div class="flex w-full justify-end">
        <div class="flex-initial px-2 py-1 bg-green-500 text-white font-semibold rounded cursor-pointer" on:click={() => onSubmit(name, status, position, image)}>Submit</div>
    </div>
</div>