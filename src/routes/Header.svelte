<!-- +page.svelte -->
<script>
  // Your script logic here
</script>

<main class="min-h-screen bg-gray-50">
  <!-- Hero Section -->
  <section class="py-16 px-4 md:px-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Project Title</h1>
      <p class="text-lg text-gray-600">A brief description of your amazing project goes here.</p>
    </div>
  </section>

  <!-- Main Content -->
  <section class="py-12 px-4 md:px-8">
    <div class="max-w-4xl mx-auto">
      <div class="prose lg:prose-lg">
        <h2 class="text-2xl font-semibold text-gray-900 mb-6">About the Project</h2>
        <p class="mb-6">Your detailed project description here. Make it engaging and informative.</p>

        <!-- Example with highlighted words -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Example Usage</h3>
          <p class="leading-relaxed">
            Here's how you can 
            <span class="bg-green-100 text-green-800 rounded-full px-3 py-1">integrate</span> 
            our solution with your 
            <span class="bg-green-100 text-green-800 rounded-full px-3 py-1">existing workflow</span>
            seamlessly.
          </p>
        </div>

        <!-- Features Section -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div class="p-6 bg-white rounded-lg shadow">
            <h4 class="font-semibold mb-2">Feature 1</h4>
            <p class="text-gray-600">Description of your first feature.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow">
            <h4 class="font-semibold mb-2">Feature 2</h4>
            <p class="text-gray-600">Description of your second feature.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>