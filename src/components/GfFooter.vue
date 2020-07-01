<template>
  <footer>
    <b-container class="text-center text-md-left">
      <b-row>
        <b-col>
          <h2>
            <small>Información</small>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit augue turpis
            libero, posuere fringilla consequat scelerisque netus laoreet aptent
            aliquam mi morbi.
          </p>
          <a>
            <strong>
              <u>
                Lorem ipsum dolor sit amet
              </u>
            </strong>
          </a>
          <b-col lg="3" class="pb-2">
            <br />
            <b-button block size="md" class="button-naranja">
              Lorem ipsum dolor
            </b-button>
            <br />
          </b-col>
          <p>
            <strong>
              Lorem ipsum dolor sit amet
            </strong>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hr />
          <b-col md="4" offset-md="4">
            <img class="center" width="280px" height="121px" :src="image" />
          </b-col>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import image from "@/assets/logoUnal.png";

export default {
  data: function() {
    return {
      image: image
    };
  }
};
</script>

<style scoped>
a {
  padding: 5px;
}

p {
  padding: 5px;
}

hr {
  padding: 15px;
  border-color: rgb(242, 242, 242);
}

h2 {
  border-left-style: solid;
  border-left-width: medium;
  border-left-color: #e7a61a;
  padding: 5px;
}

footer {
  color: rgb(242, 242, 242);
  margin-top: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgb(86, 90, 96);
}
</style>
