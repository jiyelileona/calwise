<script>
  import { Page, Button, Block } from "framework7-svelte";
  import { onMount } from "svelte";
  import store from "../js/store";

  // onMount(() => {
  //   setTimeout(() => {
  //     f7router.navigate('/askForInfo/')
  //   }, 2000);
  // });
</script>

<Page name="onBoarding">
  <img src="../assets/calwise.png" alt="calwise" />

  {#if !store.state.loggedIn && store.state.registered}
    <Block inset>
      <Block inset>
        <Button round fill large popupOpen="#my-login-screen">Login</Button>
        <!-- <Button round popupOpen="#my-popup">register</Button> -->
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
