<script>
    import { onMount, onDestroy } from 'svelte';
  
    let initialTime = 0;
  
    let timerInterval;

    onMount(() => {
        timerInterval = setInterval(() => {
        initialTime += 1;
      }, 1000);
    });
  
    onDestroy(() => {
      clearInterval(timerInterval);
    });
  </script>
  
  <div>
    <p>Time Elapsed: {initialTime} seconds</p>
  </div>
  