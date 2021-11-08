<script>
  import {
    Page,
    Navbar,
    Link,
    Block,
    Row,
    Col,
    Card,
    CardContent,
    CardHeader,
    Gauge,
  } from "framework7-svelte";
</script>

<Page name="home">
  <!-- Top Navbar -->
  <Navbar title="Hello, Leo" noHairline />

  <Block strong class="text-align-center" noHairlines>
    <Gauge
      type="circle"
      value={0.52}
      size={220}
      borderColor="#8883f0"
      borderWidth={16}
      borderBgColor="#E7E6FC"
      valueText={1700}
      valueFontSize={36}
      valueFontWeight={700}
      valueTextColor="#000"
      labelText="Kcal left"
      labelFontSize="18"
      bgColor="transparent"
    />
  </Block>

  <Block class="text-align-center" noHairlines>
    <Row>
      <Col>
        <Gauge
          type="circle"
          value={0.25}
          size={85}
          borderColor="#01BA88"
          borderWidth={8}
          borderBgColor="#D9F5ED"
          valueText={`${100}g`}
          valueFontSize={16}
          valueFontWeight={700}
          valueTextColor="#000"
          bgColor="transparent"
          labelText="left"
          labelFontSize="12"
        />
        <p style="color: #01BA88;">Carb</p>
      </Col>
      <Col>
        <Gauge
          type="circle"
          value={0.25}
          size={85}
          borderColor="#FC9C57"
          borderWidth={8}
          borderBgColor="#FEEBDD"
          valueText={`${100}g`}
          valueFontSize={16}
          valueFontWeight={700}
          valueTextColor="#000"
          bgColor="transparent"
          labelText="left"
          labelFontSize="12"
        />
        <p style="color: #FC9C57;">Protein</p>
      </Col>
      <Col>
        <Gauge
          type="circle"
          value={0.25}
          size={85}
          borderColor="#6D98F4"
          borderWidth={8}
          borderBgColor="#E2EAFD"
          valueText={`${100}g`}
          valueFontSize={16}
          valueFontWeight={700}
          valueTextColor="#000"
          bgColor="transparent"
          labelText="left"
          labelFontSize="12"
        />
        <p style="color: #6D98F4;">Fat</p>
      </Col>
    </Row>
  </Block>

  <Block>
    <Row>
      <Col>
        <!-- <Link href="/searchFood/"> -->
        <Card>
          <CardContent class="text-align-center">
            <span class="material-icons"> restaurant </span>
            <p>add food</p>
          </CardContent>
        </Card>
        <!-- </Link> -->
      </Col>
      <Col>
        <!-- <Link href="/searchWorkout/"> -->
        <Card>
          <CardContent class="text-align-center">
            <span class="material-icons"> fitness_center </span>
            <p>add workout</p>
          </CardContent>
        </Card>
        <!-- </Link> -->
      </Col>
    </Row>
    <Row>
      <Col>
        <Card expandable>
          <CardContent padding={false}>
            <div class="daily-pick" style="height: 300px">
              <CardHeader textColor="black" class="display-block">
                New York Steak Frites
                <br />
                <small style="opacity: 0.7">Build Mobile Apps</small>
              </CardHeader>
              <Link
                cardClose
                color="black"
                class="card-opened-fade-in"
                style="position: absolute; right: 15px; top: 15px"
                iconF7="xmark_circle_fill"
              />
            </div>
            <div class="card-content-padding">
              <p>
                Framework7 - is a free and open source HTML mobile framework to
                develop hybrid mobile apps or web apps with iOS or Android
                (Material) native look and feel. It is also an indispensable
                prototyping apps tool to show working app prototype as soon as
                possible in case you need to. Framework7 is created by Vladimir
                Kharlampidi (iDangero.us).
              </p>
              <p>
                The main approach of the Framework7 is to give you an
                opportunity to create iOS and Android (Material) apps with HTML,
                CSS and JavaScript easily and clear. Framework7 is full of
                freedom. It doesn't limit your imagination or offer ways of any
                solutions somehow. Framework7 gives you freedom!
              </p>
            </div>
          </CardContent>
        </Card>
      </Col>
    </Row>
  </Block>
</Page>

<style>
  p {
    font-weight: 700;
  }

  span {
    color: #8883f0;
    font-size: xxx-large;
  }

  .daily-pick {
    background-image: url("../assets/newYorkSteakFrites.jpg");
    background-size: cover;
    box-shadow: inset 0 -60px 60px -16px #fff;
  }
</style>
