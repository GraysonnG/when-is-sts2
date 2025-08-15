<script>
  import { onMount } from "svelte";

  let dayOfWeek = 0;
  let loading = true;
  let maybeQuote = "";
  let nopeQuote = "";
  
  const maybeQuotes = [
    "Maybe today?",
    "There's a chance!",
    "Possibly!",
    "Maybe at the next convention?",
    "It's anyone's guess.",
    "No one can say for sure."
  ];
  const nopeQuotes = [
    "Nope!",
    "Not today.",
    "I wouldn't count on it.",
    "Highly unlikely.",
    "Don't get your hopes up.",
    "It's a long shot."
  ]

  onMount(async () => {
    // get the current day of the week id thurs as a number 0-6
    const today = new Date();
    dayOfWeek = today.getDay();
    // pick a random maybe quote
    maybeQuote = maybeQuotes[Math.floor(Math.random() * maybeQuotes.length)];
    nopeQuote = nopeQuotes[Math.floor(Math.random() * nopeQuotes.length)];

    // delay for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000));
    loading = false;
  })

  
</script>

<header>
	
</header>

<section>
  <div>
    <h1>Will Slay the Spire 2 come out today?</h1>
    {#if !loading}
      {#if dayOfWeek === 4}
          <span>{maybeQuote}</span>
      {:else}
          <span>{nopeQuote}</span>
      {/if}

    {:else}
      <span>Thinking...</span>
    {/if}
    
    <a href="https://megacrit.com/news/" target="_blank">Read the latest Neow's Letter</a>
  </div>

</section>

<style>
  header {
    position: relative;
    color: #f2f0c4;
  }

  div {
    color: #f2f0c4;
    background-color: rgba(0,0,0,0.7);
    padding: 2em;
    border-radius: 1em;
    max-width: 40em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    transition: all 300ms;
  }

  div:hover {
    transform: translateY(10px) rotate(2deg) scale(1.05);
  }

  h1 {
    display: block;
    font-size: 1.5em;
    text-align: center;
    margin: 0;
    font-weight: 700;
    opacity: 0.8;
  }

  span {
    display: block;
    font-size: 4em;
    font-weight: 900;
    line-height: 1;
    text-align: center;
  }

  a {
    background: #f2f0c4;
    color: #183749;
    padding: 0.5em 1em;
    border-radius: 100em;
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 700;
    padding: 0.7em 30px;
    margin-top: 1em;
  }

  section {
    display: grid;
    place-items: center;
    height: 70vh;
  }
</style>

