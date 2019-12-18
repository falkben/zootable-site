<template>
  <div class="container mx-auto px-4 text-center">
    <div class="pt-12 pb-6 border-b">
      <img
        class="object-center mx-auto"
        src="~/assets/img/hero.png"
        alt="hero"
      />

      <h1
        class="text-3xl font-semibold text-gray-800 pt-4 \
        sm:text-5xl"
      >
        Zootable
      </h1>
      <h2
        class="text-xl text-gray-600 font-medium py-4 \
      sm:text-2xl"
      >
        Tally and monitor zoo animals
      </h2>

      <a
        href="mailto:hello@zootable.com?subject=Zootable"
        class="inline-block bg-green-500 hover:bg-green-700 text-white my-3 py-3 px-4 rounded \
        sm:text-xl"
      >
        Contact for more info
      </a>
    </div>

    <div class="flex flex-wrap -mx-2 text-left py-4">
      <div
        v-for="feature in features"
        v-bind:key="feature.name"
        class="flex w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2"
      >
        <div class="w-full rounded shadow-lg p-2">
          <h3 class="text-xl text-gray-700 py-2">
            {{ feature.name }}
          </h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <div
      class="w-64 m-4 mx-auto bg-yellow-200 rounded shadow-lg \
    sm:w-1/2"
    >
      <h3 class="text-xl font-semibold py-2">Who is Zootable for?</h3>
      <ul class="text-left py-2 list-disc mx-6">
        <li class="py-1">Zookeepers</li>
        <li class="py-1">Aquarists</li>
        <li class="py-1">
          Anyone who needs to monitor animals on a daily basis
        </li>
      </ul>
    </div>

    <h3 class="text-xl font-semibold pt-6 pb-4">
      Try the
      <a
        href="https://demo.zootable.com"
        target="_blank"
        rel="nofollow noopener"
        >demo!</a
      >
    </h3>
    <div
      class="flex flex-col mx-auto \
    sm:flex-row"
    >
      <div
        class="flex-1 text-center \ 
      sm:text-right"
      >
        <a
          href="https://demo.zootable.com"
          target="_blank"
          rel="nofollow noopener"
        >
          <img
            class="inline"
            src="~/assets/img/screenshot.png"
            alt="hero"
            width="300px"
          />
        </a>
      </div>
      <div class="flex-1 text-center sm:text-left relative">
        <ul class="py-2 mx-6">
          <li class="py-1">
            <span class="font-semibold">User</span>
            <span class="font-mono bg-gray-200">demo-user</span>
          </li>
          <li>
            <span class="font-semibold">Password</span>
            <span class="font-mono bg-gray-200">demo-password</span>
          </li>

          <img
            class="hidden h-64 absolute bottom-0 \
            sm:inline"
            src="~/assets/img/chameleon.png"
          />
        </ul>
      </div>
    </div>

    <h3 class="text-2xl p-6">
      <a href="mailto:hello@zootable.com?subject=Zootable">Contact</a> to setup
      for your organization
    </h3>

    <div class="p-6 border-t text-center text-gray-700">
      <a href="https://github.com/falkben/zootable">
        <img
          class="inline h-4 align-baseline"
          src="~/assets/img/GitHub-Mark-32px.png"
          alt="GitHub"
        />
      </a>
      Open source
      <a href="https://github.com/falkben/zootable"> aGPL Licensed</a> | by
      <a href="mailto:ben@zootable.com?subject=Zootable">Ben Falk</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Features',
  data() {
    return {
      features: [
        {
          name: 'Daily counts',
          description:
            'Always know the last time your animals have been observed'
        },
        {
          name: 'Notifications',
          description:
            'Notifications when animals have not been seen, or when animals are marked missing'
        },
        {
          name: 'Welfare',
          description:
            'Exportable records (Excel) for documenting health and wellness'
        },
        {
          name: 'Easy to use',
          description:
            'Designed for mobile and desktop. Works with existing record systems'
        }
      ]
    }
  }
}
</script>
