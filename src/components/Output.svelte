<div class="output-wrapper">
  <div class="output-header-wrapper">
    <p class="output-heading">Output</p>
  </div>
  <div class="output">
    <slot/>
  </div>
</div>

<style>
  .output-wrapper{
    border: 1px solid var(--gray-4);
    background-color: white;
    border-radius: var(--radius-2);
    overflow: hidden;
    margin-block: var(--size-4);
  }
  .output-header-wrapper{
    margin: 0;
    padding: 0;
  }
  .output-heading {
      padding: 0;
      margin: 0;
      font-size: 1rem;
      padding-inline: var(--size-4);
      padding-block: var(--size-2);
      background-color: var(--gray-1);
      font-weight: var(--font-weight-4);
      color: var(--gray-8);
    }
    .output {
      padding: var(--size-4);
    }
  .output * {
    margin: 0;
    padding: 0;
  }
</style>
