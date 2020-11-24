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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
              Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc
              finibus. Pellentesque eget dapibus velit.
            </Text>
          </Card>
          <Card>
            <Heading>Tasty</Heading>
            <Text variant={"text.default"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
              Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc
              finibus. Pellentesque eget dapibus velit.
            </Text>
          </Card>
          <Card>
            <Heading>Organic</Heading>
            <Text variant={"text.default"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
              Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc
              finibus. Pellentesque eget dapibus velit.
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
            <Heading>This store is great</Heading>
            <Text variant={"text.default"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
              Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc
              finibus. Pellentesque eget dapibus velit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Integer tempor urna in orci
              porttitor, sit amet molestie lorem imperdiet. Cras fermentum arcu
              nec ante egestas, sit amet rhoncus nunc finibus. Pellentesque eget
              dapibus velit.
            </Text>
          </Box>
        </Grid>
        <Grid columns={[1, 2, 2]}>
          <Box>
            <Heading>This store is great</Heading>
            <Text variant={"text.default"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              tempor urna in orci porttitor, sit amet molestie lorem imperdiet.
              Cras fermentum arcu nec ante egestas, sit amet rhoncus nunc
              finibus. Pellentesque eget dapibus velit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Integer tempor urna in orci
              porttitor, sit amet molestie lorem imperdiet. Cras fermentum arcu
              nec ante egestas, sit amet rhoncus nunc finibus. Pellentesque eget
              dapibus velit.
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
