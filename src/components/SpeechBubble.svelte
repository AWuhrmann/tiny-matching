<script lang="ts">
    import { computePosition, offset, shift } from '@floating-ui/dom';
    import { onMount } from 'svelte';
  
    export let referenceElement: HTMLElement;  // Element to float above
    export let text: string = "";              // Bubble content
    export let heightOffset: number = 50;      // Vertical offset
    export let xOffset: number = 0;            // Horizontal offset
    export let bubbleColor: string = "yellow"; // Color theme
  
    let bubbleElement: HTMLElement;
  
    const updatePosition = async () => {
      if (referenceElement && bubbleElement) {
        const { x, y } = await computePosition(referenceElement, bubbleElement, {
          placement: 'top',
          middleware: [
            offset({ mainAxis: heightOffset, crossAxis: xOffset }),
            shift({ padding: 8 })
          ]
        });
        
        Object.assign(bubbleElement.style, {
          left: `${x}px`,
          top: `${y}px`
        });
      }
    };
  
    onMount(() => {
      updatePosition();
      window.addEventListener('resize', updatePosition);
      return () => window.removeEventListener('resize', updatePosition);
    });
  </script>
  
  <div 
    bind:this={bubbleElement} 
    class="absolute speech-bubble px-4 py-2"
    class:bg-yellow-50={bubbleColor === "yellow"}
    class:bg-red-50={bubbleColor === "red"}
    class:bg-blue-50={bubbleColor === "blue"}
    class:bg-green-50={bubbleColor === "green"}
  >
    {text}
  </div>
  
  <style>
    .speech-bubble {
      position: absolute;
      border-radius: 1rem;
      font-family: 'Courier New', monospace;
      filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1));
    }
  
    .speech-bubble::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid currentColor;
      filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    }
  
    .bg-yellow-50::after { color: rgb(254 252 232); }
    .bg-red-50::after { color: rgb(254 242 242); }
    .bg-blue-50::after { color: rgb(239 246 255); }
    .bg-green-50::after { color: rgb(240 253 244); }
  </style>