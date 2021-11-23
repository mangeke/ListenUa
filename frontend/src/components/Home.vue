<template>
  <div class="grid gap-y-3">
    <LanguageSwitch :languages="['en', 'ua']" v-model="currentLanguage"></LanguageSwitch>
    <h1 class="title">{{ $t('title') }}</h1>
    <p class="info-text">
      This page visualizes all the ukrainian music albums released in 2020
      <br />The data is gathered by
      <a href="https://aristocrats.fm/">Radio Aristocrats</a> as part of their Aprize Awards
      <br />In the previous years the detailed analysis was done by
      <a
        href="https://texty.org.ua/d/2019/aprize/"
      >Texty.org.ua</a>
    </p>

    <InfoCard title="Some numbers" class="mt-5">
      <template v-slot:content>
        <div class="grid grid-cols-1 md:grid-cols-4 place-items-center">
          <div class="grid place-items-center">
            <CircleIndicator />
            <label class="text-2xl mt-2">albums</label>
          </div>

          <div class="grid place-items-center">
            <CircleIndicator />
            <label class="text-2xl mt-2">EPs</label>
          </div>

          <div class="grid place-items-center">
            <CircleIndicator />
            <label class="text-2xl mt-2">artists</label>
          </div>

          <div class="grid place-items-center">
            <CircleIndicator />
            <label class="text-2xl mt-2">genres</label>
          </div>
        </div>
      </template>
    </InfoCard>

    <div class="grid gap-y-6 font-mono text-xl m-12 text-justify">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus sem nec mi commodo condimentum. Suspendisse convallis nisi ex, sed venenatis quam cursus et. Ut in orci vel nunc fringilla vehicula at in dui. Morbi ut ultricies turpis. Vestibulum placerat ex quis tincidunt volutpat. Quisque vestibulum risus vel magna suscipit pellentesque. Fusce vitae urna sed nibh iaculis tristique. Aenean nec viverra augue. Duis placerat dolor dolor, eu dapibus eros pellentesque nec. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec at diam sit amet nisl pellentesque tincidunt. Sed libero purus, tincidunt et vestibulum quis, vestibulum vitae dui. Vestibulum luctus sem sed lectus semper, eget pellentesque nisl egestas. Morbi laoreet libero dui, consectetur ultrices est eleifend nec. Nunc accumsan massa iaculis, ultrices tellus eu, porta leo.</p>
      <p>Donec varius leo metus, quis iaculis nibh laoreet eu. Etiam nibh lectus, elementum vel tincidunt ac, placerat eget purus. Mauris in orci orci. In lacus orci, pellentesque ultricies dolor ac, aliquam luctus nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam malesuada lacus eget semper aliquam. In vel laoreet purus. Sed a metus nibh. Vivamus vitae felis lectus. Duis eu cursus lectus. Suspendisse id sagittis libero. Cras fringilla pretium augue sit amet posuere. Suspendisse sit amet scelerisque lectus. Vestibulum justo sapien, feugiat eu tincidunt vel, finibus ac felis. Maecenas blandit nisi ut nibh finibus, sed feugiat nunc interdum. Ut non sem ante.</p>
      <p>Mauris rutrum placerat lorem, at molestie risus rutrum quis. Nam pharetra est sit amet ex egestas vehicula. Morbi condimentum ligula in magna vulputate, in rutrum lectus ullamcorper. Nam nisi magna, elementum a lacinia eu, finibus vitae massa. Maecenas quis magna et arcu rhoncus mattis sed in leo. In hac habitasse platea dictumst. Cras eget diam sed libero iaculis efficitur at in quam. Duis nisl odio, iaculis non metus non, dignissim venenatis turpis. Fusce suscipit sapien vitae sapien sollicitudin, sagittis ullamcorper nisi posuere. Aliquam ornare libero eu arcu rhoncus, ullamcorper porttitor libero feugiat. Mauris posuere orci at rutrum finibus. Nunc facilisis turpis quis viverra venenatis. Proin eleifend arcu sed libero sollicitudin mollis. Donec placerat, nisl et eleifend blandit, sapien nisi aliquet erat, sed rutrum turpis ante non mi. Curabitur dolor purus, convallis ac feugiat vitae, hendrerit ac metus. Morbi pharetra non velit id dapibus.</p>
      <p>Phasellus pellentesque auctor urna. Quisque viverra, mi sit amet varius condimentum, arcu purus placerat odio, a tempus nulla diam sit amet lacus. Proin consequat eros ac leo maximus varius. Mauris sed accumsan enim, at commodo ex. Sed mattis eros et leo gravida, sed consequat est consectetur. Nullam lacus elit, tempor eu felis ut, sollicitudin maximus lorem. Nulla egestas nisi non euismod eleifend. Phasellus urna ante, rutrum vel risus et, dapibus ullamcorper purus. Proin et cursus sapien, eu luctus nisl. Ut luctus sapien ante, nec tempus diam vehicula sit amet. Praesent tincidunt ac eros a eleifend. Aliquam est est, cursus at diam ut, faucibus convallis nisl. Maecenas nibh nisl, finibus vel elementum id, eleifend congue elit. Phasellus turpis lorem, imperdiet nec varius et, rutrum ac nunc.</p>
      <p>Mauris facilisis nisl vel augue venenatis elementum. Ut ultrices tellus leo, vel venenatis turpis imperdiet id. Pellentesque id hendrerit erat. Phasellus placerat elit nec velit egestas dapibus. Fusce feugiat dui vel enim euismod, non maximus quam consectetur. Nunc viverra, arcu in venenatis facilisis, ligula mauris vehicula enim, dictum finibus risus odio a tortor. Nam ut mollis nunc. Quisque vestibulum ligula quis aliquet tristique. Ut id dui rhoncus, mollis metus in, euismod velit. Quisque et tellus dui. Duis molestie eleifend sagittis. Duis quis enim eu metus auctor egestas non sed massa. Sed leo tortor, blandit non posuere pharetra, mollis eget dui. Quisque vitae dignissim lectus. Vivamus vitae lacinia magna.</p>
    </div>

    <div class="grid gap-y-6 font-mono my-12 ml-0 h-full">
      <table class="table table-hover dc-data-table">
        <thead>
          <tr class="header">
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>First release</th>
            <th>EP/LP</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<script setup>
import InfoCard from "./InfoCard.vue";
import CircleIndicator from "./CircleIndicator.vue";
import LanguageSwitch from "./LanguageSwitch.vue";
import { ref, watch, onMounted } from "vue";
import { useI18n } from 'vue-i18n'
import * as dc from "dc";
import * as d3 from "d3";
import crossfilter from "crossfilter2";

const { locale } = useI18n({ useScope: 'global' });

const currentLanguage = ref("en");


watch(currentLanguage, (currentValue, oldValue) => {
  locale.value = currentValue;
});

onMounted(() => {
  d3.csv("/Refined.csv").then(data => {
    const ndx = crossfilter(data);
    let dim = ndx.dimension(data => data.genre);
    let dataTable = dc.dataTable(".dc-data-table")
    .dimension(dim)
    .size(50)
    .columns([
      d => d.artist,
      d => d.album,
      d => d.genre,
      d => d.firstRelease,
      d => d.format,
    ]);

    dataTable.render();
  });
})

</script>

<style scoped>
.title {
  color: black;
  font-size: 4em;
  font-family: monospace;
}
.info-text {
  color: black;
  font-size: 1.5em;

  font-family: monospace;
}
</style>
