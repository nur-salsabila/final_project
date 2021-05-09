<script>
  import Box from "../../../school_project/src/../../school_project/src/components/Box.svelte";
  import Icon from "svelte-awesome";
  import {
    faWhatsapp,
    faGithub,
    faYoutube
  } from "@fortawesome/free-brands-svg-icons";
</script>

<Box title="Contact" width="w-full sm:w-2/3" className="mx-auto">
  <div class="flex flex-col w-full space-y-6 items-center">
    <div class="w-1/2">
      <img src="https://i.ytimg.com/vi/H4W59Tl7-2k/maxresdefault.jpg" alt="profile" class="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full mx-auto"/>    
    </div>
    <div class="w-full sm:w-1/2 flex flex-col space-y-3">
      <span class="flex flex-row w-full items-center"><Icon data={faWhatsapp} class="mr-3"/>0823-2168-3557</span>
      <span class="flex flex-row w-full items-center"><Icon data={faGithub} class="mr-3"/>lashdid19</span>
      <span class="flex flex-row w-full items-center"><Icon data={faYoutube} class="mr-3"/>The Bruh Master</span>
    </div>
  </div>
</Box>