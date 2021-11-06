<script>
  import { Page, Button, Block, Link } from "framework7-svelte";
  import store from "../js/store";

</script>

<Page name="onBoarding">
  <img src="../assets/calwise.png" alt="calwise" />

  {#if !store.state.loggedIn}
    <Block inset>
      <Block inset>
        <Button round fill large popupOpen="#my-login-screen">Login</Button>
        <Button round popupOpen="#my-popup">register</Button>
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
