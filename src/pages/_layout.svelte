<script>
    import Icon from "svelte-awesome";
    import { faBars, faTimes, faHome } from "@fortawesome/free-solid-svg-icons";
    import { fly } from "svelte/transition";
    let sidebar = false;
  </script>
  
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
  
  <div class="flex w-full h-full items-start">
  
    {#if sidebar}
      <div class="fixed w-full sm:w-1/5 bg-gray-900 space-y-3 py-3 h-full" transition:fly={{x: -250, opacity: 1, duration: 200}}>
        <div class="sm:hidden text-3xl font-semibold text-white w-full text-right pr-5">
          <span class="cursor-pointer" on:click={() => sidebar = !sidebar}>x</span>
        </div>
        <div class="my-3 text-blue-500 text-xl font-extrabold text-center">
          Datain.
        </div>
        <a  href="/" class="w-full">
            <div class="text-white text-sm font-semibold py-2 pl-4 cursor-pointer hover:bg-gray-800">
                Dashboard
            </div>
        </a>
        <div class="text-white text-sm font-semibold py-2 pl-4 cursor-pointer hover:bg-gray-800">
          Data
        </div>
        <a  href="/profile" class="w-full">
            <div class="text-white text-sm font-semibold py-2 pl-4 cursor-pointer hover:bg-gray-800">
                Profile
            </div>
        </a>
        <div class="text-white text-sm font-semibold py-2 pl-4 cursor-pointer hover:bg-gray-800">
          Contact
        </div>
      </div>
    {/if}
  
    <div class="flex w-full justify-end">
      <div class="flex flex-col {sidebar ? 'w-4/5' : 'w-full'}">
        <div class="flex flex-row w-full bg-white items-center shadow px-5 py-2 justify-between">
          <div class="flex flex-row items-center space-x-4">
            <div class="cursor-pointer hover:shadow rounded-md p-2" on:click={() => sidebar = !sidebar}>
              <Icon data={sidebar ? faTimes : faBars} scale="1.6" class="cursor-pointer"/>
            </div>
            <span class="text-2xl font-semibold">Dashboard</span>
          </div>
          <a href="/profile">
            <div class="flex flex-row space-x-2 items-center cursor-pointer hover:shadow rounded-md p-2">
                <img src="https://i.ytimg.com/vi/H4W59Tl7-2k/maxresdefault.jpg" alt="profile" class="w-8 h-8 object-cover rounded-full"/>
                <div class="flex flex-col">
                    <span class="font-semibold text-sm">Alhan</span>
                    <span class="text-gray-400 font-semibold text-xs">Murid</span>
                </div>
            </div>
          </a>
        </div>
  
        <!-- pages -->
        <div class="flex flex-col w-full p-6 space-y-5">
          <slot/>
        </div>
  
      </div>
    </div>
  
  </div>
  