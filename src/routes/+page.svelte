<!-- +page.svelte -->
<script lang="ts">
	import { computePosition, offset, flip } from "@floating-ui/dom";
	import { onMount } from "svelte";
	import SpeechBubble from "../components/SpeechBubble.svelte";

	// Props for customizable heights
	let baseText: HTMLElement;
</script>

<main class="min-h-screen bg-gray-50 text-lg">
	<!-- Hero Section remains the same -->
	<section class="py-16 px-4 md:px-8">
		<div class="max-w-4xl mx-auto">
			<h1 class="text-4xl font-bold text-gray-900 mb-4">
				🦜 LLM as stochastic parrots: Following the Breadcrumbs in Training Data
			</h1>
			<p class="text-lg text-gray-600 mb-6">
				Are LLMs just parrots mapping segments of their training data
				together? A simple analysis on <strong>TinyStories</strong> dataset.
			</p>

			<div
				class="flex items-center gap-6 text-sm text-gray-600 border-t border-b border-gray-200 py-4"
			>
				<div class="flex items-center gap-2">
					<a
						href="https://www.linkedin.com/in/arthur-wuhrmann-1a082932b/"
						class="flex items-center gap-2 hover:text-blue-600 transition-colors"
					>
						<span class="font-medium">Arthur Wuhrmann</span>
					</a>
				</div>

				<div class="flex items-center gap-6">
					<div class="flex items-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4 h-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
							/>
						</svg>
						<span>Feb 1, 2025</span>
					</div>

					<div class="flex items-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-4 h-4"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
						<span>8 min read</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Main Content -->
	<section class="px-4 md:px-8">
		<div class="max-w-4xl mx-auto">
			<div class="prose lg:prose-lg">
				<div class="flex flex-col items-center max-w-md mx-auto">
					<img
						src="meme.webp"
						alt="Meme related to LLMs"
						class="w-128 rounded-lg shadow-lg"
					/>
					<p class="mt-2 text-sm text-gray-600 text-center">
						Just a meme :3 (could not find the source)
					</p>
				</div>
				<!-- First sections remain the same until methods comparison -->
				<h2 class="text-2xl font-semibold text-gray-900 mb-6">
					🤖 Parrot robots ?
				</h2>
				<p class="mb-6">
					In 2021, <a
						class="underline"
						href="https://dl.acm.org/doi/10.1145/3442188.3445922"
						>Bender et al.</a
					>
					hypothesized that LLMs were just
					<strong>sophisticated copy-paster</strong>, like
					<strong>parrots</strong>
					🦜. This was supported by some evidence like their
					<strong
						>poor performance in <a
							class="underline"
							href="https://arxiv.org/pdf/2410.05229">math</a
						></strong
					>, or their lack of common sense for very simple tasks (like
					counting the number of r's in strawberry 🍓).
				</p>
				<p class="mb-6">
					This suggests the models might be mostly combining sentences
					from smaller batches, like puzzles pieces. <a
						class="underline"
						href="https://arxiv.org/abs/2012.07805"
						>Carlini et al. (2021)</a
					>
					managed to show that it could recover
					<strong>verbatim</strong>
					some passages that were present
					<strong>only once in the dataset</strong>. The aim of this
					project is to study this phenomenon by trying to find where
					the output of a LLM is in the training data.
				</p>
				<p class="mb-6">
					However, one of main challenges is that in state-of-the-art
					models, they used a huuuuge quantity of data for training,
					making searching virtually impossible, especially for a
					small project like this one. I thus decided to consider a
					smaller model with an open-source dataset, and came up with <strong
						><a
							class="underline"
							href="https://huggingface.co/datasets/roneneldan/TinyStories"
							>TinyStories</a
						></strong
					>
					from
					<a class="underline" href="https://arxiv.org/abs/2305.07759"
						>Eldan and Li (2023)</a
					>
				</p>

				<p class="mb-6">
					The TinyStories model exists in different versions, with
					parameters varying from <strong>1M</strong> to
					<strong>33M</strong>. The dataset contains
					<strong>2M</strong> short stories. Here is an example of a story
					:
				</p>
				<div
					class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
				>
					<p class="font-mono">
						Once upon a time, there was a little girl named Lily.
						She loved space and always dreamed of going to the moon.
						One day, her parents took her to a museum where she saw
						a big rocket ship. The rocket ship had many buttons and
						switches that included a big red button. Lily was so
						excited to see the rocket ship that she ran towards it,
						but accidentally bumped into an ignorant man. The man
						scolded her and told her to be more careful. Lily felt
						sad and embarrassed. Her parents hugged her and told her
						not to worry because accidents happen. After that, Lily
						went back to the rocket ship and imagined herself flying
						to space. She felt happy and forgot about the ignorant
						man. She loved space and wanted to explore it someday.
					</p>
				</div>
				<p class="mb-6 mt-6">
					And here is an example of the model's output (33M
					parameters), with the prompt in blue and the completion in
					purple.
				</p>

				<!-- Example Prompt Block - Updated with Courier and no quotes -->
				<div class="bg-white p-6 rounded-lg shadow-sm mb-8">
					<h3 class="text-xl font-semibold mb-4">
						TinyStories Completion
					</h3>
					<div class="space-y-2">
						<div class="font-mono leading-loose">
							<span
								class="rounded-lg px-1 py-1 font-bold text-blue-800 bg-blue-50"
								>Lily was sad</span
							>
							<span
								class="rounded-lg py-1 px-1 font-bold text-purple-800 bg-purple-50"
								>and didn't know what to do. She went to her mom
								and said, "Mommy, my toy is broken. Can you fix
								it?"</span
							>
						</div>
					</div>
				</div>

				<h2 class="font-bold text-2xl mt-10">
					🔎 How to look in the dataset ?
				</h2>

				<p>
					There are different ways of searching in the dataset. The
					simplest is just using regular expression matching,
					equivalent to using grep on terminal commands. More
					sophisticated techniques involve pre-computing what is
					called an index, which is sort of a lookup-table, that
					references where the data we are looking at is. Here is a
					comparison between the three methods, in our case.
				</p>

				<!-- Methods Comparison - Improved alignment -->
				<div class="space-y-8 max-w-3xl mx-auto p-6">
					<!-- Grep -->
					<div
						class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
					>
						<div class="grid grid-cols-[120px,1fr] gap-6">
							<div class="font-bold text-gray-800">Grep</div>
							<div class="font-medium">
								Matches exact sentence in the training data.
							</div>
							<div class="text-gray-600 flex items-center gap-2">
								<span class="text-xl">😄</span> Very fast and easy
								to setup
							</div>
							<div class="text-gray-600 flex items-center gap-2">
								<span class="text-xl">😞</span> Requires exact matches
								and misses semantic correlations
							</div>
						</div>
					</div>

					<!-- Bloom filters -->
					<div
						class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
					>
						<div class="grid grid-cols-[120px,1fr] gap-6">
							<div class="font-bold text-gray-800">
								Bloom filters, <a
									class="underline"
									href="https://arxiv.org/abs/2303.03919"
									>Marone et al. (2023)</a
								>
							</div>
							<div class="font-medium">
								Identifies presence but can't locate context or
								handle semantic matching
							</div>
							<div class="text-gray-600 flex items-center gap-2">
								<span class="text-xl">😄</span> Once computed, blazingly
								🔥 fast! Also keeps the training data anonymous by
								not keeping the context.
							</div>
							<div class="text-gray-600 flex items-center gap-2">
								<span class="text-xl">😞</span> Cannot locate the
								context, does not have semantic matching.
							</div>
						</div>
					</div>

					<!-- Semantic indexing -->
					<div
						class="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
					>
						<div class="grid grid-cols-[120px,1fr] gap-6">
							<div class="font-bold text-gray-800">
								Semantic indexing
							</div>
							<div class="font-medium">
								Indexes semantic embeddings using FAISS
							</div>
							<div class="text-gray-600 flex items-center gap-2">
								<span class="text-xl">😄</span> Handles semantic
								comparison (by construction), once computed also
								quite fast.
							</div>
							<div class="text-gray-600 flex items-center gap-2">
								<span class="text-xl">😞</span> Does not scale well,
								because greedy in both memory and storage.
							</div>
						</div>
					</div>
				</div>

				<p class="mb-6">
					I decided to go with the last one, semantic indexing. There
					are many reasons for this. First, I did try grepping and
					bloom filters but was not satisfied. Grepping and bloom
					filters are hard to config such that it's not too sensitive
					ot mismatches. Secondly, I have not seen such indexing done
					and was curious about the resuts.
				</p>
				<p class="mb-6">
					For the sentence embedding, I chose <span
						class="font-mono">all-MiniLM-L6-v2</span> for
					its size and efficiency. However, I encountered some issues
					related to the embedding : semantic embeddings are highly <strong
						>pronouns</strong
					>
					and
					<strong>names</strong> dependent. For example:

					<span
						class="bg-blue-50 text-blue-800 rounded-lg px-2 py-1 font-mono"
					>
						Lily was very hungry
					</span>
					is closer to
					<span
						class="bg-green-50 text-green-800 rounded-lg px-2 py-1 font-mono"
					>
						Lily was sad
					</span>
					<span
						class="bg-green-50 text-green-800 rounded-lg px-2 py-1 font-mono"
					>
					</span>
					than
					<span
						class="bg-red-50 text-red-800 rounded-lg px-2 py-1 font-mono"
					>
						Tom was hungry
					</span>. To adress this issue, the indexing was done
					normally, however the searching process was altered.
					TinyStories contains a few very common names, that the model
					also uses in its stories. When searching for a sentence in
					the dataset, like
					<span
						class="bg-blue-50 text-blue-800 rounded-lg px-2 py-1 font-mono"
					>
						Lily was very hungry
					</span>, the query was performed for all common names, for
					instance also
					<span
						class="bg-blue-50 text-blue-800 rounded-lg px-2 py-1 font-mono"
					>
						Tom was very hungry
					</span>, leading to better matching. For the same reason,
					the pronouns <span
					class="font-mono">he</span>, <span
					class="font-mono">she</span> were swapped to increase matching
					performance. In future works, a better approach could
					include :
				</p>
				<ul class="list-disc space-y-4 mb-6">
					<li>
						Specific sentence embedding that is invariant to these
						transformations
					</li>
					<li>
						During indexing, replace the names by a special
						character, or by the same name each time.
					</li>
				</ul>

				<h1 class="text-2xl font-bold mb-3">📊 Results</h1>

				<p class="mb-6">
					In the following case, a story was generated, with the
					common starting "<span
					class="font-mono">Once upon a time,</span>". The generated story is
					on the left column below. Then, the sentences were mapped to
					the original dataset uisng the tool built. The matcher
					proposed around 10 results, and they were manually
					hand-picked. The column on the right shows original samples
					from the training dataset of the model. <strong
						>Each paragraph on the right corresponds to one
						different story each time.</strong
					>
					(which is why the gender / names change). The colors represent
					the difference with the original story. Red means something was
					deleted from the source to produce the output, and orange it
					was changed. On the left column, green means that the segment was added
					compared to the source.
				</p>

				<div class="bg-white p-6 rounded-lg shadow-sm mb-8">
					<div class="grid grid-cols-2 gap-8 p-8 font-mono">
						<div class="space-y-4">
							<h2 class="font-bold mb-4">Generated story</h2>
							<div>
								Once upon a time, there was a little girl named
								Lucy. She was three years old and loved to
								explore.
							</div>
							<div>
								One day, she went to the park with her mom. At
								the park, Lucy saw a big<span
									class="bg-green-50 text-green-800"
									>, green</span
								> tree.
							</div>
							<br />
							<br />
							<div>
								She wanted to climb it, so she asked her mom if
								she could. Her mom said <span
									class="bg-green-50 text-green-800"
									>yes, so</span
								>
							</div>
							<div>
								Lucy started to climb. She climbed higher and
								higher until she reached the top.
							</div>
							<div>
								<span class="bg-yellow-50 text-yellow-800"
									>At the top, Lucy saw a big, green frog</span
								>. She was so excited!
							</div>
							<div>She wanted to take it home with her.</div>
							<div>
								<span class="bg-green-50 text-green-800">
									But the frog was very selfish.</span
								> It hopped away and Lucy couldn't catch it.
							</div>
							<div>
								Lucy was sad, but then she saw a <span
									class="bg-green-50 text-green-800"
									>big, green</span
								>
								butterfly.
							</div>
							<div>
								<span class="bg-yellow-50 text-yellow-800"
									>She chased it around</span
								> the park until it flew away. Lucy was so happy!
							</div>
							<div class="mt-15">
								She <span class="bg-yellow-50 text-yellow-800"
									>had</span
								>
								a big, green frog and
								<span class="bg-yellow-50 text-yellow-800"
									>she was</span
								> so excited.
							</div>
							<div>The end.</div>
						</div>

						<div class="space-y-4">
							<h2 class="font-bold mb-4">Source</h2>
							<div class="text-gray-600">
								Once upon a time, there was a little girl named <span
									class="bg-yellow-50 text-yellow-800"
									>Anna</span
								>. She was three years old and loved to explore.
							</div>
							<div class="text-gray-600">
								One day, she went to the park with her mom. At
								the park, <span
									class="bg-yellow-50 text-yellow-800"
									>Jane</span
								>
								saw a
								<span class="bg-yellow-50 text-yellow-800"
									>big tree</span
								>.
							</div>

							<div class="text-gray-600">
								<span class="bg-yellow-50 text-yellow-800"
									>Inside</span
								>
								the park,
								<span class="bg-yellow-50 text-yellow-800"
									>there was</span
								> a big, green tree.
							</div>

							<div class="text-gray-600 mt-7">
								She wanted to climb it, so she asked her mom if
								she could. Her mom said <span
									class="bg-red-50 text-red-800">no</span
								>.
							</div>

							<div class="text-gray-600 mt-5">
								<span class="bg-yellow-50 text-yellow-800"
									>Lily</span
								>
								started to climb
								<span class="bg-red-50 text-red-800"
									>the tall tree</span
								>. She climbed higher and higher until she
								reached the top.
							</div>

							<div class="text-gray-600">
								<span class="bg-yellow-50 text-yellow-800"
									>He</span
								>
								saw
								<span class="bg-yellow-50 text-yellow-800"
									>that it was a little</span
								>
								green frog.
								<span class="bg-yellow-50 text-yellow-800"
									>He</span
								>
								was so excited!
							</div>
							<div class="text-gray-600">
								She wanted to take it home with her.
							</div>

							<div class="text-gray-600 mt-3">
								<span class="bg-yellow-50 text-yellow-800"
									>But it</span
								>
								hopped away and
								<span class="bg-yellow-50 text-yellow-800"
									>she</span
								> couldn't catch it.
							</div>
							<div class="text-gray-600 mt-11">
								<span class="bg-yellow-50 text-yellow-800"
									>Lily</span
								>
								was sad, but then she saw a
								<span class="bg-yellow-50 text-yellow-800"
									>butterfly.</span
								>
							</div>

							<div class="text-gray-600">
								<span class="bg-yellow-50 text-yellow-800"
									>He followed it all</span
								>
								around the park until it flew away.
								<span class="bg-yellow-50 text-yellow-800"
									>Timmy</span
								>
								was happy again
								<span class="bg-red-50 text-red-800"
									>and went back to singing into his
									microphone.</span
								>
							</div>

							<div class="text-gray-600 mt-8">
								She <span class="bg-yellow-50 text-yellow-800"
									>saw</span
								>
								a big<span class="bg-green-50 text-green-800"
									>,</span
								>
								green frog and
								<span class="bg-yellow-50 text-yellow-800"
									>got</span
								> very excited
							</div>
							<div class="text-gray-600"></div>
							<div class="text-gray-600"></div>
						</div>
					</div>
				</div>
				<p class="mb-6">
					From this small example, many points can be made.
				</p>
				<ul class="list-disc space-y-4 pl-6">
					<li class="">
						The sentences are heavily influenced from the training
						dataset, with often very few modifications (changing the
						name, adding an adjective). This is interesting and
						suggests that the model rarely combines different
						sentences.
					</li>
					<li class="">
						Empirically, one cannot map more than 2 sentences to the
						training data. If we think as the model as a parrot
						connecting together some samples of training data, this
						means the size of these samples is around 2 sentences.
					</li>
					<li class="">
						Where in many cases the training data includes some of
						the sentences but with different names, the output is
						still coherent and keeps the same name throughout the
						story. This is probably a consequence of the
						self-attention mechanism that helps remembering
						information in the text.
					</li>
					<li class="">
						Another example of this internal state is when at the
						end, the model writes : "She had a big, green frog and
						she was so excited", while the training data does not
						contains this sentence for frogs. The training uses
						"saw" and "got", that refer to some current action,
						whereas the prediction is more a conclusion.
					</li>
					<li class="">
						The model adds surprisingly meaningful patterns. For
						example, it associates "The frog was very selfish", with
						"It hopped away and Lucy couldn't catch it." Where this
						is striking, is because there were no instances of
						hopping animals being selfish (that I could find, at
						least). In my understanding, this means the models knows
						that selfish is connotated negatively, and that a silly
						frog would just hop around.
					</li>
				</ul>
				<h3 class="text-xl font-semibold mb-4 mt-4">🚨 Limitations</h3>
				<p class="mb-6">
					While this example is very fun and some more advanced
					techniques could be used on TinyStories, this method would
					be hard to scale for concrete safety projects. Here are some
					of the reasons :
				</p>
				<ul class="list-disc space-y-4 mb-6">
					<li>
						The model is very small and some emergent capabilities
						might make this approach unviable.
					</li>
					<li>
						Even if reducing the data to a few numbers per sentences
						(their embeddings), this might require very large disk
						space to store the indexing, and high memory to load it.
						However, one could still perform this on specific
						dataset, like for example biochemistry or computer
						security to monitor the knowledge of the model in these
						risky topics.
					</li>
					<li>
						The base hypothesis that LLMs are huge parrots might be
						wrong, thus the project would make less sense.
					</li>
				</ul>
				<h3 class="text-xl font-semibold mb-4 mt-4">💡 Further work</h3>
				<p class="mb-6">
					Despite its limitation, this project should still be
					extended and could lead to surprising results. Here is what
					I would like to see on this project :
				</p>
				<ul class="list-disc space-y-4 mb-6">
					<li>
						Comparing the outputs of different models (other
						TinyStories models but with less parameters than 33M, or
						maybe a small model like Phi-1.5)
					</li>
					<li>
						Use better sentence embedding, and maybe consider
						overlapping segments (for example two sentences at a
						time). The methods explained above could be used, like
						removing the names etc.
					</li>
					<li>
						Try to incorporate some methods like De Bruijn graphs in
						genomic assembly. This was the original goal of the
						project, but I realized that it did not work that well
						and I was lacking some skills to directly try this. De
						Bruijn graphs allow to efficiently represent some
						segments overlapping. In our case, these segments would
						be sequences of tokens at different locations in the
						dataset, that the model combines for its output.
					</li>
				</ul>

				<h3 class="text-xl font-semibold mb-4 mt-4">🚀 Conclusion</h3>
				<p class="mb-6">
					It was a very fun project to work on, and I learned a lot,
					especially on the concrete side (I've practically never
					loaded models for coding, nor used Google Colab.) Thank you
					to Bluedot Impact for giving us the opportunity to create
					such projects ! I hope you enjoyed reading it, feel free to
					reach out at <span class="font-mono"
						>arthur.wuhrmann@epfl.ch</span
					>
				</p>
			</div>
		</div>
	</section>
</main>

<style>
	.speech-bubble {
		position: absolute;
		border-radius: 1rem;
		filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.1));
	}

	.speech-bubble::after {
		content: "";
		position: absolute;
		bottom: -10px;
		left: 50%;
		transform: translateX(-50%);
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid currentColor;
		color: inherit;
		filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
	}

	/* Specific colors for each bubble's tail */
	.bg-yellow-50::after {
		color: rgb(254 252 232); /* yellow-50 */
	}

	.bg-red-50::after {
		color: rgb(254 242 242); /* red-50 */
	}
</style>
