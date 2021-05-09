<script>
  export let title;
  export let width = "w-full";
  export let className;
</script>

<div class="flex flex-col px-2 pt-3 pb-5 bg-white rounded shadow {width} {className}">
  {#if title}
    <h5 class="text-lg font-semibold mb-5">{title}</h5>
  {/if}
  <slot/>
</div>