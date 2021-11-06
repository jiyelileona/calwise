<script>
  import { Page, Button, Block } from "framework7-svelte";
  import store from "../js/store";

  function login() {
    alert("login");
  }
</script>

<Page name="onBoarding">
  <img src="../assets/calwise.png" alt="calwise" />

  {#if store.state.registered}
    <Block>
      <Block>
        <Button round fill large onClick={login}>Login</Button>
      </Block>
    </Block>
  {/if}
</Page>

<style>
  img {
    display: block;
    margin: auto;
    width: 55%;
    margin-top: 55%;
    margin-bottom: 35%;
  }
</style>
