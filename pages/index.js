import React from "react";
import {
  Container,
  Heading,
  Grid,
  Card,
  Text,
  Box,
  Image,
  Button,
  useColorMode,
} from "theme-ui";

import Layout from "../components/layout";

const IndexPage = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Layout>
      <Button
        onClick={(e) => {
          setColorMode(colorMode === "default" ? "dark" : "default");
        }}
      >
        Toggle {colorMode === "default" ? "Dark" : "Light"}
      </Button>
      <Container>
        <Heading as="h1">Organic Fresh Fruit Store</Heading>
        <Grid gap={20} columns={[1, 2, 3]}>
          <Card>
            <Heading>Fresh</Heading>
            <Text variant={"text.default"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nisi mi, efficitur a dignissim vel, commodo vitae est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet lectus nec magna ornare tincidunt. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </Text>
          </Card>
          <Card>
            <Heading>Tasty</Heading>
            <Text variant={"text.default"}>
            Phasellus diam nulla, tempor eget elit nec, efficitur semper mi. Duis consequat ac nibh non vehicula. Suspendisse consectetur rutrum tellus, quis sollicitudin eros posuere quis. Cras vel placerat tortor, sit amet ullamcorper nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.


            </Text>
          </Card>
          <Card>
            <Heading>Organic</Heading>
            <Text variant={"text.default"}>
            Suspendisse accumsan tincidunt risus, vitae efficitur felis volutpat nec. Etiam eu blandit magna. Maecenas sed ex tortor. Pellentesque sit amet sodales leo. Morbi ac nisi volutpat, eleifend lorem a, volutpat felis. Aenean porta eu ex ac imperdiet. Ut sit amet dictum felis. Fusce in justo et nulla maximus eleifend.
            </Text>
          </Card>
        </Grid>
        <Grid columns={[1, 2]}>
          <Box>
            <Image
              alt="Random Picture"
              sx={{ backgroundSize: "contain" }}
              src={"https://picsum.photos/400/300"}
            />
          </Box>
          <Box>
            <Heading>Organic Fruit Farm</Heading>
            <Text variant={"text.default"}>
            Nunc ultrices pharetra vehicula. Nunc convallis nisl eget augue scelerisque, eget cursus erat accumsan. Vestibulum in ultricies est, ac efficitur justo. Nunc elementum ex vitae elit facilisis, porta mollis ipsum laoreet. Integer eu elit egestas, tempus magna nec, sollicitudin risus. Donec consectetur tempus condimentum. Ut dignissim consequat hendrerit. Sed erat quam, porttitor in mollis sit amet, facilisis at ante. Nam finibus aliquam mi, eu commodo lectus faucibus a.
            </Text>
          </Box>
        </Grid>
        <Grid columns={[1, 2, 2]}>
          <Box>
            <Heading>Fresh Pickup Everyday</Heading>
            <Text variant={"text.default"}>
            Fusce sed suscipit mauris. Nunc tincidunt, libero sed cursus tincidunt, quam erat pulvinar erat, quis luctus ipsum ex eu justo. Phasellus quis rutrum justo, nec pellentesque odio. Morbi posuere nibh et ante mattis, eu elementum augue sollicitudin. Nulla laoreet nunc eu orci varius, vel cursus ipsum convallis. Ut fringilla sit amet ante sed luctus. Sed est leo, pharetra ut viverra a, consectetur vel lacus. Sed luctus felis vitae gravida sagittis. Sed ultrices dolor nisi, ut aliquet libero eleifend eget. Aenean tempus neque ut urna blandit tincidunt.
            </Text>
          </Box>
          <Box>
            <Image
              alt="Random Picture"
              sx={{ backgroundSize: "contain" }}
              src={"https://picsum.photos/400/300"}
            />
          </Box>
        </Grid>
      </Container>
    </Layout>
  );
};

export default IndexPage;
