<script lang="ts">
	import type { PageData } from "./$types";


    export let data : PageData
</script>


<div class='mt-2'>
        <h1 class="text-white font-extrabold text-8xl uppercase">This dog Isn't penny!</h1>
</div>
<div class="mt-20 justify-center flex">
    <!-- svelte-ignore a11y-missing-attribute -->
    <img src={data.message}/>
</div>
<div class="mt-6">
    <h3 class="text-white text-2xl font-semibold">Credits to Cappy (Aleph)#3287</h3>
</div>